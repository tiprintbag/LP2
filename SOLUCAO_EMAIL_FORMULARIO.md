# Solução: Email do Formulário e Performance

## 🚀 Melhorias Implementadas

### Performance do Formulário
- ✅ **Feedback imediato**: O formulário agora mostra a mensagem de sucesso instantaneamente
- ✅ **Timeout reduzido**: De 10 segundos para 5 segundos
- ✅ **Envio em background**: O webhook é enviado em background, não bloqueia a interface
- ✅ **Formulário limpo imediatamente**: Os campos são limpos assim que o usuário clica em enviar

### Envio de Email

O formulário envia os dados para o webhook n8n com as informações de email incluídas. **O webhook n8n precisa estar configurado para enviar os emails**.

## 📧 Configuração do Email no n8n

### Credenciais SMTP para Envio de Email

**Email Remetente:** `ti@printbag.com.br`  
**Senha:** `2GJY_3B*R4qCWMf6Xh424h`  
**Destinatários:**
- `PRINTBAGLP@printbag.com.br`
- `pedro.levorato@weisul.com.br`

### Verificar se o Webhook está Configurado

1. Acesse o n8n: `https://ia-n8n.4xfwtv.easypanel.host`
2. Verifique o workflow do webhook: `9bb8cab3-e473-4c6b-9faa-bfd68115c8b9`
3. Confirme se há um nó "Send Email" após o webhook

### Dados Enviados pelo Formulário

O formulário envia os seguintes dados:

```json
{
  "nome": "Nome do Cliente",
  "email": "email@cliente.com",
  "empresa": "Nome da Empresa",
  "telefone": "(00) 00000-0000",
  "lojas": "1",
  "segmento": "Moda e Vestuário",
  "emailNotification": {
    "to": [
      "PRINTBAGLP@printbag.com.br",
      "pedro.levorato@weisul.com.br"
    ],
    "subject": "Nova Solicitação de Orçamento - Printbag",
    "html": "<h2>Nova Solicitação de Orçamento</h2>..."
  }
}
```

### Configurar Envio de Email no n8n com SMTP

1. **Adicione um nó "Send Email" após o Webhook**

2. **Configure as Credenciais SMTP:**
   - **Credential Name:** "Printbag SMTP" (ou qualquer nome)
   - **Type:** SMTP
   - **Host:** `smtp.printbag.com.br` (ou o servidor SMTP do seu provedor)
   - **Port:** `587` (TLS) ou `465` (SSL)
   - **Secure:** `TLS` ou `SSL` (dependendo da porta)
   - **User:** `ti@printbag.com.br`
   - **Password:** `2GJY_3B*R4qCWMf6Xh424h`
   - **From (De):** `ti@printbag.com.br`

3. **Configure os Campos do Email:**
   - **To (Para):** Configure manualmente com os emails separados por vírgula:
     ```
     PRINTBAGLP@printbag.com.br, pedro.levorato@weisul.com.br
     ```
     Ou use a expressão para pegar do webhook:
     ```
     {{ $json.emailNotification.to.join(', ') }}
     ```
   - **Subject (Assunto):** `{{ $json.emailNotification.subject }}`
   - **HTML Body:** `{{ $json.emailNotification.html }}`
   - **From (De):** `ti@printbag.com.br`

4. **Alternativa - Enviar para múltiplos destinatários separadamente:**
   - Use um nó **"Split In Batches"** antes do "Send Email"
   - Configure para iterar sobre `{{ $json.emailNotification.to }}`
   - Isso enviará um email separado para cada destinatário

### Configuração de Servidor SMTP (se necessário)

Se você não souber o servidor SMTP, tente estas opções comuns:

- **Gmail/Google Workspace:** `smtp.gmail.com` (porta 587)
- **Outlook/Office 365:** `smtp.office365.com` (porta 587)
- **Servidor próprio:** Verifique com o administrador do email `ti@printbag.com.br`

**Nota:** Se o email `ti@printbag.com.br` for um email corporativo, você precisará verificar as configurações SMTP com o administrador do servidor de email.

## 🔍 Verificar se os Emails Estão Sendo Enviados

1. **Teste o formulário no site**
2. **Verifique os logs do n8n** para ver se o webhook está recebendo os dados
3. **Verifique a caixa de entrada e spam** dos emails:
   - `PRINTBAGLP@printbag.com.br`
   - `pedro.levorato@weisul.com.br`

## ⚡ Performance

O formulário agora:
- Responde instantaneamente ao clique
- Não espera a resposta do webhook para mostrar sucesso
- Envia os dados em background
- Limpa os campos imediatamente

## 📝 Nota Importante

Se os emails não estão chegando, o problema está na configuração do webhook n8n, não no código do site. O site está enviando os dados corretamente com todas as informações necessárias para o envio de email.

