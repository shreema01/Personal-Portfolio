import Link from "next/link"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              Designed & Built by{" "}
              <span className="text-primary">Shreema Dey Purba</span>
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
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
      </div>
    </footer>
  )
}
