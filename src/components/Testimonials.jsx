import { Quote } from 'lucide-react'

const reviews = [
  { name: 'سارة', text: 'جودة الطباعة رائعة جداً، والتعامل سلس وسريع. أنصح بهم بشدة!' },
  { name: 'أحمد', text: 'طلبت غلاف هاتف بتصميم خاص، النتيجة فوق التوقعات والتغليف ممتاز.' },
  { name: 'لينا', text: 'خدمة عملاء مميزة، والتسليم كان أسرع مما توقعت.' },
]

export default function Testimonials() {
  return (
    <section className="bg-[#0D0D0D] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-right text-3xl md:text-4xl font-bold text-white">آراء عملائنا</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-[#111111] p-6 text-right">
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600 text-black">
                <Quote className="w-6 h-6" />
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">{r.text}</p>
              <p className="text-white font-semibold">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
