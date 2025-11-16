import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.15),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            Realtime AI Systems • Autonomous Agents • Reasoning Engines
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
            Build with intelligence that feels alive
          </h1>
          <p className="mt-5 text-cyan-100/80 text-lg">
            We design, train and deploy next‑generation AI that perceives, reasons and acts — turning data into compounding advantage.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-5 py-3 font-semibold shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.45)] transition-shadow">
              Engage the core
            </a>
            <a href="#capabilities" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-cyan-100/90 hover:bg-white/10">
              Explore capabilities
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
