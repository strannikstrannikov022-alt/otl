import { MessageSquare, ClipboardList, PenTool, CheckCircle2, FolderCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Консультация',
    desc: 'Обсуждение задачи, требований и пожеланий. Определение объёма и сроков работ.',
  },
  {
    icon: ClipboardList,
    num: '02',
    title: 'Сбор исходных данных',
    desc: 'Анализ технических условий, архитектурных планов и требований к инженерным системам.',
  },
  {
    icon: PenTool,
    num: '03',
    title: 'Разработка проекта',
    desc: 'Выполнение расчётов, подбор оборудования, разработка чертежей и спецификаций.',
  },
  {
    icon: CheckCircle2,
    num: '04',
    title: 'Согласование решений',
    desc: 'Презентация и обсуждение проектных решений, внесение корректировок при необходимости.',
  },
  {
    icon: FolderCheck,
    num: '05',
    title: 'Передача документации',
    desc: 'Оформление и передача готового комплекта проектной документации заказчику.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32 bg-navy-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-navy-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="text-accent-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Этапы работы
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Как строится работа
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-[30px] left-[60px] right-[60px] h-px bg-navy-700/50" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map(({ icon: Icon, num, title, desc }, idx) => (
              <div key={idx} className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                {/* Number circle */}
                <div className="shrink-0 relative z-10">
                  <div className="w-[60px] h-[60px] rounded-full bg-navy-800 border-2 border-navy-700/60 flex items-center justify-center lg:mb-6">
                    <span className="text-sm font-bold text-accent-400">{num}</span>
                  </div>
                </div>

                {/* Vertical line connector (mobile) */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[30px] top-[60px] bottom-0 w-px bg-navy-700/30 -mb-8" style={{ height: 'calc(100% + 32px - 60px)' }} />
                )}

                {/* Content */}
                <div className="pt-1 lg:pt-0">
                  <div className="flex items-center gap-2 lg:justify-center mb-2">
                    <Icon size={15} className="text-accent-500/80" />
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                  </div>
                  <p className="text-xs text-navy-400 leading-relaxed max-w-[200px] lg:mx-auto">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
