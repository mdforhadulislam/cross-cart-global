import type { Metadata } from 'next'
import CoverageClient from './CoverageClient'

export const metadata: Metadata = {
  title: "Coverage Area - Cross Cart Global | Shipping to 215+ Countries",
  description: "Cross Cart Global delivers to 215+ countries worldwide. Check our coverage area and shipping routes from Bangladesh to USA, UK, UAE, India, China and more.",
  keywords: ["coverage area", "shipping countries", "delivery destinations", "215 countries", "international shipping Bangladesh"],
}

export default function CoverageAreaPage() {
  return <CoverageClient />
}
