"use client"

import { motion } from "framer-motion"
import { services } from "@/lib/data"
import { CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Services</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Specialized expertise honed over 5+ years to help your business grow, scale, and succeed in the digital
          landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl p-8 md:p-10 card-3d border border-slate-100 flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-xl shadow-slate-900/20 group-hover:scale-110 transition-transform duration-300">
              0{index + 1}
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <h3 className="font-serif text-2xl font-bold text-slate-900">{service.title}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100 w-fit">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  {service.exp} Experience
                </span>
              </div>

              <p className="text-slate-500 leading-relaxed max-w-2xl">{service.description}</p>
            </div>

            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-colors">
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Designing", "Content Strategy", "Analytics", "Brand Identity"].map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="bg-slate-50 rounded-xl p-4 text-center font-medium text-slate-600 border border-slate-100"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
