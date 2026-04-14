import { Github, Linkedin, Mail, Heart } from "lucide-react";

const links = [
  { icon: Mail, href: "mailto:lufiyalathif004@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lufiya-banu-4027b5253", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Lufiya04", label: "GitHub" },
];

const navItems = ["Home", "About", "Experience", "Skills", "Services", "Portfolio", "Contact"];

const Footer = () => (
  <footer className="relative border-t border-border/50">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

    <div className="container mx-auto px-6 py-12 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div>
          <a href="#home" className="text-2xl font-bold gradient-text">Lufiya.</a>
          <p className="text-xs text-muted-foreground mt-1">UI/UX Designer & Web Designer</p>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap justify-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className="p-2.5 rounded-xl glass hover:scale-110 hover:border-primary/30 transition-all text-muted-foreground hover:text-primary"
            >
              <l.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          © 2025 <span className="gradient-text font-medium">Lufiya Banu</span> · Made with <Heart size={12} className="text-peach" /> All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
