import { Phone, MapPin, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Инженерные системы"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Location */}
          <div className="animate-fade-in-up flex items-center gap-2 text-navy-400 text-sm mb-8">
            <MapPin size={15} className="text-accent-500" />
            <span className="tracking-wider uppercase text-xs font-medium">г. Нижневартовск</span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight leading-[1.1]">
            Раджик
          </h1>

          {/* Title */}
          <h2 className="animate-fade-in-up-delay-1 text-lg sm:text-xl md:text-2xl font-medium text-accent-400 mb-6 tracking-wide">
            Инженер-проектировщик ОВиК&nbsp;и&nbsp;ВК
          </h2>

          {/* Divider */}
          <div className="animate-fade-in-up-delay-2 w-16 h-[2px] bg-accent-600 mb-6" />

          {/* Description */}
          <p className="animate-fade-in-up-delay-2 text-base sm:text-lg text-navy-300 leading-relaxed mb-10 max-w-xl">
            Проектирование инженерных систем отопления, вентиляции,
            кондиционирования, водоснабжения и&nbsp;канализации.
            Опыт работы более 10&nbsp;лет.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="tel:+79519632565"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-xl shadow-accent-600/20 text-sm tracking-wide"
            >
              <Phone size={18} />
              +7 951 963-25-65
            </a>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in-up-delay-3 mt-14 flex gap-10 sm:gap-14">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">10+</div>
              <div className="text-xs text-navy-400 mt-1 uppercase tracking-wider">лет опыта</div>
            </div>
            <div className="w-px bg-navy-700/50" />
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">ОВиК</div>
              <div className="text-xs text-navy-400 mt-1 uppercase tracking-wider">и ВК системы</div>
            </div>
            <div className="w-px bg-navy-700/50" />
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">СП</div>
              <div className="text-xs text-navy-400 mt-1 uppercase tracking-wider">и ГОСТ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy-500 hover:text-accent-400 transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  )
}
