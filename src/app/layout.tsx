import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "./components";
import Link from "next/link";

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
        <div className="min-h-screen bg-black text-white">
          <Header />
          {children}
          <footer className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Product</h4>
                  <ul className="space-y-2">
                    <li><Link href="/#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</Link></li>
                    <li><Link href="/docs/faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Support</h4>
                  <ul className="space-y-2">
                    <li><Link href="/docs" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</Link></li>
                    <li><Link href="/support" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li><Link href="/docs/tos" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                    <li><Link href="https://www.iubenda.com/privacy-policy/39859431/full-legal" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                    <li><Link href="https://www.iubenda.com/privacy-policy/39859431/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} RoWifi. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
