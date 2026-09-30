import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://www.instagram.com/gustavo.visto/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] dark:bg-yellow-400 text-white dark:text-dark-bg p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute right-full mr-3 bg-white dark:bg-dark-card text-gray-800 dark:text-dark-text px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block border border-gray-100 dark:border-dark-border">
        Fale conosco
      </span>
    </motion.a>
  )
}

export default WhatsAppButton
