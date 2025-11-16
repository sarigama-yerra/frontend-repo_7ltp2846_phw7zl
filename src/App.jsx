import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Scroller from './components/Scroller'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Scroller />
        <Showcase />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-cyan-100/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Neura.Lab — Advanced AI Systems</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
