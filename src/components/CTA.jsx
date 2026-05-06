export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-rasta-dark">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Pronto para começar?
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Cadastre-se e comece a rastrear sua produção.
          A conformidade europeia nunca foi tão simples.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => { e.preventDefault(); alert('Obrigado! Entraremos em contato em breve.') }}
        >
          <input
            type="email"
            placeholder="Seu e-mail"
            required
            className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-rasta-gold bg-white"
          />
          <button
            type="submit"
            className="bg-rasta-gold text-rasta-dark px-6 py-3 rounded-xl font-semibold text-sm hover:bg-rasta-gold-light transition-colors whitespace-nowrap"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}
