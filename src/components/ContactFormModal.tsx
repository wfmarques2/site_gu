import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowRight, FaCheckCircle, FaShieldAlt, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { useContactModal } from '../contexts/ContactModalContext'

export type HeroFormData = {
  email: string
  nome: string
  telefone: string
  dataNascimento: string
  cidade: string
  estadoCivil: string
  profissao: string
  renda: string
  passaporte: string
}

const ContactFormModal = () => {
  const { isOpen, closeModal } = useContactModal()
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<HeroFormData>({
    defaultValues: { renda: 'R$ 0,00' },
  })
  const [rendaDisplay, setRendaDisplay] = useState('R$ 0,00')

  useEffect(() => {
    if (!isOpen) {
      reset({ renda: 'R$ 0,00' })
      setRendaDisplay('R$ 0,00')
    }
  }, [isOpen, reset])

  const onSubmit = (data: HeroFormData) => {
    const number = '5511999590598'
    const msg = `Olá! Meu nome é ${data.nome}. E-mail: ${data.email}. Telefone: ${data.telefone}. Data de Nascimento: ${data.dataNascimento}. Cidade: ${data.cidade}. Estado Civil: ${data.estadoCivil}. Profissão: ${data.profissao}. Renda mensal: ${data.renda}. Passaporte: ${data.passaporte}. Gostaria de um visto, pode me ajudar?`
    const webUrl = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
    window.open(webUrl, '_blank', 'noopener,noreferrer')
    closeModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed z-[9999] inset-0 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div className="relative w-full max-w-md mx-auto my-auto">
              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-3 -right-3 z-10 bg-white dark:bg-dark-card text-gray-700 dark:text-dark-text w-10 h-10 rounded-full shadow-xl flex items-center justify-center border border-gray-200 dark:border-dark-border"
                aria-label="Fechar formulário"
              >
                <FaTimes />
              </motion.button>

              <div className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 dark:border-dark-border overflow-hidden">
                <div className="bg-gradient-to-r from-usa-blue to-usa-light-blue dark:from-dark-surface dark:to-dark-card p-5 sm:p-6 border-b border-white/10 dark:border-dark-border">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3
                        id="contact-modal-title"
                        className="text-white dark:text-yellow-400 text-lg sm:text-xl font-bold flex items-center gap-2"
                      >
                        <FaCheckCircle className="text-yellow-300 dark:text-yellow-400" />
                        Fale com um Especialista
                      </h3>
                      <p className="text-white/90 dark:text-dark-muted text-sm mt-1">
                        Preencha o formulário e receba uma análise gratuita
                      </p>
                    </div>
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className="flex-shrink-0 flex flex-col items-center justify-center gap-1 bg-[#25D366] dark:bg-yellow-400 px-3 py-2 rounded-xl shadow-lg"
                    >
                      <FaWhatsapp className="text-white dark:text-dark-bg text-xl" />
                      <span className="text-[10px] sm:text-xs font-bold text-white dark:text-dark-bg whitespace-nowrap">
                        via WhatsApp
                      </span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="mt-4 bg-white/15 dark:bg-yellow-400/10 border border-white/20 dark:border-yellow-400/30 rounded-lg px-3 py-2 flex items-start gap-2"
                  >
                    <FaWhatsapp className="text-yellow-300 dark:text-yellow-400 mt-0.5 text-sm flex-shrink-0" />
                    <p className="text-[11px] sm:text-xs text-white/95 dark:text-dark-text leading-snug">
                      Ao enviar, você será <strong>redirecionado diretamente para o WhatsApp</strong> com todos os seus dados já preenchidos na mensagem. É só clicar em enviar lá também!
                    </p>
                  </motion.div>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-5 sm:p-6"
                >
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-semibold mb-2 text-sm flex items-center gap-2">
                        <span className="text-usa-blue dark:text-yellow-400">✉</span>
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
                        className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border rounded-lg focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-usa-blue/20 dark:focus:ring-yellow-400/20 transition-all text-sm bg-white/50 dark:bg-dark-surface/80 backdrop-blur-sm text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-semibold mb-2 text-sm flex items-center gap-2">
                        <span className="text-usa-blue dark:text-yellow-400">👤</span>
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
                        className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border rounded-lg focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-usa-blue/20 dark:focus:ring-yellow-400/20 transition-all text-sm bg-white/50 dark:bg-dark-surface/80 backdrop-blur-sm text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted"
                      />
                      {errors.nome && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.nome.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-semibold mb-2 text-sm flex items-center gap-2">
                        <span className="text-usa-blue dark:text-yellow-400">📱</span>
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
                        className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border rounded-lg focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-usa-blue/20 dark:focus:ring-yellow-400/20 transition-all text-sm bg-white/50 dark:bg-dark-surface/80 backdrop-blur-sm text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted"
                      />
                      {errors.telefone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.telefone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-semibold mb-2 text-sm flex items-center gap-2">
                        <span className="text-usa-blue dark:text-yellow-400">🎂</span>
                        Data de nascimento
                      </label>
                      <input
                        type="date"
                        {...register('dataNascimento', {
                          required: 'Data de nascimento é obrigatória',
                        })}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border rounded-lg focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-usa-blue/20 dark:focus:ring-yellow-400/20 transition-all text-sm bg-white/50 dark:bg-dark-surface/80 backdrop-blur-sm text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted"
                      />
                      {errors.dataNascimento && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.dataNascimento.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-semibold mb-2 text-sm flex items-center gap-2">
                        <span className="text-usa-blue dark:text-yellow-400">📍</span>
                        Cidade
                      </label>
                      <input
                        type="text"
                        {...register('cidade', {
                          required: 'Cidade é obrigatória',
                          minLength: {
                            value: 2,
                            message: 'Nome da cidade inválido',
                          },
                        })}
                        placeholder="Sua cidade"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border rounded-lg focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-usa-blue/20 dark:focus:ring-yellow-400/20 transition-all text-sm bg-white/50 dark:bg-dark-surface/80 backdrop-blur-sm text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted"
                      />
                      {errors.cidade && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.cidade.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-semibold mb-2 text-sm flex items-center gap-2">
                        <span className="text-usa-blue dark:text-yellow-400">💍</span>
                        Estado civil
                      </label>
                      <select
                        {...register('estadoCivil', {
                          required: 'Estado civil é obrigatório',
                        })}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border rounded-lg focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-usa-blue/20 dark:focus:ring-yellow-400/20 transition-all text-sm bg-white/50 dark:bg-dark-surface/80 backdrop-blur-sm text-gray-800 dark:text-dark-text appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="Solteiro(a)">Solteiro(a)</option>
                        <option value="Casado(a)">Casado(a)</option>
                        <option value="Divorciado(a)">Divorciado(a)</option>
                        <option value="Viúvo(a)">Viúvo(a)</option>
                        <option value="Separado(a)">Separado(a)</option>
                        <option value="União estável">União estável</option>
                      </select>
                      {errors.estadoCivil && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.estadoCivil.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-semibold mb-2 text-sm flex items-center gap-2">
                        <span className="text-usa-blue dark:text-yellow-400">💼</span>
                        Profissão
                      </label>
                      <input
                        type="text"
                        {...register('profissao', {
                          required: 'Profissão é obrigatória',
                          minLength: {
                            value: 2,
                            message: 'Profissão inválida',
                          },
                        })}
                        placeholder="Sua profissão"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border rounded-lg focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-usa-blue/20 dark:focus:ring-yellow-400/20 transition-all text-sm bg-white/50 dark:bg-dark-surface/80 backdrop-blur-sm text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted"
                      />
                      {errors.profissao && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span>
                          {errors.profissao.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-medium mb-1 text-xs">
                        Qual é a sua renda mensal?
                      </label>
                      <input
                        type="text"
                        {...register('renda', {
                          required: 'Renda é obrigatória',
                        })}
                        value={rendaDisplay}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, '')
                          const value = Number(digits) / 100
                          const formatted = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                          setRendaDisplay(formatted)
                          setValue('renda', formatted, { shouldValidate: true })
                        }}
                        inputMode="numeric"
                        placeholder="R$ 0,00"
                        className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border rounded-md focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none transition-colors text-xs bg-white/50 dark:bg-dark-surface/80 text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted"
                      />
                      {errors.renda && (
                        <p className="text-red-500 text-[10px] mt-0.5">{errors.renda.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-dark-text font-medium mb-1 text-xs">
                        Você já possui passaporte?
                      </label>
                      <select
                        {...register('passaporte', {
                          required: 'Por favor, informe se possui passaporte',
                        })}
                        className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border rounded-md focus:border-usa-blue dark:focus:border-yellow-400 focus:outline-none transition-colors text-xs bg-white/50 dark:bg-dark-surface/80 text-gray-800 dark:text-dark-text appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione Sim ou Não</option>
                        <option value="Sim">Sim, já possuo passaporte</option>
                        <option value="Não">Não, ainda não possuo passaporte</option>
                      </select>
                      {errors.passaporte && (
                        <p className="text-red-500 text-[10px] mt-0.5">{errors.passaporte.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(0, 40, 104, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#25D366] to-[#22c55e] dark:from-yellow-400 dark:to-yellow-500 text-white dark:text-dark-bg px-6 py-4 rounded-lg font-bold hover:from-[#22c55e] hover:to-[#16a34a] dark:hover:from-yellow-300 dark:hover:to-yellow-400 transition-all duration-300 flex items-center justify-center gap-2 mt-4 text-sm shadow-lg border border-transparent ring-2 ring-[#25D366]/30 dark:ring-yellow-400/30"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>Enviar e Abrir WhatsApp</span>
                      <FaArrowRight className="text-white/90 dark:text-dark-bg/80" />
                    </motion.button>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-[11px] sm:text-xs text-center text-gray-600 dark:text-dark-muted mt-3 flex items-center justify-center gap-1.5"
                    >
                      <FaWhatsapp className="text-[#25D366] dark:text-yellow-400" />
                      <span>
                        Abre direto o chat com especialista — dados já na mensagem
                      </span>
                    </motion.p>

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                      <p className="text-xs text-gray-500 dark:text-dark-muted text-center flex items-center justify-center gap-2">
                        <FaShieldAlt className="text-usa-blue dark:text-yellow-400" />
                        Seus dados estão 100% seguros
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactFormModal
