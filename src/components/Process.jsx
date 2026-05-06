const steps = [
  {
    number: '01',
    icon: '🌿',
    title: 'Colheita',
    description: 'Registre data, lote, variedade e método de colheita diretamente no campo. Manual, derriça ou mecânica — cada detalhe documentado.',
  },
  {
    number: '02',
    icon: '💧',
    title: 'Lavagem e despolpamento',
    description: 'Controle o processo de remoção da casca e acompanhe a qualidade da água e o rendimento do despolpador.',
  },
  {
    number: '03',
    icon: '☀️',
    title: 'Secagem',
    description: 'Monitore a secagem no terreiro ou nos seccadores. Registre temperatura, umidade e tempo para atingir a qualidade ideal.',
  },
  {
    number: '04',
    icon: '🧪',
    title: 'Fermentação controlada',
    description: 'Documente tempo, temperatura e parâmetros da fermentação para padronizar e reproduzir os melhores perfis de sabor.',
  },
  {
    number: '05',
    icon: '🏠',
    title: 'Repouso na tulha',
    description: 'Acompanhe o período de repouso e as condições de armazenamento intermediário antes do beneficiamento.',
  },
  {
    number: '06',
    icon: '⚙️',
    title: 'Beneficiamento',
    description: 'Registre a remoção do pergaminho e da casca com controle de perdas, rendimento e classificação do grão.',
  },
  {
    number: '07',
    icon: '📦',
    title: 'Armazenamento e venda',
    description: 'Gerencie o estoque em sacas e registre cada venda com rastreabilidade completa, pronta para exportação.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-rasta-green">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            As etapas da rastreabilidade
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Do campo ao saco, cada momento da sua produção registrado e acessível.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200 ${
                index === steps.length - 1 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-rasta-gold font-bold text-2xl min-w-[2.5rem]">{step.number}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-green-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
