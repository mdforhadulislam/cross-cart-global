import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Custom Clearance Services | Cross Cart Global',
  description: 'Expert customs clearance for international shipments. Navigate complex regulations with our experienced team handling all documentation and compliance requirements.',
  keywords: 'custom clearance, customs broker, import export clearance, duty consultation, customs documentation',
}

const SERVICES = [
  { title: "Import Clearance", desc: "Process incoming shipments" },
  { title: "Export Clearance", desc: "Handle outgoing packages" },
  { title: "Duty Consultation", desc: "Expert duty advice" },
  { title: "Documentation", desc: "Complete paperwork support" },
];

export default function CustomClearancePage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <FileText className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              Expert Handling
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Custom <span className="text-[#F5B400]">Clearance</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            Navigate complex customs regulations with ease. Our experts handle
            all documentation and compliance requirements for smooth
            international shipping.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-gray-200 rounded-xl p-4 text-center"
            >
              <FileText className="h-8 w-8 text-[#F5B400] mx-auto mb-2" />
              <h3 className="text-gray-900 font-semibold text-sm">{s.title}</h3>
              <p className="text-gray-900/40 text-xs mt-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Use Our Service?
          </h2>
          <div className="space-y-3">
            {[
              "Avoid customs delays and penalties",
              "Expert knowledge of regulations",
              "Faster clearance times",
              "Complete documentation handling",
              "Duty and tax consultation",
              "Compliance guaranteed",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#F5B400] shrink-0" />
                <span className="text-gray-900/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/price"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] text-[#0a1a0f] font-bold rounded-xl"
          >
            Get Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
