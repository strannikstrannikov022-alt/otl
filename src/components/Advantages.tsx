import { Clock, Users, BookOpen, Crosshair, Headphones } from 'lucide-react'

const advantages = [
  {
    icon: Clock,
    title: 'Более 10 лет опыта',
    desc: 'Многолетний практический опыт проектирования инженерных систем различной сложности.',
  },
  {
    icon: Users,
    title: 'Индивидуальный подход',
    desc: 'Учёт всех требований и особенностей объекта, персональное внимание к каждому проекту.',
  },
  {
    icon: BookOpen,
    title: 'Соблюдение нормативов',
    desc: 'Строгое следование СНиП, СП, ГОСТ и другим действующим нормативным документам.',
  },
  {
    icon: Crosshair,
    title: 'Техническая точность',
    desc: 'Тщательная проработка каждого технического решения и расчёта в проекте.',
  },
  {
    icon: Headphones,
    title: 'Удобная связь и сопровождение',
    desc: 'Оперативная обратная связь и сопровождение на всех этапах работы над проектом.',
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-24 sm:py-32 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-navy-800/50" />

      {/* Background photo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="text-accent-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Преимущества
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Почему выбирают меня
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {advantages.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className={`group p-6 sm:p-7 rounded-xl bg-navy-900/80 border border-navy-800/60 hover:border-accent-600/30 transition-all duration-300 ${
                idx === 3 ? 'sm:col-span-1 lg:col-span-1' : ''
              } ${idx === 4 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-none lg:max-w-none' : ''}`}
            >
              <div className="w-12 h-12 rounded-lg bg-navy-800 border border-navy-700/50 flex items-center justify-center mb-5 group-hover:border-accent-600/40 transition-colors">
                <Icon size={22} className="text-accent-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-navy-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
