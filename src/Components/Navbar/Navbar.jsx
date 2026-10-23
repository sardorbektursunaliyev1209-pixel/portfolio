import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Bosh sahifa", href: "#home" },
    { name: "Men haqimda", href: "#about" },
    { name: "Loyihalarim", href: "#portfolio" },
    { name: "Aloqa", href: "#contact" },
  ];

  return (
    <header className="navbar absolute top-0 left-0 z-50 w-full">
      <div className="container flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5">
        {/* LOGO */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-700 text-lg font-extrabold text-white shadow-[0_4px_14px_rgba(22,163,74,0.35)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            S
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Sardor<span className="text-green-400">.Dev</span>
          </span>
        </a>

        {/* KOMPYUTER MENYUSI */}
        <nav className="hidden items-center gap-8 text-[13px] font-medium text-white md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative pb-1 transition-colors duration-300 hover:text-green-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* BURGER TUGMA (faqat telefonda) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menyuni ochish"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-700/50 text-white transition hover:bg-green-700/30 md:hidden"
        >
          {open ? <FaXmark size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* TELEFON MENYUSI */}
      {open && (
        <nav className="border-t border-green-900/40 bg-[#050805]/95 backdrop-blur md:hidden">
          <div className="flex flex-col px-5 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-green-900/30 py-4 text-sm font-medium text-white transition-colors last:border-b-0 hover:text-green-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;