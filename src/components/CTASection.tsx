import { CheckCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  const benefits = [
    "Cadastro gratuito e sem burocracia",
    "Suporte completo para iniciantes",
    "Material de divulgação digital incluso"
  ];

  return (
    <section
      className="py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(135deg, #FF6D00 0%, #E5004B 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-white mb-6 font-[Montserrat] font-medium">
            Pronto para multiplicar sua renda?
          </h2>
          <p className="text-lg lg:text-xl text-white opacity-95 max-w-3xl mx-auto font-[Montserrat]">
            Junte-se a milhares de Consultores que já estão
            faturando mais com Natura e Avon. Cadastro rápido,
            sem mensalidade e lucro imediato.
          </p>
        </div>

        {/* White Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Benefits List */}
            <div className="flex-1 space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F9C74F] flex items-center justify-center">
                    <CheckCircle
                      className="w-5 h-5 text-[#E5004B]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-black font-[Montserrat] text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button + Info */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-[#F9C74F] text-gray-900 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 font-[Montserrat] font-medium text-lg whitespace-nowrap"
              >
                Comece a ganhar agora
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-3 text-white text-sm font-[Montserrat]">
                <span className="text-gray-700">
                  ✓ Sem taxa de adesão
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700">
                  ✓ Cadastro rápido
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}