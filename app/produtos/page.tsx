export default function ProdutosPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Produtos</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            Solução de Cloreto de Sódio 0,9% (Placeholder)
          </h3>
          <p className="text-sm text-gray-700">
            Justificativa estratégica: produto essencial, alto volume de
            utilização, base para múltiplas terapias, facilita entrada em
            mercados hospitalares.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            Solução de Ringer Lactato (Placeholder)
          </h3>
          <p className="text-sm text-gray-700">
            Justificativa estratégica: complementaridade clínica, diferenciação
            por qualidade/estabilidade, sinergia operacional com linhas de
            produção existentes.
          </p>
        </div>
        <div className="rounded-lg border p-4 md:col-span-2">
          <h3 className="font-semibold">Discussão Estratégica (Placeholder)</h3>
          <p className="text-sm text-gray-700">
            Explicar por que escolheram esses dois produtos do ponto de vista
            estratégico: demanda, margens, certificações, logística,
            posicionamento competitivo.
          </p>
        </div>
      </div>
    </section>
  );
}
