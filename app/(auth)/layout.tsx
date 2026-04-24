import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Cross Cart Global",
  description: "Login to your Cross Cart Global account to manage shipments, track packages, and access exclusive features.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B2A4A] via-[#0a1a0f] to-[#0B2A4A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-[#F5B400]">Cross Cart</h1>
            <p className="text-white/70 text-sm">Global</p>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
