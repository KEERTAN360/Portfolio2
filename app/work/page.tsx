"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { companies } from "@/lib/data"

export default function WorkPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Selected Work</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          A collection of partnerships where we achieved significant growth through strategic marketing and digital
          transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white rounded-2xl p-8 card-3d border border-slate-100"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-50 p-2 border border-slate-100">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">
                {company.work.split(",")[0]}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {company.name}
            </h3>

            <p className="text-slate-500 mb-6 text-sm leading-relaxed">{company.description}</p>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Role</p>
                <p className="text-slate-700 text-sm font-medium">{company.work}</p>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Achievement</p>
                <p className="text-blue-900 text-sm font-medium">{company.achievement}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-400 font-medium">+ 15 more companies partnered with</p>
      </div>
    </div>
  )
}
