'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    lojas: '1',
    segmento: 'Moda e Vestuário',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Máscara para telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length <= 11) {
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      }
    }
    setFormData({
      ...formData,
      telefone: value,
    })
  }

  // Função para enviar para o webhook em background (não bloqueia a UI)
  const sendToWebhook = async (data: typeof formData) => {
    const webhookUrl = 'https://ia-n8n.4xfwtv.easypanel.host/webhook/9bb8cab3-e473-4c6b-9faa-bfd68115c8b9'
    const timeout = 5000 // 5 segundos (reduzido para melhor performance)

    try {
      console.log('Enviando dados para webhook:', data)

      // Cria um AbortController para timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        console.log('Webhook recebido com sucesso')
        return { success: true }
      } else {
        const errorText = await response.text()
        console.error('Erro na resposta do webhook:', errorText)
        return { success: false, error: `HTTP ${response.status}` }
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('Timeout ao enviar para webhook (mas dados podem ter sido recebidos)')
        return { success: false, error: 'Timeout' }
      }
      console.error('Erro ao enviar para webhook:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Prepara os dados do formulário
    const dataToSend = {
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      empresa: formData.empresa.trim(),
      telefone: formData.telefone.trim(),
      lojas: formData.lojas,
      segmento: formData.segmento,
    }

    // Envia para o webhook com dados de email incluídos
    // O webhook n8n deve estar configurado para enviar emails quando receber esses dados
    const webhookDataWithEmail = {
      ...dataToSend,
      // Informações para envio de email
      emailNotification: {
        to: ['PRINTBAGLP@printbag.com.br', 'pedro.levorato@weisul.com.br'],
        subject: 'Nova Solicitação de Orçamento - Printbag',
        html: `
          <h2>Nova Solicitação de Orçamento</h2>
          <p><strong>Nome:</strong> ${dataToSend.nome}</p>
          <p><strong>E-mail:</strong> ${dataToSend.email}</p>
          <p><strong>Empresa:</strong> ${dataToSend.empresa || 'Não informado'}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${dataToSend.telefone}</p>
          <p><strong>Número de Lojas:</strong> ${dataToSend.lojas}</p>
          <p><strong>Segmento:</strong> ${dataToSend.segmento}</p>
          <hr>
          <p><em>Enviado através do formulário de contato do site Printbag</em></p>
        `,
      },
    }

    // Mostra feedback imediato ao usuário (não espera o webhook)
    alert('Obrigado! Seus dados foram enviados com sucesso. Entraremos em contato em breve.')
    
    // Limpa o formulário imediatamente
    setFormData({
      nome: '',
      email: '',
      empresa: '',
      telefone: '',
      lojas: '1',
      segmento: 'Moda e Vestuário',
    })
    
    setIsSubmitting(false)

    // Envia para o webhook em background (não bloqueia a UI)
    sendToWebhook(webhookDataWithEmail as typeof formData)
      .then((result) => {
        if (result.success) {
          console.log('✅ Dados enviados com sucesso para o webhook')
        } else {
          console.warn('⚠ Webhook pode ter recebido os dados mesmo com erro:', result.error)
        }
      })
      .catch((error) => {
        console.error('❌ Erro ao enviar para webhook (mas formulário já foi limpo):', error)
      })
  }

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicite um orçamento personalizado ou tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Solicitar Orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="lojas" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de lojas
                </label>
                <select
                  id="lojas"
                  name="lojas"
                  value={formData.lojas}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4 ou mais">4 ou mais</option>
                </select>
              </div>

              <div>
                <label htmlFor="segmento" className="block text-sm font-medium text-gray-700 mb-2">
                  Segmento
                </label>
                <select
                  id="segmento"
                  name="segmento"
                  value={formData.segmento}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="Moda e Vestuário">Moda e Vestuário</option>
                  <option value="Cosméticos e Beleza">Cosméticos e Beleza</option>
                  <option value="Joias e Relógios">Joias e Relógios</option>
                  <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                  <option value="Tecnologia e Eletrônicos">Tecnologia e Eletrônicos</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Falar com um Consultor'}
              </Button>
            </form>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. José Francisco Bernardes, 1751 - Bairro Areias, Camboriú - SC, 88345-200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <a href="mailto:marketing@printbag.com.br" className="text-primary-600 hover:text-primary-700">
                      marketing@printbag.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <a href="tel:+554732410800" className="text-primary-600 hover:text-primary-700">
                      (47) 3241-0800
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-blue-50">
              <h4 className="font-semibold text-gray-900 mb-3">
                Horário de Atendimento
              </h4>
              <p className="text-gray-600 mb-2">
                Segunda a Sexta: 8h às 18h
              </p>
              <p className="text-gray-600">
                Sábado: 8h às 12h
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


