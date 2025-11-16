import { motion } from 'framer-motion'
import { Brain, Radar, Network, Layers, Zap, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Brain, title: 'Neural Reasoning', desc: 'Multi‑step inference with tool‑augmented cognition and memory graphs.' },
  { icon: Radar, title: 'Realtime Perception', desc: 'Stream processors for audio, vision and events with millisecond latency.' },
  { icon: Network, title: 'Autonomous Agents', desc: 'Swarms that coordinate via protocols, incentives and shared state.' },
  { icon: Layers, title: 'Foundation Models', desc: 'Customized LLMs and vision models trained on your proprietary data.' },
  { icon: Zap, title: 'Edge Deployment', desc: 'Quantized models running on mobile, web and custom silicon.' },
  { icon: ShieldCheck, title: 'Safety & Governance', desc: 'Alignment tooling, guardrails and transparency built‑in.' },
]

export default function Features() {
  return (
    <section id="capabilities" className="relative bg-gradient-to-b from-black via-[#05060b] to-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(192,132,252,0.18),transparent_35%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight"
        >
          Systems that think, sense and act
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all group-hover:bg-fuchsia-500/10" />
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl bg-cyan-500/20 blur-xl" />
                  <Icon className="relative h-7 w-7 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-cyan-100/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
