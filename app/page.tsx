export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">
        Indústria Farmacêutica — Perfusão Intravenosa
      </h1>
      <p className="text-gray-700">
        Bem-vindo à nossa empresa especializada em soluções farmacêuticas para
        perfusão intravenosa. Explore os tópicos abaixo para conhecer nossa
        missão, organização, portfólio de produtos, tecnologias estratégicas e
        formas de contato.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <a
          className="rounded-lg border p-4 hover:border-brand-500"
          href="/sobre-nos"
        >
          <h3 className="font-semibold">Sobre nós</h3>
          <p className="text-sm text-gray-600">Missão e valores da empresa.</p>
        </a>
        <a
          className="rounded-lg border p-4 hover:border-brand-500"
          href="/organizacao"
        >
          <h3 className="font-semibold">Organização</h3>
          <p className="text-sm text-gray-600">
            Estrutura e inserção dos membros do grupo.
          </p>
        </a>
        <a
          className="rounded-lg border p-4 hover:border-brand-500"
          href="/produtos"
        >
          <h3 className="font-semibold">Produtos</h3>
          <p className="text-sm text-gray-600">
            Dois produtos com justificativa estratégica.
          </p>
        </a>
        <a
          className="rounded-lg border p-4 hover:border-brand-500"
          href="/tecnologias"
        >
          <h3 className="font-semibold">Tecnologias</h3>
          <p className="text-sm text-gray-600">
            Duas tecnologias estratégicas em destaque.
          </p>
        </a>
        <a
          className="rounded-lg border p-4 hover:border-brand-500"
          href="/contatos"
        >
          <h3 className="font-semibold">Contatos</h3>
          <p className="text-sm text-gray-600">
            Formas de contato e localizações.
          </p>
        </a>
      </div>
    </section>
  );
}
