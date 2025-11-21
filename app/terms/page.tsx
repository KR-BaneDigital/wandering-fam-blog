import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { siteConfig } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.brand.name}`,
  description: "Terms of Service and usage guidelines",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <BlogHeader />
      
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using {siteConfig.brand.name}, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) on {siteConfig.brand.name} for personal, non-commercial use only.
          </p>
          <p>This license shall automatically terminate if you violate any of these restrictions.</p>

          <h2>Prohibited Uses</h2>
          <p>
            You may not use our website:
          </p>
          <ul>
            <li>In any way that violates any applicable law or regulation</li>
            <li>To transmit any advertising or promotional material</li>
            <li>To impersonate or attempt to impersonate the company or another user</li>
            <li>To engage in any automated use of the system</li>
            <li>To interfere with or disrupt the website's security features</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            The content, features, and functionality on {siteConfig.brand.name} are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>User Content</h2>
          <p>
            If you submit content to our website (such as comments or contributions), you grant us a license to use, modify, and display that content.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on {siteConfig.brand.name} are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
          </p>

          <h2>Limitations of Liability</h2>
          <p>
            In no event shall {siteConfig.brand.name} or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on {siteConfig.brand.name} could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.
          </p>

          <h2>Links to Third-Party Websites</h2>
          <p>
            We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.
          </p>

          <h2>Modifications</h2>
          <p>
            We may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at the email address listed on our website.
          </p>
        </div>
      </main>
      
      <BlogFooter />
    </div>
  )
}
