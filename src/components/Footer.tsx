import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-sm font-bold text-primary-foreground">T</span>
              </div>
              <span className="font-bold">JSON ⇄ TOON</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your data with token-optimized formats for AI applications.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/features" className="transition-colors hover:text-primary">Features</a>
              </li>
              <li>
                <a href="/documentation" className="transition-colors hover:text-primary">Documentation</a>
              </li>
              <li>
                <a href="/" className="transition-colors hover:text-primary">Converter</a>
              </li>
              <li>
                <a href="/pricing" className="transition-colors hover:text-primary">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/documentation" className="transition-colors hover:text-primary">Guide</a>
              </li>
              <li>
                <a href="/" className="transition-colors hover:text-primary">Examples</a>
              </li>
              <li>
                <a href="https://github.com" className="transition-colors hover:text-primary">GitHub</a>
              </li>
              <li>
                <a href="/contact" className="transition-colors hover:text-primary">Support</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="transition-colors hover:text-primary">About</a>
              </li>
              <li>
                <a href="/privacy" className="transition-colors hover:text-primary">Privacy</a>
              </li>
              <li>
                <a href="/terms" className="transition-colors hover:text-primary">Terms</a>
              </li>
              <li>
                <a href="/contact" className="transition-colors hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-accent text-accent" /> for developers
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 TOON Converter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
