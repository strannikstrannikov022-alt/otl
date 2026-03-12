import { Phone } from 'lucide-react'

export default function FloatingButton() {
  return (
    <a
      href="tel:+79324207085"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-14 h-14 rounded-full bg-accent-600 hover:bg-accent-500 flex items-center justify-center text-white shadow-2xl shadow-accent-600/30 transition-all duration-300 hover:scale-105"
      aria-label="Позвонить"
    >
      <Phone size={22} />
    </a>
  )
}
