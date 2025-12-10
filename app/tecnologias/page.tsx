export default function TecnologiasPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Tecnologias</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            Tecnologia 1 — Filtração Estéril + Isoladores (Placeholder)
          </h3>
          <p className="text-sm text-gray-700">
            Destaque para sistemas de filtração estéril, isoladores e fluxo
            laminar para garantir assepsia e qualidade microbiológica.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            Tecnologia 2 — Automação de Enchimento e Inspeção (Placeholder)
          </h3>
          <p className="text-sm text-gray-700">
            Realçar automação em linhas de enchimento, selagem e inspeção
            visual/máquina-learning para consistência e rastreabilidade.
          </p>
        </div>
        <div className="rounded-lg border p-4 md:col-span-2">
          <h3 className="font-semibold">
            Parcerias & Subcontratações (Placeholder)
          </h3>
          <p className="text-sm text-gray-700">
            Convite a colaborações com fornecedores de equipamentos,
            laboratórios de validação, logística e serviços regulatórios.
          </p>
        </div>
      </div>
    </section>
  );
}
