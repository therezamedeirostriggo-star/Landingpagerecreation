import { Briefcase, LineChart, Lightbulb, Users2, Rocket, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: "Planejamento Estratégico",
      description: "Desenvolvemos estratégias customizadas alinhadas aos objetivos do seu negócio, criando um roadmap claro para o crescimento sustentável.",
      features: ["Análise de mercado", "Definição de objetivos", "Plano de ação detalhado"]
    },
    {
      icon: LineChart,
      title: "Otimização de Processos",
      description: "Identificamos gargalos e oportunidades de melhoria, implementando soluções que aumentam a eficiência operacional.",
      features: ["Mapeamento de processos", "Redução de custos", "Aumento de produtividade"]
    },
    {
      icon: Lightbulb,
      title: "Gestão de Mudanças",
      description: "Acompanhamos sua empresa em processos de transformação, garantindo transições suaves e adoção efetiva de novas práticas.",
      features: ["Change management", "Capacitação de equipes", "Monitoramento contínuo"]
    },
    {
      icon: Users2,
      title: "Desenvolvimento de Liderança",
      description: "Fortalecemos a capacidade de liderança dos seus gestores através de mentoria e programas customizados de desenvolvimento.",
      features: ["Coaching executivo", "Workshops", "Avaliação 360°"]
    },
    {
      icon: Rocket,
      title: "Aceleração de Crescimento",
      description: "Estratégias focadas em expansão de mercado, aumento de receita e desenvolvimento de novos produtos e serviços.",
      features: ["Análise de oportunidades", "Go-to-market strategy", "Scaling"]
    },
    {
      icon: BarChart3,
      title: "Análise de Performance",
      description: "Implementamos KPIs e sistemas de medição que fornecem insights acionáveis para tomada de decisão baseada em dados.",
      features: ["Dashboards executivos", "Métricas personalizadas", "Relatórios gerenciais"]
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-600 uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            Soluções Completas para o Seu Negócio
          </h2>
          <p className="text-xl text-gray-600">
            Oferecemos uma gama completa de serviços de consultoria para impulsionar 
            o crescimento e a eficiência da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <CardTitle className="text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
