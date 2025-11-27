# 🔒 Como Configurar a Senha do Painel Admin

## 🎯 Senha Atual

A senha configurada é: **`JCBDesign2025`**

⚠️ **IMPORTANTE:** Você pode mudar essa senha a qualquer momento seguindo as instruções abaixo.

---

## 🔧 Como Alterar a Senha

### Opção 1: Via Supabase Dashboard (RECOMENDADO)

1. **Acesse o Supabase Dashboard:**
   - Vá para: https://supabase.com/dashboard
   - Faça login

2. **Encontre seu Projeto:**
   - Project ID: `cgpflsuxtequrtpmgtfw`

3. **Acesse as Variáveis de Ambiente:**
   - No menu lateral esquerdo, clique em **"Settings"** (ícone de engrenagem)
   - Clique em **"Edge Functions"**
   - Role até a seção **"Environment Variables"**

4. **Adicionar Nova Variável:**
   - Clique em **"Add variable"**
   - Nome da variável: `ADMIN_PASSWORD`
   - Valor: Digite sua senha nova (exemplo: `MinhaS3nhaSup3rS3gura!`)
   - Clique em **"Save"**

5. **Reiniciar as Edge Functions:**
   - Após salvar, pode ser necessário aguardar alguns segundos
   - As Edge Functions detectarão automaticamente a nova senha

6. **Testar:**
   - Acesse `/admin` no seu site
   - Faça logout se já estiver logado
   - Tente fazer login com a nova senha

---

### Opção 2: Via CLI do Supabase (Avançado)

Se você tiver o CLI do Supabase instalado:

```bash
# Definir a variável de ambiente
supabase secrets set ADMIN_PASSWORD=SuaNovaSenhaAqui

# Ou via arquivo .env no projeto
echo "ADMIN_PASSWORD=SuaNovaSenhaAqui" >> .env
```

---

## 📋 Dicas de Segurança

### ✅ Senha Forte:
- Mínimo 12 caracteres
- Misture letras maiúsculas e minúsculas
- Inclua números e caracteres especiais
- Exemplos: `N@tur@2024!Admin`, `C0nsult0r#M0v!`

### ❌ NÃO USE:
- Senhas óbvias como `123456`, `admin`, `password`
- Informações pessoais (nome, data de nascimento)
- A senha padrão `admin123` em produção

---

## 🔐 Como Funciona a Autenticação

1. **Login:**
   - Você digita a senha em `/admin`
   - O servidor compara com `ADMIN_PASSWORD` do ambiente
   - Se correto, gera um token válido por 24 horas

2. **Sessão:**
   - Token é salvo no navegador (localStorage)
   - Válido por 24 horas
   - Após 24h, você precisa fazer login novamente

3. **Logout:**
   - Clique no botão "Sair" para encerrar a sessão
   - Token é removido do navegador
   - Ninguém mais poderá acessar sem a senha

---

## 🆘 Problemas Comuns

### "Senha incorreta" mesmo com senha certa:
- Aguarde 1-2 minutos após configurar a variável
- Limpe o cache do navegador (Ctrl + Shift + Delete)
- Tente em uma aba anônima

### Esqueci minha senha:
- Volte no Supabase Dashboard
- Settings → Edge Functions → Environment Variables
- Edite a variável `ADMIN_PASSWORD`
- Defina uma nova senha

### Token expirado:
- Simplesmente faça login novamente
- O token dura 24 horas
- Isso é normal e protege sua conta

---

## 🎓 Resumo Rápido

1. Acesse Supabase Dashboard → Settings → Edge Functions
2. Adicione variável: `ADMIN_PASSWORD` = sua senha
3. Salve
4. Faça login em `/admin` com a nova senha
5. Pronto! ✅

---

## ⚡ Acesso Rápido

- **Dashboard Supabase:** https://supabase.com/dashboard
- **Painel Admin:** `seu-site.com/admin`
- **Variável de ambiente:** `ADMIN_PASSWORD`
- **Validade do token:** 24 horas

---

**Última atualização:** 26/11/2024