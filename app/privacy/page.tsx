import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { siteConfig } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  description: "Privacy Policy and data protection practices",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <BlogHeader />
      
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>Introduction</h2>
          <p>
            {siteConfig.brand.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the site includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, and other contact information you voluntarily provide.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including pages viewed, time spent, and navigation patterns.</li>
            <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to improve your experience.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve and personalize your experience</li>
            <li>Send you newsletters and updates (if you've opted in)</li>
            <li>Analyze usage patterns to improve our content</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with:
          </p>
          <ul>
            <li>Service providers who assist in operating our website</li>
            <li>Analytics partners to understand site usage</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies to enhance your browsing experience. You can control cookies through your browser settings, but disabling them may limit site functionality.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have rights including:
          </p>
          <ul>
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly collect information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at the email address listed on our website.
          </p>
        </div>
      </main>
      
      <BlogFooter />
    </div>
  )
}
