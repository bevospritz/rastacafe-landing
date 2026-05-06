import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-rasta-dark/95 backdrop-blur-sm border-b border-rasta-green/30 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/Rasta-Lion-Logo.png" alt="RastaCafe" className="h-10 w-auto" />
            <span className="text-xl font-bold text-rasta-gold">RastaCafe</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-rasta-gold transition-colors text-sm font-medium">Por que usar</a>
            <a href="#process" className="text-gray-300 hover:text-rasta-gold transition-colors text-sm font-medium">Como funciona</a>
            <a href="#cta" className="bg-rasta-gold text-rasta-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-rasta-gold-light transition-colors">
              Comece agora
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-rasta-gold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 flex flex-col gap-3 border-t border-rasta-green/30">
            <a href="#features" className="text-gray-300 hover:text-rasta-gold text-sm font-medium" onClick={() => setMenuOpen(false)}>Por que usar</a>
            <a href="#process" className="text-gray-300 hover:text-rasta-gold text-sm font-medium" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#cta" className="bg-rasta-gold text-rasta-dark px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-rasta-gold-light transition-colors" onClick={() => setMenuOpen(false)}>Comece agora</a>
          </div>
        )}
      </div>
    </nav>
  )
}
