import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaArrowRight, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'
// Import da imagem do cliente
// Adicione a imagem em: src/assets/client-image.png
import clientImageSrc from '../assets/client-image.png'

/**
 * Hero Section inspirado no layout Trust Global Mobility
 * Layout dividido: texto à esquerda, formulário à direita, cliente centralizado
 */
type HeroFormData = {
  email: string
  nome: string
  telefone: string
  formacao: string
  passaporte: string
}

const Hero = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<HeroFormData>()

  const onSubmit = (data: HeroFormData) => {
    const number = '5511999590598'
    const msg = `Olá! Meu nome é ${data.nome}. E-mail: ${data.email}. Telefone: ${data.telefone}. Formação: ${data.formacao}. Passaporte: ${data.passaporte}. Gostaria de ajuda para emitir meu Visto.`
    const appUrl = `whatsapp://send?phone=${number}&text=${encodeURIComponent(msg)}`
    const webUrl = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
    window.location.href = appUrl
    setTimeout(() => {
      window.open(webUrl, '_blank')
    }, 1200)
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      {/* Imagem da bandeira americana como fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bandeira-americana.jfif)',
        }}
      />
      
      {/* Gradiente fade do azul (esquerda) para transparente (direita) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #002868 0%, rgba(0, 40, 104, 0.8) 35%, rgba(0, 40, 104, 0.4) 65%, rgba(0, 0, 0, 0.1) 100%)',
        }}
      />
      
      {/* Overlay sutil para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end pt-32 relative min-h-[100dvh]">
          {/* Seção Esquerda - Texto e Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white relative z-20 lg:col-span-4 order-1 lg:order-1 text-center lg:text-left self-center pb-20"
          >
            {/* Logo - você pode adicionar seu logo aqui */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 flex justify-center lg:justify-start"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-36 w-auto mx-auto lg:mx-0"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 leading-tight"
            >
              Expanda seus negócios e conquiste novas oportunidades nos{' '}
              <span className="text-yellow-300 block mt-2">Estados Unidos</span>
            </motion.h1>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                <FaCheckCircle className="text-yellow-300 text-sm" />
                <span className="text-white text-xs font-medium">95% Taxa de Aprovação</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                <FaShieldAlt className="text-yellow-300 text-sm" />
                <span className="text-white text-xs font-medium">Atendimento Seguro</span>
              </div>
            </motion.div>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm sm:text-base mb-8 text-gray-100 leading-relaxed"
            >
              Consultoria especializada em vistos de trabalho e investimento para ajudar profissionais qualificados e empresários brasileiros a viver, empreender e crescer com segurança no mercado norte-americano.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/5511999590598?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20emitir%20um%20visto"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 40, 104, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-usa-blue px-8 py-4 rounded-lg text-sm lg:text-base font-bold hover:bg-yellow-300 hover:text-usa-blue transition-all duration-300 shadow-2xl border-2 border-transparent hover:border-yellow-400 cursor-pointer"
            >
              Começar Agora
            </motion.a>
          </motion.div>

          {/* Seção Central - Imagem do Cliente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center relative z-10 lg:col-span-4 order-2 lg:order-2 mt-auto"
          >
            <div className="relative w-full max-w-lg lg:w-[180%] lg:max-w-none lg:-ml-[40%]">
                <ClientImage />
            </div>
          </motion.div>

          {/* Seção Direita - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-20 lg:col-span-4 order-3 lg:order-3 mt-8 lg:mt-0 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-lg sm:text-xl font-bold mb-2 text-center max-w-sm mx-auto lg:mx-0"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
            >
              Fale com um Especialista
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-white/90 text-sm mb-6 text-center max-w-sm mx-auto lg:mx-0"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
            >
              Preencha o formulário e receba uma análise gratuita
            </motion.p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-7 max-w-sm mx-auto lg:mx-0 border border-white/20"
            >
              <div className="space-y-3">
                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                    <span className="text-usa-blue">✉</span>
                    E-mail profissional
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido',
                      },
                    })}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-usa-blue focus:outline-none focus:ring-2 focus:ring-usa-blue/20 transition-all text-sm bg-white/50 backdrop-blur-sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <span>⚠</span>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Nome */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                    <span className="text-usa-blue">👤</span>
                    Nome completo
                  </label>
                  <input
                    type="text"
                    {...register('nome', {
                      required: 'Nome é obrigatório',
                      minLength: {
                        value: 3,
                        message: 'Nome deve ter pelo menos 3 caracteres',
                      },
                    })}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-usa-blue focus:outline-none focus:ring-2 focus:ring-usa-blue/20 transition-all text-sm bg-white/50 backdrop-blur-sm"
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <span>⚠</span>
                      {errors.nome.message}
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                    <span className="text-usa-blue">📱</span>
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    {...register('telefone', {
                      required: 'Telefone é obrigatório',
                      pattern: {
                        value: /^(\d{10,14}|\(\d{2}\)\s?\d{4,5}-?\d{4})$/,
                        message: 'Formato: (XX) XXXXX-XXXX ou apenas números',
                      },
                    })}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-usa-blue focus:outline-none focus:ring-2 focus:ring-usa-blue/20 transition-all text-sm bg-white/50 backdrop-blur-sm"
                  />
                  {errors.telefone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <span>⚠</span>
                      {errors.telefone.message}
                    </p>
                  )}
                </div>

                {/* Formação */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-xs">
                    Qual é a sua formação acadêmica?
                  </label>
                  <input
                    type="text"
                    {...register('formacao', {
                      required: 'Formação é obrigatória',
                    })}
                    placeholder="Digite sua formação"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-usa-blue focus:outline-none transition-colors text-xs"
                  />
                  {errors.formacao && (
                    <p className="text-red-500 text-[10px] mt-0.5">{errors.formacao.message}</p>
                  )}
                </div>

                {/* Passaporte */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-xs">
                    Você já possui passaporte?
                  </label>
                  <input
                    type="text"
                    {...register('passaporte', {
                      required: 'Por favor, informe se possui passaporte',
                    })}
                    placeholder="Você possui passaporte?"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-usa-blue focus:outline-none transition-colors text-xs"
                  />
                  {errors.passaporte && (
                    <p className="text-red-500 text-[10px] mt-0.5">{errors.passaporte.message}</p>
                  )}
                </div>

                {/* Botão Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(0, 40, 104, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-usa-blue to-usa-light-blue text-white px-6 py-4 rounded-lg font-bold hover:from-usa-light-blue hover:to-usa-blue transition-all duration-300 flex items-center justify-center space-x-2 mt-4 text-sm shadow-lg border border-transparent"
                >
                  <span>Enviar análise gratuita</span>
                  <FaArrowRight className="text-yellow-300" />
                </motion.button>
                
                {/* Trust indicators */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                    <FaShieldAlt className="text-usa-blue" />
                    Seus dados estão 100% seguros
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Componente para imagem do cliente
 * Imagem PNG recortada que sobrepõe o layout
 */
const ClientImage = () => {
  return (
    <motion.img
      src={clientImageSrc}
      alt="Cliente"
      className="w-full h-auto object-contain object-bottom max-h-[70vh] lg:max-h-[120vh] lg:object-center lg:object-bottom"
      style={{
        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
      }}
    />
  )
}

export default Hero
