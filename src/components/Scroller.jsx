import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Scroller() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <section ref={ref} className="relative overflow-hidden bg-black py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.h3 style={{ opacity }} className="text-3xl font-bold text-white tracking-tight">
          Signal flows
        </motion.h3>
        <motion.p style={{ opacity }} className="mt-2 max-w-2xl text-cyan-100/80">
          Data streams, model telemetry and agent messages traverse the fabric in real time. Scroll to route the flux.
        </motion.p>

        <div className="relative mt-12 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 overflow-hidden">
          <motion.div style={{ x }} className="absolute inset-y-0 left-0 flex items-center gap-6">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}
