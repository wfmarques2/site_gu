import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

/**
 * Navbar responsiva com navegação suave
 * Inclui scroll spy e menu mobile
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 96
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? 'h-8' : 'h-10'
              }`}
            />
            <span
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-usa-blue text-xl' : 'text-white text-2xl'
              }`}
              style={{
                textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              VisaAssessoria
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { id: 'hero', label: 'Início' },
              { id: 'eligibility', label: 'Avaliação' },
              { id: 'testimonials', label: 'Depoimentos' },
              { id: 'stats', label: 'Resultados' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 font-medium relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-usa-blue' 
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-usa-blue scale-x-0 group-hover:scale-x-100'
                    : 'bg-yellow-300 scale-x-0 group-hover:scale-x-100'
                }`} />
              </motion.button>
            ))}
            
            {/* CTA Button */}
            <motion.div className="flex items-center gap-4">
              {/* Trust indicators */}
              <div className="hidden xl:flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1 text-green-500">
                  <FaCheckCircle className="text-xs" />
                  <span className={isScrolled ? 'text-gray-600' : 'text-white/90'}>95% Aprovação</span>
                </div>
              </div>
              
              <motion.a
                href="https://wa.me/5511956291163?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20emitir%20um%20visto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(0, 40, 104, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-usa-blue to-usa-light-blue text-white px-6 py-3 rounded-xl font-bold hover:from-usa-light-blue hover:to-usa-blue transition-all duration-300 shadow-lg border-2 border-transparent hover:border-yellow-400 cursor-pointer"
              >
                Falar com Especialista
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile CTA */}
            <motion.a
              href="https://wa.me/5511956291163"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-usa-blue text-white shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
              }`}
            >
              <FaWhatsapp size={20} />
            </motion.a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-usa-blue bg-gray-100'
                  : 'text-white bg-white/10 backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              <motion.svg
                animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {[
                { id: 'hero', label: 'Início' },
                { id: 'eligibility', label: 'Avaliação' },
                { id: 'testimonials', label: 'Depoimentos' },
                { id: 'stats', label: 'Resultados' },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onTouchStart={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-left text-gray-700 hover:text-usa-blue transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-usa-blue/5"
                >
                  {item.label}
                </motion.button>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <motion.a
                  href="https://wa.me/5511956291163"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 shadow-lg"
                >
                  <FaWhatsapp />
                  <span className="text-center">WhatsApp</span>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/5511956291163?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20emitir%20um%20visto"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(0, 40, 104, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center bg-gradient-to-r from-usa-blue to-usa-light-blue text-white px-6 py-3 rounded-xl font-bold hover:from-usa-light-blue hover:to-usa-blue transition-all duration-300 shadow-lg cursor-pointer"
                >
                  Falar com Especialista
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
