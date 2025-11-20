"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/lib/config"

interface NewsletterCardProps {
  variant?: "sidebar" | "inline"
}

export function NewsletterCard({ variant = "sidebar" }: NewsletterCardProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  if (variant === "sidebar") {
    return (
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          {!submitted ? (
            <>
              <h3 className="mb-3 text-xl font-bold">{siteConfig.newsletter.title}</h3>
              <p className="mb-4 text-sm text-primary-foreground/90 leading-relaxed">
                {siteConfig.newsletter.description}
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground text-foreground"
                />
                <Button type="submit" variant="secondary" className="w-full">
                  Subscribe Now
                </Button>
              </form>
              <p className="mt-3 text-xs text-primary-foreground/75">
                {siteConfig.newsletter.disclaimer}
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
              <p className="text-sm text-primary-foreground/90">
                You've successfully subscribed to our newsletter.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  // Inline variant (for footer, etc.)
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-foreground">Newsletter</h4>
      {!submitted ? (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            {siteConfig.newsletter.description}
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
            <Button type="submit" variant="default" className="w-full">
              Subscribe
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-4">
          <p className="text-sm font-semibold text-foreground">Thank You!</p>
          <p className="text-sm text-muted-foreground mt-2">You're now subscribed.</p>
        </div>
      )}
    </div>
  )
}
