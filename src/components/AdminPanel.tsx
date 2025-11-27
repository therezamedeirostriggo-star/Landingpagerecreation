import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { RefreshCw, User, Mail, Phone, MapPin, Clock, Package, LogOut, Download } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info.tsx';
import { AdminLogin } from './AdminLogin';

interface Cadastro {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  cidade: string;
  tempoMotorista: string;
  horasDia: string;
  conheceNatura: string;
  formaVenda: string;
  autorizacaoDados: boolean;
  dataCadastro: string;
  // Campos opcionais para compatibilidade
  nomeCompleto?: string;
  telefone?: string;
  estado?: string;
  profissao?: string;
  motivacao?: string;
}

const labelMap: Record<string, string> = {
  'menos-6-meses': 'Menos de 6 meses',
  '6-12-meses': '6 meses a 1 ano',
  '1-3-anos': '1 a 3 anos',
  'mais-3-anos': 'Mais de 3 anos',
  'ate-4-horas': 'Até 4 horas',
  '4-8-horas': '4 a 8 horas',
  'mais-8-horas': 'Mais de 8 horas',
  'sim-consultora': 'Sim, já fui Consultor',
  'sim-ouviu': 'Sim, já ouvi falar',
  'nao': 'Não',
  'qr-code': 'Pelo QR code (digital)',
  'produtos-carro': 'Com produtos no carro (presencial)',
  'duas-formas': 'Das duas formas'
};

export function AdminPanel() {
  const [cadastros, setCadastros] = useState<Cadastro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Verificar se está autenticado ao carregar
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const token = localStorage.getItem('admin_token');
    const expires = localStorage.getItem('admin_token_expires');

    if (!token || !expires) {
      setIsAuthenticated(false);
      setCheckingAuth(false);
      return;
    }

    // Verificar se o token ainda é válido
    if (Date.now() > parseInt(expires)) {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_token_expires');
      setIsAuthenticated(false);
      setCheckingAuth(false);
      return;
    }

    // Verificar no servidor
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b907af3a/verify-admin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ token, expires: parseInt(expires) })
        }
      );

      const result = await response.json();
      
      if (result.valid) {
        setIsAuthenticated(true);
        fetchCadastros();
      } else {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_token_expires');
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error('Erro ao verificar autenticação:', err);
      setIsAuthenticated(false);
    } finally {
      setCheckingAuth(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_token_expires');
    setIsAuthenticated(false);
    setCadastros([]);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    fetchCadastros();
  };

  const fetchCadastros = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b907af3a/cadastros`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );
      
      if (!response.ok) {
        throw new Error('Erro ao buscar cadastros');
      }
      
      const result = await response.json();
      console.log('Cadastros recebidos:', result);
      
      // Ordenar por data mais recente
      const sortedCadastros = result.cadastros.sort((a: Cadastro, b: Cadastro) => 
        new Date(b.dataCadastro).getTime() - new Date(a.dataCadastro).getTime()
      );
      
      setCadastros(sortedCadastros);
    } catch (err) {
      console.error('Erro ao buscar cadastros:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDownloadCSV = () => {
    if (cadastros.length === 0) {
      alert('Não há dados para exportar');
      return;
    }

    // Cabeçalhos do CSV
    const headers = [
      'Data/Hora',
      'Nome',
      'E-mail',
      'WhatsApp',
      'Cidade',
      'Tempo como Motorista',
      'Horas por Dia',
      'Conhece Natura',
      'Forma de Venda',
      'Autorização de Dados'
    ];

    // Converter dados para linhas CSV
    const rows = cadastros.map(cadastro => [
      formatDate(cadastro.dataCadastro),
      cadastro.nome || cadastro.nomeCompleto || '',
      cadastro.email,
      cadastro.whatsapp || cadastro.telefone || '',
      cadastro.cidade,
      labelMap[cadastro.tempoMotorista] || cadastro.tempoMotorista || '',
      labelMap[cadastro.horasDia] || cadastro.horasDia || '',
      labelMap[cadastro.conheceNatura] || cadastro.conheceNatura || '',
      labelMap[cadastro.formaVenda] || cadastro.formaVenda || '',
      cadastro.autorizacaoDados ? 'Sim' : 'Não'
    ]);

    // Criar conteúdo CSV
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Criar blob e fazer download
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    const now = new Date();
    const fileName = `consultor-em-movimento-cadastros-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}.csv`;
    
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Verificando autenticação...
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-orange-500 mb-4" />
          <p className="text-gray-600">Verificando acesso...</p>
        </div>
      </div>
    );
  }

  // Não autenticado - mostrar tela de login
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // Autenticado - mostrar painel
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl text-gray-900 mb-2">
                Painel de Administração
              </h1>
              <p className="text-gray-600">
                Consultor em Movimento - Cadastros Recebidos
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleDownloadCSV}
                disabled={loading || cadastros.length === 0}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Baixar CSV
              </Button>
              <Button
                onClick={fetchCadastros}
                disabled={loading}
                className="flex items-center gap-2"
                style={{ background: 'linear-gradient(to right, #FF6D00, #E5004B)' }}
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Atualizar
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Total de Cadastros</p>
              <p className="text-3xl text-gray-900">{cadastros.length}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Hoje</p>
              <p className="text-3xl text-gray-900">
                {cadastros.filter(c => {
                  const hoje = new Date().toDateString();
                  const dataCadastro = new Date(c.dataCadastro).toDateString();
                  return hoje === dataCadastro;
                }).length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Últimas 24h</p>
              <p className="text-3xl text-gray-900">
                {cadastros.filter(c => {
                  const now = new Date().getTime();
                  const cadastroTime = new Date(c.dataCadastro).getTime();
                  return (now - cadastroTime) < 24 * 60 * 60 * 1000;
                }).length}
              </p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-orange-500 mb-4" />
            <p className="text-gray-600">Carregando cadastros...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">Erro: {error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && cadastros.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl text-gray-900 mb-2">Nenhum cadastro ainda</h3>
            <p className="text-gray-600">
              Os cadastros aparecerão aqui assim que alguém preencher o formulário.
            </p>
          </div>
        )}

        {/* Cadastros List */}
        {!loading && !error && cadastros.length > 0 && (
          <div className="space-y-4">
            {cadastros.map((cadastro) => (
              <div key={cadastro.id} className="bg-white rounded-lg shadow-sm p-6">
                {/* Header com nome e data */}
                <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900">{cadastro.nome || cadastro.nomeCompleto}</h3>
                      <p className="text-sm text-gray-500">
                        Cadastrado em {formatDate(cadastro.dataCadastro)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Informações em grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Contato */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{cadastro.cidade}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{cadastro.whatsapp || cadastro.telefone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{cadastro.email}</span>
                    </div>
                  </div>

                  {/* Perfil */}
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Tempo como Motorista</p>
                      <p className="text-sm text-gray-900">
                        {labelMap[cadastro.tempoMotorista] || cadastro.tempoMotorista || 'Não informado'}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Horas por Dia</p>
                      <p className="text-sm text-gray-900">
                        {labelMap[cadastro.horasDia] || cadastro.horasDia || 'Não informado'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Informações adicionais */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Conhece Natura?</p>
                    <p className="text-sm text-gray-900">
                      {labelMap[cadastro.conheceNatura] || cadastro.conheceNatura || 'Não informado'}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Forma de Venda Preferida</p>
                    <p className="text-sm text-gray-900">
                      {labelMap[cadastro.formaVenda] || cadastro.formaVenda || 'Não informado'}
                    </p>
                  </div>
                </div>

                {/* Autorização */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Autorização de dados: {cadastro.autorizacaoDados ? '✅ Sim' : '❌ Não'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}