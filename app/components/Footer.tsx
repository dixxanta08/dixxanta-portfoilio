import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/dixanta" },
    { name: "LinkedIn", href: "https://linkedin.com/in/dixanta" },
    { name: "Twitter", href: "https://twitter.com/dixanta" },
  ];

  const footerLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Certifications", href: "/certifications" },
  ];

  return (
    <footer className="border-t border-border mt-24">
      <div className="container-brutalist py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Dixanta<span className="text-muted">.</span>
            </h3>
            <p className="text-muted text-base leading-relaxed max-w-md">
              Full-Stack Developer specializing in the MERN stack. Building
              scalable, maintainable web applications with modern technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="uppercase-spaced mb-4 text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h4 className="uppercase-spaced mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.name} ↗
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:dixanta@example.com"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted">
            © {currentYear} Dixanta Nath Shrestha. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Minimalist Credit */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted uppercase tracking-widest">
            Designed & Built with Precision
          </p>
        </div>
      </div>
    </footer>
  );
}
