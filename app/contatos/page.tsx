export default function ContatosPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Contatos</h1>
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            Informações de Contato (Placeholder)
          </h3>
          <p className="text-sm text-gray-700">
            Email: contato@perfusaoiv.example
            <br />
            Telefone: +351 000 000 000
            <br />
            Localização: Rua Exemplo, 123 — Porto, Portugal
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            Formulário de Contacto (Placeholder)
          </h3>
          <p className="text-sm text-gray-700">
            Inserir um formulário simples para pedidos de informação, parcerias
            e subcontratações.
          </p>
        </div>
      </div>
    </section>
  );
}
