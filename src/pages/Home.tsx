import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EligibilityForm from '../components/EligibilityForm'

import Footer from '../components/Footer'
import DiferenciaisSection from '../components/DiferenciaisSection'
import FaqSection from '../components/FaqSection'
import StatsSection from '../components/StatsSection'

/**
 * Página principal que integra todos os componentes
 * Layout responsivo e otimizado para conversão
 */
const Home = () => {
  const [visibleCount, setVisibleCount] = useState(3)
  const testimonials = Array.from({ length: 44 }, (_, i) => {
    const n = 34 - i
    return {
      mp4: `/videos/depoimento${n}.mp4`,
      webm: `/videos/depoimento${n}.webm`,
      poster: `/videos/depoimento${n}-poster.jpg`,
      title: `Depoimento ${n}`,
    }
  })
  const visibleTestimonials = testimonials.slice(0, visibleCount)
  const VideoCard = ({ v }: { v: { mp4: string; webm: string; poster: string; title: string } }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [frameReady, setFrameReady] = useState(false)

    useEffect(() => {
      const el = containerRef.current
      const vid = videoRef.current
      if (!el || !vid) return

      const onLoadedMetadata = () => {
        try {
          vid.currentTime = 0.01
        } catch {
          // ignore
        }
      }
      const onSeeked = () => {
        setFrameReady(true)
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !frameReady) {
            vid.addEventListener('loadedmetadata', onLoadedMetadata, { once: true })
            vid.addEventListener('seeked', onSeeked, { once: true })
            vid.load()
          }
        })
      }, { threshold: 0.2 })

      io.observe(el)
      return () => {
        io.disconnect()
        vid.removeEventListener('loadedmetadata', onLoadedMetadata)
        vid.removeEventListener('seeked', onSeeked)
      }
    }, [frameReady])

    return (
      <div
        ref={containerRef}
        className="rounded-xl overflow-hidden shadow-lg bg-black max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] mx-auto relative"
        style={{ aspectRatio: '9 / 16' }}
      >
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover relative z-10"
        >
          <source src={v.mp4} type="video/mp4" />
          <source src={v.webm} type="video/webm" />
        </video>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <EligibilityForm />
        <section id="testimonials" className="bg-gradient-to-br from-usa-blue via-usa-blue to-usa-light-blue dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(255, 255, 255, 0.1) 35px,
                rgba(255, 255, 255, 0.1) 70px
              )`
            }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 border border-yellow-300 dark:border-yellow-400 text-yellow-300 dark:text-yellow-400 rounded-full text-sm font-bold mb-6">
                DEPOIMENTOS REAIS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6">
                Histórias de Sucesso que Inspiram
              </h2>
              <p className="text-white/90 dark:text-dark-muted text-lg max-w-3xl mx-auto">
                Conheça profissionais e empresários que transformaram suas carreiras com nossa ajuda
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
              {visibleTestimonials.map((v, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-dark-border">
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-yellow-400 dark:bg-yellow-400 text-usa-blue px-3 py-1 rounded-full text-xs font-bold">
                        APROVADO ✓
                      </div>
                    </div>
                    
                    {/* Video Container */}
                    <div className="relative aspect-[9/16] bg-black">
                      <VideoCard v={v} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 flex justify-center gap-6">
              {visibleCount < testimonials.length && (
                <motion.button
                  onClick={() => setVisibleCount(Math.min(visibleCount + 6, testimonials.length))}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-dark-card text-usa-blue dark:text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 dark:hover:bg-yellow-400/90 dark:hover:text-usa-blue transition-all duration-300 shadow-xl border-2 border-transparent hover:border-yellow-400 dark:hover:border-yellow-400"
                >
                  Ver mais histórias
                </motion.button>
              )}
              {visibleCount > 3 && (
                <motion.button
                  onClick={() => setVisibleCount(3)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 dark:bg-dark-card/40 backdrop-blur-sm text-white dark:text-dark-text px-8 py-4 rounded-lg font-bold hover:bg-white/30 dark:hover:bg-dark-card/60 transition-all duration-300 border border-white/30 dark:border-dark-border"
                >
                  Ver menos
                </motion.button>
              )}
            </div>
          </div>
        </section>
        <StatsSection />
        <DiferenciaisSection />
        <section id="mentor" className="py-16 bg-white dark:bg-dark-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border">
              <div className="grid lg:grid-cols-2">
                <div className="bg-usa-blue dark:from-dark-surface dark:to-dark-card dark:bg-gradient-to-br p-6 sm:p-8 lg:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-yellow-400 mb-4">
                    Quem vai guiar você nessa jornada
                  </h3>
                  <p className="text-white/90 dark:text-dark-muted mb-6">
                    Gustavo Rios, Especialista em imigração e internacionalização, com ampla experiência em planejamento migratório e corporativo,
                    ajudando profissionais e empresários a conquistar o próximo passo na vida internacional.
                  </p>
                  <p className="text-white/90 dark:text-dark-muted mb-8">
                    O objetivo é que você viva transformação real: liberdade, segurança e multiplicação de oportunidades nos Estados Unidos.
                  </p>
                  <a
                    href="#eligibility"
                    className="inline-block bg-white dark:bg-yellow-400 text-usa-blue dark:text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-dark-bg transition-colors"
                  >
                    Descubra o visto ideal para seu perfil
                  </a>
                </div>
                <div className="relative">
                  <div className="w-full h-full" style={{ aspectRatio: '16 / 9' }}>
                    <img
                      src="/cliente.png"
                      alt="Cliente"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqSection />
        
      </main>
      <Footer />
    </div>
  )
}

export default Home
