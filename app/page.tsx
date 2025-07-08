import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Server,
  Network,
  Shield,
  Cloud,
  Users,
  Award,
  ArrowRight,
  Zap,
  Target,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import Carousel from "@/components/carousel"
import ScrollAnimation from "@/components/scroll-animation"
import AnimatedCounter from "@/components/animated-counter"
import ScrollToSection from "@/components/scroll-to-section"

export default function HomePage() {
  const carouselSlides = [
    {
      id: 1,
      title: "Transform Your IT Infrastructure",
      description: "Professional ICT solutions designed for South African businesses",
      image: "/images/data-center.webp",
      cta: "Get Started Today",
      link: "/contact",
    },
    {
      id: 2,
      title: "Data Center Excellence",
      description: "State-of-the-art data center design and configuration services",
      image: "/images/data-center.webp",
      cta: "Learn More",
      link: "/about",
    },
    {
      id: 3,
      title: "Global ICT Solutions",
      description: "Connecting your business to the world with reliable ICT infrastructure",
      image: "/images/ict-solutions.jpeg",
      cta: "View Services",
      link: "/services",
    },
    {
      id: 4,
      title: "Cloud Computing Services",
      description: "Modern cloud infrastructure solutions for digital transformation",
      image: "/images/cloud-computing.jpeg",
      cta: "Explore Cloud Solutions",
      link: "/services",
    },
  ]

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel slides={carouselSlides} autoPlay={true} autoPlayInterval={6000} />

        {/* Floating CTA - Now points down and scrolls to next section */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <ScrollToSection
            targetId="partnership-section"
            className="glass-effect rounded-full p-4 animate-bounce-slow hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </section>

      {/* Partnership Section */}
      <ScrollAnimation>
        <section id="partnership-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Official <span className="text-red-600">Huawei</span> Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ENGINEERS4URSERVICE is a Preferred Authorized Service Center Partner for Huawei Enterprise solutions in
                South Africa
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <div className="flex justify-center">
                <Image
                  src="/images/huawei-partner-logo.jpeg"
                  alt="Huawei Enterprise Partner Logo"
                  width={200}
                  height={200}
                  className="rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div className="max-w-4xl text-center space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">Preferred Authorized Service Center Partner</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Authorized Area</h4>
                    <p className="text-gray-600">South Africa</p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Authorization Service</h4>
                    <p className="text-gray-600">Installation and Maintenance</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 md:col-span-1">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Authorized Products</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Intelligent Collaboration, Optical, Enterprise IT, Intelligent Vision, Huawei Cloud Stack,
                      Enterprise Wireless, Computing, Data Communication
                    </p>
                  </div>
                </div>

                <Button asChild className="bg-red-600 hover:bg-red-700 mt-8">
                  <Link href="/contact">
                    Inquire About Huawei Solutions
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="py-10 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={100} suffix="+" />
                </div>
                <div className="text-lg opacity-90">Staff Migrated</div>
              </div>
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={1200} suffix="+" />
                </div>
                <div className="text-lg opacity-90">Students Served</div>
              </div>
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={2} />
                </div>
                <div className="text-lg opacity-90">Major Campuses</div>
              </div>
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={2023} />
                </div>
                <div className="text-lg opacity-90">Founded</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Overview */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Core Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive ICT infrastructure solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {[
                {
                  icon: <Server className="h-12 w-12 text-blue-600" />,
                  title: "Data Center Solutions",
                  description: "Professional data center network design and configurations",
                },
                {
                  icon: <Network className="h-12 w-12 text-blue-600" />,
                  title: "Network Implementation",
                  description: "Complete network design and implementation services",
                },
                {
                  icon: <Shield className="h-12 w-12 text-blue-600" />,
                  title: "Security & Firewall",
                  description: "Core network and firewall deployment solutions",
                },
                {
                  icon: <Cloud className="h-12 w-12 text-blue-600" />,
                  title: "Cloud Computing",
                  description: "Modern cloud infrastructure and migration services",
                },
                {
                  icon: <Users className="h-12 w-12 text-blue-600" />,
                  title: "ICT Training",
                  description: "Professional ICT infrastructure training programs",
                },
                {
                  icon: <Award className="h-12 w-12 text-blue-600" />,
                  title: "Certified Engineers",
                  description: "Staffed with certified OEM engineers for quality assurance",
                },
              ].map((service, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <ScrollAnimation delay={600}>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Choose Us */}
      <ScrollAnimation>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="gradient-text">ENGINEERS4URSERVICE</span>?
                </h2>
                <div className="space-y-6 stagger-animation">
                  {[
                    {
                      icon: <Zap className="h-6 w-6 text-red-600" />,
                      title: "Reliable Solutions",
                      description: "Dependable ICT infrastructure solutions you can trust",
                    },
                    {
                      icon: <Target className="h-6 w-6 text-red-600" />,
                      title: "Scalable Infrastructure",
                      description: "Solutions that grow with your business needs",
                    },
                    {
                      icon: <CheckCircle className="h-6 w-6 text-red-600" />,
                      title: "Tailor-Made Approach",
                      description: "Custom solutions designed specifically for your requirements",
                    },
                    {
                      icon: <Award className="h-6 w-6 text-red-600" />,
                      title: "Certified Expertise",
                      description: "Team of certified OEM engineers with proven experience",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group hover-lift">
                      <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="floating-element">
                <Image
                  src="/images/ict-solutions.jpeg"
                  alt="IT Infrastructure"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-pulse-slow">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact us today to discuss your ICT infrastructure needs and discover how we can help your business
              succeed.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 group hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
