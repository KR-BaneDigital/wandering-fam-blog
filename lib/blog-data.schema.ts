// Blog Data Type Definitions
// 🔒 LOCKED FILE - Do not modify
// This file contains only TypeScript interfaces and types

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  date: string
  readTime: string
  author: Author
  featured: boolean
  views?: number
  relatedPosts?: string[]
}

export interface Author {
  name: string
  bio: string
  image: string
  role: string
}
