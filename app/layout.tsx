import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GTMScript, GTMNoScript } from "@/lib/gtm"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Private Training Growth Systems for Boutique Gyms | Echo Web, LLC",
  description:
    "Turn private training interest into booked, committed sessions. Conversion-focused web design, local SEO, and backend systems for boutique fitness gyms.",
  keywords: [
    "private training growth",
    "boutique gym marketing",
    "fitness web design",
    "local SEO for gyms",
    "private training systems",
    "gym client acquisition",
    "fitness business growth",
    "private session conversion",
    "boutique fitness marketing",
    "gym revenue optimization",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GTMScript />
      </head>
      <body className={`font-sans antialiased`}>
        <GTMNoScript />
        {children}
        <Analytics />
        
        {/* Cloudflare Turnstile Script */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}