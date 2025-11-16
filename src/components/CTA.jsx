import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-28 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h3 className="text-center text-3xl font-extrabold tracking-tight">Deploy intelligence at the edge</h3>
          <p className="mt-3 text-center text-cyan-100/80">Ship agents that learn in production. Start with a design sprint — we respond in under 24 hours.</p>

          <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required placeholder="Your name" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-500/60" />
            <input required type="email" placeholder="Work email" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-500/60" />
            <input placeholder="Company / Team" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-500/60 sm:col-span-2" />
            <textarea rows="4" placeholder="What are you building?" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-500/60 sm:col-span-2" />
            <button className="sm:col-span-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.45)] transition-shadow">Request access</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
