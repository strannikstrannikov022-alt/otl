import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'О специалисте' },
  { href: '#services', label: 'Услуги' },
  { href: '#advantages', label: 'Преимущества' },
  { href: '#workflow', label: 'Этапы работы' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-lg shadow-2xl shadow-black/30 border-b border-navy-800/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent-600 flex items-center justify-center text-white font-bold text-base tracking-tight shadow-lg shadow-accent-600/20">
              РП
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white leading-tight tracking-wide">РАДЖИК</div>
              <div className="text-[11px] text-navy-400 leading-tight tracking-wider uppercase">Инженер-проектировщик</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-navy-300 hover:text-white transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+79519632565"
              className="ml-6 inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold bg-accent-600 hover:bg-accent-500 text-white rounded-lg transition-all duration-200 tracking-wide"
            >
              <Phone size={14} />
              Позвонить
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-navy-300 hover:text-white transition-colors"
            aria-label="Меню"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-navy-950/98 backdrop-blur-xl border-t border-navy-800/30 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-sm text-navy-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-navy-800/30">
            <a
              href="tel:+79519632565"
              onClick={handleLinkClick}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-accent-400"
            >
              <Phone size={16} />
              +7 951 963-25-65
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
