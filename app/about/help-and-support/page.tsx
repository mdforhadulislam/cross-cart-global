import type { Metadata } from 'next'
import HelpSupportClient from './HelpSupportClient'

export const metadata: Metadata = {
  title: 'Help & Support | Cross Cart Global',
  description: 'Get help with your shipments. Contact our 24/7 support team via phone, email, or live chat. FAQs, troubleshooting, and contact options available.',
  keywords: 'help, support, customer service, shipping help, FAQ, troubleshooting',
}

export default function HelpAndSupportPage() {
  return <HelpSupportClient />
}
