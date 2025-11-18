import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sample = [
  { id: 1, title: 'غلاف هاتف - مخصص', tag: 'أفضل مبيعاً', img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'قميص مطبوع - كاجوال', tag: 'جديد', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'طباعة بوستر - فنية', tag: '', img: 'https://images.unsplash.com/photo-1620799139504-5c157c87b050?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'هودي مطرّز - مميز', tag: '', img: 'https://images.unsplash.com/photo-1519397150299-8b1ad56b2d52?q=80&w=1200&auto=format&fit=crop' },
]

export default function Products() {
  const [active, setActive] = useState(null)

  return (
    <section id="products" className="bg-[#0D0D0D] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-right text-3xl md:text-4xl font-bold text-white">تشكيلة مختارة</h2>
          <p className="text-gray-400 text-sm">تصاميم تتغيّر باستمرار لتلهمك</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sample.map((p) => (
            <button key={p.id} onClick={() => setActive(p)} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] text-right">
              {p.tag && (
                <span className="absolute top-3 left-3 z-10 text-xs font-bold px-2 py-1 rounded-full text-black bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600 shadow">
                  {p.tag}
                </span>
              )}
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.title}</h3>
              </div>
              <div className="absolute inset-0 ring-1 ring-transparent group-hover:ring-pink-500/40 transition"></div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
              <motion.div className="max-w-3xl w-full overflow-hidden rounded-2xl bg-[#111111] border border-white/10" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video overflow-hidden">
                  <img src={active.img} alt={active.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-white text-xl font-semibold mb-2">{active.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">نموذج عرض سريع للمنتج. يمكننا تخصيص الألوان، المقاسات، والمواد وفق طلبك.</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
