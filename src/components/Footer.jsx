import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
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
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold">
              <span className="text-blue-600">{'<'}</span>
              <span className="text-gray-900 dark:!text-white">Poovarasan G</span>
              <span className="text-blue-600">{'/>'}</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 max-w-xs mx-auto sm:mx-0">
              Software Developer building clean and efficient web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left lg:text-right">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3 justify-center sm:justify-start lg:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all shadow-sm"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Poovarasan G. All rights reserved.</p>
          <span className="hidden sm:inline">•</span>
        </div>
      </div>
    </footer>
  );
}
