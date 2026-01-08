# E-mail de Apresentação - Site Institucional Printbag

---

**Assunto:** Apresentação do Projeto - Site Institucional Printbag

---

Prezado(a) [Nome],

Espero que este e-mail o encontre bem. Gostaria de apresentar o projeto do **Site Institucional da Printbag**, desenvolvido com foco em modernidade, performance e experiência do usuário.

## 📋 Visão Geral do Projeto

O site foi desenvolvido para a **Printbag**, empresa especializada em embalagens de papel personalizadas e sustentáveis, localizada em Camboriú - SC. O objetivo principal foi criar uma presença digital moderna que refletisse os valores da empresa: inovação, sustentabilidade e qualidade.

**URL do Site:** www.embalagensprintbag.com

## 🚀 Stack Tecnológico

O projeto foi construído utilizando tecnologias modernas e de alta performance:

### Frontend
- **Next.js 14** - Framework React com renderização estática (SSG) para máxima performance e SEO
- **React 18** - Biblioteca JavaScript com componentes funcionais e hooks modernos
- **TypeScript** - Tipagem estática para maior segurança e manutenibilidade do código
- **Tailwind CSS** - Framework CSS utilitário para desenvolvimento ágil e design responsivo

### Integrações e Ferramentas
- **EmailJS** - Envio de e-mails diretamente do cliente sem necessidade de backend
- **n8n Webhook** - Integração para captura de leads e automação de processos
- **Google Tag Manager** - Rastreamento e analytics
- **GitHub Pages** - Hospedagem estática com domínio personalizado

### DevOps e Deploy
- **Git/GitHub** - Controle de versão e CI/CD
- **Scripts de Build Customizados** - Automação para diferentes ambientes (GitHub Pages padrão e domínio personalizado)
- **Static Site Generation (SSG)** - Export estático para otimização de performance

## 🎨 Processo Criativo

### Identidade Visual
O design foi desenvolvido seguindo a identidade visual da Printbag, utilizando:
- **Paleta de Cores:** Verde (primary) e Azul, representando sustentabilidade e confiança
- **Tipografia:** Hierarquia clara com tamanhos responsivos para diferentes dispositivos
- **Elementos Visuais:** Gradientes sutis, sombras suaves e transições fluidas

### Estrutura e UX
O site foi organizado em seções estratégicas para guiar o usuário através de uma jornada clara:

1. **Hero Section** - Impacto visual imediato com mensagem principal e CTAs
2. **Logos Strip** - Animação infinita de parceiros (carrossel horizontal)
3. **Features** - Diferenciais da empresa (Personalização, Certificação FSC, Entrega Rápida, Atendimento)
4. **Sobre** - História, missão, visão e valores, com vídeo integrado
5. **Produtos** - Showcase visual dos produtos
6. **Contato** - Formulário completo com validação e feedback visual

### Responsividade
Design totalmente responsivo com breakpoints otimizados para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)
- Extra Large (1536px+)

## ⚙️ Aspectos Técnicos

### Arquitetura
O projeto segue uma arquitetura modular e escalável:

```
src/
├── app/              # App Router do Next.js 14
│   ├── layout.tsx   # Layout principal com metadata e GTM
│   └── page.tsx     # Página inicial
├── components/
│   ├── layout/      # Header e Footer reutilizáveis
│   ├── sections/    # Seções modulares do site
│   └── ui/          # Componentes UI reutilizáveis (Button, Card, Badge)
└── utils/           # Funções utilitárias (paths, helpers)
```

### Funcionalidades Implementadas

#### 1. Sistema de Formulário Avançado
- **Validação em tempo real** com feedback visual
- **Máscara de telefone** automática (formato brasileiro)
- **Envio duplo:** EmailJS + Webhook n8n em paralelo
- **Sistema de retry** com até 4 tentativas para garantir entrega
- **Tratamento de erros** robusto com mensagens amigáveis
- **Prevenção de scroll** automático após envio

#### 2. Gerenciamento de Assets Inteligente
- **Função `getAssetPath()`** que detecta automaticamente o ambiente
- **Suporte a múltiplos ambientes:**
  - Desenvolvimento (localhost)
  - GitHub Pages padrão (`/LP2`)
  - Domínio personalizado (sem basePath)
- **Scripts de build customizados** para cada cenário

#### 3. Animações e Performance
- **Animação CSS customizada** para carrossel infinito de logos
- **Lazy loading** de imagens para otimização
- **Otimização de assets** com tamanhos responsivos
- **Transições suaves** em hover e interações

#### 4. SEO e Acessibilidade
- **Metadata completa** (title, description, keywords)
- **Semântica HTML5** correta
- **Alt texts** em todas as imagens
- **Estrutura de headings** hierárquica
- **Google Tag Manager** integrado

### Desafios Técnicos Resolvidos

1. **Deploy Multi-Ambiente**
   - Sistema que detecta automaticamente se está em domínio personalizado ou GitHub Pages
   - Scripts de build diferentes para cada cenário
   - Correção automática de caminhos de assets

2. **Integração de Formulário**
   - Resolução de problemas de CORS
   - Implementação de retry logic para garantir entrega
   - Integração simultânea com EmailJS e webhook n8n

3. **Otimização de Performance**
   - Static Site Generation (SSG) para carregamento instantâneo
   - Lazy loading de imagens e componentes
   - Minificação e otimização automática de assets

## 📊 Diferenciais do Projeto

1. **Performance Excepcional**
   - Site 100% estático com carregamento instantâneo
   - Otimização de imagens e assets
   - Sem dependências de servidor

2. **Manutenibilidade**
   - Código TypeScript com tipagem forte
   - Componentes modulares e reutilizáveis
   - Estrutura clara e documentada

3. **Escalabilidade**
   - Fácil adicionar novas seções
   - Sistema de componentes UI reutilizáveis
   - Preparado para crescimento futuro

4. **Experiência do Usuário**
   - Design moderno e intuitivo
   - Navegação fluida e responsiva
   - Feedback visual em todas as interações

## 🎯 Resultados e Entregas

✅ Site totalmente funcional e responsivo  
✅ Formulário de contato integrado com EmailJS e n8n  
✅ Deploy automatizado no GitHub Pages com domínio personalizado  
✅ SEO otimizado e Google Tag Manager configurado  
✅ Performance otimizada com SSG  
✅ Código limpo, documentado e manutenível  

## 📝 Próximos Passos (Opcional)

- Implementação de blog/notícias
- Área de catálogo de produtos
- Sistema de orçamento online
- Integração com CRM
- Dashboard de analytics

---

## 📞 Contato

Fico à disposição para qualquer dúvida, ajuste ou discussão sobre o projeto.

**Desenvolvido por:** Pedro Levorato  
**E-mail:** pedro.levorato@weisul.com.br

---

*Este projeto representa um compromisso com qualidade, modernidade e excelência técnica, alinhado com os valores da Printbag de inovação e sustentabilidade.*

---

