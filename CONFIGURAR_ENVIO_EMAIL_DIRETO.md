# Configuração de Envio de Email Direto

## 📧 Configuração

O formulário agora envia emails diretamente para:
- **PRINTBAGLP@printbag.com.br**
- **pedro.levorato@weisul.com.br**

**Email remetente:** `ti@printbag.com.br`

## 🔧 Opções de Implementação

Como o site é estático (Next.js com `output: 'export'`), temos algumas opções:

### Opção 1: EmailJS (Recomendado - Mais Simples)

EmailJS é um serviço gratuito que permite enviar emails do cliente sem servidor.

1. **Criar conta no EmailJS:**
   - Acesse: https://www.emailjs.com/
   - Crie uma conta gratuita

2. **Configurar serviço de email:**
   - Vá em "Email Services"
   - Adicione um serviço SMTP
   - Configure:
     - **Host:** `smtp.printbag.com.br` (ou o servidor SMTP)
     - **Port:** `587` (TLS) ou `465` (SSL)
     - **User:** `ti@printbag.com.br`
     - **Password:** `2GJY_3B*R4qCWMf6Xh424h`

3. **Criar template de email:**
   - Vá em "Email Templates"
   - Crie um template com os campos:
     - `{{nome}}`
     - `{{email}}`
     - `{{empresa}}`
     - `{{telefone}}`
     - `{{lojas}}`
     - `{{segmento}}`
   - Configure:
     - **To Email:** `PRINTBAGLP@printbag.com.br,pedro.levorato@weisul.com.br`
     - **From Name:** `Printbag - Site`
     - **From Email:** `ti@printbag.com.br`
     - **Subject:** `Nova Solicitação de Orçamento - Printbag`

4. **Obter credenciais:**
   - Vá em "Account" → "General"
   - Copie o **Public Key** (User ID)

5. **Configurar variáveis de ambiente:**
   - Crie um arquivo `.env.local` na raiz do projeto:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
     NEXT_PUBLIC_EMAILJS_USER_ID=seu_user_id
     ```

6. **Atualizar código:**
   - O código já está preparado para usar EmailJS
   - Apenas configure as variáveis de ambiente

### Opção 2: Endpoint Serverless (Mais Controle)

Criar um endpoint serverless usando Vercel, Netlify, ou outro serviço.

1. **Usar o arquivo `api/send-email.js`** como base
2. **Configurar variáveis de ambiente no serviço:**
   - `SMTP_HOST=smtp.printbag.com.br`
   - `SMTP_PORT=587`
   - `SMTP_SECURE=false`
   - `SMTP_USER=ti@printbag.com.br`
   - `SMTP_PASS=2GJY_3B*R4qCWMf6Xh424h`

3. **Atualizar o código do formulário** para usar o endpoint

### Opção 3: Serviço de Email de Terceiros

Usar serviços como:
- **SendGrid** (gratuito até 100 emails/dia)
- **Mailgun** (gratuito até 5.000 emails/mês)
- **Resend** (gratuito até 3.000 emails/mês)

## 🚀 Implementação Rápida com EmailJS (JÁ IMPLEMENTADO)

O código já está preparado para usar EmailJS. Siga os passos abaixo para configurar:

### Passo 1: Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita (200 emails/mês grátis)

### Passo 2: Configurar Serviço SMTP

1. No EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Selecione **"SMTP"**
4. Configure:
   - **Service Name:** `Printbag SMTP`
   - **SMTP Host:** `smtp.printbag.com.br` (ou o servidor SMTP correto)
   - **SMTP Port:** `587` (TLS) ou `465` (SSL)
   - **SMTP Username:** `ti@printbag.com.br`
   - **SMTP Password:** `2GJY_3B*R4qCWMf6Xh424h`
   - **Secure Connection:** `TLS` (porta 587) ou `SSL` (porta 465)
5. Clique em **"Create Service"**
6. **Copie o Service ID** (você vai precisar dele)

### Passo 3: Criar Template de Email

1. No EmailJS, vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

   **To Email:**
   ```
   PRINTBAGLP@printbag.com.br,pedro.levorato@weisul.com.br
   ```

   **From Name:**
   ```
   Printbag - Site
   ```

   **From Email:**
   ```
   ti@printbag.com.br
   ```

   **Subject:**
   ```
   Nova Solicitação de Orçamento - Printbag
   ```

   **Content (HTML):**
   ```html
   <h2>Nova Solicitação de Orçamento</h2>
   <p><strong>Nome:</strong> {{nome}}</p>
   <p><strong>E-mail:</strong> {{email}}</p>
   <p><strong>Empresa:</strong> {{empresa}}</p>
   <p><strong>Telefone/WhatsApp:</strong> {{telefone}}</p>
   <p><strong>Número de Lojas:</strong> {{lojas}}</p>
   <p><strong>Segmento:</strong> {{segmento}}</p>
   <hr>
   <p><em>Enviado através do formulário de contato do site Printbag</em></p>
   ```

4. Clique em **"Save"**
5. **Copie o Template ID** (você vai precisar dele)

### Passo 4: Obter Public Key

1. No EmailJS, vá em **"Account"** → **"General"**
2. **Copie o Public Key** (User ID)

### Passo 5: Configurar Variáveis de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto:
   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=seu_public_key_aqui
   ```

2. Substitua os valores pelos IDs copiados anteriormente

### Passo 6: Testar

1. Execute `npm run dev` para testar localmente
2. Preencha o formulário no site
3. Verifique se o email foi enviado para:
   - `PRINTBAGLP@printbag.com.br`
   - `pedro.levorato@weisul.com.br`

### Passo 7: Deploy

1. Configure as variáveis de ambiente no GitHub Pages ou no serviço de deploy
2. Faça o deploy normalmente

## ✅ Checklist

- [ ] Conta criada no EmailJS
- [ ] Serviço SMTP configurado com credenciais corretas
- [ ] Template de email criado
- [ ] Variáveis de ambiente configuradas (.env.local)
- [ ] Teste local realizado com sucesso
- [ ] Emails sendo recebidos nos destinatários corretos

## 📝 Nota Importante

- EmailJS tem limite de 200 emails/mês no plano gratuito
- Para mais emails, considere um plano pago ou use um endpoint serverless
- As credenciais SMTP devem ser válidas e o servidor SMTP deve permitir conexões externas

