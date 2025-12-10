import InfoCard from "../../components/InfoCard";

export default function SobreNosPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Sobre nós</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard
          title="Missão (Placeholder)"
          description="Descrever a missão da empresa focada em segurança, eficácia e acesso aos produtos de perfusão intravenosa."
          icon="/icons/missao.png"
        />
        <InfoCard
          title="Valores (Placeholder)"
          description="Valores como qualidade, ética, conformidade regulatória, inovação e colaboração com hospitais e parceiros."
          icon="/icons/valores.png"
        />
      </div>
    </section>
  );
}
