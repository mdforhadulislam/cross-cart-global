import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Cross Cart Global',
  description: 'Get in touch with Cross Cart Global support team. Contact us via phone, email, or visit our Dhaka office for shipping inquiries and quotes.',
  keywords: 'contact us, customer support, shipping support, contact Cross Cart, Bangladesh courier',
}

export default function ContactPage() {
  return <ContactClient />
}
