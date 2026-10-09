import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

type ContactModalContextType = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export const useContactModal = () => {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider')
  }
  return context
}
