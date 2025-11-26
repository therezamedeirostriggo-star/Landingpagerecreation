import { Check } from "lucide-react";
import naturaLogo from "figma:asset/dbe42be636cd0922b06ac4887b594d9377e6c09a.png";
import avonLogo from "figma:asset/734b4f1d7a8c5d80f572a6c735bb9d47e6ea1119.png";

export function ParaQuemSection() {
  const beneficios = [
    "Mais de 180 anos de experiência somadas",
    "Marcas reconhecidas em todo o Brasil",
    "Produtos desejados por milhões de pessoas",
    "Estrutura digital e logística completa para você"
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl lg:text-4xl text-gray-900 font-[Montserrat]">
              Por que Natura e Avon?
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <img 
                  src={naturaLogo}
                  alt="Natura"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <img 
                  src={avonLogo}
                  alt="Avon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <ul className="space-y-4">
            {beneficios.map((beneficio, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'linear-gradient(to right, #FF6D00, #E5004B)' }}>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700 font-[Montserrat]">{beneficio}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}