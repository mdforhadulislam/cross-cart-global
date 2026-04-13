import {
  ArrowRight,
  Award,
  Clock,
  Globe,
  Heart,
  Shield,
  Truck,
} from "lucide-react";
import Link from "next/link";

const REASONS = [
  {
    icon: Shield,
    title: "Secure & Insured",
    description:
      "All shipments are fully insured and handled with utmost care. Your packages are protected from pickup to delivery.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Express delivery options ensure your packages arrive on time. We offer same-day, next-day, and scheduled deliveries.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Coverage across 220+ countries and territories. We have established partnerships with top carriers worldwide.",
  },
  {
    icon: Truck,
    title: "Door-to-Door Service",
    description:
      "Complete pickup and delivery service from your doorstep. No need to visit service points.",
  },
  {
    icon: Award,
    title: "Best Prices",
    description:
      "Competitive rates without compromising quality. Volume discounts available for regular shippers.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "24/7 dedicated support team ready to assist. We prioritize customer satisfaction in everything we do.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rafiq Ahmed",
    role: "Business Owner",
    text: "Cross Cart has been our go-to shipping partner for 5 years. Their reliability is unmatched.",
  },
  {
    name: "Salma Begum",
    role: "E-commerce Seller",
    text: "Fast delivery and excellent customer service. My customers are always happy with the shipping experience.",
  },
  {
    name: "Karim Khan",
    role: "Freelancer",
    text: "I ship documents internationally weekly. Cross Cart makes it so easy and affordable.",
  },
];

export default function WhyCrossCartPage() {
  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-6">
            <Heart className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              Why Choose Us
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#F5B400]">Cross Cart Global</span>?
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            We{"'"}re not just another logistics company. Here{"'"}s what makes
            us the preferred choice for thousands of businesses and individuals.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F5B400]/30 transition-all group"
              >
                <div className="h-14 w-14 rounded-xl bg-[#F5B400]/10 flex items-center justify-center mb-4 group-hover:bg-[#F5B400]/20 transition-all">
                  <Icon className="h-7 w-7 text-[#F5B400]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-white/50 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Award
                      key={star}
                      className="h-4 w-4 text-[#F5B400] fill-[#F5B400]"
                    />
                  ))}
                </div>
                <p className="text-white/70 mb-4 italic">
                  {'"'}
                  {testimonial.text}
                  {'"'}
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/40 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-linear-to-r from-[#F5B400]/10 to-transparent border border-[#F5B400]/20 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#F5B400] mb-2">15+</div>
              <div className="text-white/50 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F5B400] mb-2">50K+</div>
              <div className="text-white/50 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F5B400] mb-2">220+</div>
              <div className="text-white/50 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F5B400] mb-2">99%</div>
              <div className="text-white/50 text-sm">On-time Delivery</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experience the Difference
          </h2>
          <p className="text-white/50 mb-6">
            Join thousands of satisfied customers who trust us with their
            shipments
          </p>
          <Link
            href="/price"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#081f10] font-bold rounded-xl transition-all"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
