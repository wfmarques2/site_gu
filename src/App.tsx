import Home from './pages/Home'
import WhatsAppButton from './components/WhatsAppButton'
import ContactFormModal from './components/ContactFormModal'
import { ContactModalProvider } from './contexts/ContactModalContext'

function App() {
  return (
    <ContactModalProvider>
      <Home />
      <WhatsAppButton />
      <ContactFormModal />
    </ContactModalProvider>
  )
}

export default App




