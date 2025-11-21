import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/config"
import { NewsletterCard } from "@/components/home/newsletter-card"
import { getAllCategories } from "@/lib/blog-data"

export function BlogFooter() {
  const categories = getAllCategories().slice(0, 4) // Show first 4 categories
  
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/logo.jpg" alt="Logo" width={24} height={24} className="size-6" />
              <span className="text-lg font-semibold text-foreground">{siteConfig.brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{siteConfig.brand.description}</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Content</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Articles
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link 
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <NewsletterCard variant="inline" />
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
