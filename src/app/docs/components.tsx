"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
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
        <div className="lg:col-span-3 prose max-w-full my-8 lg:my-20 prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-4xl lg:prose-h1:text-5xl prose-h2:text-3xl lg:prose-h2:text-4xl prose-h3:text-2xl lg:prose-h3:text-3xl prose-h4:text-xl lg:prose-h4:text-2xl prose-h5:text-lg lg:prose-h5:text-xl prose-h6:text-base lg:prose-h6:text-lg prose-headings:text-gray-200 prose-p:text-white prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:text-white prose-strong:text-white prose-code:text-white prose-td:text-white">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          <span className="ml-2 font-medium">Setup</span>
        </Link>
        <Link
          href="/docs/tower/binds"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
          <span className="ml-2 font-medium">XP Binds</span>
        </Link>
        <Link
          href="/docs/tower/commands"
          className="w-full lg:w-2/3 flex justify-center lg:justify-start items-center hover:text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <span className="ml-2 font-medium">Commands</span>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          <span className="ml-2 font-medium">Auto Detection</span>
        </Link>
      </section>
    </>
  );
}
