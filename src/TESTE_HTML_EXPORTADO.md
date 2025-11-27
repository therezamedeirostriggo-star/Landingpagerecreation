# 🧪 Testando o HTML Exportado - Diagnóstico de Problemas

## 📋 Problemas Identificados e Soluções

### ✅ Correções Aplicadas

#### 1. **Campos de Múltipla Escolha Travados**
**Problema:** Os RadioCard e CheckboxCard não respondiam aos cliques no HTML exportado.

**Solução Aplicada:**
- Adicionado `handleClick` com `e.preventDefault()` para evitar conflitos entre label e input
- Adicionado `onClick={(e) => e.stopPropagation()}` no input para prevenir propagação dupla
- Adicionado `aria-label` para acessibilidade

#### 2. **Conexão com Supabase**
**Problema:** As credenciais do Supabase não estavam disponíveis no HTML exportado.

**Solução Aplicada:**
- Credenciais embutidas diretamente no componente `FormularioSection.tsx`:
  ```typescript
  const SUPABASE_PROJECT_ID = "cgpflsuxtequrtpmgtfw";
  const SUPABASE_ANON_KEY = "eyJhbGci...";
  ```
- Isso garante que funcionará mesmo sem acesso ao arquivo `/utils/supabase/info.tsx`

## 🔍 Como Testar o HTML Exportado

### Passo 1: Abrir o Console do Navegador
1. Abra o HTML exportado no navegador
2. Pressione `F12` ou `Ctrl+Shift+I` (Windows/Linux) ou `Cmd+Option+I` (Mac)
3. Vá para a aba **Console**

### Passo 2: Testar Campos de Seleção
Quando você clicar nos campos de múltipla escolha, deverá ver logs no console:

```
🔘 RadioCard clicado: { id: "menos-6-meses", value: "menos-6-meses", selected: false }
☑️ CheckboxCard clicado: { id: "autorizacao", checked: false, newValue: true }
```

**Se NÃO aparecer nada no console:**
- ❌ Os event handlers não estão funcionando
- Verifique se há erros JavaScript na aba Console

### Passo 3: Testar Envio do Formulário
Ao preencher e enviar o formulário, você verá logs detalhados:

```
🔍 Iniciando envio do formulário... { nome: "...", cidade: "...", ... }
📡 Enviando para: https://cgpflsuxtequrtpmgtfw.supabase.co/functions/v1/make-server-b907af3a/cadastro
📦 Dados: { ... }
📬 Resposta recebida: 201 Created
📄 Resultado: { success: true, ... }
✅ Cadastro enviado com sucesso!
```

**Possíveis Erros e Soluções:**

#### Erro: "Failed to fetch" ou "CORS error"
```
❌ Erro ao enviar cadastro: TypeError: Failed to fetch
```
**Solução:**
- Verifique sua conexão com a internet
- O servidor Supabase pode estar indisponível temporariamente
- Verifique se o firewall não está bloqueando a requisição

#### Erro: "401 Unauthorized"
```
📬 Resposta recebida: 401 Unauthorized
```
**Solução:**
- A chave de API pode ter expirado
- Verifique se `SUPABASE_ANON_KEY` está correta

#### Erro: "400 Bad Request"
```
❌ Erro ao enviar cadastro: { error: "Campo obrigatório ausente: ..." }
```
**Solução:**
- Algum campo obrigatório não foi preenchido corretamente
- Verifique o log `❌ Campos obrigatórios ausentes` para detalhes

## 🛠️ Troubleshooting Adicional

### Problema: Campos ainda não clicam
Se após as correções os campos ainda não funcionarem:

1. **Verifique o console por erros JavaScript**
   - Procure por mensagens em vermelho
   - Erros comuns: `React is not defined`, problemas de importação

2. **Teste manualmente no console:**
   ```javascript
   // Cole no console e pressione Enter
   console.log('React disponível?', typeof React !== 'undefined');
   console.log('Document ready?', document.readyState);
   ```

3. **Verifique se o CSS está carregado:**
   - Os campos devem ter bordas e estilos visíveis
   - Se estiverem sem estilo, pode ser problema de build

### Problema: Envio não funciona
Se o formulário não enviar:

1. **Teste a conexão diretamente no console:**
   ```javascript
   fetch('https://cgpflsuxtequrtpmgtfw.supabase.co/functions/v1/make-server-b907af3a/health')
     .then(r => r.json())
     .then(console.log)
     .catch(console.error);
   ```
   
   **Deve retornar:** `{ status: "ok" }`

2. **Teste envio de cadastro manual:**
   ```javascript
   fetch('https://cgpflsuxtequrtpmgtfw.supabase.co/functions/v1/make-server-b907af3a/cadastro', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncGZsc3V4dGVxdXJ0cG1ndGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzY3MDEsImV4cCI6MjA3OTc1MjcwMX0.ZhMam9EuPbuM9qCc5EGBo9AHwUcphzVIgUUeIXzgLTQ'
     },
     body: JSON.stringify({
       nome: "Teste",
       cidade: "São Paulo",
       whatsapp: "11999999999",
       email: "teste@teste.com",
       tempoMotorista: "1-3-anos",
       horasDia: "4-8-horas",
       conheceNatura: "sim-ouviu",
       formaVenda: "duas-formas",
       autorizacaoDados: true
     })
   })
   .then(r => r.json())
   .then(console.log)
   .catch(console.error);
   ```

## 📊 Checklist de Verificação

Antes de reportar um problema, verifique:

- [ ] Console do navegador está aberto
- [ ] Não há erros JavaScript em vermelho no console
- [ ] Logs aparecem quando clico nos campos (🔘 ou ☑️)
- [ ] Consigo selecionar diferentes opções nos campos
- [ ] O botão "Quero participar" está habilitado após preencher tudo
- [ ] Aparece log `🔍 Iniciando envio do formulário...` ao clicar no botão
- [ ] Minha conexão com internet está funcionando
- [ ] Testei em outro navegador (Chrome, Firefox, Safari, Edge)

## 💡 Próximos Passos

Se após todas essas verificações ainda houver problemas:

1. **Copie TODOS os logs do console** (incluindo erros em vermelho)
2. **Tire um print da tela** mostrando o problema
3. **Informe qual navegador e versão** você está usando
4. **Descreva exatamente o que acontece** quando tenta usar o formulário

Essas informações ajudarão a identificar e corrigir o problema específico do seu ambiente.
