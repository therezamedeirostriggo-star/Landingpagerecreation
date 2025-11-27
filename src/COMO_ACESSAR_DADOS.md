# 📊 Como Acessar os Dados do Consultor em Movimento

## 🎯 Opção 1: Painel de Administração (MAIS FÁCIL)

1. Adicione `/admin` no final da URL do seu site
   - Exemplo: `https://seu-site.com/admin`
2. Você verá todos os cadastros organizados e formatados
3. Clique em "Atualizar" para ver novos cadastros em tempo real

---

## 🗄️ Opção 2: Acessar Diretamente no Supabase

### Passo a Passo:

1. **Acesse o Supabase Dashboard:**
   - Vá para: https://supabase.com/dashboard
   - Faça login com sua conta

2. **Encontre seu Projeto:**
   - Procure pelo projeto com ID: `cgpflsuxtequrtpmgtfw`
   - Ou procure pelo nome que você deu ao criar o projeto

3. **Acesse a Tabela de Dados:**
   - No menu lateral esquerdo, clique em **"Table Editor"** (ícone de tabela)
   - Procure pela tabela chamada: **`kv_store_b907af3a`**
   - Esta é a tabela onde todos os seus dados estão salvos

4. **Visualize os Cadastros:**
   - Dentro da tabela `kv_store_b907af3a`, você verá duas colunas:
     - `key` (chave): identificador único
     - `value` (valor): dados do cadastro em formato JSON
   
5. **Identificar os Dados do Consultor em Movimento:**
   - Procure por linhas onde a coluna `key` começa com:
     - **`consultoremmovimento_cadastro_`**
   - Esses são os cadastros da sua landing page!

6. **Ver os Dados Completos:**
   - Clique em qualquer linha para ver os detalhes
   - Na coluna `value`, você verá todos os dados:
     ```json
     {
       "id": "consultoremmovimento_cadastro_...",
       "projeto": "Consultor em Movimento",
       "nome": "Nome da Pessoa",
       "cidade": "Cidade",
       "whatsapp": "(11) 99999-9999",
       "email": "email@exemplo.com",
       "tempoMotorista": "1-3-anos",
       "horasDia": "4-8-horas",
       "conheceNatura": "sim-ouviu",
       "formaVenda": "qr-code",
       "autorizacaoDados": true,
       "dataCadastro": "2024-11-26T..."
     }
     ```

---

## 🔍 Dica: Filtrar seus Dados

No Table Editor do Supabase:
1. Use o campo de busca/filtro
2. Digite: `consultoremmovimento_cadastro_`
3. Isso mostrará apenas os dados do seu projeto

---

## 📥 Exportar Dados

### No Painel Admin:
- Os dados aparecem formatados e legíveis
- Você pode copiar manualmente

### No Supabase Dashboard:
1. Acesse a tabela `kv_store_b907af3a`
2. Clique no botão de menu (três pontinhos)
3. Selecione "Export as CSV"
4. Os dados serão baixados em formato CSV

---

## 🆘 Precisa de Ajuda?

Se você tiver dificuldades:
1. Use o painel `/admin` - é a forma mais fácil!
2. Todos os cadastros aparecem automaticamente lá
3. Atualize a página para ver novos cadastros

---

## 📝 Informações Técnicas

- **Nome do Projeto**: Consultor em Movimento
- **Tabela**: `kv_store_b907af3a`
- **Prefixo das Chaves**: `consultoremmovimento_cadastro_`
- **Project ID**: `cgpflsuxtequrtpmgtfw`
- **Formato dos Dados**: JSON

---

## ✅ Como Testar

1. Preencha o formulário na landing page
2. Aguarde o pop-up de sucesso
3. Acesse `/admin` para ver o cadastro aparecer
4. Ou vá no Supabase → Table Editor → kv_store_b907af3a
