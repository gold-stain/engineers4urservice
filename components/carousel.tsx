"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="carousel-container relative h-[600px] rounded-lg overflow-hidden">
      <div className="carousel-track h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/60 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">{slide.title}</h2>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    {slide.description}
                  </p>
                  {slide.cta && slide.link && (
                    <Link href={slide.link}>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-in-up"
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
      <div className="carousel-dots absolute bottom-6 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
