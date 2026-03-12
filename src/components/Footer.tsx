export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-8 bg-navy-950 border-t border-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-accent-600 flex items-center justify-center text-white font-bold text-xs">
              РП
            </div>
            <span className="text-sm text-navy-400">
              Раджик — Инженер-проектировщик ОВиК и&nbsp;ВК
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-navy-500">
            © {year} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  )
}
