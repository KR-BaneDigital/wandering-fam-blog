// Blog Data Re-Export & Helper Functions
// 🔒 LOCKED FILE - Do not modify
// This file imports from split files and provides helper functions

// Import types from schema
import type { BlogPost, Author } from "./blog-data.schema"
export type { BlogPost, Author }

// Import data from content
import { blogPosts as blogPostsData } from "./blog-data.content"
export { blogPostsData as blogPosts }

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find((post) => post.slug === slug)
}

// Helper function to get related posts
export function getRelatedPosts(postId: string): BlogPost[] {
  const post = blogPostsData.find((p) => p.id === postId)
  if (!post || !post.relatedPosts) return []

  return post.relatedPosts
    .map((id) => blogPostsData.find((p) => p.id === id))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3)
}

// Helper function to filter posts
export function filterPosts(query: string, category?: string): BlogPost[] {
  let filtered = blogPostsData

  if (category && category !== "all") {
    filtered = filtered.filter((post) => post.category.toLowerCase() === category.toLowerCase())
  }

  if (query) {
    const lowerQuery = query.toLowerCase()
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    )
  }

  return filtered
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = new Set(blogPostsData.map((post) => post.category))
  return Array.from(categories).sort()
}
