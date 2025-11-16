import { motion } from 'framer-motion'
import { LineChart } from 'lucide-react'

function GlowCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
    >
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle,rgba(34,211,238,0.15),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </motion.div>
  )
}

export default function Showcase() {
  return (
    <section id="platform" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(12,12,14,0),rgba(56,189,248,0.1)_45%,rgba(168,85,247,0.08)_65%,transparent_80%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight"
        >
          A platform engineered for speed
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlowCard>
            <div className="flex items-center gap-3">
              <LineChart className="h-5 w-5 text-cyan-400" />
              <h3 className="font-semibold">Live metrics</h3>
            </div>
            <div className="mt-6 h-36">
              <AnimatedChart />
            </div>
          </GlowCard>

          <GlowCard delay={0.05}>
            <h3 className="font-semibold">Holographic UI</h3>
            <p className="mt-2 text-cyan-100/80 text-sm">Glass, glow and gradients. Every interaction emits energy.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 border border-white/10 shadow-[0_0_14px_rgba(34,211,238,0.25)] hover:shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-shadow" />
              ))}
            </div>
          </GlowCard>

          <GlowCard delay={0.1}>
            <h3 className="font-semibold">Interactive nodes</h3>
            <p className="mt-2 text-cyan-100/80 text-sm">Hover to pulse. Nodes connect and route load intelligently.</p>
            <div className="mt-6 grid grid-cols-6 gap-3">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full bg-cyan-400/20 border border-cyan-500/30 hover:bg-fuchsia-400/20 hover:border-fuchsia-500/40 transition-all shadow-[0_0_12px_rgba(34,211,238,0.35)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)]"
                />
              ))}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}

function AnimatedChart() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10" />
      <svg className="absolute inset-0" viewBox="0 0 300 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <AnimatedPolyline />
      </svg>
    </div>
  )
}

function AnimatedPolyline() {
  return (
    <motion.polyline
      points="0,120 20,110 40,100 60,105 80,90 100,95 120,80 140,85 160,70 180,78 200,60 220,66 240,50 260,58 280,40 300,46"
      fill="none"
      stroke="url(#g)"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
    />
  )
}
