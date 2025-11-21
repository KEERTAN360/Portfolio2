"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <nav className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 shadow-lg shadow-slate-200/50">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-slate-900",
                    isActive ? "text-slate-900" : "text-slate-500",
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
