"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CarouselSlide {
  id: number
  title: string
  description: string
  image: string
  cta?: string
  link?: string
}

interface CarouselProps {
  slides: CarouselSlide[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function Carousel({ slides, autoPlay = true, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoPlay || isDragging) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, slides.length, isDragging])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setTranslateX(0)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return

    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleEnd = () => {
    if (!isDragging) return

    const threshold = 50 // Minimum swipe distance

    if (translateX > threshold) {
      prevSlide()
    } else if (translateX < -threshold) {
      nextSlide()
    }

    setIsDragging(false)
    setTranslateX(0)
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd()
    }
  }

  return (
    <div className="carousel-container relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[95vh] overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel-track h-full cursor-grab active:cursor-grabbing select-none"
        style={{
          transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? translateX : 0}px))`,
          transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={isDragging ? handleMouseMove : undefined}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/60 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-up">
                    {slide.title}
                  </h2>
                  <p
                    className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {slide.description}
                  </p>
                  {slide.cta && slide.link && (
                    <Link href={slide.link}>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                      >
                        {slide.cta}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile and tablet */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white/80" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white/80" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-600 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
