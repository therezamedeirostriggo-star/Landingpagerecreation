import { HeroSection } from "./components/HeroSection";
import { ProdutosCarrossel } from "./components/ProdutosCarrossel";
import { BelezaSection } from "./components/BelezaSection";
import { ComeceDoSeuJeitoSection } from "./components/ComeceDoSeuJeitoSection";
import { ParaQuemSection } from "./components/ParaQuemSection";
import { BadgeDivider } from "./components/BadgeDivider";
import { CTASection } from "./components/CTASection";
import { FormularioSection } from "./components/FormularioSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProdutosCarrossel />
      <BelezaSection />
      <ComeceDoSeuJeitoSection />
      <ParaQuemSection />
      <CTASection />
      <FormularioSection />
      <BadgeDivider />
      <Footer />
      <Toaster />
    </div>
  );
}