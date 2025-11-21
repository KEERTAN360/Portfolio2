"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mb-12 group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-red-100 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-slate-200/50">
          <Image src="/images/profile.png" alt="Keertan Vijay" fill className="object-cover" priority />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
      >
        Honest Strategy. <br className="hidden md:block" />
        <span className="text-slate-400">Measurable Growth.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="prose prose-lg text-slate-600 mb-10 leading-relaxed"
      >
        <p>
          I'm <strong>Keertan Vijay</strong>, a strategic marketing freelancer with over 5 years of expertise in digital
          growth and business development. Having partnered with <strong>25+ diverse clients</strong>—from startups to
          established brands like <em>IGP</em> and <em>LA Technologies</em>—I specialize in crafting practical,
          high-impact marketing solutions.
        </p>
        <p>
          My approach cuts through the noise, avoiding inflated costs and empty promises to deliver honest strategy,
          flawless execution, and measurable growth that drives real results for your business.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/work"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-slate-900 text-white font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20"
        >
          View My Work
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-slate-900 border border-slate-200 font-medium transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
        >
          Let's Connect
        </Link>
      </motion.div>
    </div>
  )
}
