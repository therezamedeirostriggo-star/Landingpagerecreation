import { Shield, Lock, CheckCircle } from "lucide-react";

export function FooterSimple() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Seção de Informações de Segurança */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="w-8 h-8 text-[#FF6D00]" />
              </div>
              <h3 className="text-white mb-2">Dados Protegidos</h3>
              <p className="text-sm">Suas informações estão seguras conosco</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Lock className="w-8 h-8 text-[#E5004B]" />
              </div>
              <h3 className="text-white mb-2">Cadastro Seguro</h3>
              <p className="text-sm">Criptografia de ponta a ponta</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-[#FF6D00]" />
              </div>
              <h3 className="text-white mb-2">Empresas Certificadas</h3>
              <p className="text-sm">Parceria oficial com Natura e Avon</p>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h4 className="text-white mb-3">Sobre o Programa</h4>
            <p className="text-sm leading-relaxed">
              Conectamos motoristas de aplicativo com oportunidades de renda extra através das marcas Natura e Avon, líderes em beleza no Brasil.
            </p>
          </div>
        </div>
      </div>
      
      {/* Seção de Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4">
          <p className="text-sm">
            © {currentYear} Consultor em Movimento — Natura e Avon. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}