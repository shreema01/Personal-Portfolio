"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could integrate with emailjs or other service
    const mailtoLink = `mailto:shreema@example.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">05.</span> Get In
            Touch
          </h2>
          <Separator className="flex-1" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I&apos;m currently looking for new opportunities and my inbox is
              always open. Whether you have a question, a project idea, or just
              want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-5 text-primary" />
                <span>Rajkot, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="size-5 text-primary" />
                <span>shreema@example.com</span>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link
                  href="https://drive.google.com/file/d/1NVBlv5Wgmn1yX6qESdg_io08rmcBc3Hc/view"
                  target="_blank"
                >
                  View Resume
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-muted-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-muted-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
              <Send data-icon="inline-end" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
