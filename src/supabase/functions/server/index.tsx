import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b907af3a/health", (c) => {
  return c.json({ status: "ok" });
});

// Admin login endpoint
app.post("/make-server-b907af3a/admin-login", async (c) => {
  try {
    const { password } = await c.req.json();
    
    // Senha padrão (pode ser alterada via variável de ambiente)
    const adminPassword = Deno.env.get('ADMIN_PASSWORD') || 'JCBDesign2025';
    
    if (password !== adminPassword) {
      return c.json(
        { error: 'Senha incorreta' }, 
        { status: 401 }
      );
    }
    
    // Gerar token simples (timestamp + hash)
    const token = btoa(`admin_${Date.now()}_${Math.random()}`);
    const expires = Date.now() + (24 * 60 * 60 * 1000); // 24 horas
    
    console.log('Admin login realizado com sucesso');
    
    return c.json({ 
      success: true,
      token,
      expires
    });
    
  } catch (error) {
    console.error("Erro ao processar login:", error);
    return c.json(
      { error: "Erro ao processar login." }, 
      { status: 500 }
    );
  }
});

// Verificar token de admin
app.post("/make-server-b907af3a/verify-admin", async (c) => {
  try {
    const { token, expires } = await c.req.json();
    
    // Verificar se o token ainda é válido
    if (!token || !expires || Date.now() > expires) {
      return c.json({ valid: false }, { status: 401 });
    }
    
    return c.json({ valid: true });
    
  } catch (error) {
    return c.json({ valid: false }, { status: 500 });
  }
});

// Cadastro endpoint - salvar dados do formulário
app.post("/make-server-b907af3a/cadastro", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validar campos obrigatórios
    const requiredFields = [
      'nome', 'cidade', 'whatsapp', 'email', 
      'tempoMotorista', 'horasDia', 'conheceNatura', 
      'formaVenda', 'autorizacaoDados'
    ];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return c.json(
          { error: `Campo obrigatório ausente: ${field}` }, 
          { status: 400 }
        );
      }
    }
    
    // Gerar um ID único usando timestamp e número aleatório
    // Prefixo descritivo: consultoremmovimento_cadastro_
    const cadastroId = `consultoremmovimento_cadastro_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    // Preparar dados para salvar
    const cadastroData = {
      id: cadastroId,
      projeto: "Consultor em Movimento",
      nome: body.nome,
      cidade: body.cidade,
      whatsapp: body.whatsapp,
      email: body.email,
      tempoMotorista: body.tempoMotorista,
      horasDia: body.horasDia,
      conheceNatura: body.conheceNatura,
      formaVenda: body.formaVenda,
      autorizacaoDados: body.autorizacaoDados,
      dataCadastro: new Date().toISOString(),
      // Campos adicionais para compatibilidade com versões anteriores
      nomeCompleto: body.nome,
      telefone: body.whatsapp,
      estado: body.estado || "Não informado",
      profissao: body.profissao || "motorista",
      motivacao: body.motivacao || ""
    };
    
    // Salvar no KV store
    await kv.set(cadastroId, cadastroData);
    
    console.log(`Cadastro salvo com sucesso: ${cadastroId}`, cadastroData);
    
    return c.json({ 
      success: true, 
      message: "Cadastro realizado com sucesso!",
      cadastroId: cadastroId
    }, { status: 201 });
    
  } catch (error) {
    console.error("Erro ao processar cadastro:", error);
    return c.json(
      { error: "Erro ao processar cadastro. Tente novamente." }, 
      { status: 500 }
    );
  }
});

// Endpoint para listar todos os cadastros (opcional - para administração)
app.get("/make-server-b907af3a/cadastros", async (c) => {
  try {
    let cadastros = await kv.getByPrefix("consultoremmovimento_cadastro_");
    
    // Normalizar dados para garantir consistência
    cadastros = cadastros.map((cadastro: any) => {
      // Se é um cadastro antigo que tem nomeCompleto, garantir que também tem nome
      if (cadastro.nomeCompleto && !cadastro.nome) {
        cadastro.nome = cadastro.nomeCompleto;
      }
      // Se é um cadastro novo que tem nome, garantir que também tem nomeCompleto
      if (cadastro.nome && !cadastro.nomeCompleto) {
        cadastro.nomeCompleto = cadastro.nome;
      }
      // WhatsApp/Telefone
      if (cadastro.whatsapp && !cadastro.telefone) {
        cadastro.telefone = cadastro.whatsapp;
      }
      if (cadastro.telefone && !cadastro.whatsapp) {
        cadastro.whatsapp = cadastro.telefone;
      }
      
      return cadastro;
    });
    
    return c.json({ 
      success: true, 
      count: cadastros.length,
      cadastros 
    });
  } catch (error) {
    console.error("Erro ao buscar cadastros:", error);
    return c.json(
      { error: "Erro ao buscar cadastros." }, 
      { status: 500 }
    );
  }
});

Deno.serve(app.fetch);