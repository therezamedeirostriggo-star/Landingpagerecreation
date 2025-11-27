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
import { AdminPanel } from "./components/AdminPanel";
import { useState, useEffect } from "react";

export default function App() {
  // Detectar se está na rota /admin
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      setIsAdminRoute(window.location.pathname === '/admin');
    };
    
    checkRoute();
    window.addEventListener('popstate', checkRoute);
    
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  // Se estiver na rota /admin, mostrar apenas o painel
  if (isAdminRoute) {
    return (
      <>
        <AdminPanel />
        <Toaster />
      </>
    );
  }

  // Caso contrário, mostrar a landing page normal
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