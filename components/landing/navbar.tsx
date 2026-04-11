"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200/60 bg-[#fafaf8]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white font-serif font-bold text-sm">
            B
          </div>
          <span className="font-serif text-lg text-neutral-900">Breefy</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-neutral-600 md:flex">
          <Link href="/#how-it-works" className="hover:text-neutral-900 transition-colors">
            Comment ça marche
          </Link>
          <Link href="/#use-cases" className="hover:text-neutral-900 transition-colors">
            Cas d&apos;usage
          </Link>
          <Link href="/exemples" className="hover:text-neutral-900 transition-colors">
            Exemples
          </Link>
          <Link href="/blog" className="hover:text-neutral-900 transition-colors">
            Blog
          </Link>
          <Link href="/#pricing" className="hover:text-neutral-900 transition-colors">
            Tarifs
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
          </Link>
          <Link href="/register" className="hidden md:block">
            <Button size="sm">Essai gratuit</Button>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 text-neutral-600 hover:bg-neutral-100"
            aria-label="Menu"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-[#fafaf8]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            <Link
              href="/#how-it-works"
              className="py-3 text-sm text-neutral-700 border-b border-neutral-100"
              onClick={() => setOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link
              href="/#use-cases"
              className="py-3 text-sm text-neutral-700 border-b border-neutral-100"
              onClick={() => setOpen(false)}
            >
              Cas d&apos;usage
            </Link>
            <Link
              href="/exemples"
              className="py-3 text-sm text-neutral-700 border-b border-neutral-100"
              onClick={() => setOpen(false)}
            >
              Exemples
            </Link>
            <Link
              href="/blog"
              className="py-3 text-sm text-neutral-700 border-b border-neutral-100"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#pricing"
              className="py-3 text-sm text-neutral-700 border-b border-neutral-100"
              onClick={() => setOpen(false)}
            >
              Tarifs
            </Link>
            <div className="flex gap-3 mt-4">
              <Link href="/login" className="flex-1" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full">
                  Connexion
                </Button>
              </Link>
              <Link href="/register" className="flex-1" onClick={() => setOpen(false)}>
                <Button className="w-full">Essai gratuit</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
