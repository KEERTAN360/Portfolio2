"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8310377633",
      href: "tel:+918310377633",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "keertan.vijay@gmail.com",
      href: "mailto:keertan.vijay@gmail.com",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/keertan-vijay-kumar-276487264/?originalSubdomain=in",
      color: "bg-sky-50 text-sky-600",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto w-full py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Connect</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Ready to grow your business with honest strategy and measurable results? I'm always open to discussing new
          projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.label === "LinkedIn" ? "_blank" : undefined}
            rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            className="group flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`p-4 rounded-full mb-6 ${method.color} group-hover:scale-110 transition-transform`}>
              <method.icon className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{method.label}</h3>
            <p className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{method.value}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
        <div className="relative z-10">
          <h2 className="font-serif text-3xl font-bold mb-6">Prefer to start with a chat?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Schedule a free consultation call to discuss your marketing goals and how we can achieve them together.
          </p>
          <Link
            href="tel:+918310377633"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg transition-transform hover:scale-105 active:scale-95"
          >
            Call Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
