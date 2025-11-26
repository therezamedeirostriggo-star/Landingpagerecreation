import { UserPlus, Package, TrendingUp } from "lucide-react";

export function ComoFuncionaSection() {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      title: "Faça seu cadastro",
      description: "Comece criando sua conta como Consultor em Movimento."
    },
    {
      icon: Package,
      number: "2",
      title: "Receba seus materiais",
      description: "QR Code digital e, opcionalmente, um kit leve para levar no carro."
    },
    {
      icon: TrendingUp,
      number: "3",
      title: "Comece a vender",
      description: "Você oferece. Natura e Avon cuidam do resto."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Como funciona
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to right, #FF6D00, #E5004B)' }}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl -mt-2 -mr-2">
                {step.number}
              </div>
              <h3 className="text-xl text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}