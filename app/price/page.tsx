import type { Metadata } from 'next'
import PriceClient from './PriceClient'

export const metadata: Metadata = {
  title: 'Get Shipping Quote | Cross Cart Global',
  description: 'Get instant shipping quotes from DHL, FedEx, UPS, and Aramex. Compare rates for international shipping from Bangladesh to 220+ countries.',
  keywords: 'shipping quote, get quote, shipping rates, price calculator, DHL quote, FedEx rates',
}

export default function PricePage() {
  return <PriceClient />
}
