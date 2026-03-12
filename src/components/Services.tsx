import { Wind, Droplets, FileText, Settings, HelpCircle } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'Проектирование систем ОВиК',
    desc: 'Разработка проектов систем отопления, вентиляции и кондиционирования для объектов различного назначения.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Droplets,
    title: 'Проектирование систем ВК',
    desc: 'Проектирование систем внутреннего водоснабжения и канализации с учётом действующих норм и требований.',
    img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: FileText,
    title: 'Разработка документации',
    desc: 'Подготовка полного комплекта проектной и рабочей документации в соответствии со стандартами.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Settings,
    title: 'Подбор решений и оборудования',
    desc: 'Оптимальный подбор инженерного оборудования и технических решений под задачи объекта.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: HelpCircle,
    title: 'Консультации',
    desc: 'Профессиональные консультации по вопросам проектирования и эксплуатации инженерных систем.',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-navy-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-navy-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 sm:mb-20">
          <span className="text-accent-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Услуги
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Направления работы
          </h2>
          <p className="text-navy-300 text-base max-w-xl">
            Полный спектр услуг по проектированию инженерных систем — от консультации до передачи готовой документации.
          </p>
        </div>

        {/* Top 2 large cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {services.slice(0, 2).map(({ icon: Icon, title, desc, img }, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-navy-800 border border-navy-700/40 hover:border-navy-600/60 transition-all duration-500"
            >
              {/* Photo */}
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/50 to-transparent" />
              </div>
              {/* Content */}
              <div className="relative p-6 sm:p-8 -mt-12">
                <div className="w-11 h-11 rounded-lg bg-accent-600 flex items-center justify-center mb-4 shadow-lg shadow-accent-600/20">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 smaller cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {services.slice(2).map(({ icon: Icon, title, desc, img }, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-navy-800 border border-navy-700/40 hover:border-navy-600/60 transition-all duration-500"
            >
              {/* Photo */}
              <div className="h-36 sm:h-40 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/40 to-transparent" />
              </div>
              {/* Content */}
              <div className="relative p-5 sm:p-6 -mt-8">
                <div className="w-10 h-10 rounded-lg bg-accent-600 flex items-center justify-center mb-3 shadow-lg shadow-accent-600/20">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
