"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "react-aria-components";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/logo.png" alt="RoWifi" width={48} height={48} />
          <h1 className="text-2xl font-bold">RoWifi</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
          <Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex md:items-center px-4 py-3 rounded-md">
            Add to Discord
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900 py-4"
          >
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Add to Discord
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}