const features = [
  {
    icon: '🌍',
    title: 'Conformidade europeia',
    description: 'A UE exige rastreabilidade total do café importado. O RastaCafe garante que sua produção esteja sempre em conformidade com as normas europeias.',
  },
  {
    icon: '📱',
    title: 'Registro no campo',
    description: 'Interface simples para registrar cada etapa diretamente do celular, sem papel e sem burocracia — mesmo sem conexão à internet.',
  },
  {
    icon: '📊',
    title: 'Dados que fazem sentido',
    description: 'Transforme os registros em informações reais sobre rendimento, perdas e qualidade. Tome decisões melhores com base nos dados da sua própria fazenda.',
  },
  {
    icon: '🔍',
    title: 'Histórico completo por lote',
    description: 'Acesse o histórico de qualquer lote em segundos. Da colheita à venda, tudo rastreado e disponível para compradores e certificadoras.',
  },
  {
    icon: '📄',
    title: 'Relatórios prontos para exportação',
    description: 'Gere documentos formatados para atender às exigências de compradores europeus e certificações de qualidade como UTZ, Rainforest e 4C.',
  },
  {
    icon: '💰',
    title: 'Valorize seu café',
    description: 'Transparência gera confiança. Mostre ao comprador a história do seu café e conquiste melhores preços no mercado internacional.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-rasta-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rasta-dark mb-4">
            Por que usar o RastaCafe?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A rastreabilidade já é obrigatória. Faça dela uma ferramenta que trabalha para você.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-rasta-dark mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
