import { Clock, TrendingUp, Zap, DollarSign } from "lucide-react";
import seloImage from "figma:asset/febc3a1452bd1805e009592462ccfdea95255796.png";

export function BelezaSection() {
  const cards = [
    {
      icon: DollarSign,
      title: "Lucro Imediato",
      description: "Margens competitivas e comissões que caem direto na sua conta digital.",
      gradient: true
    },
    {
      icon: TrendingUp,
      title: "Duas Formas de Lucrar",
      description: "Venda 100% digital (Natura/Avon faz a entrega) OU pronta entrega (pequeno estoque no carro)."
    },
    {
      icon: Zap,
      title: "Integração Perfeita",
      description: "As vendas entram naturalmente no fluxo das corridas, sem esforço extra e sem interromper seu trabalho."
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Venda no seu ritmo, durante as corridas, sem metas fixas ou horários obrigatórios."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 font-[Montserrat]">
            Por que ser Consultor Natura e Avon
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-[15px] font-[Montserrat]">
            Descubra as vantagens de unir seus dois trabalhos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isGradient = card.gradient;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{
                  background: isGradient ? 'linear-gradient(135deg, #FF6D00 0%, #E5004B 100%)' : 'white'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: isGradient ? 'white' : 'linear-gradient(135deg, #FF6D00 0%, #E5004B 100%)'
                  }}
                >
                  <Icon 
                    className="w-7 h-7" 
                    style={{ color: isGradient ? '#FF6D00' : 'white' }}
                  />
                </div>
                <h3 
                  className="text-xl lg:text-2xl mb-3 font-[Montserrat] font-medium"
                  style={{ color: isGradient ? 'white' : '#101828' }}
                >
                  {card.title}
                </h3>
                <p 
                  className="leading-relaxed font-[Montserrat] text-[15px]"
                  style={{ color: isGradient ? 'white' : '#364153' }}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}