import { useState } from 'react'
import { Menu, X, Sparkles, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Platform', href: '#platform' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-white/5 dark:bg-black/40 border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/10">
          <div className="flex items-center justify-between py-3 px-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-purple-600/30 blur-md"
                />
                <div className="relative bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-transparent bg-clip-text">
                  <Cpu className="h-7 w-7 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
                </div>
              </div>
              <span className="font-semibold tracking-wider text-cyan-100/90 group-hover:text-white transition-colors">
                NEURA.LAB
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-cyan-100/80 hover:text-white transition-colors relative group">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 group-hover:w-full transition-all" />
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_28px_rgba(168,85,247,0.55)] transition-shadow">
                <Sparkles className="h-4 w-4" /> Start a project
              </a>
            </div>

            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-cyan-100">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden px-4 pb-4"
              >
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-cyan-100/90 hover:text-white hover:bg-white/5 transition"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white text-center">
                    Start a project
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
