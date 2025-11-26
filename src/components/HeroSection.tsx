import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HeaderNatura } from "./HeaderNatura";
import { BrandBadges } from "./BrandBadges";
import heroImage from "figma:asset/4fbcdd4dba4d0d30e91ccb397b3cd32653c65a57.png";

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: '85vh' }}>
      {/* Header */}
      <HeaderNatura />
      
      {/* Background Image com Blur */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Consultor em Movimento"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center center'
          }}
        />
      </div>

      {/* Gradient Overlay - Forte para Contraste */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.25) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 lg:px-[120px] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[580px]">
            {/* Título */}
            <h1 
              className="text-white mb-3 font-[Montserrat]"
              style={{
                fontSize: 'clamp(32px, 6vw, 60px)',
                fontWeight: '700',
                lineHeight: '1.15',
                letterSpacing: '-0.5px'
              }}
            >
              Turbine seu lucro<br />por KM rodado
            </h1>

            {/* Subtítulo */}
            <h2 
              className="text-white mb-4 font-[Montserrat]"
              style={{
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: '600',
                lineHeight: '1.3'
              }}
            >
              Renda extra com Natura e Avon sem atrapalhar suas corridas
            </h2>

            {/* Frase Explicativa - Mais curta */}
            <p 
              className="text-white mb-6 font-[Montserrat]"
              style={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.5',
                color: 'rgba(255, 255, 255, 0.95)'
              }}
            >
              Use seus trajetos para lucrar mais com vendas digitais ou pronta entrega.
            </p>

            {/* CTA Principal - Sólido e Destacado */}
            <a 
              href="#formulario" 
              className="inline-block w-full lg:w-auto text-white px-10 text-center font-[Montserrat] hover:opacity-90 transition-all duration-300 hover:scale-[1.02] mb-5"
              style={{
                paddingTop: '16px',
                paddingBottom: '16px',
                fontSize: '17px',
                fontWeight: '700',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #FF6D00 0%, #E5004B 100%)',
                boxShadow: '0 6px 20px rgba(234, 29, 44, 0.35)'
              }}
              aria-label="Participar do programa Consultor em Movimento"
            >
              Quero participar
            </a>

            {/* Badges - Melhor Contraste */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div 
                className="inline-flex items-center justify-center px-4 text-white font-[Montserrat]"
                style={{
                  height: '42px',
                  fontSize: '14px',
                  fontWeight: '700',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                Lucro imediato
              </div>
              <div 
                className="inline-flex items-center justify-center px-4 text-white font-[Montserrat]"
                style={{
                  height: '42px',
                  fontSize: '14px',
                  fontWeight: '700',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                Margens até 40%
              </div>
              <div 
                className="inline-flex items-center justify-center px-4 text-white font-[Montserrat]"
                style={{
                  height: '42px',
                  fontSize: '14px',
                  fontWeight: '700',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                A partir de R$150
              </div>
            </div>

            {/* Selo de Confiança - Natura & Avon */}
            <BrandBadges />
          </div>
        </div>
      </div>
    </section>
  );
}