import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaChevronDown, FaCheckCircle } from 'react-icons/fa';

const faqs = [
  {
    question: 'Qual visto é melhor para mim?',
    answer: 'A escolha do visto ideal depende do seu perfil profissional, qualificações e objetivos. Oferecemos uma análise completa para identificar a melhor opção para você, seja o EB-2 NIW, EB-1, O-1 ou outro. Agende uma consulta para avaliarmos seu caso.',
  },
  {
    question: 'Posso aplicar com minha família?',
    answer: 'Sim, a maioria dos vistos de trabalho e imigração permite que você inclua seu cônjuge e filhos solteiros menores de 21 anos no processo. Eles receberão vistos de dependentes, permitindo que vivam e, em alguns casos, estudem ou trabalhem nos EUA.',
  },
  {
    question: 'Preciso ter empresa ou investimento nos EUA?',
    answer: 'Não necessariamente. Vistos como o EB-2 NIW (National Interest Waiver) permitem que profissionais com habilidades excepcionais apliquem sem uma oferta de emprego ou investimento, baseando-se na importância do seu trabalho para os EUA.',
  },
  {
    question: 'Quanto custa o processo?',
    answer: 'Os custos variam dependendo do tipo de visto e da complexidade do caso. O processo envolve taxas governamentais e honorários advocatícios. Oferecemos total transparência nos custos desde o início. Entre em contato para um orçamento detalhado.',
  },
  {
    question: 'O atendimento é online ou presencial?',
    answer: 'Nosso atendimento é 100% online, oferecendo conveniência e flexibilidade para você receber nossa consultoria especializada de qualquer lugar do mundo. Utilizamos plataformas digitais seguras para garantir uma experiência completa e acessível durante toda sua jornada.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-40 right-20 w-72 h-72 bg-usa-blue rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
          </div>
          
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 border-2 border-usa-blue text-usa-blue rounded-full text-sm font-bold mb-8 bg-white/50 backdrop-blur-sm flex items-center gap-2 mx-auto">
            <FaQuestionCircle className="text-usa-blue" />
            DÚVIDAS FREQUENTES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tudo que você precisa
            <span className="text-usa-blue block">saber sobre vistos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Encontre respostas para as perguntas mais comuns e esclareça suas dúvidas sobre o processo de imigração
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
                        <motion.div 
                          key={index} 
                          className="mb-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
              <motion.button
                onClick={() => toggleFaq(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex justify-between items-center text-left p-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-usa-blue to-usa-light-blue text-white shadow-xl' 
                    : 'bg-white text-gray-800 hover:bg-gray-50 shadow-md border border-gray-100'
                }`}
                aria-expanded={activeIndex === index}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    activeIndex === index ? 'bg-white/20' : 'bg-usa-blue/10'
                  }`}>
                    {activeIndex === index ? (
                      <FaCheckCircle className="text-yellow-300 text-sm" />
                    ) : (
                      <FaQuestionCircle className="text-usa-blue text-sm" />
                    )}
                  </div>
                  <span className="text-base sm:text-lg">{faq.question}</span>
                </div>
                <motion.span 
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ${
                    activeIndex === index ? 'text-yellow-300' : 'text-usa-blue'
                  }`}
                >
                  <FaChevronDown size={20} />
                </motion.span>
              </motion.button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className={`p-6 rounded-b-xl ${
                      activeIndex === index 
                        ? 'bg-gradient-to-r from-usa-blue/95 to-usa-light-blue/95 text-white' 
                        : 'bg-gray-50 text-gray-700'
                    }`}>
                      <div className="pt-2">
                        <p className="text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-usa-blue to-usa-light-blue rounded-2xl p-8 text-white max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="mb-6 text-white/90">
              Nossa equipe de especialistas está pronta para ajudar você com uma análise personalizada
            </p>
            <motion.a
              href="#eligibility"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-usa-blue px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            >
              <span>Falar com especialista</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
