"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="lg:hidden flex justify-between items-center py-4">
        <Link href="/docs/" className="text-2xl font-bold">Docs</Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <div className={`lg:col-span-1 ${isMenuOpen ? 'block' : 'hidden'} lg:block fixed lg:static inset-0 bg-black lg:bg-transparent z-50 overflow-y-auto`}>
          <div className="flex justify-end p-4 lg:hidden">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <MenuItems />
        </div>
        <div className="lg:col-span-3 prose max-w-full my-8 lg:my-20 prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-4xl lg:prose-h1:text-5xl prose-h2:text-3xl lg:prose-h2:text-4xl prose-h3:text-2xl lg:prose-h3:text-3xl prose-h4:text-xl lg:prose-h4:text-2xl prose-h5:text-lg lg:prose-h5:text-xl prose-h6:text-base lg:prose-h6:text-lg prose-headings:text-gray-200 prose-p:text-white prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:text-white prose-strong:text-white prose-code:text-white">
          {children}
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <>
      <section className="flex flex-col px-4 space-y-4 items-center sm:items-start mt-8">
        <Link
          href="/docs/"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span className="ml-2 font-medium">Home</span>
        </Link>
      </section>

      <section className="flex flex-col px-4 space-y-4 items-center sm:items-start">
        <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-full lg:w-2/3 text-center lg:text-left">
          User Guide
        </span>

        <Link
          href="/docs/verification"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Verification</span>
        </Link>

        <Link
          href="/docs/backups"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Backups</span>
        </Link>

        <Link
          href="/docs/backups"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">FAQ</span>
        </Link>
      </section>

      <section className="flex flex-col px-4 space-y-4 items-center sm:items-start">
        <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-full lg:w-2/3 text-center lg:text-left">
          Server Guide
        </span>

        <Link
          href="/docs/installation"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Adding the Bot</span>
        </Link>

        <Link
          href="/docs/features"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">Feature Almanac</span>
        </Link>

        <Link
          href="/docs/api"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            ></path>
          </svg>
          <span className="ml-2 font-medium">API</span>
        </Link>
      </section>

      <section className="flex flex-col px-4 space-y-4 items-center sm:items-start">
        <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-full lg:w-2/3 text-center lg:text-left">
          Concepts
        </span>

        <Link
          href="/docs/priority"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Priority</span>
        </Link>

        <Link
          href="/docs/template"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Template</span>
        </Link>
      </section>

      <section className="flex flex-col px-4 space-y-4 items-center sm:items-start">
        <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-full lg:w-2/3 text-center lg:text-left">
          Binds
        </span>

        <Link
          href="/docs/rankbinds"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Rankbinds</span>
        </Link>

        <Link
          href="/docs/groupbinds"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Groupbinds</span>
        </Link>

        <Link
          href="/docs/custombinds"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Custombinds</span>
        </Link>

        <Link
          href="/docs/assetbinds"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Assetbinds</span>
        </Link>
      </section>

      <section className="flex flex-col px-4 space-y-4 items-center sm:items-start">
        <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-full lg:w-2/3 text-center lg:text-left">
          Tower
        </span>
        <Link
          href="/docs/tower/setup"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">Setup</span>
        </Link>
        <Link
          href="/docs/tower/permissions"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">Permissions</span>
        </Link>
        <Link
          href="/docs/tower/binds"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">XP Binds</span>
        </Link>
        <Link
          href="/docs/tower/commands"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">Commands</span>
        </Link>
        <Link
          href="/docs/tower/commands"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">Events</span>
        </Link>
      </section>

      <section className="flex flex-col px-4 space-y-4 items-center sm:items-start mb-8">
        <span className="uppercase tracking-widest text-gray-400 opacity-80 text-sm pt-6 w-full lg:w-2/3 text-center lg:text-left">
          Other
        </span>

        <Link
          href="/docs/analytics"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Analytics</span>
        </Link>

        <Link
          href="/docs/denylists"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Denylists</span>
        </Link>

        <Link
          href="/docs/events"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Events</span>
        </Link>

        <Link
          href="/docs/roles"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            ></path>
          </svg>
          <span className="ml-2 font-medium">Role Permissions</span>
        </Link>

        <Link
          href="/docs/roles"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <span className="ml-2 font-medium">Auto Detection</span>
        </Link>
      </section>
    </>
  );
}
