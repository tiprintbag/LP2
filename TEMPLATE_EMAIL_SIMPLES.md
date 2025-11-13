# Template de Email Simples para EmailJS

## 📧 Configuração do Template

No EmailJS, crie um template simples com o seguinte conteúdo:

### Configurações do Template:

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
Novo Lead - Printbag
```

**Content (HTML):**
```html
<h2>Novo Lead Cadastrado</h2>

<p><strong>Nome:</strong> {{nome}}</p>
<p><strong>E-mail:</strong> {{email}}</p>
<p><strong>Empresa:</strong> {{empresa}}</p>
<p><strong>Telefone/WhatsApp:</strong> {{telefone}}</p>
<p><strong>Número de Lojas:</strong> {{lojas}}</p>
<p><strong>Segmento:</strong> {{segmento}}</p>

<hr>
<p><em>Enviado através do formulário de contato do site Printbag</em></p>
```

**Content (Texto Simples - alternativa):**
```
Novo Lead Cadastrado

Nome: {{nome}}
E-mail: {{email}}
Empresa: {{empresa}}
Telefone/WhatsApp: {{telefone}}
Número de Lojas: {{lojas}}
Segmento: {{segmento}}

Enviado através do formulário de contato do site Printbag
```

## ✅ Variáveis do Template

O template usa estas variáveis que são enviadas automaticamente:
- `{{nome}}` - Nome do lead
- `{{email}}` - Email do lead
- `{{empresa}}` - Empresa (ou "Não informado")
- `{{telefone}}` - Telefone/WhatsApp
- `{{lojas}}` - Número de lojas
- `{{segmento}}` - Segmento de atuação

## 📝 Após criar o template

1. Salve o template
2. Copie o **Template ID** (aparece no campo "Template ID")
3. Configure no arquivo `.env.local` ou no `next.config.js`

