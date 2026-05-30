 "use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/about", label: "Biz haqimizda" },
  { href: "/programs", label: "Dasturlar" },
  { href: "/admissions", label: "Qabul" },
  { href: "/news", label: "Yangiliklar" },
  { href: "/contact", label: "Bog'lanish" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-bold text-[#0F2747] md:text-xl">
          SMDJ Group
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#0F2747]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/admissions"
            className="rounded-full bg-[#0F2747] px-4 py-2 text-sm font-semibold !text-white transition hover:bg-[#163560] hover:!text-white visited:!text-white focus-visible:!text-white"
          >
            Qabulga yozilish
          </Link>
          <button
            type="button"
            aria-label="Menyuni ochish"
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 transition hover:bg-slate-100 hover:text-[#0F2747]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
