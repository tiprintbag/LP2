# Configuração de Envio de Email via Webhook n8n

## 📧 Emails de Destino

Quando alguém preencher o formulário de contato, os dados serão enviados para o webhook n8n com informações adicionais para envio de email para:

- **PRINTBAGLP@printbag.com.br**
- **pedro.levorato@weisul.com.br**

## 🔧 Configuração do Webhook n8n

O webhook n8n recebe os dados do formulário com um objeto `emailNotification` contendo:

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

## 📋 Passos para Configurar no n8n

1. **No workflow do n8n, após o nó Webhook:**

   - Adicione um nó **"IF"** ou **"Switch"** para verificar se `emailNotification` existe
   - Ou simplesmente adicione um nó **"Send Email"** que sempre envia

2. **Configure o nó "Send Email" (ou similar):**

   - **To (Para):** Use `{{ $json.emailNotification.to }}` ou configure manualmente:
     - `PRINTBAGLP@printbag.com.br`
     - `pedro.levorato@weisul.com.br`
   - **Subject (Assunto):** `{{ $json.emailNotification.subject }}`
   - **HTML Body:** `{{ $json.emailNotification.html }}`
   - **From (De):** Configure o email remetente (ex: `noreply@printbag.com.br`)

3. **Alternativa - Enviar para múltiplos destinatários:**

   - Use um nó **"Split In Batches"** para enviar para cada email em `emailNotification.to`
   - Ou configure o campo "To" com os emails separados por vírgula

## 🔄 Estrutura do Workflow Sugerida

```
Webhook → Processar Dados → Enviar Email → Salvar em Banco (opcional)
```

## ✅ Teste

Após configurar, teste o formulário no site e verifique se os emails estão sendo recebidos nos endereços configurados.

## 📝 Nota

O código do formulário já está preparado para enviar os dados com `emailNotification`. Basta configurar o webhook n8n para processar e enviar os emails.

