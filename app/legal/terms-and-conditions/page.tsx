import { Calendar, Scale } from 'lucide-react'

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Scale className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms & <span className="text-[#F5B400]">Conditions</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-900/40 text-sm">
            <Calendar className="h-4 w-4" />
            Last updated: January 15, 2024
          </div>
        </div>

        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-900/60 leading-relaxed">
              By accessing or using Cross Cart Global{"'"}s services, you agree to be bound by these Terms 
              and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-900/60 leading-relaxed mb-4">
              Cross Cart Global provides international courier, logistics, and shipping services including:
            </p>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Document and parcel shipping</li>
              <li>Air freight and sea freight services</li>
              <li>Custom clearance assistance</li>
              <li>Warehousing and storage solutions</li>
              <li>Express delivery options</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Shipping Restrictions</h2>
            <p className="text-gray-900/60 leading-relaxed mb-4">
              The following items are prohibited from shipment:
            </p>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Explosives, fireworks, and ammunition</li>
              <li>Flammable liquids and gases</li>
              <li>Weapons and military equipment</li>
              <li>Narcotics and illegal substances</li>
              <li>Counterfeit goods</li>
              <li>Live animals (unless pre-approved)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Liability</h2>
            <p className="text-gray-900/60 leading-relaxed">
              Cross Cart Global{"'"}s liability is limited to the declared value of goods or the maximum 
              liability as specified in our shipping agreement. We recommend purchasing additional 
              insurance for high-value shipments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-900/60 leading-relaxed">
              Payment is required before shipment dispatch. We accept bKash, Nagad, bank transfers, 
              and major credit cards. Cash on delivery is available for select domestic routes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
            <p className="text-gray-900/60 leading-relaxed">
              These terms are governed by the laws of Bangladesh. Any disputes shall be resolved 
              through arbitration in Dhaka, Bangladesh.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-900/60 leading-relaxed">
              For questions regarding these terms, please contact us at support@crosscart.com or 
              call +880 1410-144466.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
