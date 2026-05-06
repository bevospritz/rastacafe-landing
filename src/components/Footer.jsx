export default function Footer() {
  return (
    <footer className="bg-rasta-dark border-t border-rasta-green/30 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/Rasta-Lion-Logo.png" alt="RastaCafe" className="h-8 w-auto" />
          <span className="text-rasta-gold font-bold text-lg">RastaCafe</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} RastaCafe. Todos os direitos reservados.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#cta" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  )
}
