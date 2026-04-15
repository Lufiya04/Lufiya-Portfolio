import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect active section
      for (const link of [...navLinks].reverse()) {
        const el = document.querySelector(link.href);
        if (el && (el as HTMLElement).offsetTop <= window.scrollY + 200) {
          setActive(link.href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3 shadow-lg shadow-background/50" : "py-5"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold gradient-text">Lufiya.</a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm px-3 py-1.5 rounded-full transition-all ${
                active === l.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            className="ml-4 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Download size={14} /> CV
          </a>
        </div>

        <button className="md:hidden text-foreground p-2 rounded-xl hover:bg-secondary/50 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm py-2.5 px-4 rounded-xl transition-all ${
                active === l.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={resumeUrl} className="mt-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium text-center flex items-center justify-center gap-2">
            <Download size={14} /> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
