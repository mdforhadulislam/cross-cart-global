import type { Metadata } from 'next'
import TrackClient from './TrackClient'

export const metadata: Metadata = {
  title: 'Track Your Shipment | Cross Cart Global',
  description: 'Track your international shipments in real-time. Enter your tracking number to get instant updates on location, status, and estimated delivery time.',
  keywords: 'track shipment, tracking, package tracking, delivery status, shipment tracking',
}

export default function TrackPage() {
  return <TrackClient />
}
