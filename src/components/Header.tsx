"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 fixed z-10 bg-[#1c1c1c] text-white shadow-md">
      <nav className="flex items-center justify-between p-6">
        <Link href="/" className="text-3xl font-continuous hover:text-gray-300">
          HI! IM
        </Link>

        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed left-0 right-0 bg-[#1c1c1c] px-6 py-4 space-y-4 text-lg Z-50 text-center">
          <Link
            href="/about"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
