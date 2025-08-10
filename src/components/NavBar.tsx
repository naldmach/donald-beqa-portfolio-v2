import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.documentElement.classList.add("dark");
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-gray-950/60 backdrop-blur border-b border-gray-200/60 dark:border-white/10">
      <nav className="container py-3 flex items-center justify-between">
        <a href="#top" className="font-bold">
          <span className="inline md:hidden text-2xl leading-none bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent gradient-animate">
            DM
          </span>
          <span className="hidden md:inline text-lg md:text-xl">
            Donald's Dev Quest
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">
          <li>
            <a href="#top" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <Sun className="w-5 h-5 dark:hidden" />
            <Moon className="w-5 h-5 hidden dark:block" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10 md:hidden"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transform transition-all duration-300 ${
          open
            ? "max-h-72 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        } overflow-hidden border-t border-gray-200/60 dark:border-white/10 bg-white/90 dark:bg-gray-950/90 backdrop-blur`}
      >
        <div className="container py-3">
          <ul className="flex flex-col gap-3 text-sm">
            {[
              { href: "#top", label: "Home" },
              { href: "#projects", label: "Projects" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-1 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
