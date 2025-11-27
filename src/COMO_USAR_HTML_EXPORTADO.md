# 🚀 Como Usar o HTML Exportado - Guia Rápido

## ✅ O que foi corrigido?

1. **Campos de seleção (radio e checkbox) agora funcionam corretamente**
2. **Conexão com Supabase funciona no HTML exportado**
3. **Sistema de logs para debug facilitado**

## 📝 Antes de Exportar

### Passo 1: Testar no Ambiente de Desenvolvimento
1. Abra a aplicação no navegador
2. Pressione `F12` para abrir o Console
3. Role até o formulário
4. Clique nos campos de seleção
5. **Verifique se aparece:**
   ```
   🔘 RadioCard clicado: { ... }
   ☑️ CheckboxCard clicado: { ... }
   ```

### Passo 2: Testar Envio do Formulário
1. Preencha todos os campos
2. Marque a autorização de dados
3. Clique em "Quero participar"
4. **Verifique os logs no Console:**
   ```
   🔍 Iniciando envio do formulário...
   📡 Enviando para: https://...
   📬 Resposta recebida: 201 Created
   ✅ Cadastro enviado com sucesso!
   ```

## 🌐 Depois de Exportar

### Passo 1: Abrir o HTML Exportado
1. Abra o arquivo HTML no navegador (Chrome, Firefox, Safari ou Edge)
2. Pressione `F12` para abrir o Console

### Passo 2: Testar Conexão com Supabase
**Opção A - Usar Ferramenta de Teste (Recomendado):**
1. Abra também o arquivo `/public/teste-formulario.html`
2. Clique em "1️⃣ Testar Conexão"
3. Deve aparecer: ✓ OK - Conexão estabelecida
4. Clique em "2️⃣ Testar Cadastro"
5. Deve aparecer: ✓ OK - Cadastro realizado

**Opção B - Testar Diretamente no Console:**
```javascript
// Cole isso no Console e pressione Enter
fetch('https://cgpflsuxtequrtpmgtfw.supabase.co/functions/v1/make-server-b907af3a/health')
  .then(r => r.json())
  .then(data => console.log('✅ Servidor OK:', data))
  .catch(err => console.error('❌ Erro:', err));
```

Deve retornar: `✅ Servidor OK: { status: "ok" }`

### Passo 3: Testar o Formulário
1. Preencha o formulário no HTML exportado
2. Observe o Console - deve aparecer:
   - `🔘 RadioCard clicado` ao selecionar opções
   - `☑️ CheckboxCard clicado` ao marcar autorização
3. Clique em "Quero participar"
4. Veja os logs de envio no Console
5. Deve aparecer o modal de sucesso

## ⚠️ Resolução de Problemas Comuns

### ❌ Campos não clicam

**Sintoma:** Clico nos campos mas nada acontece

**Diagnóstico:**
1. Abra o Console (`F12`)
2. Clique em um campo
3. Veja se aparece log `🔘 RadioCard clicado`

**Se NÃO aparecer log:**
- JavaScript não está carregando corretamente
- Veja se há erros em vermelho no Console
- Tente outro navegador

### ❌ Erro "Failed to fetch"

**Sintoma:** Formulário não envia, aparece erro de conexão

**Possíveis causas:**
- Sem conexão com internet
- Firewall bloqueando
- Servidor temporariamente indisponível

**Solução:**
1. Verifique sua conexão com internet
2. Teste em outro navegador
3. Use `/public/teste-formulario.html` para diagnóstico
4. Aguarde alguns minutos e tente novamente

### ❌ Erro 401 Unauthorized

**Sintoma:** Servidor rejeita o cadastro

**Causa:** Chave de API inválida

**Solução:**
- Normalmente não deve acontecer
- Se acontecer, reporte o problema

### ❌ Modal de sucesso não aparece

**Sintoma:** Formulário envia mas não mostra confirmação

**Diagnóstico:**
1. Veja o Console
2. Procure por: `✅ Cadastro enviado com sucesso!`
3. Se aparecer, o cadastro foi salvo
4. Verifique no painel admin (`/admin`)

## 🧪 Ferramenta de Teste Standalone

Sempre que tiver dúvidas, use a ferramenta de teste:

**Arquivo:** `/public/teste-formulario.html`

**Como usar:**
1. Abra o arquivo no navegador
2. Veja as informações do sistema
3. Clique em "1️⃣ Testar Conexão"
   - ✓ OK = Servidor funcionando
   - ✗ FALHA = Problema de conexão
4. Clique em "2️⃣ Testar Cadastro"
   - ✓ OK = Formulário funcionando
   - ✗ FALHA = Problema com os dados

Os logs aparecem automaticamente na página.

## 📊 Checklist Rápido

Antes de considerar que há um problema:

- [ ] Testei no navegador (Chrome, Firefox, Edge ou Safari)
- [ ] Console está aberto (`F12`)
- [ ] Não há erros em vermelho no Console
- [ ] Vejo logs 🔘 ao clicar nos campos
- [ ] Tenho conexão com internet funcionando
- [ ] Testei com `/public/teste-formulario.html`
- [ ] Li o arquivo `/TESTE_HTML_EXPORTADO.md`

## 🎯 Resultado Esperado

✅ Campos de seleção funcionam normalmente  
✅ Formulário envia dados para o Supabase  
✅ Modal de sucesso aparece após envio  
✅ Dados aparecem no painel admin (`/admin`)  

## 📞 Precisa de Ajuda?

Se após seguir todos os passos ainda houver problemas:

1. Use `/public/teste-formulario.html`
2. Copie TODOS os logs que aparecem
3. Tire um print da tela mostrando o erro
4. Informe:
   - Qual navegador está usando
   - Sistema operacional
   - O que exatamente acontece

## 🔗 Arquivos Importantes

- `/CORRECOES_EXPORTACAO.md` - Detalhes técnicos das correções
- `/TESTE_HTML_EXPORTADO.md` - Guia completo de diagnóstico
- `/public/teste-formulario.html` - Ferramenta de teste standalone

---

**Última atualização:** Novembro 2024  
**Status:** ✅ Todos os problemas corrigidos
