// Endpoint para enviar email via SMTP
// Este arquivo pode ser usado em Vercel Serverless Functions, Netlify Functions, ou qualquer serviço serverless

const nodemailer = require('nodemailer');

// Configuração SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.printbag.com.br',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true para porta 465, false para outras portas
  auth: {
    user: process.env.SMTP_USER || 'ti@printbag.com.br',
    pass: process.env.SMTP_PASS || '2GJY_3B*R4qCWMf6Xh424h',
  },
});

// Destinatários
const RECIPIENTS = [
  'PRINTBAGLP@printbag.com.br',
  'pedro.levorato@weisul.com.br',
];

exports.handler = async (event) => {
  // Permitir apenas POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Validar dados obrigatórios
    if (!data.nome || !data.email || !data.telefone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Campos obrigatórios faltando' }),
      };
    }

    // Preparar conteúdo do email
    const htmlContent = `
      <h2>Nova Solicitação de Orçamento - Printbag</h2>
      <p><strong>Nome:</strong> ${data.nome}</p>
      <p><strong>E-mail:</strong> ${data.email}</p>
      <p><strong>Empresa:</strong> ${data.empresa || 'Não informado'}</p>
      <p><strong>Telefone/WhatsApp:</strong> ${data.telefone}</p>
      <p><strong>Número de Lojas:</strong> ${data.lojas || '1'}</p>
      <p><strong>Segmento:</strong> ${data.segmento || 'Não informado'}</p>
      <hr>
      <p><em>Enviado através do formulário de contato do site Printbag</em></p>
    `;

    // Enviar email para todos os destinatários
    const emailPromises = RECIPIENTS.map((recipient) =>
      transporter.sendMail({
        from: 'ti@printbag.com.br',
        to: recipient,
        subject: 'Nova Solicitação de Orçamento - Printbag',
        html: htmlContent,
      })
    );

    await Promise.all(emailPromises);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email enviado com sucesso' 
      }),
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erro ao enviar email',
        details: error.message 
      }),
    };
  }
};

