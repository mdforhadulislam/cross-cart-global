import type { Metadata } from 'next'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: "FAQ - Cross Cart Global | Frequently Asked Questions",
  description: "Find answers to common questions about Cross Cart Global's shipping services, tracking, payment methods, and delivery. 24/7 support available.",
  keywords: ["FAQ", "frequently asked questions", "shipping FAQ", "courier questions", "delivery FAQ"],
}

export default function FaqPage() {
  return <FaqClient />
}
