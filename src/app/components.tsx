"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X, Menu, Bot, Shield, Zap, BarChart, Star, RefreshCw, Server, Users, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
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
          <Link href="https://dashboard.rowifi.xyz" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240" className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex md:items-center px-4 py-3 rounded-md">
            Add to Discord
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
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

export function LandingPage() {
  const [isDiscord, setIsDiscord] = useState(true)
  const [isRoblox, setIsRoblox] = useState(true)
  const [activeFeature, setActiveFeature] = useState(0)
  
  useEffect(() => {
    const discordInterval = setInterval(() => setIsDiscord(prev => !prev), 6000)
    const robloxInterval = setInterval(() => setIsRoblox(prev => !prev), 6000)
    return () => {
      clearInterval(discordInterval)
      clearInterval(robloxInterval)
    }
  }, [])

  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Customizable Bind System",
      description: "Create and manage complex role bindings with ease, ensuring your server's hierarchy is always up-to-date with Roblox groups."
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: "Denylists",
      description: "Keep your community safe with powerful denylist functionality, automatically managing access based on Roblox user data."
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: "Backups",
      description: "Never lose your settings with our reliable backup system. Easily restore your server configuration with a single command."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Events",
      description: "Set up and manage Roblox events directly from Discord. Automate announcements, role assignments, and more for your game events."
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Ranking System",
      description: "Implement a fair and transparent ranking system for your members, syncing Roblox group ranks with Discord roles in real-time."
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "XP System",
      description: "Reward active members with a customizable XP system that integrates with both Discord activity and Roblox gameplay."
    }
  ]

  const successMetrics = [
    {
      icon: <Server className="h-16 w-16 text-blue-400" />,
      value: "100k+",
      label: "Servers",
      description: "That's more servers than obbies you've ragequit! 🏃‍♂️💨"
    },
    {
      icon: <Users className="h-16 w-16 text-blue-400" />,
      value: "4M+",
      label: "Members",
      description: "Imagine a Roblox server, but like, 40,000 times bigger! 🤯"
    },
    {
      icon: <Terminal className="h-16 w-16 text-blue-400" />,
      value: "50+",
      label: "Commands",
      description: "More powerful than your favorite admin commands! ⚡️"
    },
  ]

  return (
    

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Connecting
            <br />
            <AnimatePresence mode="wait">
              {isDiscord ? (
                <motion.span
                  key="communication"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-blue-400 inline-block"
                >
                  communication
                </motion.span>
              ) : (
                <motion.span
                  key="discord"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-blue-400 inline-block"
                >
                  Discord
                </motion.span>
              )}
            </AnimatePresence>
            <span className="mx-2">to</span>
            <AnimatePresence mode="wait">
              {isRoblox ? (
                <motion.span
                  key="imagination"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-red-500 inline-block"
                >
                  imagination
                </motion.span>
              ) : (
                <motion.span
                  key="roblox"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-red-500 inline-block"
                >
                  Roblox
                </motion.span>
              )}
            </AnimatePresence>
          </h2>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            RoWifi brings the power of Roblox to your Discord server with advanced features and customizable options.
          </p>
          <Link href="/docs" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 inline-flex items-center mx-auto rounded-md">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="features">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-center">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-1">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-all mt-1 ${activeFeature === index ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
                      }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      {feature.icon}
                      <span className="ml-2">{feature.title}</span>
                    </h4>
                  </motion.div>
                ))}
              </div>
              <div className="col-span-1 md:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-800 p-8 rounded-lg h-full flex flex-col justify-center"
                  >
                    <div className="text-blue-400 mb-4">{features[activeFeature].icon}</div>
                    <h4 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h4>
                    <p className="text-gray-300">{features[activeFeature].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-4 text-center">RoWifi by the Numbers</h3>
            <p className="text-xl text-gray-400 mb-12 text-center">Brace yourselves for some mind-blowing RoWifi stats! 🚀</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    {metric.icon}
                  </motion.div>
                  <motion.h4
                    className="text-5xl font-bold mb-2 text-blue-400"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {metric.value}
                  </motion.h4>
                  <p className="text-2xl text-gray-300 mb-2">{metric.label}</p>
                  <p className="text-sm text-gray-400">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to elevate your Roblox community?</h3>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Join thousands of Discord servers already using RoWifi to manage their Roblox integration.
          </p>
          <Link href="https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 inline-flex items-center mx-auto">
            Add RoWifi to Discord
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </main>
  )
}