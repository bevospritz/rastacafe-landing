export default function Certifications() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Compatível com as principais certificações internacionais
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          <img
            src="/utz.png"
            alt="Certificação UTZ"
            className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
          />
          <img
            src="/rainforest.png"
            alt="Rainforest Alliance"
            className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
          />
        </div>
      </div>
    </section>
  )
}
