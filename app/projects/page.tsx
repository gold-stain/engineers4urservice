import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, GraduationCap, MapPin, Calendar, CheckCircle } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped organizations transform their IT infrastructure
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto flex items-center justify-center bg-gray-50">
                <Image
                  src="/images/tshwane-north-logo.jpeg"
                  alt="Tshwane North TVET College Logo"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Education Sector</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tshwane North TVET College Wi-Fi Refresh</h2>
                <p className="text-lg text-gray-600 mb-6">
                  A comprehensive Wi-Fi infrastructure modernization project that transformed the digital learning
                  experience across two of the college's largest campuses, supporting over 1,300 users.
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-gray-600">Staff Members</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-600">1200+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>2 Campus Locations</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2023</span>
                  </div>
                </div>

                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h3>
            <p className="text-gray-600 mb-6">
              The Tshwane North TVET College Wi-Fi refresh project involved a complete overhaul of the existing wireless
              infrastructure across two major campuses, including the historic Pretoria Campus. Our team successfully
              migrated over 100 staff members and 1,200 students to a new, robust Wi-Fi network that supports modern
              educational technology requirements.
            </p>
            <p className="text-gray-600">
              This project demonstrates our capability to handle large-scale educational IT deployments while minimizing
              disruption to daily operations and ensuring seamless connectivity for all users across multiple campus
              locations.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <ul className="space-y-3">
              {[
                "Seamless migration of 1,300+ users with zero downtime",
                "Improved network performance and reliability across campuses",
                "Enhanced security protocols and access controls",
                "Comprehensive staff training and documentation",
                "Future-ready infrastructure supporting growth",
                "Successful deployment across 2 largest campuses",
                "Historic building infrastructure integration",
                "24/7 ongoing support and maintenance",
              ].map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Used */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Services Utilized</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Network Design & Implementation",
              "Hardware Installation & Cabling",
              "Wi-Fi Infrastructure Setup",
              "ICT Infrastructure Training",
            ].map((service, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{service}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you transform your IT infrastructure. Contact us today to discuss your project requirements and
            discover how we can deliver results for your organization.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
