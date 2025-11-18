import { useState } from 'react'

export default function CTAContact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('تم إرسال طلبك! سنعاود التواصل قريبًا.')
  }

  return (
    <section id="contact" className="relative bg-[#0D0D0D] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-72 h-72 blur-3xl rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600" />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-12">
          <div className="text-right mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">ابدأ طلبك الآن</h2>
            <p className="text-gray-300">املأ البيانات التالية وسنتواصل معك لتأكيد التفاصيل</p>
          </div>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-right">
            <div>
              <label className="block text-sm text-gray-300 mb-2">الاسم</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">البريد الإلكتروني</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">نوع المنتج</label>
              <select name="type" value={form.type} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50">
                <option value="">اختر نوع المنتج</option>
                <option>غلاف هاتف</option>
                <option>قميص</option>
                <option>هودي</option>
                <option>طباعة بوستر</option>
                <option>أخرى</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">الرسالة</label>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white transition [background:linear-gradient(110deg,#facc15,45%,#f97316,60%,#ec4899)] bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_0_20px_rgba(236,72,153,0.35)]">
                إرسال الطلب
              </button>
            </div>
          </form>
          <div className="mt-6 text-right text-gray-400 text-sm">
            <p>
              تواصل معنا عبر إنستغرام أو واتساب
              <span className="mx-2">•</span>
              <a href="#" className="text-pink-400 hover:text-pink-300">Instagram</a>
              <span className="mx-2">/</span>
              <a href="#" className="text-pink-400 hover:text-pink-300">WhatsApp</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
