import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-primary">Justin Oyugi Mogire</h3>
            <p className="text-sm text-muted-foreground">
              Data Analyst | AI Researcher | Biostatistician
            </p>
            <p className="text-sm text-muted-foreground">
              Turning data into decisions through AI, statistics, and visualization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-medium text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/skills" className="text-muted-foreground hover:text-accent transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-medium text-primary">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:jmogire93@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>jmogire93@gmail.com</span>
              </a>
              <a
                href="tel:+254705071332"
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+254 705 071 332</span>
              </a>
              <a
                href="https://linkedin.com/in/justin-oyugi-449279221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Justin Oyugi Mogire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
