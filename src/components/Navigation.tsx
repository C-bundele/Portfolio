import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display text-2xl font-bold gradient-text"
        >
          CB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg gradient-bg text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-xl p-6 animate-slide-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg gradient-bg text-primary-foreground font-medium text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
