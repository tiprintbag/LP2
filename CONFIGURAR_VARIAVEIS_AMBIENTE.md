# Configurar Variáveis de Ambiente

## 📝 Criar arquivo .env.local

Crie um arquivo chamado `.env.local` na raiz do projeto (mesmo nível do `package.json`) com o seguinte conteúdo:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_5l5z60l
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=SEU_TEMPLATE_ID_AQUI
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YY----laYSqdMEPFs
```

## 🔍 Como encontrar o Template ID

1. No EmailJS, vá em **"Email Templates"**
2. Clique no template que você criou
3. O **Template ID** aparece no campo "Template ID" (geralmente algo como `template_xxxxx`)

## ✅ Após configurar

1. Salve o arquivo `.env.local`
2. Reinicie o servidor de desenvolvimento (`npm run dev`)
3. Teste o formulário
4. Os emails serão enviados automaticamente para:
   - `PRINTBAGLP@printbag.com.br`
   - `pedro.levorato@weisul.com.br`

## 🚀 Para produção (GitHub Pages)

Como o GitHub Pages não suporta variáveis de ambiente, você precisa:

1. **Opção 1:** Usar um serviço de build que suporte variáveis de ambiente (Vercel, Netlify)
2. **Opção 2:** Inserir as variáveis diretamente no código (não recomendado por segurança)
3. **Opção 3:** Usar um endpoint serverless que armazene as credenciais

Para GitHub Pages, recomendo criar um arquivo de configuração que será compilado no build.

