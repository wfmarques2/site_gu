import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'
import clientImageSrc from '../assets/client-image.png'
import { useContactModal } from '../contexts/ContactModalContext'

const Hero = () => {
  const { openModal } = useContactModal()

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:brightness-[0.35] dark:saturate-[0.7] transition-[filter] duration-500"
        style={{
          backgroundImage: 'url(/bandeira-americana.jfif)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #002868 0%, rgba(0, 40, 104, 0.8) 35%, rgba(0, 40, 104, 0.4) 65%, rgba(0, 0, 0, 0.1) 100%)',
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end pt-32 relative min-h-[100dvh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white relative z-20 lg:col-span-5 order-1 lg:order-1 text-center lg:text-left self-center pb-20"
          >
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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 leading-tight"
            >
              Expanda seus negócios e conquiste novas oportunidades nos{' '}
              <span className="text-yellow-300 block mt-2">Estados Unidos</span>
            </motion.h1>

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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm sm:text-base mb-8 text-gray-100 leading-relaxed"
            >
              Consultoria especializada em vistos de trabalho e investimento para ajudar profissionais qualificados e empresários brasileiros a viver, empreender e crescer com segurança no mercado norte-americano.
            </motion.p>

            <motion.button
              type="button"
              onClick={openModal}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 40, 104, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-usa-blue px-8 py-4 rounded-lg text-sm lg:text-base font-bold hover:bg-yellow-300 hover:text-usa-blue transition-all duration-300 shadow-2xl border-2 border-transparent hover:border-yellow-400 cursor-pointer"
            >
              <span>Falar com Especialista</span>
              <FaArrowRight />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center relative z-10 lg:col-span-7 order-2 lg:order-2 mt-auto lg:col-start-6"
          >
            <div className="relative w-full max-w-2xl sm:max-w-3xl mx-auto sm:mx-auto lg:mx-0 lg:w-[100%] lg:max-w-none lg:-ml-[25%] lg:-mb-10">
              <ClientImage />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ClientImage = () => {
  return (
    <motion.img
      src={clientImageSrc}
      alt="Cliente"
      className="w-full h-auto object-contain object-bottom max-h-[110vh] sm:max-h-[130vh] lg:max-h-[190vh] lg:object-center lg:object-bottom"
      style={{
        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
      }}
    />
  )
}

export default Hero
