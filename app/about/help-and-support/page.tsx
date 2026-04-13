"use client"

import React, { useState } from 'react'
import { Phone, Mail, MessageSquare, Clock, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'

const SUPPORT_OPTIONS = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1410-144466",
    subtitle: "Available 10AM - 9PM",
    color: "#F5B400",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@crosscart.com",
    subtitle: "Reply within 24 hours",
    color: "#3B82F6",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Chat with us",
    subtitle: "Instant response",
    color: "#10B981",
  },
]

export default function HelpAndSupportPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <MessageSquare className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">24/7 Available</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Help & <span className="text-[#F5B400]">Support</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Our dedicated support team is available around the clock to assist you with any queries.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SUPPORT_OPTIONS.map((option, index) => {
            const Icon = option.icon
            return (
              <a
                key={index}
                href={option.icon === Phone ? "tel:+8801410144466" : `mailto:${option.value}`}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#F5B400]/30 transition-all group"
              >
                <div
                  className="h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${option.color}20` }}
                >
                  <Icon className="h-8 w-8" style={{ color: option.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{option.title}</h3>
                <p className="text-[#F5B400] font-medium mb-1">{option.value}</p>
                <p className="text-white/40 text-sm">{option.subtitle}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Send us a Message</h2>
            
            {success ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-green-500/10 border border-green-500/20 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 mb-6">We{"'"}ll get back to you shortly.</p>
                <button
                  onClick={() => {
                    setSuccess(false)
                    setFormData({ name: '', email: '', subject: '', message: '' })
                  }}
                  className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-sm mb-1 block">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#081f10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#F5B400]/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-[#081f10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#F5B400]/50 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-1 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full bg-[#081f10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#F5B400]/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-1 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your issue..."
                    className="w-full bg-[#081f10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#F5B400]/50 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#081f10] font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#F5B400]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Phone</p>
                    <a href="tel:+8801410144466" className="text-white hover:text-[#F5B400]">+880 1410-144466</a>
                    <br />
                    <a href="tel:+8801811107751" className="text-white hover:text-[#F5B400]">+880 1811-107751</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#F5B400]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Email</p>
                    <a href="mailto:support@crosscart.com" className="text-white hover:text-[#F5B400]">support@crosscart.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#F5B400]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Office</p>
                    <p className="text-white">Warehouse No.1, Behind Sena Kalyan Sangstha,<br />Mohakhali DOHS, Dhaka-1206</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#F5B400]" />
                Working Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/60">Sat - Thu</span>
                  <span className="text-[#F5B400] font-mono">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Friday</span>
                  <span className="text-[#F5B400] font-mono">3:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
