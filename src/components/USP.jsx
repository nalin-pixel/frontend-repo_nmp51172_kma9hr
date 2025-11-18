import { Brush, PackageCheck, Truck } from 'lucide-react'

export default function USP() {
  const items = [
    {
      icon: Brush,
      title: 'تصاميم مخصصة بالكامل',
      desc: 'اختَر الألوان، الخطوط، واللمسات الخاصة بك لتحصل على منتج يعكس هويتك.'
    },
    {
      icon: PackageCheck,
      title: 'تطريز وطباعة احترافية',
      desc: 'جودة عالية في الطباعة والتطريز لتفاصيل واضحة وثبات يدوم.'
    },
    {
      icon: Truck,
      title: 'شحن محلي ودولي',
      desc: 'نرسل طلباتك إلى أي مكان بسرعة وأمان مع تتبّع الشحنة.'
    }
  ]

  return (
    <section id="about" className="bg-[#0D0D0D] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-right text-3xl md:text-4xl font-bold text-white mb-12">لماذا CASESPACE؟</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-[#111111] p-6 text-right overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr from-yellow-400/10 via-orange-500/10 to-pink-600/10" />
              <div className="relative flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600 text-black">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
