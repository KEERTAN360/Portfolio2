import Link from "next/link"
import { Mail, Linkedin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl font-bold text-slate-900">Keertan Vijay</h3>
          <p className="text-slate-500 text-sm mt-1">Marketing Freelancer & Consultant</p>
          <div className="flex flex-col gap-1 mt-4 text-sm text-slate-500">
            <a href="mailto:keertan.vijay@gmail.com" className="hover:text-slate-900 transition-colors">
              keertan.vijay@gmail.com
            </a>
            <a href="tel:+918310377633" className="hover:text-slate-900 transition-colors">
              +91 8310377633
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:keertan.vijay@gmail.com"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/keertan-vijay-kumar-276487264/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="tel:+918310377633"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-600 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="sr-only">Phone</span>
            <Phone className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Keertan Vijay. All rights reserved.</p>
      </div>
    </footer>
  )
}
