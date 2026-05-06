export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(/IMG_20230512_135624.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-rasta-dark/75" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img
          src="/Rasta-Lion-Logo.png"
          alt="RastaCafe"
          className="h-28 w-auto mx-auto mb-6"
        />
        <span className="inline-block bg-rasta-gold/20 text-rasta-gold text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide border border-rasta-gold/30">
          Rastreabilidade do café
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Da colheita ao saco,{' '}
          <span className="text-rasta-gold">cada etapa registrada</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          A União Europeia exige rastreabilidade total do café importado.
          Transforme essa obrigação em vantagem: registre sua produção de forma
          simples e tenha dados reais para melhorar sua fazenda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="bg-rasta-gold text-rasta-dark px-8 py-4 rounded-xl text-base font-semibold hover:bg-rasta-gold-light transition-colors shadow-lg"
          >
            Comece agora
          </a>
          <a
            href="#process"
            className="bg-white/10 text-white px-8 py-4 rounded-xl text-base font-semibold border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Como funciona
          </a>
        </div>
      </div>
    </section>
  )
}
