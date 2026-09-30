import { useState, useEffect, useCallback } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'site-gustavo-theme'

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const setThemeExplicit = useCallback((value: Theme) => {
    setTheme(value)
  }, [])

  return {
    theme,
    toggleTheme,
    setTheme: setThemeExplicit,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  }
}
