/**
 * ✅ EDITABLE FILE - AI Can Modify Values Here
 * 
 * Site Configuration Content
 * This file contains all customizable values for the site
 * 
 * AI EDITING RULES:
 * - ✅ CAN update string values (titles, descriptions, URLs, etc.)
 * - ✅ CAN update logoPath to point to new images
 * - ✅ CAN update category names and slugs
 * - ✅ CAN update color values (must stay in oklch() format)
 * - ❌ CANNOT delete any top-level keys
 * - ❌ CANNOT change the structure (add/remove fields)
 * - ❌ CANNOT delete sections or nested objects
 */

import type { SiteConfigSchema, ColorConfigSchema } from './config.schema'

/**
 * EDITABLE: Main site configuration
 * Update values to match your brand
 */
export const siteContent: SiteConfigSchema = {
  // EDITABLE_BRAND: Brand identity
  brand: {
    name: "Wandering Fam",
    description: "Discover extraordinary family travel experiences that create lifelong memories. Expert guides, luxury destinations, and inspirational stories for families who seek adventure together.",
    url: "https://wanderingfam.com",
    logoPath: "/wandering-fam-logo.png"
  },

  // EDITABLE_HERO: Homepage hero section
  hero: {
    title: "Create Unforgettable Family Adventures",
    subtitle: "Discover luxury destinations, expert travel tips, and inspiring stories that transform family vacations into extraordinary journeys of connection and discovery."
  },

  // EDITABLE_AUTHOR: Default author information
  author: {
    name: "The Wandering Fam Team",
    bio: "A collective of experienced family travel experts, luxury destination specialists, and parents who believe that the best education happens when families explore the world together.",
    role: "Family Travel Experts",
    image: "/placeholder-user.jpg"
  },

  // EDITABLE_SECTIONS: Section headings throughout the site
  sections: {
    topArticles: {
      title: "Featured Family Adventures",
      description: "Handpicked destinations and experiences that inspire meaningful family connections"
    },
    recentPosts: {
      title: "Latest Travel Inspiration"
    },
    categories: {
      title: "Explore by Interest"
    }
  },

  // EDITABLE_NEWSLETTER: Newsletter subscription section
  newsletter: {
    title: "Join Our Travel Community",
    description: "Get exclusive family travel tips, destination guides, and special offers delivered to your inbox.",
    disclaimer: "Unsubscribe anytime. We respect your privacy and never share your information."
  },

  // EDITABLE_CATEGORIES: Blog categories
  categories: [
    { 
      name: "Luxury Destinations",
      icon: "Shield" as const,
      slug: "luxury-destinations"
    },
    { 
      name: "Family Activities",
      icon: "Heart" as const,
      slug: "family-activities"
    },
    { 
      name: "Travel Tips",
      icon: "Baby" as const,
      slug: "travel-tips"
    }
  ]
}

/**
 * EDITABLE: Color configuration
 * Brand colors in oklch() format for better color consistency
 * 
 * Wandering Fam Colors:
 * Primary: #4A90E2 (Ocean Blue) - Trust, adventure, serenity
 * Secondary: #50E3C2 (Turquoise) - Energy, freshness, tropical vibes
 * Accent: #F5A623 (Warm Gold) - Luxury, warmth, sunset moments
 */
export const colorContent: ColorConfigSchema = {
  // EDITABLE_COLORS_LIGHT: Light mode colors
  light: {
    primary: "oklch(0.62 0.15 240)",      // #4A90E2 - Ocean Blue
    secondary: "oklch(0.85 0.12 180)",    // #50E3C2 - Turquoise
    accent: "oklch(0.75 0.15 60)"         // #F5A623 - Warm Gold
  },

  // EDITABLE_COLORS_DARK: Dark mode colors (brighter for contrast)
  dark: {
    primary: "oklch(0.70 0.15 240)",      // Lighter blue for dark mode
    secondary: "oklch(0.75 0.12 180)",    // Lighter turquoise
    accent: "oklch(0.80 0.15 60)"         // Lighter gold
  }
}
