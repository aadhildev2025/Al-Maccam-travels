import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
