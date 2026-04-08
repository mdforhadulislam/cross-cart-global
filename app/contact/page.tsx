"use client";

import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";

// --- COMPONENT ---
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#F5B400]">Touch</span>
          </h1>
          <p className="text-white/50 text-lg">
            Have questions about your shipment or need a custom quote? Our
            support team is available 24/7 to assist you.
          </p>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* LEFT COLUMN: Contact Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Info Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#F5B400]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+8801410144466"
                      className="text-white hover:text-[#F5B400] transition-colors font-medium"
                    >
                      +880 1410-144466
                    </a>
                    <br />
                    <a
                      href="tel:+8801811107751"
                      className="text-white hover:text-[#F5B400] transition-colors font-medium"
                    >
                      +880 1811-107751
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#F5B400]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:support@crosscart.com"
                      className="text-white hover:text-[#F5B400] transition-colors font-medium"
                    >
                      support@crosscart.com
                    </a>
                    <p className="text-white/30 text-sm mt-1">
                      We reply within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#F5B400]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold mb-1">
                      Head Office
                    </p>
                    <p className="text-white leading-relaxed text-sm">
                      Warehouse No.1, Behind Sena Kalyan Sangstha,
                      <br />
                      Mohakhali DOHS, Dhaka-1206
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-linear-to-br from-[#F5B400]/10 to-transparent border border-[#F5B400]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-[#F5B400]" />
                <h3 className="text-lg font-bold text-white">Working Hours</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sat - Thu</span>
                  <span className="font-mono text-[#F5B400]">
                    10:00 AM - 9:00 PM
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Friday</span>
                  <span className="font-mono text-[#F5B400]">
                    3:00 PM - 9:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Form (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="bg-[#081f10] border border-white/10 rounded-2xl p-6 lg:p-10 shadow-2xl">
              {success ? (
                // Success Message State
                <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                  <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                    <MessageSquare className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/50 max-w-sm">
                    Thank you for contacting Cross Cart. Our support team will
                    get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-[#F5B400] hover:text-white transition-colors text-sm font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                // Contact Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/80">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#0a1a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F5B400]/50 focus:ring-1 focus:ring-[#F5B400]/50 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white/80">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#0a1a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F5B400]/50 focus:ring-1 focus:ring-[#F5B400]/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/80">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#0a1a0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5B400]/50 focus:ring-1 focus:ring-[#F5B400]/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a1a0f]">
                        Select a topic
                      </option>
                      <option value="quote" className="bg-[#0a1a0f]">
                        Request a Quote
                      </option>
                      <option value="tracking" className="bg-[#0a1a0f]">
                        Tracking Issue
                      </option>
                      <option value="billing" className="bg-[#0a1a0f]">
                        Billing & Account
                      </option>
                      <option value="other" className="bg-[#0a1a0f]">
                        Other Inquiry
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/80">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      className="w-full bg-[#0a1a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F5B400]/50 focus:ring-1 focus:ring-[#F5B400]/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto h-12 px-10 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#081f10] font-bold tracking-wide uppercase rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-[#F5B400]/10"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* --- MAP SECTION (Visual Placeholder) --- */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 h-100 relative group">
          {/* Abstract Map Background */}
          <div className="absolute inset-0 bg-[#081f10]">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            {/* Abstract Roads */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-white/5 rotate-12"></div>
            <div className="absolute top-0 left-1/3 w-2 h-full bg-white/5 -rotate-6"></div>
            <div className="absolute top-1/3 right-0 w-2/3 h-2 bg-white/5"></div>
          </div>

          {/* Map Content Overlay */}
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
            <div className="bg-[#0a1a0f]/90 backdrop-blur-md border border-[#F5B400]/30 p-6 rounded-2xl shadow-2xl text-center max-w-md mx-4 transform group-hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-3">
                <div className="h-12 w-12 rounded-full bg-[#F5B400] flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(245,180,0,0.5)]">
                  <MapPin className="h-6 w-6 text-[#081f10]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cross Cart Global HQ</h3>
              <p className="text-white/60 text-sm mb-4">
                Mohakhali DOHS, Dhaka, Bangladesh
              </p>
              <a
                href="https://maps.google.com/?q=Mohakhali+DOHS+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F5B400] font-bold text-sm hover:underline"
              >
                <Globe className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
