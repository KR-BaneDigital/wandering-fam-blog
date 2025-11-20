/**
 * SITE CONFIGURATION - Wandering Fam
 * 
 * Luxury family travel blog configuration
 */

export const siteConfig = {
  // Brand Identity
  brand: {
    name: "Wandering Fam",
    description: "Discover extraordinary family travel experiences that create lifelong memories. Expert guides, luxury destinations, and inspirational stories for families who seek adventure together.",
    url: "https://wanderingfam.com",
    logoPath: "/wandering-fam-logo.png"  // CHANGED FROM /logo.jpg
  },

  // Homepage Hero Section
  hero: {
    title: "Create Unforgettable Family Adventures",
    subtitle: "Discover luxury destinations, expert travel tips, and inspiring stories that transform family vacations into extraordinary journeys of connection and discovery."
  },

  // Author Information (used across all posts)
  author: {
    name: "The Wandering Fam Team",
    bio: "A collective of experienced family travel experts, luxury destination specialists, and parents who believe that the best education happens when families explore the world together.",
    role: "Family Travel Experts",
    image: "/placeholder-user.jpg"
  },

  // Section Headings
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

  // Newsletter
  newsletter: {
    title: "Join Our Travel Community",
    description: "Get exclusive family travel tips, destination guides, and special offers delivered to your inbox.",
    disclaimer: "Unsubscribe anytime. We respect your privacy and never share your information."
  },

  // Categories
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
 * Color Configuration
 * 
 * Wandering Fam brand colors in oklch() format
 * Primary: #4A90E2 (Ocean Blue) - Trust, adventure, serenity
 * Secondary: #50E3C2 (Turquoise) - Energy, freshness, tropical vibes
 * Accent: #F5A623 (Warm Gold) - Luxury, warmth, sunset moments
 */
export const colorConfig = {
  light: {
    primary: "oklch(0.62 0.15 240)",      // #4A90E2 - Ocean Blue
    secondary: "oklch(0.85 0.12 180)",    // #50E3C2 - Turquoise
    accent: "oklch(0.75 0.15 60)"         // #F5A623 - Warm Gold
  },
  dark: {
    primary: "oklch(0.70 0.15 240)",      // Lighter blue for dark mode
    secondary: "oklch(0.75 0.12 180)",    // Lighter turquoise
    accent: "oklch(0.80 0.15 60)"         // Lighter gold
  }
}