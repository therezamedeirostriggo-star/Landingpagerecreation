import { Check, TrendingUp, Shield, Clock, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description: "Estratégias comprovadas que geram resultados tangíveis em curto e médio prazo."
    },
    {
      icon: Shield,
      title: "Risco Minimizado",
      description: "Decisões embasadas em análises profundas e experiência de mercado."
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Processos otimizados que liberam sua equipe para focar no core business."
    },
    {
      icon: Zap,
      title: "Implementação Ágil",
      description: "Execução rápida e eficiente com acompanhamento contínuo."
    }
  ];

  const achievements = [
    "Aumento médio de 40% em produtividade",
    "Redução de até 30% em custos operacionais",
    "ROI positivo em média de 6 meses",
    "95% de taxa de retenção de clientes",
    "Metodologia testada em 200+ projetos",
    "Suporte contínuo durante todo o processo"
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-emerald-600 uppercase tracking-wider">Por Que Escolher?</span>
              <h2 className="text-4xl lg:text-5xl text-gray-900">
                Benefícios Que Fazem a Diferença
              </h2>
              <p className="text-xl text-gray-600">
                Trabalhamos com uma abordagem hands-on que garante não apenas planejamento, 
                mas execução e resultados concretos.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Achievements List */}
            <div className="bg-emerald-50 rounded-2xl p-8 space-y-4">
              <h3 className="text-xl text-gray-900">O Que Você Pode Esperar:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873269811-4e62e346b4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYzMDM0NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Estratégia de Negócios"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-2xl p-8 text-white">
              <div className="space-y-2">
                <div className="text-5xl">40%</div>
                <div className="text-lg">Crescimento Médio</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-teal-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
