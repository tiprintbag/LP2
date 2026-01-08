# E-mail de Apresentação - Versão Concisa

---

**Assunto:** Apresentação do Projeto - Site Institucional Printbag

---

Oi pessoal do time de TI e Comercial!

Sei que o projeto já foi finalizado há um tempo, mas estou escrevendo essa documentação agora pra deixar registrado o funcionamento completo do sistema.

Queria apresentar pra vocês o **Site Institucional da Printbag**. O projeto está **100% funcional e no ar** em **www.embalagensprintbag.com**.

## Tecnologias que usei

**Pra galera de TI:**
- **Next.js 14** com TypeScript - Framework React com SSG (bem rápido)
- **React 18** - Componentes funcionais, tudo moderno
- **Tailwind CSS** - Desenvolvimento bem ágil
- **EmailJS** - Envio de e-mails direto do cliente (sem precisar de backend)
- **n8n Webhook** - Integração completa com workflow e CRM
- **GitHub Pages** - Deploy automático com domínio personalizado
- **Google Tag Manager** - Já configurado pra analytics

**O que isso significa pro time Comercial:**
- Formulário captura os leads automaticamente
- Envio duplo (EmailJS + n8n) pra garantir que nada se perca
- Leads são processados automaticamente no n8n e salvos no CRM Piperdrive
- Site funciona perfeitamente no celular, tablet e computador
- Carrega super rápido (melhor pra conversão)

## Como ficou o site

**Estrutura:**
1. **Hero** - Mensagem principal com botões de ação
2. **Logos dos parceiros** - Carrossel que roda infinito
3. **Diferenciais** - Personalização, Certificação FSC, Entrega Rápida, Atendimento
4. **Sobre** - História da empresa com vídeo
5. **Produtos** - Showcase visual
6. **Contato** - Formulário completo

**Design:**
- Cores da Printbag (verde e azul)
- Funciona perfeitamente em qualquer dispositivo
- Animações suaves, tudo bem polido
- SEO configurado pra aparecer bem no Google

## Detalhes técnicos

### Pra galera de TI:

**Arquitetura:**
- Código modular, componentes reutilizáveis
- TypeScript (type safety, menos bugs)
- Sistema de assets que funciona em qualquer ambiente
- Código limpo e documentado

**Formulário de Contato:**

O formulário foi desenvolvido com várias camadas de segurança e confiabilidade:

- **Validação em tempo real:** Campos obrigatórios são validados antes do envio, com feedback visual imediato
- **Máscara de telefone automática:** Formata automaticamente no padrão brasileiro (XX) XXXXX-XXXX
- **Sistema de retry inteligente:** Se houver qualquer falha no envio, o sistema tenta automaticamente até 4 vezes, com delay progressivo entre tentativas (1s, 2s, 3s)
- **Envio duplo em paralelo:** Cada lead é enviado simultaneamente para dois destinos:
  - **EmailJS:** Envia e-mail diretamente para PRINTBAGLP@printbag.com.br e pedro.levorato@weisul.com.br com todos os dados do formulário
  - **n8n Webhook:** Envia os dados para o webhook que processa e salva no CRM Piperdrive
- **Tratamento robusto de erros:** Sistema identifica e trata diferentes tipos de erro (CORS, timeout, network, etc) com mensagens específicas
- **Prevenção de perda de dados:** Mesmo se um dos envios falhar, o outro garante que o lead não seja perdido
- **Feedback visual:** Usuário recebe mensagem de sucesso ou erro clara após o envio

**Integração n8n e CRM:**

Foi desenvolvida uma integração completa no n8n que processa automaticamente todos os leads:

- **Webhook recebe os dados:** Quando alguém preenche o formulário, os dados são enviados para o webhook do n8n
- **Processamento automático:** O workflow no n8n processa os dados através de uma série de etapas:
  - Recebe os dados do webhook
  - Cria um registro de "person" (pessoa) no sistema
  - Cria um registro de "lead" (oportunidade) associado à pessoa
  - Salva tudo automaticamente no CRM Piperdrive
- **Rastreabilidade:** Todo o processo é rastreável no n8n, facilitando debug e monitoramento
- **Sem intervenção manual:** Tudo acontece automaticamente, sem necessidade de copiar/colar dados

**Performance:**
- SSG (Static Site Generation) - carrega na hora
- Lazy loading de imagens
- Deploy multi-ambiente (GitHub Pages + domínio personalizado)
- Scripts de build automatizados

### Pra galera Comercial:

**Captura de Leads:**

- Formulário bem simples e intuitivo de preencher
- Validação automática garante que todos os campos obrigatórios estejam preenchidos
- Cada lead é processado de três formas simultaneamente:
  1. E-mail enviado via EmailJS para PRINTBAGLP@printbag.com.br e pedro.levorato@weisul.com.br
  2. Dados enviados para o webhook n8n que processa e salva no CRM Piperdrive
  3. Sistema de retry garante que mesmo se houver falha, tenta novamente automaticamente
- Nenhum lead é perdido: mesmo se um dos sistemas falhar, os outros garantem o recebimento

**Experiência:**
- Site rápido e funciona em qualquer dispositivo
- Navegação bem intuitiva
- Design moderno e profissional

## Status

**Site no ar:** www.embalagensprintbag.com  
**100% funcional** (mobile, tablet, desktop)  
**Formulário integrado** (EmailJS + n8n + CRM Piperdrive)  
**Integração n8n completa** (webhook → processamento → CRM)  
**Performance otimizada** (carrega super rápido)  
**SEO configurado** (Google Tag Manager)  
**Código no GitHub** (fácil de manter e evoluir)  

## Próximos passos

O site está pronto pra uso e dá pra expandir fácil. Algumas ideias:
- Adicionar novas seções ou conteúdo
- Melhorias no workflow do n8n
- Catálogo de produtos
- Blog/notícias
- Sistema de orçamento online

**Repositório:** GitHub (time de TI tem acesso)

## Dúvidas ou ajustes?

Tô à disposição pra:
- Dúvidas técnicas (TI)
- Ajustes de conteúdo ou design (Comercial)
- Novas funcionalidades
- Explicar como manter o código

**Desenvolvido por:** Pedro Levorato  
**E-mail:** pedro.levorato@weisul.com.br

Qualquer coisa, é só chamar!

---

