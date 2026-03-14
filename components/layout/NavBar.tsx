"use client"

import Link from "next/link"
import { Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Business Solutions", href: "/business-solutions" },
  { label: "eCommerce", href: "/ecommerce" },
  { label: "Track", href: "/track" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[92px] w-full max-w-[1280px] items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-[5px]">
              <span className="block h-[6px] w-14 rounded-full bg-[#0B4D1F]" />
              <span className="block h-[6px] w-14 rounded-full bg-[#0B4D1F]" />
              <span className="block h-[6px] w-14 rounded-full bg-[#0B4D1F]" />
            </div>

            <div className="leading-none">
              <div className="text-[15px] font-black uppercase tracking-tight text-[#0B4D1F] md:text-[18px]">
                Cross Cart
              </div>
              <div className="text-[15px] font-black uppercase tracking-tight text-[#0B4D1F] md:text-[18px]">
                Bangladesh
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-semibold text-[#1E2A1F] transition-colors hover:text-[#0B4D1F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-full text-[#1E2A1F] hover:bg-neutral-100 hover:text-[#0B4D1F]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-[#1E2A1F]"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-[#1E2A1F]"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <div className="mt-8 flex flex-col gap-8">
                <Link href="/" className="border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-[5px]">
                      <span className="block h-[6px] w-12 rounded-full bg-[#0B4D1F]" />
                      <span className="block h-[6px] w-12 rounded-full bg-[#0B4D1F]" />
                      <span className="block h-[6px] w-12 rounded-full bg-[#0B4D1F]" />
                    </div>

                    <div className="leading-none">
                      <div className="text-[15px] font-black uppercase text-[#0B4D1F]">
                        Cross Cart
                      </div>
                      <div className="text-[15px] font-black uppercase text-[#0B4D1F]">
                        Bangladesh
                      </div>
                    </div>
                  </div>
                </Link>

                <nav className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-base font-semibold text-[#1E2A1F] transition-colors hover:text-[#0B4D1F]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t pt-6">
                  <Button className="h-11 w-full rounded-full bg-[#0B4D1F] text-white hover:bg-[#083817]">
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
