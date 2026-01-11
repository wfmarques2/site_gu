import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaCheckCircle, FaGlobeAmericas, FaAward } from 'react-icons/fa'

interface StatCardProps {
  icon: React.ReactNode
  endValue: number
  label: string
  suffix?: string
  duration?: number
}

const StatCard: React.FC<StatCardProps> = ({ icon, endValue, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function mais suave
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)
      const currentCount = Math.floor(easeOutExpo * endValue)
      
      setCount(currentCount)

      if (progress >= 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, endValue, duration])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}K`
    }
    return num.toString()
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-usa-blue/10 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10">
        <div className="text-usa-blue mb-6 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
          </motion.div>
        </div>
        <div className="text-4xl sm:text-5xl font-bold text-usa-blue mb-3">
          <motion.span
            initial={{ scale: 0.5 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
          >
            {formatNumber(count)}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-yellow-400 ml-1"
          >
            {suffix}
          </motion.span>
        </div>
        <div className="text-gray-700 text-sm sm:text-base font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  )
}

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUsers size={48} />,
      endValue: 6000,
      label: "Clientes Atendidos",
      suffix: "+"
    },
    {
      icon: <FaCheckCircle size={48} />,
      endValue: 95,
      label: "Taxa de Aprovação",
      suffix: "%"
    },
    {
      icon: <FaGlobeAmericas size={48} />,
      endValue: 15,
      label: "Países de Atuação",
      suffix: "+"
    },
    {
      icon: <FaAward size={48} />,
      endValue: 8,
      label: "Anos de Experiência",
      suffix: "+"
    }
  ]

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-usa-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 border-2 border-usa-blue text-usa-blue rounded-full text-sm font-bold mb-8 bg-white/50 backdrop-blur-sm">
            📊 NOSSOS RESULTADOS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Números que
            <span className="text-usa-blue block">falam por si</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Confirme nossos resultados e veja como transformamos vidas e carreiras ao redor do mundo com excelência e dedicação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
            >
              <StatCard
                icon={stat.icon}
                endValue={stat.endValue}
                label={stat.label}
                suffix={stat.suffix}
                duration={2500 + index * 300}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#eligibility"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 40, 104, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-usa-blue to-usa-light-blue text-white px-10 py-4 rounded-xl font-bold hover:from-usa-light-blue hover:to-usa-blue transition-all duration-300 shadow-xl border-2 border-transparent hover:border-yellow-400"
          >
            <span>Faça parte desses números</span>
            <span className="text-yellow-300">→</span>
          </motion.a>
          <p className="mt-4 text-gray-500 text-sm">
            Análise gratuita e sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
