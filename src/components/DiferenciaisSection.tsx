import { motion } from 'framer-motion'
import { FaHandshake, FaUserTie, FaBalanceScale, FaTasks, FaComments, FaCheckCircle, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';

const diferenciaisTop = [
  {
    icon: <FaHandshake size={48} className="text-white" />,
    text: 'Atendimento humano, premium e estratégico',
  },
  {
    icon: <FaUserTie size={48} className="text-white" />,
    text: 'Especialista que viveu e tem conhecimento sobre o processo migratório',
  },
  {
    icon: <FaBalanceScale size={48} className="text-white" />,
    text: 'Parceria com advogados e especialistas licenciados nos EUA',
  },
  {
    icon: <FaTasks size={48} className="text-white" />,
    text: 'Planejamento completo: migratório, corporativo e tributário',
  },
];

const diferenciaisBottom = [
  {
    icon: <FaComments size={48} className="text-white" />,
    text: 'Comunicação clara, constante e transparente',
  },
  {
    icon: <FaCheckCircle size={48} className="text-white" />,
    text: 'Casos reais e alta taxa de aprovação',
  },
  {
    icon: <FaGlobeAmericas size={48} className="text-white" />,
    text: 'Presença no Brasil e nos EUA',
  },
];

const DiferenciaisSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-usa-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block px-6 py-3 border-2 border-usa-blue text-usa-blue rounded-full text-sm font-bold mb-8 bg-white/50 backdrop-blur-sm">
            ⭐ DIFERENCIAIS CONCRETOS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Por que empresários e
            <span className="text-usa-blue block">profissionais nos escolhem?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Descubra os diferenciais que nos tornam referência em consultoria para vistos americanos
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {diferenciaisTop.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-usa-blue via-usa-blue to-usa-light-blue p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl relative overflow-hidden h-full">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="font-bold text-white text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-6xl mx-auto">
          {diferenciaisBottom.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-usa-blue via-usa-blue to-usa-light-blue p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl relative overflow-hidden h-full">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="font-bold text-white text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <a
              href="#eligibility"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-usa-blue to-usa-light-blue text-white px-10 py-4 rounded-xl font-bold hover:from-usa-light-blue hover:to-usa-blue transition-all duration-300 shadow-xl border-2 border-transparent hover:border-yellow-400 group"
            >
              <span>Conhecer nossos diferenciais</span>
              <FaArrowRight className="text-yellow-300 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
          <p className="mt-4 text-gray-500 text-sm">
            Descubra como podemos ajudar você
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
