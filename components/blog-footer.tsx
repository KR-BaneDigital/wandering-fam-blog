import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { NewsletterCard } from "@/components/home/newsletter-card"
import { Compass, Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export function BlogFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Compass className="size-6 text-primary" />
              <span className="text-lg font-bold text-foreground">{siteConfig.brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{siteConfig.brand.description}</p>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="size-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  All Travel Stories
                </Link>
              </li>
              <li>
                <Link href="/category/luxury-destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Luxury Destinations
                </Link>
              </li>
              <li>
                <Link href="/category/family-activities" className="text-muted-foreground hover:text-primary transition-colors">
                  Family Activities
                </Link>
              </li>
              <li>
                <Link href="/category/travel-tips" className="text-muted-foreground hover:text-primary transition-colors">
                  Travel Tips
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
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
          <p className="mt-2 text-xs">Creating unforgettable family adventures, one journey at a time.</p>
        </div>
      </div>
    </footer>
  )
}