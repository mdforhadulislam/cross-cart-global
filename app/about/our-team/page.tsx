import { Mail, Phone, Users } from "lucide-react";

const TEAM = [
  {
    name: "Mohammad Rahman",
    role: "Chief Executive Officer",
    bio: "20+ years experience in logistics industry",
    initials: "MR",
  },
  {
    name: "Fatima Ahmed",
    role: "Operations Director",
    bio: "Expert in supply chain management",
    initials: "FA",
  },
  {
    name: "Kamal Hossain",
    role: "Technical Director",
    bio: "Leading our digital transformation",
    initials: "KH",
  },
  {
    name: "Nusrat Jahan",
    role: "Customer Relations Manager",
    bio: "Dedicated to customer satisfaction",
    initials: "NJ",
  },
  {
    name: "Rahim Uddin",
    role: "Sales Director",
    bio: "Building partnerships worldwide",
    initials: "RU",
  },
  {
    name: "Sabina Yasmin",
    role: "HR Director",
    bio: "Growing our talented team",
    initials: "SY",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Users className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              Our People
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-[#F5B400]">Team</span>
          </h1>
          <p className="text-gray-900/50 max-w-2xl mx-auto">
            Our dedicated team of professionals works around the clock to ensure
            your packages are delivered safely and on time.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 border border-gray-200 rounded-2xl p-6 text-center hover:border-[#F5B400]/30 transition-all"
            >
              <div className="h-24 w-24 rounded-full bg-[#F5B400]/10 border-2 border-[#F5B400]/30 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#F5B400]">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-[#F5B400] text-sm mb-3">{member.role}</p>
              <p className="text-gray-900/50 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Join Team */}
        <div className="bg-white/5 border border-gray-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-900/50 mb-6 max-w-2xl mx-auto">
            We{"'"}re always looking for talented individuals who are passionate
            about logistics and customer service. Send your CV to our HR
            department.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hr@crosscartbd.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#F5B400] text-[#0a1a0f] font-bold rounded-xl hover:bg-[#F5B400]/90 transition-all"
            >
              <Mail className="h-5 w-5" />
              hr@crosscartbd.com
            </a>
            <a
              href="tel:+8801410144466"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-gray-200 text-gray-900 rounded-xl hover:bg-white/10 transition-all"
            >
              <Phone className="h-5 w-5" />
              +880 1410-144466
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
