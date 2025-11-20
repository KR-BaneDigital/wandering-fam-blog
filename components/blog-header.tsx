"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Compass } from "lucide-react"

export function BlogHeader() {
  const [email, setEmail] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setIsOpen(false)
        setSubmitted(false)
        setEmail("")
      }, 2000)
    }
  }

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Compass className="size-8 text-primary group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">{siteConfig.brand.name}</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <Link
              href="/category/luxury-destinations"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Luxury Destinations
            </Link>
            <Link
              href="/category/family-activities"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Family Activities
            </Link>
            <Link
              href="/category/travel-tips"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Travel Tips
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              All Stories
            </Link>
          </nav>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="default" size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90">
                Join Community
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">Join the Wandering Fam Community</DialogTitle>
                <DialogDescription className="text-base">
                  Get exclusive family travel tips, destination guides, and special offers delivered to your inbox.
                </DialogDescription>
              </DialogHeader>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Subscribe Now
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Compass className="size-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Welcome to the Family!</h3>
                  <p className="text-sm text-muted-foreground">You've successfully joined our travel community.</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}