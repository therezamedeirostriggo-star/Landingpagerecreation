import { Zap, Star, Smartphone, CreditCard } from "lucide-react";

export function PorqueSection() {
  const reasons = [
    {
      icon: Zap,
      title: "Renda extra sem complicação",
      description: "Mostre um produto rápido, compartilhe seu QR Code e deixe a venda acontecer naturalmente, sem interromper sua corrida."
    },
    {
      icon: Star,
      title: "Produtos desejados e fáceis de vender",
      description: "Você trabalha com hidratantes, fragrâncias e maquiagens Natura e Avon — best-sellers que todo mundo conhece e adora."
    },
    {
      icon: Smartphone,
      title: "Digital e presencial, do seu jeito",
      description: "Use o QR Code da sua loja digital ou leve um mini kit no carro. Você escolhe como quer vender."
    },
    {
      icon: CreditCard,
      title: "Você recebe seu dinheiro na hora",
      description: "Todas as suas vendas caem direto na sua conta exclusiva digital, com segurança e sem burocracia."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Por que faz sentido para você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="rounded-lg p-8 border border-pink-100" style={{ background: 'linear-gradient(to bottom right, rgba(255, 109, 0, 0.1), rgba(229, 0, 75, 0.1))' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(to right, #FF6D00, #E5004B)' }}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}