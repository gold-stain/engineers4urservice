import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Server, Network, Cable, Shield, Cloud, HardDrive, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function ServicesPage() {
  const services = [
    {
      icon: <Server className="h-12 w-12 text-blue-600" />,
      title: "Data Center Network Design & Configurations",
      description:
        "Comprehensive data center infrastructure planning, design, and configuration services to ensure optimal performance and reliability.",
      features: [
        "Infrastructure assessment and planning",
        "Network topology design",
        "Performance optimization",
        "Redundancy and failover planning",
      ],
    },
    {
      icon: <Network className="h-12 w-12 text-red-600" />,
      title: "Network Design and Implementation",
      description:
        "End-to-end network solutions from initial design through full implementation, tailored to your business requirements.",
      features: [
        "LAN/WAN design and setup",
        "Network architecture planning",
        "Protocol configuration",
        "Performance monitoring setup",
      ],
    },
    {
      icon: <Cable className="h-12 w-12 text-blue-600" />,
      title: "Hardware Installation and Cabling",
      description:
        "Professional installation of network hardware and structured cabling systems for optimal connectivity and performance.",
      features: [
        "Structured cabling installation",
        "Fiber optic cable deployment",
        "Hardware mounting and configuration",
        "Cable management and documentation",
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Core Network & Firewall Deployment",
      description:
        "Secure network infrastructure deployment with advanced firewall solutions to protect your business assets.",
      features: [
        "Firewall configuration and deployment",
        "Network security assessment",
        "Access control implementation",
        "Security policy development",
      ],
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-600" />,
      title: "Cloud Computing",
      description:
        "Modern cloud infrastructure solutions to help your business leverage the power of cloud technology.",
      features: [
        "Cloud migration planning",
        "Hybrid cloud solutions",
        "Cloud security implementation",
        "Performance optimization",
      ],
    },
    {
      icon: <HardDrive className="h-12 w-12 text-red-600" />,
      title: "Storage Configuration",
      description:
        "Enterprise storage solutions designed to meet your data storage, backup, and recovery requirements.",
      features: [
        "SAN/NAS configuration",
        "Backup and recovery setup",
        "Data migration services",
        "Storage performance tuning",
      ],
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: "ICT Infrastructure Training",
      description:
        "Professional training programs to empower your team with the knowledge and skills needed to manage ICT infrastructure.",
      features: [
        "Network administration training",
        "Security best practices",
        "Troubleshooting techniques",
        "Certification preparation",
      ],
    },
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ICT infrastructure services delivered by certified OEM engineers
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="hover-lift border-0 shadow-lg h-full group overflow-hidden">
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-red-100 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex items-center space-x-4 mb-4 relative z-10">
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 relative z-10">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <ScrollAnimation>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Certified Engineers</h3>
                <p className="text-sm text-gray-600">
                  Our team consists of certified OEM engineers with proven expertise
                </p>
              </div>
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reliable Solutions</h3>
                <p className="text-sm text-gray-600">Dependable infrastructure solutions you can trust</p>
              </div>
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                  <Network className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Scalable Infrastructure</h3>
                <p className="text-sm text-gray-600">Solutions that grow with your business needs</p>
              </div>
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Server className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-sm text-gray-600">Tailor-made solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your ICT infrastructure needs and discover how our services can benefit your
              business.
            </p>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 group hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group hover:scale-105 transition-all duration-300"
              >
                <Link href="/projects">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
