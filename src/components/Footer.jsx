import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/POOVARASAN-03" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/poovarasan-g-6621592b1/" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const offset = 80;
      const position = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Top Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">Poovarasan G</h3>
            <p className="text-sm text-gray-600 mt-2">
              Software Developer building clean and efficient web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md border hover:bg-gray-200 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`${social.name} clicked`);
                    }}
                  >
                    <Icon className="h-4 w-4 text-gray-600" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t flex flex-col md:flex-row items-center justify-center text-sm text-gray-600 gap-2 ">
          <p>© {currentYear} Poovarasan G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
