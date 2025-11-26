import svgPaths from "./svg-9r6atse88u";
import imgImageWithFallback from "figma:asset/21923a21b93acdc5f4bf0232f6d2d61a7929d13b.png";
import imgImageWithFallback1 from "figma:asset/64b727d23c12177aad40b852ab7724bc459b403d.png";
import imgImageWithFallback2 from "figma:asset/650a864fc40890bd9c1c0f9d6fbc1d1d14f8bd6c.png";
import imgImageNatura from "figma:asset/dbe42be636cd0922b06ac4887b594d9377e6c09a.png";
import imgImageAvon from "figma:asset/734b4f1d7a8c5d80f572a6c735bb9d47e6ea1119.png";
import imgImageConsultoraEmMovimento from "figma:asset/64669ea24c97e5d3b217b37988aa1b9f5b81dc5e.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[242.391px] left-[112px] top-[64px] w-[512px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[40px] left-0 text-[36px] text-black top-0 w-[481px]">Produtos que todo mundo conhece e ama</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[117px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[#5d534a] text-[18px] top-[-0.5px] w-[579px]">É mais fácil vender o que todo mundo adora. Com um cadastro único você pode revender Natura e Avon, marcas consolidadas e desejadas, conquistando clientes de todos os perfis e preferências.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[221px] items-start left-[744px] top-[74.7px] w-[584px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function ProdutosCarrossel() {
  return (
    <div className="absolute bg-white h-[370.391px] left-0 top-[687.39px] w-[1440px]" data-name="ProdutosCarrossel">
      <ImageWithFallback />
      <Container />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1088px]" data-name="Heading 2">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[40px] left-[544.45px] text-[#101828] text-[36px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Por que ser Consultor Natura e Avon</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24.375px] left-[160px] top-[56px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24.375px] left-[384.2px] text-[#364153] text-[15px] text-center text-nowrap top-[-1.5px] translate-x-[-50%] whitespace-pre">Descubra as vantagens de unir seus dois trabalhos.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[80.375px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p275e0300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3997a780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[32px] rounded-[1.67772e+07px] size-[56px] top-[32px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[104px] w-[464px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">Duas Formas de Lucrar</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[48.75px] left-[32px] top-[148px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24.375px] left-0 text-[#364153] text-[15px] top-[-1.5px] w-[433px]">Venda 100% digital (Natura/Avon faz a entrega) OU pronta entrega (pequeno estoque no carro).</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container2 />
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.pdf68c30} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[32px] rounded-[1.67772e+07px] size-[56px] top-[32px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[104px] w-[464px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">Integração Perfeita</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[48.75px] left-[32px] top-[148px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24.375px] left-0 text-[#364153] text-[15px] top-[-1.5px] w-[440px]">As vendas entram naturalmente no fluxo das corridas, sem esforço extra e sem interromper seu trabalho.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container4 />
      <Heading5 />
      <Paragraph3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 7V14L18.6667 16.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1fa66600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[32px] rounded-[1.67772e+07px] size-[56px] top-[32px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[104px] w-[464px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">Flexibilidade Total</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[48.75px] left-[32px] top-[148px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24.375px] left-0 text-[#364153] text-[15px] top-[-1.5px] w-[449px]">Venda no seu ritmo, durante as corridas, sem metas fixas ou horários obrigatórios.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:2_/_2] bg-white place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container6 />
      <Heading6 />
      <Paragraph4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 2.33333V25.6667" id="Vector" stroke="var(--stroke-0, #FF6D00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2a38c0} id="Vector_2" stroke="var(--stroke-0, #FF6D00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[32px] rounded-[1.67772e+07px] size-[56px] top-[32px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[104px] w-[464px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] left-0 text-[24px] text-nowrap text-white top-[-0.5px] whitespace-pre">Lucro Imediato</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[48.75px] left-[32px] top-[148px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24.375px] left-0 text-[15px] text-white top-[-1.5px] w-[443px]">Margens competitivas e comissões que caem direto na sua conta digital.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <Container8 />
      <Heading7 />
      <Paragraph5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[489.5px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function BelezaSection() {
  return (
    <div className="absolute bg-[#faf7f5] box-border content-stretch flex flex-col gap-[48px] h-[809.875px] items-start left-0 pb-0 pt-[96px] px-[176px] top-[1057.78px] w-[1440px]" data-name="BelezaSection">
      <Container1 />
      <Container10 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[40px] left-[607.5px] text-[#101828] text-[36px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Você vende na hora. E também vende depois.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[23.328px] left-[272px] top-[56px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[23.333px] left-[336.19px] text-[#364153] text-[15px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">Mostre, encante e venda na hora ou compartilhe o QR e finalize depois.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[79.328px] left-[112px] top-[96px] w-[1216px]" data-name="Container">
      <Heading8 />
      <Paragraph6 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p8aac400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.103 6.034H20.897" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24f06100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">Kit Loja em Movimento</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#e60076] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Pronta Entrega</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[56px] relative shrink-0 w-[282.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start relative w-[282.664px]">
        <Heading9 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[56px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21.125px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[21.125px] left-0 text-[#364153] text-[13px] text-nowrap top-[0.5px] whitespace-pre">Produtos práticos de alto giro para mostrar durante as corridas.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] h-[129.125px] items-start left-px pb-0 pt-[24px] px-[32px] top-px w-[558px]" data-name="Container">
      <Container14 />
      <Paragraph8 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[234.469px] relative rounded-[14px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[14px] size-full" src={imgImageWithFallback1} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#fff5f7] h-[282.469px] items-start left-px pb-0 pt-[24px] px-[129px] to-[#ffffff] top-[130.13px] w-[558px]" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32f37880} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_2" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14df0fc0} id="Vector_3" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 2.84668L11 6.28001" id="Vector_4" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-pink-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[186.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[186.391px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">Ideal para demonstração</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container17 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p264a0480} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 12H6" id="Vector_2" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37bb0d00} id="Vector_3" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1c171d80} id="Vector_4" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p48c6d00} id="Vector_5" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-pink-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[188.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[188.891px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">Estoque leve e compacto</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container19 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20bb0000} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-pink-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[133.477px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[133.477px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">Vendas imediatas</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container21 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 1.33333V14.6667" id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5120400} id="Vector_2" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-pink-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[244.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[244.313px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">Produtos acessíveis (até 50 reais)</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container23 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[260px] items-start left-[33px] top-[420.59px] w-[494px]" data-name="Container">
      <Container18 />
      <Container20 />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[713.594px] justify-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="h-[713.594px] overflow-clip relative rounded-[inherit] w-full">
        <Container15 />
        <Container16 />
        <Container25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe5e5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(229,0,75,0.08)]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1adf7700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 18H12.01" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">Loja Digital + QR Code</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f54900] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Venda Online</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[56px] relative shrink-0 w-[270.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start relative w-[270.828px]">
        <Heading10 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[12px] h-[56px] items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21.125px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[21.125px] left-0 text-[#364153] text-[13px] text-nowrap top-[0.5px] whitespace-pre">Complemente a venda no digital e fidelize seus clientes.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] h-[129.125px] items-start left-px pb-0 pt-[24px] px-[32px] top-px w-[558px]" data-name="Container">
      <Container29 />
      <Paragraph10 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[222.328px] relative rounded-[14px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] shrink-0 w-[300px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 rounded-[14px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border max-w-none object-50%-50% object-cover rounded-[14px] size-full" src={imgImageWithFallback2} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[222.328px] w-[300px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#fff8f0] h-[270.328px] items-center justify-center left-px to-[#ffffff] top-[130.13px] w-[558px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p10a90f00} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56e5b00} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p16b80040} id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p613b980} id="Vector_4" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14V14.0067" id="Vector_5" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa2dba80} id="Vector_6" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 8H2.00667" id="Vector_7" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2H8.00667" id="Vector_8" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V10.6733" id="Vector_9" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8H11.3333" id="Vector_10" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 8V8.00667" id="Vector_11" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14V13.3333" id="Vector_12" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-orange-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[175.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[175.508px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">QR Code personalizado</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container32 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p15efa800} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12H8.00667" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-orange-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[189.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[189.25px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">Compra rápida no celular</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container34 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-orange-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[193.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[193.906px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">Entrega pela Natura/Avon</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container36 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35993080} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-orange-50 relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[162.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[162.953px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#1e2939] text-[15px] text-nowrap top-[-1px] whitespace-pre">Comissão automática</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Container38 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[260px] items-start left-[33px] top-[408.45px] w-[494px]" data-name="Container">
      <Container33 />
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[713.594px] justify-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="h-[713.594px] overflow-clip relative rounded-[inherit] w-full">
        <Container30 />
        <Container31 />
        <Container40 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe8d6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(255,109,0,0.08)]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[713.594px] left-[144px] top-[239.33px] w-[1152px]" data-name="Container">
      <Container26 />
      <Container41 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[36px] left-[608.17px] text-[#101828] text-[30px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Como funciona</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p17847d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.62016 7.03959H24.3798" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p116a4300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[114px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[20px] left-[120.93px] top-[80px] w-[50.133px]" data-name="Container">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] left-[25.5px] text-[#6a7282] text-[14px] text-center top-[0.5px] translate-x-[-50%] w-[51px]">Passo 1</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[97.87px] top-[108px] w-[96.258px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[48.5px] text-[#101828] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Cadastre-se</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20px] left-[31.01px] top-[140px] w-[229.984px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[115px] text-[#4a5565] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Ative seu kit e gere seu QR Code.</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[292px]" data-name="Container">
      <Container43 />
      <Container44 />
      <Heading3 />
      <Paragraph11 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p2f52ca80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[290px] size-[20px] top-[32px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Container47() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p18eadc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 21H14.0117" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[114px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[20px] left-[119.5px] top-[80px] w-[53px]" data-name="Container">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] left-[26.5px] text-[#6a7282] text-[14px] text-center top-[0.5px] translate-x-[-50%] w-[53px]">Passo 2</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[24px] left-[20.26px] top-[108px] w-[251.484px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[126px] text-[#101828] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Demonstre durante as corridas</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[40px] left-0 top-[140px] w-[292px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[146.3px] text-[#4a5565] text-[14px] text-center top-[0.5px] translate-x-[-50%] w-[251px]">A oferta acontece de maneira leve e natural.</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[180px] left-0 top-0 w-[292px]" data-name="Container">
      <Container48 />
      <Container49 />
      <Heading12 />
      <Paragraph12 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p2f52ca80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[290px] size-[20px] top-[32px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container52() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p17847d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.6202 7.03959H24.3799" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p116a4300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[114px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-[119.52px] top-[80px] w-[52.969px]" data-name="Container">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] left-[26.5px] text-[#6a7282] text-[14px] text-center top-[0.5px] translate-x-[-50%] w-[53px]">Passo 3</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[24px] left-[31.41px] top-[108px] w-[229.172px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[115px] text-[#101828] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Venda no físico ou no digital</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[40px] left-0 top-[140px] w-[292px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[146.25px] text-[#4a5565] text-[14px] text-center top-[0.5px] translate-x-[-50%] w-[250px]">A cliente escolhe o jeito que prefere comprar.</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[180px] left-0 top-0 w-[292px]" data-name="Container">
      <Container53 />
      <Container54 />
      <Heading13 />
      <Paragraph13 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p2f52ca80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[290px] size-[20px] top-[32px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container57() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 2.33333V25.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2a38c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[114px] rounded-[1.67772e+07px] size-[64px] top-0" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[20px] left-[118.84px] top-[80px] w-[54.328px]" data-name="Container">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] left-[27.5px] text-[#6a7282] text-[14px] text-center top-[0.5px] translate-x-[-50%] w-[55px]">Passo 4</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[24px] left-[28px] top-[108px] w-[235.992px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[118px] text-[#101828] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Receba de forma automática</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[20px] left-[21.75px] top-[140px] w-[248.5px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[124.5px] text-[#4a5565] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Lucro imediato ou comissão digital.</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="[grid-area:1_/_4] h-[160px] justify-self-stretch relative shrink-0" data-name="Container">
      <Container58 />
      <Container59 />
      <Heading14 />
      <Paragraph14 />
    </div>
  );
}

function Container61() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[180px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container52 />
      <Container57 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[256px] items-start left-[112px] top-[1016.92px] w-[1216px]" data-name="Container">
      <Heading11 />
      <Container61 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[56px] left-[591.14px] rounded-[100px] top-[1320.92px] w-[257.719px]" data-name="Link">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[129px] text-[16px] text-center text-nowrap text-white top-[16px] translate-x-[-50%] whitespace-pre">Quero me cadastrar</p>
    </div>
  );
}

function ComeceDoSeuJeitoSection() {
  return (
    <div className="absolute bg-white h-[1472.92px] left-0 top-[1867.66px] w-[1440px]" data-name="ComeceDoSeuJeitoSection">
      <Container11 />
      <Container42 />
      <Container62 />
      <Link />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[40px] relative shrink-0 w-[425.094px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[425.094px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[40px] left-[213.5px] text-[#101828] text-[36px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Por que Natura e Avon?</p>
      </div>
    </div>
  );
}

function ImageNatura() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Image (Natura)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageNatura} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-[48px]">
        <ImageNatura />
      </div>
    </div>
  );
}

function ImageAvon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Image (Avon)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAvon} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container64() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[48px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <ImageAvon />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[48px] relative shrink-0 w-[108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-center relative w-[108px]">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Container65 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ff6d00] items-center justify-center left-0 rounded-[1.67772e+07px] size-[24px] to-[#e5004b] top-[4px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[28px] left-[40px] top-0 w-[373.875px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-nowrap top-0 whitespace-pre">Mais de 180 anos de experiência somadas</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Container67 />
      <Text8 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ff6d00] items-center justify-center left-0 rounded-[1.67772e+07px] size-[24px] to-[#e5004b] top-[4px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[28px] left-[40px] top-0 w-[340.813px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-nowrap top-0 whitespace-pre">Marcas reconhecidas em todo o Brasil</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Container68 />
      <Text9 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ff6d00] items-center justify-center left-0 rounded-[1.67772e+07px] size-[24px] to-[#e5004b] top-[4px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[28px] left-[40px] top-0 w-[393.383px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-nowrap top-0 whitespace-pre">Produtos desejados por milhões de pessoas</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Container69 />
      <Text10 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ff6d00] items-center justify-center left-0 rounded-[1.67772e+07px] size-[24px] to-[#e5004b] top-[4px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[28px] left-[40px] top-0 w-[422.508px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-nowrap top-0 whitespace-pre">Estrutura digital e logística completa para você</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Container70 />
      <Text11 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[160px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[258px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[258px] items-start pb-px pt-[49px] px-[49px] relative w-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function ParaQuemSection() {
  return (
    <div className="absolute bg-[#faf7f5] box-border content-stretch flex flex-col gap-[48px] h-[546px] items-start left-0 pb-0 pt-[96px] px-[304px] top-[3340.58px] w-[1440px]" data-name="ParaQuemSection">
      <Container66 />
      <Container71 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[1088px]" data-name="Heading 2">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[48px] left-[544.16px] text-[48px] text-center text-nowrap text-white top-[0.5px] translate-x-[-50%] whitespace-pre">Pronta para multiplicar sua renda?</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[56px] left-[160px] opacity-95 top-[72px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-[384.09px] text-[20px] text-center text-white top-[-0.5px] translate-x-[-50%] w-[757px]">Junte-se a milhares de Consultoras que já estão faturando mais com Natura e Avon. Cadastro rápido, sem mensalidade e lucro imediato.</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Paragraph15 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_274_5189)" id="Icon">
          <path d={svgPaths.p245d7180} id="Vector" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_274_5189">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#f9c74f] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[28px] relative shrink-0 w-[316.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[316.133px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black text-nowrap top-0 whitespace-pre">Cadastro gratuito e sem burocracia</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Text12 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_274_5189)" id="Icon">
          <path d={svgPaths.p245d7180} id="Vector" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_274_5189">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#f9c74f] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[298.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[298.563px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black text-nowrap top-0 whitespace-pre">Suporte completo para iniciantes</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Text13 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_274_5189)" id="Icon">
          <path d={svgPaths.p245d7180} id="Vector" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_274_5189">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#f9c74f] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon27 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[28px] relative shrink-0 w-[334.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[334.828px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black text-nowrap top-0 whitespace-pre">Material de divulgação digital incluso</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Text14 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_274_5189)" id="Icon">
          <path d={svgPaths.p245d7180} id="Vector" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #E5004B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_274_5189">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#f9c74f] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon28 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[28px] relative shrink-0 w-[261.07px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[261.07px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black text-nowrap top-0 whitespace-pre">Comece a lucrar em 24 horas</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Text15 />
    </div>
  );
}

function Container81() {
  return (
    <div className="basis-0 grow h-[176px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[176px] items-start relative w-full">
        <Container74 />
        <Container76 />
        <Container78 />
        <Container80 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[261.94px] size-[20px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f9c74f] h-[60px] relative rounded-[1.67772e+07px] shrink-0 w-[313.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] relative w-[313.938px]">
        <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] left-[32px] text-[#101828] text-[18px] text-nowrap top-[16px] whitespace-pre">Comece a ganhar agora</p>
        <Icon29 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[154.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[154.883px]">
        <p className="absolute font-['Montserrat:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">✓ Sem taxa de adesão</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[4.141px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">•</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Montserrat:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">✓ Cadastro em 2 minutos</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[20px] relative shrink-0 w-[360.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[20px] items-center relative w-[360.922px]">
        <Text16 />
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[60px] relative shrink-0 w-[361px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[60px] items-center relative w-[361px]">
        <Link1 />
        <Container82 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[176px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-white h-[274px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[274px] items-start pb-px pt-[49px] px-[49px] relative w-full">
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[654px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[654px] items-start px-[32px] py-0 relative w-full">
          <Container72 />
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[590px] items-start left-0 pb-0 pt-[64px] px-[144px] top-[3887px] w-[1440px]" data-name="CTASection">
      <Container86 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[40px] left-[352.13px] text-[#101828] text-[36px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Cadastre-se para participar</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Nome</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Seu nome completo</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Cidade</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Sua cidade</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container88() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function Container89() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">WhatsApp (com DDD)</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">(11) 99999-9999</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">E-mail (opcional)</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">seu@email.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] left-0 text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Há quanto tempo dirige como motorista de app?</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[148.414px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[148.414px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Menos de 6 meses</p>
      </div>
    </div>
  );
}

function RadioCard() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container92 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[123.977px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">6 meses a 1 ano</p>
      </div>
    </div>
  );
}

function RadioCard1() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container93 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[74.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[74.953px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">1 a 3 anos</p>
      </div>
    </div>
  );
}

function RadioCard2() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container94 />
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[117.109px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Mais de 3 anos</p>
      </div>
    </div>
  );
}

function RadioCard3() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container95 />
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[256px] items-start relative shrink-0 w-full" data-name="Container">
      <RadioCard />
      <RadioCard1 />
      <RadioCard2 />
      <RadioCard3 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[278px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <Container96 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] left-0 text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Quantas horas por dia costuma trabalhar?</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[90px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[90px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Até 4 horas</p>
      </div>
    </div>
  );
}

function RadioCard4() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container98 />
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[86.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[86.594px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">4 a 8 horas</p>
      </div>
    </div>
  );
}

function RadioCard5() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container99 />
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[123.945px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Mais de 8 horas</p>
      </div>
    </div>
  );
}

function RadioCard6() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container100 />
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[190px] items-start relative shrink-0 w-full" data-name="Container">
      <RadioCard4 />
      <RadioCard5 />
      <RadioCard6 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[212px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
      <Container101 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] left-0 text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Já ouviu falar ou já foi Consultor Natura?</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[167.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[167.664px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Sim, já fui Consultor</p>
      </div>
    </div>
  );
}

function RadioCard7() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container103 />
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[129.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[129.578px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Sim, já ouvi falar</p>
      </div>
    </div>
  );
}

function RadioCard8() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container104 />
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[32.484px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Não</p>
      </div>
    </div>
  );
}

function RadioCard9() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container105 />
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[190px] items-start relative shrink-0 w-full" data-name="Container">
      <RadioCard7 />
      <RadioCard8 />
      <RadioCard9 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[212px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel6 />
      <Container106 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] left-0 text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Como prefere vender?</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[173.492px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[173.492px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Pelo QR code (digital)</p>
      </div>
    </div>
  );
}

function RadioCard10() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container108 />
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[282.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[282.016px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Com produtos no carro (presencial)</p>
      </div>
    </div>
  );
}

function RadioCard11() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container109 />
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[20px]" />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[24px] relative shrink-0 w-[133.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[133.578px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333333] text-[16px] text-nowrap top-0 whitespace-pre">Das duas formas</p>
      </div>
    </div>
  );
}

function RadioCard12() {
  return (
    <div className="bg-white h-[58px] relative rounded-[14px] shrink-0 w-full" data-name="RadioCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[58px] items-center pl-[17px] pr-px py-px relative w-full">
          <Container110 />
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[190px] items-start relative shrink-0 w-full" data-name="Container">
      <RadioCard10 />
      <RadioCard11 />
      <RadioCard12 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[212px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Container111 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute left-[17px] rounded-[4px] size-[20px] top-[19px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[45.5px] left-[49px] top-[17px] w-[556px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#333333] text-[14px] top-[0.5px] w-[526px]">Autorizo o uso dos meus dados apenas para fins de pesquisa e convite para teste do piloto Consultora em Movimento.</p>
    </div>
  );
}

function CheckboxCard() {
  return (
    <div className="bg-white h-[79.5px] relative rounded-[14px] shrink-0 w-full" data-name="CheckboxCard">
      <div aria-hidden="true" className="absolute border border-[#d7d2cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container113 />
      <Text32 />
    </div>
  );
}

function Container114() {
  return (
    <div className="box-border content-stretch flex flex-col h-[96.5px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fccee8] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <CheckboxCard />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-r from-[#ff6d00] h-[48px] relative rounded-[1.67772e+07px] shrink-0 to-[#e5004b] w-full" data-name="Button">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[28px] left-[311.33px] text-[18px] text-center text-nowrap text-white top-[10px] translate-x-[-50%] whitespace-pre">Quero participar</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1424.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container90 />
      <Container91 />
      <Container97 />
      <Container102 />
      <Container107 />
      <Container112 />
      <Container114 />
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[1506.5px] relative rounded-[16px] shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border border-pink-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[1506.5px] items-start pb-px pt-[41px] px-[41px] relative w-full">
          <Container115 />
        </div>
      </div>
    </div>
  );
}

function FormularioSection() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[48px] h-[1786.5px] items-start left-0 pb-0 pt-[96px] px-[368px] top-[4477px] w-[1440px]" data-name="FormularioSection">
      <Heading17 />
      <Form />
    </div>
  );
}

function ImageConsultoraEmMovimento() {
  return (
    <div className="blur-sm filter h-[687.391px] relative w-[1440px]" data-name="Image (Consultora em Movimento)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageConsultoraEmMovimento} />
    </div>
  );
}

function ConsultoriadebelezaV2AOfficialPtBr() {
  return (
    <div className="h-[32px] relative shrink-0 w-[192px]" data-name="consultoriadebeleza_v2-a-official-pt-br">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 32">
        <g id="consultoriadebeleza_v2-a-official-pt-br">
          <g id="Vector">
            <path d={svgPaths.p31b0b580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1be15800} fill="var(--fill-0, white)" />
            <path d={svgPaths.pcfed400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20efd200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p367684b0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e57c500} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa32a7c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b3e1700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d769810} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22c04fc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ae80e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pcaa240} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b0b2680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2992e1c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18d4d880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p211c3d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bd2d800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d618780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p365c9280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23a6a400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23149300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1acbee00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p25585b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p155c4900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p35c31300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2aea0900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31b6d4b0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39c63780} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MainColumn() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="mainColumn">
      <ConsultoriadebelezaV2AOfficialPtBr />
    </div>
  );
}

function ButtonV3UtilsBase() {
  return (
    <div className="min-h-[40px] relative rounded-[999px] shrink-0 w-full" data-name=".button (v3) - utils - base">
      <div className="flex flex-row items-center justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center min-h-inherit px-[24px] py-0 relative w-full">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
          </div>
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5] whitespace-pre">quero participar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GayaButtonV() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0" data-name="✅  gayaButton (v3)">
      <ButtonV3UtilsBase />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="button group">
      <GayaButtonV />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1280px] min-h-px min-w-px relative shrink-0" data-name="headerContainer">
      <MainColumn />
      <ButtonGroup />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute box-border content-stretch flex inset-0 items-center justify-between overflow-clip px-[24px] py-0" data-name="header">
      <HeaderContainer />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="absolute h-[64px] left-1/2 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.14)] top-0 translate-x-[-50%] w-[1440px]" data-name="pageHeader">
      <Header />
    </div>
  );
}

function FilledGrowthplanTrophy() {
  return (
    <div className="absolute left-[269px] size-[24px] top-[559px]" data-name="filled-growthplan-trophy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="filled-growthplan-trophy">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p81ff380} fill="var(--fill-0, #EDF0FF)" fillRule="evenodd" />
            <path d={svgPaths.pa411f00} fill="var(--fill-0, #EDF0FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.55)] h-[687.391px] left-0 to-[rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Container">
      <div className="absolute flex h-[833px] items-center justify-center left-[-9px] top-[-23px] w-[1457px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[833px] relative w-[1457px]" data-name="woman-driving-city-D5ThZ68_.jpg 1">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImageConsultoraEmMovimento} />
              <div className="absolute bg-[rgba(0,0,0,0.46)] inset-0" />
            </div>
          </div>
        </div>
      </div>
      <PageHeader />
      <FilledGrowthplanTrophy />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute font-['Montserrat:Bold',sans-serif] font-bold h-[138px] leading-[69px] left-0 text-[60px] text-nowrap text-white top-0 tracking-[-0.5px] w-[580px] whitespace-pre" data-name="Heading 1">
      <p className="absolute left-0 top-0">Turbine seu lucro</p>
      <p className="absolute left-0 top-[69px]">por KM rodado</p>
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-[62.391px] left-0 top-[150px] w-[580px]" data-name="Heading 2">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[31.2px] left-0 text-[24px] text-white top-0 w-[576px]">Renda extra com Natura e Avon sem atrapalhar suas corridas</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[48px] left-0 top-[228.39px] w-[580px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.95)] top-0 w-[514px]">Use seus trajetos para lucrar mais com vendas digitais ou pronta entrega.</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[57.5px] left-0 rounded-[14px] shadow-[0px_6px_20px_0px_rgba(234,29,44,0.35)] top-[300.39px] w-[221.984px]" data-name="Link">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[25.5px] left-[111.5px] text-[17px] text-center text-nowrap text-white top-[16px] translate-x-[-50%] whitespace-pre">Quero participar</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] box-border content-stretch flex h-[42px] items-center justify-center left-0 px-[17px] py-px rounded-[999px] top-0 w-[141.453px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Lucro imediato</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] box-border content-stretch flex h-[42px] items-center justify-center left-[153.45px] px-[17px] py-px rounded-[999px] top-0 w-[156.609px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Margens até 40%</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] box-border content-stretch flex h-[42px] items-center justify-center left-[322.06px] px-[17px] py-px rounded-[999px] top-0 w-[154.18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">A partir de R$150</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[42px] left-0 top-[377.89px] w-[580px]" data-name="Container">
      <Container117 />
      <Container118 />
      <Container119 />
    </div>
  );
}

function ImageNatura1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Image (Natura)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageNatura} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[56px]" />
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-[56px]">
        <ImageNatura1 />
      </div>
    </div>
  );
}

function ImageAvon1() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[54px]" data-name="Image (Avon)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[999px]">
        <img alt="" className="absolute left-[-1.85%] max-w-none size-[103.7%] top-[-2.05%]" src={imgImageAvon} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[54px]" />
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-[#e6024d] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-[56px]">
        <ImageAvon1 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-0 w-[226.094px]" data-name="Container">
      <Container121 />
      <Container122 />
    </div>
  );
}

function Paragraph17() {
  return <div className="absolute h-[19.5px] left-0 top-[64px] w-[226.094px]" data-name="Paragraph" />;
}

function Container124() {
  return (
    <div className="absolute h-[83.5px] left-0 top-[463.89px] w-[226.094px]" data-name="Container">
      <Container123 />
      <Paragraph17 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute h-[527.391px] left-[120px] top-[80px] w-[580px]" data-name="Container">
      <Heading />
      <Heading18 />
      <Paragraph16 />
      <Link2 />
      <Container120 />
      <Container124 />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[19.5px] left-[181px] text-[13px] text-[rgba(255,255,255,0.85)] text-nowrap top-[482px] whitespace-pre">Marcas líderes em beleza no Brasil</p>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute h-[687.391px] left-0 overflow-clip top-0 w-[1440px]" data-name="HeroSection">
      <div className="absolute flex h-[687.391px] items-center justify-center left-[-1440px] top-[-687.39px] w-[1440px]">
        <div className="flex-none rotate-[180deg]">
          <ImageConsultoraEmMovimento />
        </div>
      </div>
      <Container116 />
      <Container125 />
    </div>
  );
}

function ConsultoriadebelezaV2AOfficialPtBr1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[192px]" data-name="consultoriadebeleza_v2-a-official-pt-br">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 32">
        <g id="consultoriadebeleza_v2-a-official-pt-br">
          <g id="Vector">
            <path d={svgPaths.p31b0b580} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p1be15800} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.pcfed400} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p20efd200} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p367684b0} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p1e57c500} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.pa32a7c0} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p3b3e1700} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p3d769810} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p22c04fc0} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p1ae80e00} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.pcaa240} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p3b0b2680} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p2992e1c0} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p18d4d880} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p211c3d80} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p3bd2d800} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p3d618780} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p365c9280} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p23a6a400} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p23149300} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p1acbee00} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p25585b00} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p155c4900} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p35c31300} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p2aea0900} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p31b6d4b0} fill="var(--fill-0, #111111)" />
            <path d={svgPaths.p39c63780} fill="var(--fill-0, #111111)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1280px] min-h-px min-w-px relative shrink-0">
      <ConsultoriadebelezaV2AOfficialPtBr1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="content">
      <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[16px] text-nowrap text-right tracking-[0.512px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        português - Brasil
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 z-[2]" data-name="left">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function OutlinedNavigationArrowctrlcompactbottom() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="outlined-navigation-arrowctrlcompactbottom">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="outlined-navigation-arrowctrlcompactbottom">
          <path clipRule="evenodd" d={svgPaths.p1bdc21c0} fill="var(--fill-0, #111111)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedNavigationArrowctrlcompactbottom />
    </div>
  );
}

function IconButtonV3UtilsBase() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[32px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[32px]">
          <div className="absolute inset-0 opacity-0 rounded-[999px]" data-name="surface" />
          <GayaIconV />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="✅ gayaIconButton (v3)">
      <IconButtonV3UtilsBase />
    </div>
  );
}

function Right() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center pl-0 pr-[16px] py-0 relative shrink-0 z-[1]" data-name="right">
      <GayaIconButtonV />
    </div>
  );
}

function TextFieldUtilsInput() {
  return (
    <div className="content-stretch flex isolate items-center min-h-[48px] min-w-[64px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name=".textField - utils - input">
      <Left />
      <div className="flex flex-row items-center self-stretch">
        <Right />
      </div>
    </div>
  );
}

function TextFieldUtilsBaseDefault() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[221px]" data-name=".textField - utils - base/Default">
      <TextFieldUtilsInput />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f69c00] h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between pl-[64px] pr-[48px] py-[16px] relative w-full">
          <Frame2 />
          <TextFieldUtilsBaseDefault />
        </div>
      </div>
    </div>
  );
}

function VejaTambem() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 text-[#111111]" data-name="veja também">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] tracking-[0.256px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        veja também
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] tracking-[0.448px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Guias e Manuais
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] tracking-[0.448px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Já sou Consultora
      </p>
      <a className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] tracking-[0.448px] w-full" href="https://webchat.natura.com.br/livechat?lcid=2058&source=natura-unificado" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-[1.5]">Chat Online</p>
      </a>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] tracking-[0.448px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Política de Privacidade
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="✅ typography">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#111111] text-[16px] tracking-[0.256px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        central de relacionamento
      </p>
    </div>
  );
}

function OutlinedCommunicationPhoneringing() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="outlined-communication-phoneringing">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="outlined-communication-phoneringing">
          <path d={svgPaths.p19fcbd00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p241f0c80} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p4178e00} fill="var(--fill-0, #111111)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedCommunicationPhoneringing />
    </div>
  );
}

function Typography1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="✅ typography">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] tracking-[0.224px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        0300 711 55 66
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <GayaIconV1 />
      <Typography1 />
    </div>
  );
}

function OutlinedCommunicationPhoneringing1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="outlined-communication-phoneringing">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="outlined-communication-phoneringing">
          <path d={svgPaths.p19fcbd00} fill="var(--fill-0, #111111)" id="Vector" />
          <path d={svgPaths.p241f0c80} fill="var(--fill-0, #111111)" id="Vector_2" />
          <path d={svgPaths.p4178e00} fill="var(--fill-0, #111111)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedCommunicationPhoneringing1 />
    </div>
  );
}

function Typography2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="✅ typography">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] tracking-[0.224px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        0800 011 55 66
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <GayaIconV2 />
      <Typography2 />
    </div>
  );
}

function OutlinedBrandWhatsapp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="outlined-brand-whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="outlined-brand-whatsapp">
          <path d={svgPaths.p39ec0880} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandWhatsapp />
    </div>
  );
}

function Typography3() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="✅ typography">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#111111] text-[14px] tracking-[0.224px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +55 11 93038-0000
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <GayaIconV3 />
      <Typography3 />
    </div>
  );
}

function CentralDeRelacionamento() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="central de relacionamento">
      <Typography />
      <Frame3 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="✅ typography">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#111111] text-[16px] tracking-[0.256px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        redes sociais Natura
      </p>
    </div>
  );
}

function OutlinedBrandFacebook() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="outlined-brand-facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="outlined-brand-facebook">
          <path d={svgPaths.p28dd7280} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandFacebook />
    </div>
  );
}

function IconButtonV3UtilsBase1() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV4 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV1() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.facebook.com/natura.mexico/?locale=es_LA">
      <IconButtonV3UtilsBase1 />
    </a>
  );
}

function OutlinedBrandInstagram() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="outlined-brand-instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="outlined-brand-instagram">
          <path d={svgPaths.p19a2cab0} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandInstagram />
    </div>
  );
}

function IconButtonV3UtilsBase2() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV5 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV2() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.instagram.com/natura.contigomx/?hl=es-la">
      <IconButtonV3UtilsBase2 />
    </a>
  );
}

function OutlinedBrandX() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="outlined-brand-x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="outlined-brand-x">
          <path d={svgPaths.pbd24880} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandX />
    </div>
  );
}

function IconButtonV3UtilsBase3() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV6 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV3() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://x.com/natura_mexico?lang=es&mx=2">
      <IconButtonV3UtilsBase3 />
    </a>
  );
}

function Curves() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Curves">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 19">
        <g id="Curves">
          <path d={svgPaths.p268d5680} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OutlinedBrandYoutube() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="outlined-brand-youtube">
      <Curves />
    </div>
  );
}

function GayaIconV7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandYoutube />
    </div>
  );
}

function IconButtonV3UtilsBase4() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV7 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV4() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.youtube.com/@naturamx">
      <IconButtonV3UtilsBase4 />
    </a>
  );
}

function FilledBrandLinkedIn() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="filled-brand-linkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="filled-brand-linkedIn">
          <path d={svgPaths.p3ebe0600} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <FilledBrandLinkedIn />
    </div>
  );
}

function IconButtonV3UtilsBase5() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV8 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV5() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.tiktok.com/@natura.mexico?_t=ZM-8tQ4iJfsqe5&_r=1">
      <IconButtonV3UtilsBase5 />
    </a>
  );
}

function Socials() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-start relative shrink-0 w-full" data-name="socials">
      <GayaIconButtonV1 />
      <GayaIconButtonV2 />
      <GayaIconButtonV3 />
      <GayaIconButtonV4 />
      <GayaIconButtonV5 />
    </div>
  );
}

function NaturaSocials() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="natura socials">
      <Typography4 />
      <Socials />
    </div>
  );
}

function Typography5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="✅ typography">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#111111] text-[16px] tracking-[0.256px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        redes sociais Avon
      </p>
    </div>
  );
}

function OutlinedBrandFacebook1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="outlined-brand-facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="outlined-brand-facebook">
          <path d={svgPaths.p28dd7280} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandFacebook1 />
    </div>
  );
}

function IconButtonV3UtilsBase6() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV9 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV6() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.facebook.com/MujeresAvonMX">
      <IconButtonV3UtilsBase6 />
    </a>
  );
}

function OutlinedBrandInstagram1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="outlined-brand-instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="outlined-brand-instagram">
          <path d={svgPaths.p19a2cab0} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandInstagram1 />
    </div>
  );
}

function IconButtonV3UtilsBase7() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV10 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV7() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.instagram.com/avonmexico X: https://www.twitter.com/">
      <IconButtonV3UtilsBase7 />
    </a>
  );
}

function OutlinedBrandX1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="outlined-brand-x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="outlined-brand-x">
          <path d={svgPaths.pbd24880} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandX1 />
    </div>
  );
}

function IconButtonV3UtilsBase8() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV11 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV8() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.twitter.com/">
      <IconButtonV3UtilsBase8 />
    </a>
  );
}

function Curves1() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Curves">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 19">
        <g id="Curves">
          <path d={svgPaths.p268d5680} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OutlinedBrandYoutube1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="outlined-brand-youtube">
      <Curves1 />
    </div>
  );
}

function GayaIconV12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <OutlinedBrandYoutube1 />
    </div>
  );
}

function IconButtonV3UtilsBase9() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV12 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV9() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://www.youtube.com/@avonmexico">
      <IconButtonV3UtilsBase9 />
    </a>
  );
}

function FilledBrandLinkedIn1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="filled-brand-linkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="filled-brand-linkedIn">
          <path d={svgPaths.p3ebe0600} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GayaIconV13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="✅ gayaIcon (v2)">
      <FilledBrandLinkedIn1 />
    </div>
  );
}

function IconButtonV3UtilsBase10() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name=".iconButton (v3) - utils - base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-[40px]">
          <div className="absolute inset-0 rounded-[999px]" data-name="surface" />
          <GayaIconV13 />
        </div>
      </div>
    </div>
  );
}

function GayaIconButtonV10() {
  return (
    <a className="box-border content-stretch flex gap-[10px] items-start p-0 relative shrink-0" data-name="✅ gayaIconButton (v3)" href="https://pinterest.com/avonmexico">
      <IconButtonV3UtilsBase10 />
    </a>
  );
}

function Socials1() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-start relative shrink-0 w-full" data-name="socials">
      <GayaIconButtonV6 />
      <GayaIconButtonV7 />
      <GayaIconButtonV8 />
      <GayaIconButtonV9 />
      <GayaIconButtonV10 />
    </div>
  );
}

function NaturaSocials1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="natura socials">
      <Typography5 />
      <Socials1 />
    </div>
  );
}

function FooterSocialMediaLinks() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="footer / socialMediaLinks">
      <NaturaSocials />
      <NaturaSocials1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-start max-w-[1280px] relative shrink-0 w-full">
      <VejaTambem />
      <CentralDeRelacionamento />
      <FooterSocialMediaLinks />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f69c00] relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center pb-[48px] pt-[24px] px-[64px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Typography6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="✅ typography">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#111111] text-[12px] tracking-[0.384px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`© 2025 Natura. Todos os direitos reservados. `}</p>
    </div>
  );
}

function Copyright() {
  return (
    <div className="bg-[#bf7900] relative shrink-0 w-full" data-name="copyright">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[64px] py-[16px] relative w-full">
          <Typography6 />
        </div>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[6281px] w-[1440px]" data-name="footer">
      <Frame1 />
      <Footer />
      <Copyright />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white h-[6635px] left-0 top-0 w-[1440px]" data-name="App">
      <ProdutosCarrossel />
      <BelezaSection />
      <ComeceDoSeuJeitoSection />
      <ParaQuemSection />
      <CtaSection />
      <FormularioSection />
      <HeroSection />
      <Footer1 />
    </div>
  );
}

function RadioCard13() {
  return <div className="absolute left-[425px] size-px top-[5122.08px]" data-name="RadioCard" />;
}

function RadioCard14() {
  return <div className="absolute left-[425px] size-px top-[5188.08px]" data-name="RadioCard" />;
}

function RadioCard15() {
  return <div className="absolute left-[425px] size-px top-[5254.08px]" data-name="RadioCard" />;
}

function RadioCard16() {
  return <div className="absolute left-[425px] size-px top-[5320.08px]" data-name="RadioCard" />;
}

function RadioCard17() {
  return <div className="absolute left-[425px] size-px top-[5424.08px]" data-name="RadioCard" />;
}

function RadioCard18() {
  return <div className="absolute left-[425px] size-px top-[5490.08px]" data-name="RadioCard" />;
}

function RadioCard19() {
  return <div className="absolute left-[425px] size-px top-[5556.08px]" data-name="RadioCard" />;
}

function RadioCard20() {
  return <div className="absolute left-[425px] size-px top-[5660.08px]" data-name="RadioCard" />;
}

function RadioCard21() {
  return <div className="absolute left-[425px] size-px top-[5726.08px]" data-name="RadioCard" />;
}

function RadioCard22() {
  return <div className="absolute left-[425px] size-px top-[5792.08px]" data-name="RadioCard" />;
}

function RadioCard23() {
  return <div className="absolute left-[425px] size-px top-[5896.08px]" data-name="RadioCard" />;
}

function RadioCard24() {
  return <div className="absolute left-[425px] size-px top-[5962.08px]" data-name="RadioCard" />;
}

function RadioCard25() {
  return <div className="absolute left-[425px] size-px top-[6028.08px]" data-name="RadioCard" />;
}

function CheckboxCard1() {
  return <div className="absolute left-[425px] size-px top-[6278.58px]" data-name="CheckboxCard" />;
}

export default function LandingPageRecreation() {
  return (
    <div className="bg-white relative size-full" data-name="Landing Page Recreation">
      <App />
      <RadioCard13 />
      <RadioCard14 />
      <RadioCard15 />
      <RadioCard16 />
      <RadioCard17 />
      <RadioCard18 />
      <RadioCard19 />
      <RadioCard20 />
      <RadioCard21 />
      <RadioCard22 />
      <RadioCard23 />
      <RadioCard24 />
      <RadioCard25 />
      <CheckboxCard1 />
    </div>
  );
}