import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Check, Circle, X } from "lucide-react";

// Credenciais do Supabase (inline para funcionar em HTML exportado)
const SUPABASE_PROJECT_ID = "cgpflsuxtequrtpmgtfw";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncGZsc3V4dGVxdXJ0cG1ndGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzY3MDEsImV4cCI6MjA3OTc1MjcwMX0.ZhMam9EuPbuM9qCc5EGBo9AHwUcphzVIgUUeIXzgLTQ";

// Componente RadioCard para seleção única
interface RadioCardProps {
  id: string;
  value: string;
  label: string;
  selected: boolean;
  onChange: () => void;
}

function RadioCard({ id, value, label, selected, onChange }: RadioCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Prevenir propagação dupla
    e.preventDefault();
    console.log('🔘 RadioCard clicado:', { id, value, selected });
    onChange();
  };

  return (
    <label
      htmlFor={id}
      className={`
        flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all min-h-[44px]
        ${selected 
          ? 'border-2 border-[#E05A3B] bg-white shadow-sm' 
          : 'border border-[#D7D2CC] bg-white hover:border-[#B0A79F]'
        }
        focus-within:outline-none focus-within:ring-2 focus-within:ring-[#E05A3B] focus-within:ring-offset-2
      `}
      onClick={handleClick}
    >
      <input
        type="radio"
        id={id}
        value={value}
        checked={selected}
        onChange={onChange}
        onClick={(e) => e.stopPropagation()}
        className="sr-only"
        aria-label={label}
      />
      <div className="flex-shrink-0">
        {selected ? (
          <div className="w-5 h-5 rounded-full bg-[#E05A3B] flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-[#D7D2CC]" />
        )}
      </div>
      <span className={`text-[#333333] ${selected ? 'font-semibold' : 'font-normal'}`}>
        {label}
      </span>
    </label>
  );
}

// Componente CheckboxCard para múltipla seleção
interface CheckboxCardProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function CheckboxCard({ id, label, checked, onChange }: CheckboxCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Prevenir propagação dupla
    e.preventDefault();
    console.log('☑️ CheckboxCard clicado:', { id, checked, newValue: !checked });
    onChange(!checked);
  };

  return (
    <label
      htmlFor={id}
      className={`
        flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all min-h-[44px]
        ${checked 
          ? 'border-2 border-[#E05A3B] bg-white shadow-sm' 
          : 'border border-[#D7D2CC] bg-white hover:border-[#B0A79F]'
        }
        focus-within:outline-none focus-within:ring-2 focus-within:ring-[#E05A3B] focus-within:ring-offset-2
      `}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        onClick={(e) => e.stopPropagation()}
        className="sr-only"
        aria-label={label}
      />
      <div className="flex-shrink-0 mt-0.5">
        {checked ? (
          <div className="w-5 h-5 rounded bg-[#E05A3B] flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </div>
        ) : (
          <div className="w-5 h-5 rounded border-2 border-[#D7D2CC]" />
        )}
      </div>
      <span className={`text-sm leading-relaxed text-[#333333] ${checked ? 'font-semibold' : 'font-normal'}`}>
        {label}
      </span>
    </label>
  );
}

export function FormularioSection() {
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    tempoMotorista: "",
    horasDia: "",
    conheceNatura: "",
    formaVenda: "",
    whatsapp: "",
    email: "",
    autorizacaoDados: false
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🔍 Iniciando envio do formulário...', formData);
    
    // Validar todos os campos obrigatórios
    if (!formData.nome || !formData.cidade || !formData.whatsapp || !formData.email) {
      console.error('❌ Campos obrigatórios ausentes:', {
        nome: !!formData.nome,
        cidade: !!formData.cidade,
        whatsapp: !!formData.whatsapp,
        email: !!formData.email
      });
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    if (!formData.tempoMotorista) {
      toast.error("Por favor, selecione há quanto tempo dirige como motorista de app.");
      return;
    }
    
    if (!formData.horasDia) {
      toast.error("Por favor, selecione quantas horas por dia costuma trabalhar.");
      return;
    }
    
    if (!formData.conheceNatura) {
      toast.error("Por favor, selecione se já ouviu falar ou foi Consultor Natura.");
      return;
    }
    
    if (!formData.formaVenda) {
      toast.error("Por favor, selecione como prefere vender.");
      return;
    }
    
    if (!formData.autorizacaoDados) {
      toast.error("Por favor, autorize o uso dos seus dados para continuar.");
      return;
    }
    
    // Enviar dados ao servidor
    setIsSubmitting(true);
    
    try {
      const url = `https://${SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-b907af3a/cadastro`;
      console.log('📡 Enviando para:', url);
      console.log('📦 Dados:', formData);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData)
      });
      
      console.log('📬 Resposta recebida:', response.status, response.statusText);
      
      const result = await response.json();
      console.log('📄 Resultado:', result);
      
      if (!response.ok) {
        console.error('❌ Erro ao enviar cadastro:', result);
        toast.error(result.error || "Erro ao processar cadastro. Tente novamente.");
        setIsSubmitting(false);
        return;
      }
      
      console.log('✅ Cadastro enviado com sucesso!', result);
      setShowSuccessModal(true);
      
      // Limpar formulário após sucesso
      setFormData({
        nome: "",
        cidade: "",
        tempoMotorista: "",
        horasDia: "",
        conheceNatura: "",
        formaVenda: "",
        whatsapp: "",
        email: "",
        autorizacaoDados: false
      });
      
    } catch (error) {
      console.error('❌ Erro ao enviar cadastro:', error);
      console.error('❌ Detalhes do erro:', {
        message: error instanceof Error ? error.message : 'Erro desconhecido',
        stack: error instanceof Error ? error.stack : undefined
      });
      toast.error("Erro ao conectar com o servidor. Verifique sua conexão e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="formulario" className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Cadastre-se para participar
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl p-8 lg:p-10 shadow-sm border border-pink-100" style={{ background: 'linear-gradient(to bottom right, rgba(255, 109, 0, 0.1), rgba(229, 0, 75, 0.1))' }}>
            <div className="space-y-6">
              {/* Nome e Cidade */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    placeholder="Sua cidade"
                    value={formData.cidade}
                    onChange={(e) => setFormData(prev => ({ ...prev, cidade: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp (com DDD)</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setFormData(prev => ({ ...prev, whatsapp: value }));
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              {/* Há quanto tempo dirige */}
              <div className="space-y-3">
                <Label className="block mb-2">Há quanto tempo dirige como motorista de app?</Label>
                <div className="space-y-2">
                  <RadioCard
                    id="menos-6-meses"
                    value="menos-6-meses"
                    label="Menos de 6 meses"
                    selected={formData.tempoMotorista === "menos-6-meses"}
                    onChange={() => setFormData(prev => ({ ...prev, tempoMotorista: "menos-6-meses" }))}
                  />
                  <RadioCard
                    id="6-12-meses"
                    value="6-12-meses"
                    label="6 meses a 1 ano"
                    selected={formData.tempoMotorista === "6-12-meses"}
                    onChange={() => setFormData(prev => ({ ...prev, tempoMotorista: "6-12-meses" }))}
                  />
                  <RadioCard
                    id="1-3-anos"
                    value="1-3-anos"
                    label="1 a 3 anos"
                    selected={formData.tempoMotorista === "1-3-anos"}
                    onChange={() => setFormData(prev => ({ ...prev, tempoMotorista: "1-3-anos" }))}
                  />
                  <RadioCard
                    id="mais-3-anos"
                    value="mais-3-anos"
                    label="Mais de 3 anos"
                    selected={formData.tempoMotorista === "mais-3-anos"}
                    onChange={() => setFormData(prev => ({ ...prev, tempoMotorista: "mais-3-anos" }))}
                  />
                </div>
              </div>

              {/* Quantas horas por dia */}
              <div className="space-y-3">
                <Label className="block mb-2">Quantas horas por dia costuma trabalhar?</Label>
                <div className="space-y-2">
                  <RadioCard
                    id="ate-4-horas"
                    value="ate-4-horas"
                    label="Até 4 horas"
                    selected={formData.horasDia === "ate-4-horas"}
                    onChange={() => setFormData(prev => ({ ...prev, horasDia: "ate-4-horas" }))}
                  />
                  <RadioCard
                    id="4-8-horas"
                    value="4-8-horas"
                    label="4 a 8 horas"
                    selected={formData.horasDia === "4-8-horas"}
                    onChange={() => setFormData(prev => ({ ...prev, horasDia: "4-8-horas" }))}
                  />
                  <RadioCard
                    id="mais-8-horas"
                    value="mais-8-horas"
                    label="Mais de 8 horas"
                    selected={formData.horasDia === "mais-8-horas"}
                    onChange={() => setFormData(prev => ({ ...prev, horasDia: "mais-8-horas" }))}
                  />
                </div>
              </div>

              {/* Já ouviu falar ou foi Consultora Natura */}
              <div className="space-y-3">
                <Label className="block mb-2">Já ouviu falar ou já foi Consultor Natura?</Label>
                <div className="space-y-2">
                  <RadioCard
                    id="sim-consultora"
                    value="sim-consultora"
                    label="Sim, já fui Consultor"
                    selected={formData.conheceNatura === "sim-consultora"}
                    onChange={() => setFormData(prev => ({ ...prev, conheceNatura: "sim-consultora" }))}
                  />
                  <RadioCard
                    id="sim-ouviu"
                    value="sim-ouviu"
                    label="Sim, já ouvi falar"
                    selected={formData.conheceNatura === "sim-ouviu"}
                    onChange={() => setFormData(prev => ({ ...prev, conheceNatura: "sim-ouviu" }))}
                  />
                  <RadioCard
                    id="nao"
                    value="nao"
                    label="Não"
                    selected={formData.conheceNatura === "nao"}
                    onChange={() => setFormData(prev => ({ ...prev, conheceNatura: "nao" }))}
                  />
                </div>
              </div>

              {/* Como prefere vender */}
              <div className="space-y-3">
                <Label className="block mb-2">Como prefere vender?</Label>
                <div className="space-y-2">
                  <RadioCard
                    id="qr-code"
                    value="qr-code"
                    label="Pelo QR code (digital)"
                    selected={formData.formaVenda === "qr-code"}
                    onChange={() => setFormData(prev => ({ ...prev, formaVenda: "qr-code" }))}
                  />
                  <RadioCard
                    id="produtos-carro"
                    value="produtos-carro"
                    label="Com produtos no carro (presencial)"
                    selected={formData.formaVenda === "produtos-carro"}
                    onChange={() => setFormData(prev => ({ ...prev, formaVenda: "produtos-carro" }))}
                  />
                  <RadioCard
                    id="duas-formas"
                    value="duas-formas"
                    label="Das duas formas"
                    selected={formData.formaVenda === "duas-formas"}
                    onChange={() => setFormData(prev => ({ ...prev, formaVenda: "duas-formas" }))}
                  />
                </div>
              </div>

              {/* Autorização de dados (opcional) */}
              <div className="space-y-3 pt-4 border-t border-pink-200">
                <CheckboxCard
                  id="autorizacao"
                  label="Autorizo o uso dos meus dados apenas para fins de pesquisa e convite para teste do piloto Consultor em Movimento."
                  checked={formData.autorizacaoDados}
                  onChange={(checked) => setFormData(prev => ({ ...prev, autorizacaoDados: checked }))}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full text-white py-6 rounded-full text-lg"
                style={{
                  background: 'linear-gradient(to right, #FF6D00, #E5004B)'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Quero participar'}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div 
            className="relative rounded-[16px] max-w-md w-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div aria-hidden="true" className="absolute border border-pink-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[16px] items-start leading-[20px] p-[40px] relative size-full text-[#4a5565]">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[16px] w-full">Agradecemos pela inscrição!</p>
                <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">{`Em breve entraremos em contato para indicar os próximos passos. `}</p>
                <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[11px] w-full">Dúvidas, entrar em contato através do e-mail thaissilva.triggo@natura.net</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}