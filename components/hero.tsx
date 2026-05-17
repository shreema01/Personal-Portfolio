import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-mono text-sm mb-4">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Shreema Dey Purba
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
              Junior Web Developer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              I build accessible, pixel-perfect digital experiences for the web.
              Currently focused on learning modern web technologies and software
              engineering at{" "}
              <span className="text-primary">RK University</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get In Touch
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://drive.google.com/file/d/1NVBlv5Wgmn1yX6qESdg_io08rmcBc3Hc/view"
                  target="_blank"
                >
                  Resume
                  <Download data-icon="inline-end" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="https://github.com/shreema01"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="size-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="size-5" />
              </Link>
              <Link
                href="mailto:shreema@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FiMail className="size-5" />
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative size-64 md:size-80 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src="/images/shreema-dey.png"
                  alt="Shreema Dey Purba"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
