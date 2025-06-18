import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">ENGINEERS4URSERVICE</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted South African IT partner, delivering excellence in ICT infrastructure since 2023
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-6">
              ENGINEERS4URSERVICE is a South African IT company specializing in Data Center, LAN, and Optical Fibre
              Networks. We offer comprehensive engineering services in ICT Infrastructure including design,
              configuration, and installation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2023 and headquartered in Midrand, our team consists of certified OEM engineers dedicated to
              delivering reliable, scalable, and tailor-made ICT solutions that meet the unique needs of our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Founded</div>
                <div className="text-blue-600">2023</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Team Size</div>
                <div className="text-red-600">1-50 Employees</div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/ict-infrastructure.jpeg"
              alt="ICT Infrastructure Solutions"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability</h3>
                <p className="text-gray-600">
                  We deliver dependable ICT infrastructure solutions that you can trust to keep your business running
                  smoothly.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalability</h3>
                <p className="text-gray-600">
                  Our solutions are designed to grow with your business, ensuring long-term value and adaptability.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customization</h3>
                <p className="text-gray-600">
                  We provide tailor-made ICT solutions specifically designed to meet your unique business requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Project Highlight */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Success Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Tshwane North TVET College Wi-Fi Refresh</h3>
              <p className="text-lg text-gray-600 mb-6">
                Successfully executed a comprehensive Wi-Fi infrastructure refresh for Tshwane North TVET College, one
                of our flagship projects that demonstrates our capability to handle large-scale educational IT
                deployments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-red-600">100+</div>
                  <div className="text-sm text-gray-600">Staff Migrated</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">1200+</div>
                  <div className="text-sm text-gray-600">Students Served</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow col-span-2">
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Largest Campuses Covered</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/tshwane-north-logo.jpeg"
                alt="Tshwane North TVET College Logo"
                width={400}
                height={300}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
          <p className="text-lg text-gray-600 mb-4">
            Strategically located in Midrand, Johannesburg, we serve clients across South Africa
          </p>
          <div className="bg-blue-50 rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-blue-600">1 Pioneer Ave, Midrand, Johannesburg, South Africa</p>
          </div>
        </div>
      </div>
    </div>
  )
}
