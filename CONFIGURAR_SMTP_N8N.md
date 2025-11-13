# Configuração SMTP no n8n para Envio de Emails

## 🔐 Credenciais SMTP

**Email Remetente:** `ti@printbag.com.br`  
**Senha:** `2GJY_3B*R4qCWMf6Xh424h`  
**Destinatários:**
- `PRINTBAGLP@printbag.com.br`
- `pedro.levorato@weisul.com.br`

## 📋 Passo a Passo para Configurar no n8n

### 1. Acessar o Workflow

1. Acesse: `https://ia-n8n.4xfwtv.easypanel.host`
2. Abra o workflow com o webhook: `9bb8cab3-e473-4c6b-9faa-bfd68115c8b9`
3. Certifique-se de que há um nó **Webhook** configurado

### 2. Adicionar Nó "Send Email"

1. Após o nó **Webhook**, adicione um novo nó
2. Procure por **"Send Email"** ou **"Email Send"**
3. Selecione o nó

### 3. Configurar Credenciais SMTP

1. No nó "Send Email", clique em **"Credential to connect with"** ou **"Add Credential"**
2. Selecione **"SMTP"** como tipo de credencial
3. Preencha os campos:

   **Configurações Básicas:**
   - **Name:** `Printbag SMTP` (ou qualquer nome)
   - **User:** `ti@printbag.com.br`
   - **Password:** `2GJY_3B*R4qCWMf6Xh424h`

   **Configurações do Servidor:**
   - **Host:** `smtp.printbag.com.br` (ou verifique com o administrador)
   - **Port:** `587` (TLS) ou `465` (SSL)
   - **Secure:** 
     - Se porta 587: selecione `TLS`
     - Se porta 465: selecione `SSL`
   - **From Email:** `ti@printbag.com.br`
   - **From Name:** `Printbag - Site` (opcional)

4. Clique em **"Save"** para salvar as credenciais

### 4. Configurar Campos do Email

No nó "Send Email", configure:

**To (Para):**
```
PRINTBAGLP@printbag.com.br, pedro.levorato@weisul.com.br
```

Ou use expressão para pegar do webhook:
```
{{ $json.emailNotification.to.join(', ') }}
```

**Subject (Assunto):**
```
{{ $json.emailNotification.subject }}
```

**Email Type:** Selecione `HTML`

**Message (Mensagem/HTML Body):**
```
{{ $json.emailNotification.html }}
```

**From Email:**
```
ti@printbag.com.br
```

### 5. Testar o Workflow

1. Salve o workflow
2. Ative o workflow (toggle no canto superior direito)
3. Preencha o formulário no site
4. Verifique se o email foi enviado para:
   - `PRINTBAGLP@printbag.com.br`
   - `pedro.levorato@weisul.com.br`

## 🔍 Verificar Servidor SMTP

Se você não souber o servidor SMTP do `ti@printbag.com.br`, tente:

1. **Verificar com o administrador do email**
2. **Tentar servidores comuns:**
   - `smtp.printbag.com.br`
   - `mail.printbag.com.br`
   - `smtp.gmail.com` (se for Google Workspace)
   - `smtp.office365.com` (se for Office 365)

3. **Portas comuns:**
   - **587** com TLS (recomendado)
   - **465** com SSL
   - **25** (geralmente bloqueado por ISPs)

## ⚠️ Troubleshooting

### Email não está sendo enviado

1. **Verifique as credenciais:**
   - Confirme que o usuário e senha estão corretos
   - Teste fazer login no email `ti@printbag.com.br` com a senha fornecida

2. **Verifique o servidor SMTP:**
   - Confirme o host e porta corretos
   - Teste com diferentes portas (587, 465, 25)

3. **Verifique os logs do n8n:**
   - Clique no nó "Send Email" após executar
   - Veja os logs de erro para identificar o problema

4. **Verifique firewall/proxy:**
   - Certifique-se de que as portas SMTP não estão bloqueadas

### Email vai para spam

1. Configure o **SPF** e **DKIM** no servidor de email
2. Use um **From Name** descritivo
3. Evite palavras que podem ser consideradas spam no assunto

## 📝 Estrutura do Workflow Sugerida

```
[Webhook] 
    ↓
[Send Email] → Envia para PRINTBAGLP@printbag.com.br e pedro.levorato@weisul.com.br
```

Ou, para enviar separadamente:

```
[Webhook] 
    ↓
[Split In Batches] → Divide os destinatários
    ↓
[Send Email] → Envia para cada destinatário individualmente
```

## ✅ Checklist

- [ ] Credenciais SMTP configuradas no n8n
- [ ] Nó "Send Email" adicionado após o Webhook
- [ ] Campos do email configurados corretamente
- [ ] Workflow ativado
- [ ] Teste realizado e email recebido
- [ ] Verificado caixa de entrada e spam dos destinatários

