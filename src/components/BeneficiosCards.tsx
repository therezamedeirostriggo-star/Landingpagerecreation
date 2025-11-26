import { Smartphone, BarChart3, Headphones, Award, Zap } from "lucide-react";

export function BeneficiosCards() {
  const benefits = [
    {
      icon: Award,
      title: "Autonomia total",
      description: "Você decide quando, onde e como vender."
    },
    {
      icon: Zap,
      title: "Renda no dia a dia",
      description: "Cada corrida vira uma oportunidade de conquistar novas clientes."
    },
    {
      icon: Smartphone,
      title: "Tecnologia simples que trabalha por você",
      description: "Loja digital, QR Code, pagamentos instantâneos."
    },
    {
      icon: BarChart3,
      title: "Marca forte ao seu lado",
      description: "Duas das maiores marcas de beleza do Brasil impulsionando seu negócio."
    },
    {
      icon: Headphones,
      title: "Comunidade e suporte",
      description: "Você não faz isso sozinha. Conte com materiais, treinamentos e apoio contínuo."
    }
  ];

  return (
    <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(to bottom right, #FF6D00, #E5004B)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            O que você ganha como Consultor em Movimento
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((beneficio, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <beneficio.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">{beneficio.title}</h3>
              <p className="text-white/90 leading-relaxed">{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}