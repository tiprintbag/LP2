'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
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

  // Função para enviar email diretamente usando EmailJS
  const sendEmail = async (data: typeof formData) => {
    // Configurações do EmailJS (serão configuradas via variáveis de ambiente)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    // Se não tiver configurações, usar fallback para endpoint customizado
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS não configurado. Usando endpoint alternativo.')
      // Aqui você pode usar um endpoint serverless ou outro serviço
      return false
    }

    try {
      console.log('Enviando email com dados:', data)

      // Preparar template params - dados simples do formulário
      const templateParams = {
        nome: data.nome,
        email: data.email,
        empresa: data.empresa || 'Não informado',
        telefone: data.telefone,
        lojas: data.lojas,
        segmento: data.segmento,
      }

      // Enviar email usando EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      console.log('Email enviado com sucesso')
      return true
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      return false
    }
  }

  // Função para enviar dados para o webhook n8n
  const sendToWebhook = async (data: typeof formData) => {
    const webhookUrl = 'https://weisul-n8n.sburs0.easypanel.host/webhook/391ee2df-11e9-457e-9865-14c19f422f6d'

    try {
      console.log('Enviando dados para webhook:', data)
      console.log('URL do webhook:', webhookUrl)

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      console.log('Resposta do webhook - Status:', response.status)
      console.log('Resposta do webhook - Headers:', response.headers)

      // Alguns webhooks retornam 200 mesmo sem JSON
      if (response.ok) {
        let responseData
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          responseData = await response.json()
        } else {
          const text = await response.text()
          console.log('Resposta do webhook (texto):', text)
          responseData = { message: text || 'Webhook recebido com sucesso' }
        }
        console.log('Dados recebidos do webhook:', responseData)
        return { success: true, data: responseData }
      } else {
        const errorText = await response.text()
        console.error('Erro na resposta do webhook:', errorText)
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
      }
    } catch (error) {
      console.error('Erro ao enviar para webhook:', error)
      console.error('Detalhes do erro:', {
        message: error instanceof Error ? error.message : 'Erro desconhecido',
        stack: error instanceof Error ? error.stack : undefined
      })
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

    // Envia email e webhook em paralelo
    try {
      // Envia email e webhook simultaneamente (não bloqueia a UI)
      const [emailResult, webhookResult] = await Promise.allSettled([
        sendEmail(dataToSend),
        sendToWebhook(dataToSend),
      ])

      // Verifica resultados
      const emailSuccess = emailResult.status === 'fulfilled' && emailResult.value === true
      const webhookSuccess = webhookResult.status === 'fulfilled' && webhookResult.value.success === true

      if (webhookSuccess) {
        // Sucesso - mostra mensagem positiva
        alert('Obrigado! Seus dados foram enviados com sucesso. Entraremos em contato em breve.')
      } else if (emailSuccess) {
        // Email enviado, mas webhook falhou
        alert('Seus dados foram recebidos. Entraremos em contato em breve.')
      } else {
        // Ambos falharam
        throw new Error('Erro ao enviar dados. Por favor, tente novamente.')
      }
    } catch (error) {
      console.error('Erro no envio:', error)
      alert('Erro ao enviar os dados. Por favor, tente novamente ou entre em contato diretamente.')
    } finally {
      // Limpa o formulário
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        lojas: '1',
        segmento: 'Moda e Vestuário',
      })
      
      setIsSubmitting(false)
    }
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


