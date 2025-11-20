import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight } from "lucide-react"
import { Shield, Heart, Baby } from "lucide-react"
import { NewsletterCard } from "./newsletter-card"
import { siteConfig } from "@/lib/config"
import type { BlogPost } from "@/lib/blog-data"

const iconMap = {
  Shield,
  Heart,
  Baby
}

interface SidebarProps {
  recentPosts: BlogPost[]
}

export function Sidebar({ recentPosts }: SidebarProps) {
  return (
    <aside className="lg:col-span-1">
      {/* Newsletter */}
      <div className="mb-8">
        <NewsletterCard variant="sidebar" />
      </div>

      {/* Recent Posts */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">
            {siteConfig.sections.recentPosts.title}
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <h4 className="mb-2 text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  <span>{post.date}</span>
                </div>
                <Badge variant="outline" className="mt-2 text-xs">
                  {post.category}
                </Badge>
              </Link>
            ))}
          </div>
          <Button variant="outline" className="mt-6 w-full bg-transparent" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">
            {siteConfig.sections.categories.title}
          </h3>
          <div className="space-y-3">
            {siteConfig.categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap]
              return (
                <Link key={category.name} href={`/category/${category.slug}`}>
                  <div className="group flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-primary hover:bg-primary/5">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h4>
                    </div>
                    <ChevronRight className="size-4 text-muted-foreground" />
                  </div>
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
