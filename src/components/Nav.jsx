import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Explore", to: "/palettes" },
    { name: "Generate", to: "/generate" },
    { name: "Gradient", to: "/gradient" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#D1D0D0] shadow-sm">
      <div className="flex items-center justify-between px-6 lg:px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo/Coloroid-Logo.png"
            alt="Coloroid Logo"
            className="w-12 sm:w-14"
          />
          <img
            src="/images/logo/Coloroid-Text.png"
            alt="Coloroid Text"
            className="w-32 sm:w-44"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="/"
                className="py-3 flex items-center rounded-md px-2 border-transparent hover:bg-neutral-200"
              >
                Home
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `py-3 flex items-center rounded-md px-2 ${
                      isActive
                        ? "text-black border-black"
                        : "border-transparent hover:bg-neutral-200"
                    } transition-all`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="https://github.com/lnrdgnwn/coloroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 fill-black hover:opacity-80 transition"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38
    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
    0-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
    0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.62 7.62 0 0 1 2-.27
    c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
    0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2
    0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 border-t border-[#D1D0D0] text-black">
          <li>
            <a
              href="/"
              className="block py-2 border-b border-transparent hover:border-black"
            >
              Home
            </a>
          </li>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 border-b ${
                    isActive
                      ? "text-slate-800 border-black"
                      : "border-transparent hover:border-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/lnrdgnwn/coloroid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 border-b border-transparent hover:border-black"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
