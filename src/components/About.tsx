import { Award, Target, Shield, Wrench } from 'lucide-react'

const highlights = [
  { icon: Award, label: 'Более 10 лет опыта', desc: 'в проектировании инженерных систем' },
  { icon: Target, label: 'Техническая точность', desc: 'каждого расчёта и решения' },
  { icon: Shield, label: 'Соблюдение норм', desc: 'СНиП, СП, ГОСТ' },
  { icon: Wrench, label: 'Практический подход', desc: 'к каждому проекту' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-navy-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 sm:mb-20">
          <span className="text-accent-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            О специалисте
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Профессиональный подход<br className="hidden sm:block" /> к&nbsp;проектированию
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo + info column */}
          <div className="space-y-8">
            {/* Photo */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                alt="Проектирование инженерных систем"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 px-4 py-3 bg-navy-950/80 backdrop-blur-md rounded-lg border border-navy-700/30">
                <div className="text-2xl font-bold text-accent-400">10+</div>
                <div>
                  <div className="text-xs font-medium text-white">лет опыта</div>
                  <div className="text-[10px] text-navy-400">в проектировании</div>
                </div>
              </div>
            </div>

            {/* Second photo */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80"
                alt="Инженерное оборудование"
                className="w-full h-[220px] sm:h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-6 lg:pt-4">
            <p className="text-navy-200 text-base sm:text-lg leading-relaxed">
              Меня зовут <span className="text-white font-semibold">Раджик</span>. Я — инженер-проектировщик
              с&nbsp;опытом работы более <span className="text-accent-400 font-semibold">10&nbsp;лет</span> в&nbsp;области
              проектирования инженерных систем ОВиК и&nbsp;ВК.
            </p>
            <p className="text-navy-300 text-base leading-relaxed">
              Специализируюсь на разработке проектной и&nbsp;рабочей документации для систем отопления,
              вентиляции, кондиционирования, водоснабжения и&nbsp;канализации. Работаю как с&nbsp;жилыми,
              так и&nbsp;с&nbsp;коммерческими объектами различной сложности.
            </p>
            <p className="text-navy-300 text-base leading-relaxed">
              В своей работе строго соблюдаю действующие нормативы и&nbsp;стандарты, уделяя особое внимание
              техническим деталям и&nbsp;оптимальным инженерным решениям. Каждый проект — это индивидуальный
              подход с&nbsp;учётом всех требований и&nbsp;пожеланий заказчика.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="p-4 rounded-lg bg-navy-900 border border-navy-800/60"
                >
                  <Icon size={20} className="text-accent-500 mb-3" />
                  <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs text-navy-400">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
