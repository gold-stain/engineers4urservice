import Link from "next/link"
import { Mail, MapPin, Linkedin, Wrench } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">ENGINEERS4URSERVICE</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional ICT Infrastructure services specializing in Data Center, LAN, and Optical Fibre Networks
              across South Africa.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-sm">info@engineers4urservice.co.za</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-sm">1 Pioneer Ave, Midrand, Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-red-500" />
                <Link
                  href="https://linkedin.com/in/engineers4urservice-engineers4urservice-65230a2b2"
                  className="text-sm hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} ENGINEERS4URSERVICE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
