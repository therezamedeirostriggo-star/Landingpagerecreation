import image_d384c33bb0ffe7966e015d027f3e02c21f3e8a3d from 'figma:asset/d384c33bb0ffe7966e015d027f3e02c21f3e8a3d.png';
import { ShoppingBag, Smartphone, DollarSign, Truck, ArrowRight, Package, Zap, CheckCircle2, QrCode, CreditCard, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lojaDigitalMockup from "figma:asset/650a864fc40890bd9c1c0f9d6fbc1d1d14f8bd6c.png";
import kitProdutosImage from "figma:asset/38f3f1b8b8e0e0d42d7cce33d1e2d6f7b9c26df3.png";
import kitNaturaImage from 'figma:asset/64b727d23c12177aad40b852ab7724bc459b403d.png';

const kitImageUrl = "https://images.unsplash.com/photo-1761864293840-cf73a186bff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0cyUyMGtpdCUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQwOTI2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function ComeceDoSeuJeitoSection() {
  const kitBenefits = [
    { icon: Package, text: "Ideal para demonstração" },
    { icon: Truck, text: "Estoque leve e compacto" },
    { icon: Zap, text: "Vendas imediatas" },
    { icon: DollarSign, text: "Produtos acessíveis (até 50 reais)" }
  ];

  const digitalBenefits = [
    { icon: QrCode, text: "QR Code personalizado" },
    { icon: Smartphone, text: "Compra rápida no celular" },
    { icon: MapPin, text: "Entrega pela Natura/Avon" },
    { icon: CreditCard, text: "Comissão automática" }
  ];

  const steps = [
    {
      icon: ShoppingBag,
      number: "1",
      title: "Cadastre-se",
      description: "Ative seu kit e gere seu QR Code."
    },
    {
      icon: Smartphone,
      number: "2",
      title: "Demonstre durante as corridas",
      description: "A oferta acontece de maneira leve e natural."
    },
    {
      icon: ShoppingBag,
      number: "3",
      title: "Venda no físico ou no digital",
      description: "A cliente escolhe o jeito que prefere comprar."
    },
    {
      icon: DollarSign,
      number: "4",
      title: "Receba de forma automática",
      description: "Lucro imediato ou comissão digital."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 font-[Montserrat] font-medium">
            Você vende na hora. E também vende depois.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-[Montserrat] text-[15px]">
            Mostre, encante e venda na hora ou compartilhe o QR e finalize depois.
          </p>
        </div>

        {/* Dois Cards Separados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
          
          {/* Card 1 - Kit Loja em Movimento */}
          <div 
            className="bg-white rounded-2xl overflow-hidden"
            style={{
              border: '1px solid #FFE5E5',
              boxShadow: '0 4px 20px rgba(229, 0, 75, 0.08)'
            }}
          >
            {/* Header do Card com Gradient Suave */}
            <div 
              className="px-6 lg:px-8 pt-6 pb-4"
              style={{
                background: 'linear-gradient(135deg, #FFF5F7 0%, #FFE5EB 100%)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B9D 0%, #E5004B 100%)'
                  }}
                >
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl text-gray-900 font-[Montserrat] font-medium">
                    Kit Loja em Movimento
                  </h3>
                  <p className="text-sm text-pink-600 font-[Montserrat] font-medium mt-1">
                    Pronta Entrega
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 font-[Montserrat] text-[13px] leading-relaxed">
                Produtos práticos de alto giro para mostrar durante as corridas.
              </p>
            </div>

            {/* Imagem */}
            <div className="px-6 lg:px-8 py-6 bg-gradient-to-b from-[#FFF5F7] to-white">
              <ImageWithFallback
                src={kitNaturaImage}
                alt="Kits de produtos Natura e Avon"
                className="w-full h-auto rounded-xl mx-auto"
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                  maxWidth: '300px',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Benefícios */}
            <div className="px-6 lg:px-8 pb-8 pt-2">
              <div className="space-y-3">
                {kitBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-pink-50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-pink-600" />
                      </div>
                      <span className="text-gray-800 font-[Montserrat] text-[15px]">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card 2 - Loja Digital + QR Code */}
          <div 
            className="bg-white rounded-2xl overflow-hidden"
            style={{
              border: '1px solid #FFE8D6',
              boxShadow: '0 4px 20px rgba(255, 109, 0, 0.08)'
            }}
          >
            {/* Header do Card com Gradient Suave */}
            <div 
              className="px-6 lg:px-8 pt-6 pb-4"
              style={{
                background: 'linear-gradient(135deg, #FFF8F0 0%, #FFE8D6 100%)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #FF8A3D 0%, #FF6D00 100%)'
                  }}
                >
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl text-gray-900 font-[Montserrat] font-medium">
                    Loja Digital + QR Code
                  </h3>
                  <p className="text-sm text-orange-600 font-[Montserrat] font-medium mt-1">
                    Venda Online
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 font-[Montserrat] leading-relaxed text-[13px]">
                Complemente a venda no digital e fidelize seus clientes.
              </p>
            </div>

            {/* Imagem */}
            <div className="px-6 lg:px-8 py-6 bg-gradient-to-b from-[#FFF8F0] to-white flex items-center justify-center">
              <ImageWithFallback
                src={lojaDigitalMockup}
                alt="Loja Digital Natura e Avon"
                className="w-full h-auto max-w-[300px] rounded-xl"
                style={{ 
                  mixBlendMode: 'multiply',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)'
                }}
                loading="lazy"
              />
            </div>

            {/* Benefícios */}
            <div className="px-6 lg:px-8 pb-8 pt-2">
              <div className="space-y-3">
                {digitalBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-orange-50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-800 font-[Montserrat] text-[15px]">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Como funciona */}
        <div className="mb-12">
          <h3 className="text-2xl lg:text-3xl text-gray-900 text-center mb-10 font-[Montserrat] font-medium">
            Como funciona
          </h3>
          
          {/* Steps - Desktop: Horizontal, Mobile: Vertical */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Ícone circular */}
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #FF6D00 0%, #E5004B 100%)'
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Número */}
                    <div className="text-sm font-[Montserrat] font-medium text-gray-500 mb-2">
                      Passo {step.number}
                    </div>
                    
                    {/* Título */}
                    <h4 className="font-[Montserrat] font-medium text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    
                    {/* Descrição */}
                    <p className="text-sm text-gray-600 font-[Montserrat]">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Seta - apenas no desktop e no no último item */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-2 transform translate-x-1/2">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#formulario"
            className="inline-block w-full lg:w-auto px-12 py-4 text-white font-[Montserrat] font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #FF6D00 0%, #E5004B 100%)',
              borderRadius: '100px'
            }}
          >
            Quero me cadastrar
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}