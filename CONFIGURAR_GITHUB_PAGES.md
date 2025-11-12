# 🔧 Como Configurar GitHub Pages

## ⚠️ Erro 404 - Site não encontrado

Se você está vendo um erro 404, siga estes passos:

## 📋 Passo a Passo

### 1. Acesse as Configurações do Repositório
- Vá para: https://github.com/tiprintbag/LP2
- Clique em **Settings** (Configurações)
- No menu lateral, clique em **Pages**

### 2. Configure a Fonte do GitHub Pages

Você tem duas opções:

#### Opção A: Usar GitHub Actions (Recomendado)
1. Em **Source**, selecione **GitHub Actions**
2. O workflow `.github/workflows/deploy.yml` já está configurado
3. Ele será acionado automaticamente a cada push na branch `main`

#### Opção B: Usar Branch gh-pages (Alternativa)
1. Em **Source**, selecione **Deploy from a branch**
2. Selecione a branch: **gh-pages**
3. Selecione a pasta: **/ (root)**
4. Clique em **Save**

### 3. Aguarde o Deploy
- Se usar GitHub Actions, aguarde alguns minutos após o push
- Se usar branch gh-pages, o deploy já foi feito com `npm run deploy`

### 4. Verifique a URL
- O site deve estar disponível em: **https://tiprintbag.github.io/LP2**
- ⚠️ **IMPORTANTE**: A URL inclui `/LP2` no final devido ao basePath

### 5. Se ainda não funcionar

1. **Verifique se o workflow rodou:**
   - Vá em **Actions** no repositório
   - Veja se há workflows executados
   - Se houver erros, clique para ver os detalhes

2. **Verifique a branch gh-pages:**
   - Vá em **Code** → **branches**
   - Verifique se a branch `gh-pages` existe
   - Veja se ela contém os arquivos da pasta `out`

3. **Limpe o cache do navegador:**
   - Pressione Ctrl+F5 ou Ctrl+Shift+R
   - Ou abra em uma janela anônima

## 🔍 Verificações

- ✅ Workflow `.github/workflows/deploy.yml` existe
- ✅ Script `npm run deploy` funciona localmente
- ✅ Build gera arquivos na pasta `out`
- ✅ Arquivo `.nojekyll` é criado automaticamente

## 📝 Notas Importantes

- O site usa `basePath: '/LP2'`, então a URL completa é: `https://tiprintbag.github.io/LP2`
- Não acesse apenas `https://tiprintbag.github.io` - isso dará 404
- O GitHub Pages pode levar alguns minutos para atualizar após o deploy

## 🆘 Ainda com problemas?

1. Verifique se o repositório é público (GitHub Pages gratuito só funciona em repositórios públicos)
2. Verifique se você tem permissões de administrador no repositório
3. Tente fazer um novo commit e push para acionar o workflow novamente

