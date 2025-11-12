# 🌐 Configurando Domínio Personalizado no GitHub Pages

## ⚠️ Problema

Quando você configura um domínio personalizado no GitHub Pages, o site é servido na **raiz do domínio** (ex: `https://meudominio.com`), mas o código estava configurado com `basePath: '/LP2'`, causando erros de carregamento de CSS, JS e imagens.

## ✅ Solução Implementada

O projeto agora suporta **ambos os cenários**:
- ✅ **GitHub Pages padrão**: `https://tiprintbag.github.io/LP2` (com `/LP2` no basePath)
- ✅ **Domínio personalizado**: `https://meudominio.com` (sem basePath)

## 🚀 Como Usar

### Opção 1: Build Manual para Domínio Personalizado

Se você vai fazer deploy manual usando `gh-pages`:

```bash
# Build para domínio personalizado (sem /LP2)
npm run build:custom-domain

# Deploy
npm run deploy:custom-domain
```

### Opção 2: GitHub Actions (Recomendado)

O workflow do GitHub Actions pode ser configurado para detectar automaticamente ou você pode criar um workflow separado.

#### Workflow Automático (Detecta via variável de ambiente)

O workflow atual já está preparado. Para usar com domínio personalizado, você precisa:

1. **Configurar variável de ambiente no GitHub**:
   - Vá em: Settings → Secrets and variables → Actions
   - Adicione uma nova variável: `USE_CUSTOM_DOMAIN` = `true`

2. **Ou criar um workflow separado** (veja exemplo abaixo)

#### Workflow Separado para Domínio Personalizado

Crie `.github/workflows/deploy-custom-domain.yml`:

```yaml
name: Deploy to Custom Domain

on:
  workflow_dispatch:  # Execução manual
  push:
    branches: ["main"]
    paths:
      - '.github/workflows/deploy-custom-domain.yml'

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build with Next.js (Custom Domain)
        run: npm run build:custom-domain
        env:
          NODE_ENV: production
          USE_CUSTOM_DOMAIN: true

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 📋 Passo a Passo Completo

### 1. Configurar Domínio no GitHub Pages

1. Acesse: https://github.com/tiprintbag/LP2/settings/pages
2. Em **"Custom domain"**, digite seu domínio (ex: `www.meudominio.com`)
3. Marque **"Enforce HTTPS"**
4. Clique em **"Save"**

### 2. Configurar DNS

Configure os registros DNS do seu domínio:

**Opção A: Registro A (Recomendado)**
```
@    A    185.199.108.153
@    A    185.199.109.153
@    A    185.199.110.153
@    A    185.199.111.153
```

**Opção B: Registro CNAME**
```
www  CNAME  tiprintbag.github.io
```

### 3. Fazer Build e Deploy

**Para domínio personalizado:**
```bash
npm run build:custom-domain
npm run deploy:custom-domain
```

**Para GitHub Pages padrão (com /LP2):**
```bash
npm run build
npm run deploy
```

### 4. Aguardar Propagação

- ⏱️ DNS: 5 minutos a 48 horas
- ⏱️ GitHub Pages: 2-10 minutos após deploy

## 🔍 Como Funciona

### Arquivo `src/utils/paths.ts`

Este arquivo contém a função `getAssetPath()` que detecta automaticamente se está usando domínio personalizado:

```typescript
// Com domínio personalizado (USE_CUSTOM_DOMAIN=true)
getAssetPath('/images/logo.png') → '/images/logo.png'

// Com GitHub Pages padrão (sem variável)
getAssetPath('/images/logo.png') → '/LP2/images/logo.png'
```

### Arquivo `next.config.js`

O `basePath` é configurado dinamicamente:

```javascript
basePath: process.env.USE_CUSTOM_DOMAIN === 'true' ? '' : '/LP2'
```

## ✅ Verificações

Após configurar, verifique:

1. ✅ CSS carrega corretamente
2. ✅ JavaScript funciona
3. ✅ Imagens aparecem
4. ✅ Vídeos funcionam
5. ✅ Navegação entre páginas funciona

## 🆘 Problemas Comuns

### CSS não carrega
- Verifique se fez build com `build:custom-domain`
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique o console do navegador para erros 404

### Imagens não aparecem
- Verifique se todos os componentes usam `getAssetPath()`
- Verifique se as imagens estão em `public/images/`

### Domínio não funciona
- Verifique se o DNS está configurado corretamente
- Aguarde até 48 horas para propagação DNS
- Verifique se o domínio está verificado no GitHub

## 📝 Notas Importantes

- ⚠️ **Não misture builds**: Se usar domínio personalizado, sempre use `build:custom-domain`
- ⚠️ **GitHub Pages padrão**: Continue usando `build` normal para `tiprintbag.github.io/LP2`
- ✅ **Ambos funcionam**: O código suporta ambos os cenários automaticamente

## 🔄 Alternar Entre Modos

Se precisar alternar entre GitHub Pages padrão e domínio personalizado:

1. **Para domínio personalizado**: Use `npm run build:custom-domain`
2. **Para GitHub Pages padrão**: Use `npm run build`

O código detecta automaticamente qual modo usar baseado na variável `USE_CUSTOM_DOMAIN`.

