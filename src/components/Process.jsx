import { ArrowRight, CheckCircle, Layers3, WandSparkles } from 'lucide-react'

export default function Process() {
  const steps = [
    { icon: Layers3, title: 'اختر منتجك', desc: 'ابدأ بالاختيار من بين الأغلفة، القمصان، أو المطبوعات.' },
    { icon: WandSparkles, title: 'خصّص تصميمك', desc: 'أرسل فكرتك أو حمل ملفاتك، وسنترجمها بدقة.' },
    { icon: CheckCircle, title: 'نصنع ونشحن', desc: 'تنفيذ بجودة عالية وشحن إلى باب منزلك.' },
  ]

  return (
    <section className="bg-[#0D0D0D] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-right text-3xl md:text-4xl font-bold text-white mb-12">كيف تعمل العملية؟</h2>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-[#111111] p-6 text-right">
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600 text-black mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -left-3 translate-y-[-50%]">
                  <ArrowRight className="w-6 h-6 text-pink-500/70" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
