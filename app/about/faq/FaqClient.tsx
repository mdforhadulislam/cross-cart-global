"use client"

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Package, Search } from 'lucide-react'

const FAQ_CATEGORIES = [
  {
    id: "shipping",
    name: "Shipping & Delivery",
    icon: Package,
  },
  {
    id: "tracking",
    name: "Tracking",
    icon: Search,
  },
  {
    id: "payment",
    name: "Payment & Billing",
    icon: HelpCircle,
  },
]

const FAQS = [
  {
    category: "shipping",
    question: "How long does international shipping take?",
    answer: "Delivery times vary by destination and service type. Express shipping (3-5 days), Air freight (7-10 days), and Sea freight (25-35 days) are our standard options.",
  },
  {
    category: "shipping",
    question: "What items cannot be shipped internationally?",
    answer: "Prohibited items include explosives, flammable materials, weapons, drugs, and certain food items. Please contact our support for a complete list of restricted items.",
  },
  {
    category: "shipping",
    question: "Do you offer door-to-door delivery?",
    answer: "Yes! We provide complete door-to-door service including pickup from your location and delivery to the recipient's doorstep.",
  },
  {
    category: "shipping",
    question: "How can I schedule a pickup?",
    answer: "You can schedule a pickup through our website, mobile app, or by calling our customer support. Same-day pickup is available in major cities.",
  },
  {
    category: "tracking",
    question: "How do I track my shipment?",
    answer: "Enter your tracking number on our Track page or use our mobile app. You'll see real-time updates from pickup to delivery.",
  },
  {
    category: "tracking",
    question: "Why isn't my tracking updating?",
    answer: "Tracking updates may take 24-48 hours after pickup. If no updates appear after this period, please contact our support team.",
  },
  {
    category: "tracking",
    question: "Can I change the delivery address after shipping?",
    answer: "Address changes may be possible before the package reaches the destination country. Contact support immediately with your tracking number.",
  },
  {
    category: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept bKash, Nagad, Rocket, credit/debit cards, bank transfers, and cash on delivery (in select locations).",
  },
  {
    category: "payment",
    question: "Is my shipment insured?",
    answer: "Basic insurance is included with all shipments. Additional coverage can be purchased for high-value items.",
  },
  {
    category: "payment",
    question: "Do you offer cash on delivery?",
    answer: "Yes, COD service is available for domestic shipments. Additional fees may apply for COD orders.",
  },
]

export default function FaqClient() {
  const [selectedCategory, setSelectedCategory] = useState("shipping")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filteredFaqs = FAQS.filter(faq => faq.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <HelpCircle className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">Help Center</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#F5B400]">Questions</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about our shipping services, tracking, and more.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FAQ_CATEGORIES.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setOpenFaq(null)
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? "bg-[#F5B400] text-[#0a1a0f]"
                    : "bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="h-5 w-5" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-gray-900 font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#F5B400] shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-500 mb-6">Our support team is here to help you 24/7</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#0a1a0f] font-bold rounded-xl transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
