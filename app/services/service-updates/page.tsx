import { Bell } from "lucide-react";

const UPDATES = [
  {
    date: "Jan 15, 2024",
    title: "New Route: Bangladesh to Japan",
    desc: "Now shipping to Japan with 7-10 day delivery",
  },
  {
    date: "Jan 10, 2024",
    title: "Extended Support Hours",
    desc: "Customer support now available until 10 PM",
  },
  {
    date: "Jan 5, 2024",
    title: "New Mobile App Features",
    desc: "Track shipments with enhanced UI",
  },
  {
    date: "Dec 28, 2023",
    title: "Holiday Schedule",
    desc: "Limited operations during Eid holidays",
  },
];

export default function ServiceUpdatesPage() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Bell className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              Latest News
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Service <span className="text-[#F5B400]">Updates</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Stay informed about our latest service expansions, new features, and
            important announcements.
          </p>
        </div>

        <div className="space-y-4">
          {UPDATES.map((update, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center shrink-0">
                <Bell className="h-5 w-5 text-[#F5B400]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#F5B400] text-xs">{update.date}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">
                  {update.title}
                </h3>
                <p className="text-white/50 text-sm">{update.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
