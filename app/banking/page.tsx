import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Building, Calendar, Users, Shield, CheckCircle } from "lucide-react"

export default function BankingPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Banking <span className="text-red-600">Information</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure payment details for ENGINEERS4URSERVICE transactions
          </p>
        </div>

        {/* Banking Details Card */}
        <Card className="border-0 shadow-xl mb-12">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Building className="h-8 w-8" />
              <span>First National Bank (FNB)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Account Type:</span>
                    <p className="text-gray-600">Gold Business Account</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Account Number:</span>
                    <p className="text-gray-600 font-mono text-lg">63091450155</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Status:</span>
                    <p className="text-green-600 font-semibold">Active</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Swift Code:</span>
                    <p className="text-gray-600 font-mono">FIRNZAJJ</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Date Opened:</span>
                    <p className="text-gray-600">22/02/2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Industry:</span>
                    <p className="text-gray-600">Information Technology</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-900">Company Size:</span>
                    <p className="text-gray-600">1–50 employees</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Instructions */}
        <Card className="border-0 shadow-lg bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900">Payment Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-800">Please use your invoice number as the payment reference</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-800">Send proof of payment to info@engineers4urservice.co.za</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-800">Allow 24-48 hours for payment processing and confirmation</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-800">For international transfers, please contact us for additional details</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Security Notice</h3>
              <p className="text-yellow-700 text-sm">
                Always verify banking details directly with ENGINEERS4URSERVICE before making payments. We will never
                request banking details or payments via email or phone calls. If you receive suspicious communication,
                please contact us immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
