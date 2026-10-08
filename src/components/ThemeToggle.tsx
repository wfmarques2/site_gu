import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme, type Theme } from '../hooks/useTheme'

interface ThemeToggleProps {
  isScrolled?: boolean
  variant?: 'navbar' | 'mobile'
}

const ThemeToggle = ({ isScrolled = false, variant = 'navbar' }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme()

  const getBaseClass = () => {
    if (variant === 'mobile') {
      return 'p-3 rounded-xl bg-dark-card dark:bg-dark-card border border-dark-border text-yellow-400 dark:text-yellow-400 hover:bg-dark-surface transition-all'
    }
    if (isScrolled) {
      return 'p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border text-usa-blue dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-dark-surface transition-all shadow-sm'
    }
    return 'p-2.5 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-sm text-yellow-300 dark:text-yellow-400 hover:bg-white/20 dark:hover:bg-white/20 transition-all border border-white/20 dark:border-white/20'
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
      className={`relative flex items-center justify-center overflow-hidden ${getBaseClass()}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -30, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 30, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="inline-flex items-center justify-center"
        >
          {theme === 'dark' ? <FaSun size={variant === 'mobile' ? 20 : 18} /> : <FaMoon size={variant === 'mobile' ? 20 : 18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

export type { Theme }
export default ThemeToggle
