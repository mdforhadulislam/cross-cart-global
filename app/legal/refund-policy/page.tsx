import { Calendar, RefreshCw } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <RefreshCw className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Policy</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Refund <span className="text-[#F5B400]">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-900/40 text-sm">
            <Calendar className="h-4 w-4" />
            Last updated: January 15, 2024
          </div>
        </div>

        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Refund Eligibility
            </h2>
            <p className="text-gray-900/60 leading-relaxed mb-4">
              Refunds may be requested under the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Service not rendered within the promised timeframe</li>
              <li>Package lost or severely damaged during transit</li>
              <li>Duplicate payment charged</li>
              <li>Incorrect amount charged due to system error</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Non-Refundable Items
            </h2>
            <p className="text-gray-900/60 leading-relaxed mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Shipping charges for packages already delivered</li>
              <li>Customs duties and taxes paid</li>
              <li>Change of mind after shipment dispatch</li>
              <li>Incorrect address provided by sender</li>
              <li>Refused delivery by recipient</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Refund Process
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-gray-900 font-semibold mb-2">
                  Step 1: Request
                </h3>
                <p className="text-gray-900/50 text-sm">
                  Contact our support team within 30 days of delivery
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-gray-900 font-semibold mb-2">
                  Step 2: Review
                </h3>
                <p className="text-gray-900/50 text-sm">
                  Our team reviews the request within 3-5 business days
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-gray-900 font-semibold mb-2">
                  Step 3: Processing
                </h3>
                <p className="text-gray-900/50 text-sm">
                  Approved refunds processed within 7-10 business days
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Refund Methods
            </h2>
            <p className="text-gray-900/60 leading-relaxed">
              Refunds will be processed to the original payment method. For card
              payments, please allow 5-7 additional business days for the refund
              to appear on your statement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-900/60 leading-relaxed">
              To request a refund, please contact: support@crosscart.com or call
              +880 1410-144466
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
