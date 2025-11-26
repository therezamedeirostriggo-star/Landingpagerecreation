import image_21923a21b93acdc5f4bf0232f6d2d61a7929d13b from 'figma:asset/21923a21b93acdc5f4bf0232f6d2d61a7929d13b.png';
import produtosImage from "figma:asset/7ab16fb15fec9a65f33ec22fad61c15b32ce1cea.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProdutosCarrossel() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem à esquerda */}
          <div className="flex justify-center lg:justify-start">
            <ImageWithFallback
              src={image_21923a21b93acdc5f4bf0232f6d2d61a7929d13b}
              alt="Produtos desejados Natura e Avon"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

          {/* Conteúdo à direita */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl text-[rgb(0,0,0)] mb-4 lg:mb-6 font-[Montserrat]">
              Produtos que todo mundo conhece e ama
            </h2>
            <p className="text-[#5D534A] lg:text-lg leading-relaxed text-[18px] font-[Montserrat]">
              É mais fácil vender o que todo mundo adora. Com um cadastro único você pode revender Natura e Avon, marcas consolidadas e desejadas, conquistando clientes de todos os perfis e preferências.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}