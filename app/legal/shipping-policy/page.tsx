import { Calendar, Clock, Package, Truck } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Truck className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Policy</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Shipping <span className="text-[#F5B400]">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <Calendar className="h-4 w-4" />
            Last updated: January 15, 2024
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Delivery Timeframes
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-[#F5B400]" />
                  <h3 className="text-white font-semibold">Express Delivery</h3>
                  <span className="text-[#F5B400] text-sm">
                    3-5 Business Days
                  </span>
                </div>
                <p className="text-white/50 text-sm">
                  Fastest option for urgent shipments
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Truck className="h-5 w-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Air Freight</h3>
                  <span className="text-blue-400 text-sm">
                    7-10 Business Days
                  </span>
                </div>
                <p className="text-white/50 text-sm">
                  Standard air cargo service
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="h-5 w-5 text-green-400" />
                  <h3 className="text-white font-semibold">Sea Freight</h3>
                  <span className="text-green-400 text-sm">
                    25-35 Business Days
                  </span>
                </div>
                <p className="text-white/50 text-sm">
                  Cost-effective for large shipments
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Shipping Process
            </h2>
            <ol className="list-decimal list-inside text-white/60 space-y-3 ml-4">
              <li>Schedule pickup or drop off at our service point</li>
              <li>Provide accurate documentation and declare contents</li>
              <li>Pay shipping charges (prepaid or COD)</li>
              <li>Receive tracking number for real-time updates</li>
              <li>Package arrives at destination with proof of delivery</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Packaging Requirements
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              To ensure safe delivery, please follow these packaging guidelines:
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
              <li>Use sturdy boxes appropriate for the weight of contents</li>
              <li>Secure all items with bubble wrap or packing peanuts</li>
              <li>Seal packages with tape on all edges</li>
              <li>
                Label packages clearly with sender and recipient information
              </li>
              <li>Remove old shipping labels before sending</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Delivery Attempts
            </h2>
            <p className="text-white/60 leading-relaxed">
              If delivery is attempted and no one is available to receive the
              package, our courier will leave a notification card. The package
              will be held at the nearest service point for 7 days before being
              returned to sender.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Contact Support
            </h2>
            <p className="text-white/60 leading-relaxed">
              For shipping inquiries: support@crosscart.com or +880 1410-144466
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
