import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Open_Sans, Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/config"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | Trusted Insights and Expert Content`,
  description: siteConfig.brand.description,
  generator: "v0.app",
  keywords: ["blog", "articles", "insights", "expert content"],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  publisher: siteConfig.brand.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.brand.url,
    siteName: siteConfig.brand.name,
    title: `${siteConfig.brand.name} | Trusted Insights and Expert Content`,
    description: siteConfig.brand.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | Trusted Insights and Expert Content`,
    description: siteConfig.brand.description,
    images: ["/og-image.jpg"],
  },
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4CAF50" },
    { media: "(prefers-color-scheme: dark)", color: "#66BB6A" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${robotoSlab.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: siteConfig.brand.name,
              description: siteConfig.brand.description,
              url: siteConfig.brand.url,
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                name: siteConfig.brand.name,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteConfig.brand.url}/logo.png`,
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
