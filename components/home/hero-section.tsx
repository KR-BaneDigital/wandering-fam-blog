import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { PostCardHorizontal } from "@/components/blog/post-card-horizontal"
import type { BlogPost } from "@/lib/blog-data"

interface HeroSectionProps {
  featuredPost: BlogPost
  secondaryPosts: BlogPost[]
}

export function HeroSection({ featuredPost, secondaryPosts }: HeroSectionProps) {
  return (
    <section className="border-b border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Hero Text + Featured Post */}
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <MapPin className="size-4" />
                <span>Your Family Adventure Starts Here</span>
              </div>
              <h1 className="mb-3 text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
                {siteConfig.hero.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {siteConfig.hero.subtitle}
              </p>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold shadow-lg">
                      Featured Story
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Read Story <ArrowRight className="size-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Secondary Posts */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryPosts.map((post) => (
              <PostCardHorizontal key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}