import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-brand-700">
          Perfusão IV
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/sobre-nos" className="hover:text-brand-600">
            Sobre nós
          </Link>
          <Link href="/organizacao" className="hover:text-brand-600">
            Organização
          </Link>
          <Link href="/produtos" className="hover:text-brand-600">
            Produtos
          </Link>
          <Link href="/tecnologias" className="hover:text-brand-600">
            Tecnologias
          </Link>
          <Link href="/contatos" className="hover:text-brand-600">
            Contatos
          </Link>
        </nav>
      </div>
    </header>
  );
}
