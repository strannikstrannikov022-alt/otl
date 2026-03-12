import { Phone, MapPin, MessageCircle, Send } from 'lucide-react'

export default function Contacts() {
  return (
    <section id="contacts" className="relative py-24 sm:py-32 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-navy-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — photo */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
              alt="Современное здание"
              className="w-full h-[320px] sm:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-navy-200 mb-1">
                <MapPin size={16} className="text-accent-400" />
                <span className="text-sm font-medium">г. Нижневартовск</span>
              </div>
              <p className="text-xs text-navy-400">
                Проектирование инженерных систем для объектов любой сложности
              </p>
            </div>
          </div>

          {/* Right — contact info */}
          <div>
            <span className="text-accent-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
              Контакты
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Свяжитесь со мной
            </h2>
            <p className="text-navy-300 text-base mb-10 leading-relaxed">
              Готов обсудить ваш проект и ответить на вопросы.
              Выберите удобный способ связи.
            </p>

            {/* Phone — primary */}
            <a
              href="tel:+79519632565"
              className="flex items-center gap-4 p-5 rounded-xl bg-navy-900 border border-navy-800/60 hover:border-accent-600/40 transition-all duration-300 mb-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-600 flex items-center justify-center shadow-lg shadow-accent-600/20">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-navy-400 mb-0.5 uppercase tracking-wider">Телефон</div>
                <div className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                  +7 951 963-25-65
                </div>
              </div>
            </a>

            {/* WhatsApp & Telegram row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/79519632565"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-navy-900 border border-navy-800/60 hover:border-emerald-600/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600/15 flex items-center justify-center">
                  <MessageCircle size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">WhatsApp</div>
                  <div className="text-[11px] text-navy-400">Написать</div>
                </div>
              </a>

              <a
                href="https://t.me/+79519632565"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-navy-900 border border-navy-800/60 hover:border-sky-600/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-600/15 flex items-center justify-center">
                  <Send size={20} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">Telegram</div>
                  <div className="text-[11px] text-navy-400">Написать</div>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-navy-800/40">
              <MapPin size={18} className="text-navy-500" />
              <div>
                <div className="text-sm font-medium text-navy-300">г. Нижневартовск</div>
                <div className="text-xs text-navy-500">Ханты-Мансийский автономный округ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
