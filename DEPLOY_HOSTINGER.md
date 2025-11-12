# Guia de Deploy - Site Printbag na Hostinger

## 📋 Resumo do Projeto

Site institucional da Printbag desenvolvido com:
- **Next.js 14** (React Framework)
- **TypeScript** (Tipagem estática)
- **Tailwind CSS** (Estilização)
- **Cores**: Verde e Azul (identidade visual Printbag)

## 🚀 Como Fazer Deploy na Hostinger

### Opção 1: Deploy via Node.js (Recomendado)

1. **Acesse o painel da Hostinger**
   - Vá em "Hospedagem" → "Gerenciar"
   - Acesse o File Manager ou use FTP

2. **Faça upload dos arquivos**
   - Faça upload de todos os arquivos do projeto (exceto `node_modules`)

3. **Configure o Node.js**
   - No painel da Hostinger, vá em "Node.js"
   - Selecione a versão Node.js 20.x
   - Configure o comando de start: `npm start`
   - Configure o diretório: `/public_html` (ou o diretório onde fez upload)

4. **Instale as dependências e faça build**
   - Via SSH ou terminal da Hostinger, execute:
   ```bash
   npm install
   npm run build
   ```

5. **Configure o script de start**
   - No `package.json`, certifique-se de ter:
   ```json
   "scripts": {
     "start": "next start",
     "build": "next build"
   }
   ```

### Opção 2: Deploy como Site Estático (Mais Simples)

1. **Configure o Next.js para export estático**
   - No arquivo `next.config.js`, descomente:
   ```javascript
   output: 'export',
   ```

2. **Faça o build local**
   ```bash
   npm run build
   ```

3. **Faça upload da pasta `out`**
   - Após o build, será criada a pasta `out` com os arquivos estáticos
   - Faça upload de todo o conteúdo da pasta `out` para a Hostinger
   - Coloque os arquivos na pasta `public_html` ou `www`

4. **Configure o domínio**
   - No painel da Hostinger, aponte o domínio para a pasta onde fez upload

## 📁 Estrutura de Arquivos Importantes

```
Site institucional printbag/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal
│   │   ├── layout.tsx        # Layout base
│   │   └── globals.css       # Estilos globais
│   └── components/
│       ├── layout/           # Header e Footer
│       ├── sections/         # Seções do site
│       └── ui/               # Componentes reutilizáveis
├── public/
│   └── images/               # Imagens e vídeos
├── next.config.js            # Configuração Next.js
├── tailwind.config.ts        # Configuração Tailwind
└── package.json              # Dependências
```

## ⚙️ Configurações Importantes

### next.config.js (Para produção estática)
```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Descomente para site estático
  images: {
    unoptimized: true,
  },
}
```

### Variáveis de Ambiente (se necessário)
Crie um arquivo `.env.local` se precisar de variáveis:
```
NEXT_PUBLIC_API_URL=sua_url_aqui
```

## 🔧 Comandos Úteis

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar erros
npm run lint
```

## 📝 Checklist de Deploy

- [ ] Fazer build do projeto (`npm run build`)
- [ ] Testar localmente antes de fazer upload
- [ ] Verificar se todas as imagens estão na pasta `public/images`
- [ ] Configurar Node.js na Hostinger (se usar servidor Node)
- [ ] Fazer upload dos arquivos
- [ ] Configurar domínio/apontamento
- [ ] Testar o site online
- [ ] Verificar se o formulário de contato está funcionando

## 🌐 URLs Importantes

- **Webhook do formulário**: `https://ia-n8n.4xfwtv.easypanel.host/webhook/9bb8cab3-e473-4c6b-9faa-bfd68115c8b9`
- **E-mail de contato**: `marketing@printbag.com.br`
- **Telefone**: `(47) 3241-0800`

## 🎨 Características do Site

- ✅ Design responsivo (mobile e desktop)
- ✅ Cores verde e azul da Printbag
- ✅ Carrossel automático de parceiros
- ✅ Vídeo na seção "Sobre"
- ✅ Formulário de contato com webhook integrado
- ✅ Animações suaves
- ✅ SEO otimizado

## 📞 Suporte

Em caso de dúvidas sobre o deploy, consulte:
- Documentação da Hostinger: https://www.hostinger.com.br/tutoriais
- Documentação Next.js: https://nextjs.org/docs

---

**Desenvolvido por Pedro Levorato**


