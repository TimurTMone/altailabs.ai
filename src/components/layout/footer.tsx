import { GitFork, Send, Mail, Globe } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

const socials = [
  { icon: GitFork, href: SITE.github, label: "GitHub" },
  { icon: Send, href: SITE.telegram, label: "Telegram" },
  { icon: Globe, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-mono text-lg font-bold tracking-tight"
            >
              altai<span className="text-accent-cyan">.</span>labs
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              AI Software Factory
            </p>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-muted hover:text-accent-cyan transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Altai Labs. Built by builders.</p>
          <p className="font-mono text-xs">
            Built with Next.js &middot; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
