import { Target, TrendingUp, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Estratégias orientadas por dados e objetivos mensuráveis."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Contínuo",
      description: "Acompanhamento constante para garantir evolução sustentável."
    },
    {
      icon: Users,
      title: "Parceria Verdadeira",
      description: "Trabalhamos lado a lado com nossos clientes."
    },
    {
      icon: Award,
      title: "Excelência Comprovada",
      description: "Histórico de sucesso em diversos setores."
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519288417-d359ac3c494d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3NjMwNDYzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Consultoria Profissional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-100 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-emerald-600 uppercase tracking-wider">Sobre Nós</span>
              <h2 className="text-4xl lg:text-5xl text-gray-900">
                Transformamos Desafios em Oportunidades
              </h2>
              <p className="text-xl text-gray-600">
                Somos especialistas em impulsionar negócios através de consultoria estratégica 
                e personalizada. Com uma abordagem prática e orientada a resultados, ajudamos 
                empresas a alcançarem seu máximo potencial.
              </p>
              <p className="text-lg text-gray-600">
                Nossa metodologia combina análise profunda, planejamento estratégico e 
                implementação ágil, garantindo que cada projeto entregue valor real e mensurável.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((value, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
