import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl text-emerald-600">Consultor em Movimento</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Depoimentos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left px-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left px-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left px-2"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-left px-2"
              >
                Depoimentos
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-emerald-600 hover:bg-emerald-700 w-full"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}