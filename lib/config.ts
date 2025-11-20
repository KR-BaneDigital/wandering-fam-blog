/**
 * SITE CONFIGURATION - Centralized Placeholder System
 * 
 * This file contains ALL customizable values for programmatic brand generation.
 * Replace placeholders ({{VARIABLE_NAME}}) with actual brand values.
 */

export const siteConfig = {
  // Brand Identity
  brand: {
    name: "{{BRAND_NAME}}",
    description: "{{SITE_DESCRIPTION}}",
    url: "{{SITE_URL}}",
    logoPath: "/logo.jpg"
  },

  // Homepage Hero Section
  hero: {
    title: "{{HERO_TITLE}}",
    subtitle: "{{HERO_SUBTITLE}}"
  },

  // Author Information (used across all posts)
  author: {
    name: "{{AUTHOR_NAME}}",
    bio: "{{AUTHOR_BIO}}",
    role: "{{AUTHOR_ROLE}}",
    image: "/placeholder-user.jpg"
  },

  // Section Headings
  sections: {
    topArticles: {
      title: "{{TOP_ARTICLES_TITLE}}",
      description: "{{TOP_ARTICLES_DESCRIPTION}}"
    },
    recentPosts: {
      title: "{{RECENT_POSTS_TITLE}}"
    },
    categories: {
      title: "{{CATEGORIES_TITLE}}"
    }
  },

  // Newsletter
  newsletter: {
    title: "{{NEWSLETTER_TITLE}}",
    description: "{{NEWSLETTER_DESCRIPTION}}",
    disclaimer: "{{NEWSLETTER_DISCLAIMER}}"
  },

  // Categories (customize name, icon, and slug for each)
  categories: [
    { 
      name: "{{CATEGORY_1_NAME}}", 
      icon: "Shield" as const,
      slug: "{{CATEGORY_1_SLUG}}"
    },
    { 
      name: "{{CATEGORY_2_NAME}}", 
      icon: "Heart" as const,
      slug: "{{CATEGORY_2_SLUG}}"
    },
    { 
      name: "{{CATEGORY_3_NAME}}", 
      icon: "Baby" as const,
      slug: "{{CATEGORY_3_SLUG}}"
    }
  ]
}

/**
 * Color Configuration
 * 
 * Colors should be provided in oklch() format to match the template's CSS.
 * These are placeholders - actual colors are replaced in app/globals.css
 * 
 * Example: oklch(0.5 0.2 220) for blue
 */
export const colorConfig = {
  light: {
    primary: "{{PRIMARY_COLOR}}",
    secondary: "{{SECONDARY_COLOR}}",
    accent: "{{ACCENT_COLOR}}"
  },
  dark: {
    primary: "{{PRIMARY_COLOR_DARK}}",
    secondary: "{{SECONDARY_COLOR_DARK}}",
    accent: "{{ACCENT_COLOR_DARK}}"
  }
}
