import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

/**
 * Footer com informações de contato e links
 */
const Footer = () => {
  return (
    <footer id="contact" className="bg-usa-blue text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Informações da empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">VisaAssessoria</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Sua assessoria especializada para obtenção de visto americano.
              Segurança, agilidade e resultados comprovados.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578701918461"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/oficialgustavorios/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#eligibility"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Avaliação
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Resultados
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-300" />
                <a
                  href="mailto:contato@visaassessoria.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contato@visaassessoria.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-yellow-300" />
                <a
                  href="tel:+5511956291163"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +55 (11) 95629-1163
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-300 mt-1" />
                <span className="text-gray-300">
                  Florianópolis, SC<br />
                  São Paulo, SP<br />
                  Brasil
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} VisaAssessoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer




