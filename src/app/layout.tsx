import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MobileMenu } from "./components";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoWifi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-20 dark:bg-gray-980 dark:text-gray-20`}
      >
        <div className="flex min-h-screen flex-col items-center py-5">
          <header className="flex container items-center px-6">
            <span className="font-bold text-2xl">RoWifi</span>
            <div className="ml-auto hidden sm:flex gap-x-8">
              <MenuItems />
            </div>
            <MobileMenu className="ml-auto block sm:hidden">
              <MenuItems />
            </MobileMenu>
          </header>
          {children}
          <footer className="grid grid-cols-6 container px-6 mt-24">
            <div className="col-span-2"></div>
            <div className="flex flex-col text-gray-500 text-sm gap-y-4">
              <span className="uppercase font-bold tracking-tight text-xs">
                Product
              </span>
              <Link href="/docs">Docs</Link>
              <Link href="/docs">Pricing</Link>
            </div>
            <div className="flex flex-col text-gray-500 text-sm gap-y-4">
              <span className="uppercase font-bold tracking-tight text-xs">
                Organization
              </span>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div className="flex flex-col text-gray-500 text-sm gap-y-4">
              <span className="uppercase font-bold tracking-tight text-xs">
                Contact
              </span>
              <Link href="https://discord.gg/h4BGGyR">Discord</Link>
              <Link href="https://twitter.com/rowifibot">Twitter</Link>
              <Link href="https://github.com/RoWifi-HQ/">Github</Link>
            </div>
            <div className="flex flex-col text-gray-500 text-sm gap-y-4">
              <span className="uppercase font-bold tracking-tight text-xs">
                Legal
              </span>
              <Link href="/legal/terms-of-service">Terms of Service</Link>
              <Link href="https://www.iubenda.com/privacy-policy/39859431/full-legal">
                Privacy Policy
              </Link>
              <Link href="https://www.iubenda.com/privacy-policy/39859431/cookie-policy">
                Cookie Policy
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

function MenuItems() {
  return (
    <>
      <a href="/blog" className="text-gray-400 hover:text-gray-600">
        Blog
      </a>
      <a href="/docs" className="text-gray-400 hover:text-gray-600">
        Docs
      </a>
      <a href="/about" className="text-gray-400 hover:text-gray-600">
        About
      </a>
      <a href="/help" className="text-gray-400 hover:text-gray-600">
        Help
      </a>
      <a href="/dashboard" className="text-gray-400 hover:text-gray-600">
        Login
      </a>
    </>
  );
}
