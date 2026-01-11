import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaArrowLeft, FaCheck } from 'react-icons/fa'

/**
 * Questionário interativo em etapas para avaliação de elegibilidade
 * Utiliza React Hook Form para gerenciamento de estado
 */
type FormData = {
  visaType: string
  previousDenial: string
  countryOfOrigin: string
}

const visaTypes = [
  { value: 'tourist', label: 'Visto de Turista (B2)' },
  { value: 'business', label: 'Visto de Negócios (B1)' },
  { value: 'student', label: 'Visto de Estudante (F1)' },
  { value: 'work', label: 'Visto de Trabalho (H1B)' },
  { value: 'other', label: 'Outro' },
]

const EligibilityForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [eligibilityResult, setEligibilityResult] = useState<number | null>(null)
  const totalSteps = 3

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    mode: 'onChange',
  })

  const watchedValues = watch()

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: FormData) => {
    // Simulação de cálculo de elegibilidade
    let score = 70 // Base score
    
    if (data.previousDenial === 'no') score += 15
    if (data.visaType === 'tourist' || data.visaType === 'business') score += 10
    if (data.countryOfOrigin && data.countryOfOrigin.length > 0) score += 5

    // Adiciona variação aleatória para simular análise real
    score += Math.floor(Math.random() * 10) - 5
    score = Math.max(40, Math.min(95, score)) // Limita entre 40-95%

    setEligibilityResult(score)
  }

  const progress = (currentStep / totalSteps) * 100

  return (
    <section
      id="eligibility"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-usa-blue rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 border-2 border-usa-blue text-usa-blue rounded-full text-sm font-bold mb-8 bg-white/50 backdrop-blur-sm">
              📋 AVALIAÇÃO GRATUITA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-usa-blue mb-6">
              Avalie sua
              <span className="text-yellow-400 block">Elegibilidade</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Responda algumas perguntas rápidas e receba uma análise preliminar do seu perfil para vistos americanos
            </p>
          </div>

          {/* Barra de progresso */}
          <div className="mb-8">
            <div className="flex justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700">
                Etapa {currentStep} de {totalSteps}
              </span>
              <span className="text-sm font-semibold text-usa-blue">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-usa-blue to-usa-light-blue h-3 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 mb-8 border border-gray-100">
              <AnimatePresence mode="wait">
                {/* Etapa 1: Tipo de visto */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
                      Qual tipo de visto você deseja?
                    </h3>
                    <div className="space-y-4">
                      {visaTypes.map((type) => (
                        <motion.label
                          key={type.value}
                          className="flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 group"
                          whileHover={{ scale: 1.02, borderColor: '#002868' }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            value={type.value}
                            {...register('visaType', { required: 'Selecione um tipo de visto' })}
                            className="mr-4 w-5 h-5 text-usa-blue focus:ring-usa-blue focus:ring-2"
                          />
                          <span className="text-gray-700 font-medium text-lg group-hover:text-usa-blue transition-colors">
                            {type.label}
                          </span>
                        </motion.label>
                      ))}
                      {errors.visaType && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-2"
                        >
                          <span>⚠</span>
                          {errors.visaType.message}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Etapa 2: Visto negado anteriormente */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
                      Você já teve um visto negado anteriormente?
                    </h3>
                    <div className="space-y-4">
                      {[
                        { value: 'no', label: 'Não, nunca tive visto negado' },
                        { value: 'yes', label: 'Sim, já tive visto negado' },
                      ].map((option) => (
                        <motion.label
                          key={option.value}
                          className="flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 group"
                          whileHover={{ scale: 1.02, borderColor: '#002868' }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            value={option.value}
                            {...register('previousDenial', {
                              required: 'Por favor, selecione uma opção',
                            })}
                            className="mr-4 w-5 h-5 text-usa-blue focus:ring-usa-blue focus:ring-2"
                          />
                          <span className="text-gray-700 font-medium text-lg group-hover:text-usa-blue transition-colors">
                            {option.label}
                          </span>
                        </motion.label>
                      ))}
                      {errors.previousDenial && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-2"
                        >
                          <span>⚠</span>
                          {errors.previousDenial.message}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Etapa 3: País de origem */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
                      Qual é o seu país de origem?
                    </h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        {...register('countryOfOrigin', {
                          required: 'Por favor, informe seu país de origem',
                          minLength: {
                            value: 2,
                            message: 'País inválido',
                          },
                        })}
                        placeholder="Ex: Brasil, Argentina, México..."
                        className="w-full p-5 border-2 rounded-xl focus:border-usa-blue focus:outline-none focus:ring-2 focus:ring-usa-blue/20 transition-all text-lg font-medium"
                      />
                      {errors.countryOfOrigin && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-2"
                        >
                          <span>⚠</span>
                          {errors.countryOfOrigin.message}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Resultado da elegibilidade */}
                {eligibilityResult !== null && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="text-center py-12"
                  >
                    <div className="mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <FaCheck className="text-white text-3xl" />
                      </motion.div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Análise Concluída!
                      </h3>
                      <p className="text-gray-600 text-lg mb-8">
                        Sua elegibilidade preliminar foi calculada com base nas suas respostas
                      </p>
                    </div>

                    <motion.div 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: 'spring' }}
                      className="bg-gradient-to-r from-usa-blue to-usa-light-blue rounded-2xl p-10 text-white mb-8 shadow-2xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/10 animate-pulse" />
                      <div className="relative z-10">
                        <div className="text-6xl sm:text-7xl font-bold mb-4">
                          {eligibilityResult}%
                        </div>
                        <div className="text-xl sm:text-2xl font-semibold">Taxa de Elegibilidade</div>
                      </div>
                    </motion.div>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      Com base nas suas respostas, você tem uma excelente chance de aprovação.
                      Entre em contato conosco para uma análise completa e personalizada do seu caso.
                    </p>

                    <motion.a
                      href="https://wa.me/5511956291163?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20emitir%20um%20visto"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 40, 104, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-gradient-to-r from-usa-blue to-usa-light-blue text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-usa-light-blue hover:to-usa-blue transition-all duration-300 shadow-xl border-2 border-transparent hover:border-yellow-400"
                    >
                      Falar com Especialista
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botões de navegação */}
            {eligibilityResult === null && (
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <motion.button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  whileHover={{ scale: currentStep === 1 ? 1 : 1.05 }}
                  whileTap={{ scale: currentStep === 1 ? 1 : 0.95 }}
                  className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-md'
                  }`}
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Voltar</span>
                </motion.button>

                {currentStep < totalSteps ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !watchedValues.visaType) ||
                      (currentStep === 2 && !watchedValues.previousDenial)
                    }
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(0, 40, 104, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                      (currentStep === 1 && !watchedValues.visaType) ||
                      (currentStep === 2 && !watchedValues.previousDenial)
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-usa-blue to-usa-light-blue text-white hover:from-usa-light-blue hover:to-usa-blue shadow-xl border-2 border-transparent hover:border-yellow-400'
                    }`}
                  >
                    <span>Próximo</span>
                    <FaArrowRight className="text-yellow-300" />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={!watchedValues.countryOfOrigin}
                    whileHover={{ scale: !watchedValues.countryOfOrigin ? 1 : 1.05, boxShadow: '0 8px 25px rgba(0, 40, 104, 0.3)' }}
                    whileTap={{ scale: !watchedValues.countryOfOrigin ? 1 : 0.95 }}
                    className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                      !watchedValues.countryOfOrigin
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-usa-blue to-usa-light-blue text-white hover:from-usa-light-blue hover:to-usa-blue shadow-xl border-2 border-transparent hover:border-yellow-400'
                    }`}
                  >
                    <span>Finalizar Avaliação</span>
                    <FaCheck className="text-yellow-300" />
                  </motion.button>
                )}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default EligibilityForm




