import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const section = document.querySelector(href);
    if (section) {
      const offset = 80;
      const position =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl font-extrabold text-gray-900 hover:text-indigo-600 transition"
          >
            Poovarasan G
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-base font-medium text-gray-700 hover:text-indigo-600 px-4 py-3 rounded-md transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
