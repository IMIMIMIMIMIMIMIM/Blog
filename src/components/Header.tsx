"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed z-30 bg-[#1c1c1c] text-white">
      <nav className="flex relative h-20 bg-[#1c1c1c] items-center justify-between p-6 z-30">
        <div className="flex items-center h-20">
          <Link
            href="/"
            className="flex text-3xl font-continuous hover:text-gray-300 align-middle"
          >
            HI! IM
          </Link>
        </div>
        <ul className="hidden items-center md:flex space-x-8 text-lg">
          <li>
            <Link href="/im" className="hover:text-gray-300">
              I&apos;M
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/IMIMIMIMIMIMIMIM"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12a12.01 12.01 0 008.205 11.385c.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.237 1.838 1.237 1.07 1.834 2.805 1.304 3.49.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.304-.535-1.528.116-3.183 0 0 1.008-.322 3.3 1.23a11.54 11.54 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.655.242 2.879.118 3.183.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.922.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.218.694.825.576A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
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

      <div
        className={`fixed md:hidden left-0 right-0 top-20 bg-[#1c1c1c] px-6 py-4 space-y-4 text-lg z-20 text-center border-y border-white
    transform transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        <Link
          href="/im"
          className="block border-b border-white px-2 pb-4"
          onClick={() => setMenuOpen(false)}
        >
          I'm
        </Link>
        <Link
          href="https://github.com/IMIMIMIMIMIMIMIM"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12a12.01 12.01 0 008.205 11.385c.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.237 1.838 1.237 1.07 1.834 2.805 1.304 3.49.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.304-.535-1.528.116-3.183 0 0 1.008-.322 3.3 1.23a11.54 11.54 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.655.242 2.879.118 3.183.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.922.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.218.694.825.576A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-10 md:hidden"
        ></div>
      )}
    </header>
  );
}
