import { Calendar, Lock, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | Cross Cart Global',
  description: 'Cross Cart Global privacy policy - Learn how we collect, use, and protect your personal information when you use our shipping and logistics services.',
  keywords: 'privacy policy, data protection, personal information, privacy',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Shield className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-[#F5B400]">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-900/40 text-sm">
            <Calendar className="h-4 w-4" />
            Last updated: January 15, 2024
          </div>
        </div>

        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-900/60 leading-relaxed mb-4">
              We collect the following information to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Shipping and delivery addresses</li>
              <li>Payment information</li>
              <li>Package contents and declared values</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Process and ship your packages</li>
              <li>Provide tracking and delivery updates</li>
              <li>Process payments and refunds</li>
              <li>Customer support and communication</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Data Protection
            </h2>
            <div className="flex items-start gap-3 mb-4">
              <Lock className="h-5 w-5 text-[#F5B400] shrink-0 mt-1" />
              <p className="text-gray-900/60 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information. All data is encrypted during transmission
                and stored securely.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-900/60 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Partner carriers for shipping services</li>
              <li>Customs authorities as required by law</li>
              <li>Payment processors for transactions</li>
              <li>Legal authorities when required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <ul className="list-disc list-inside text-gray-900/60 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-900/60 leading-relaxed">
              We use cookies to enhance your browsing experience and analyze
              website traffic. You can control cookie preferences through your
              browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-900/60 leading-relaxed">
              For privacy-related inquiries: privacy@crosscart.com or call +880
              1410-144466
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
