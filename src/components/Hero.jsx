import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -right-32 w-[60vw] h-[60vw] rounded-full blur-3xl bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600" />
        <div className="absolute -bottom-32 -left-32 w-[55vw] h-[55vw] rounded-full blur-3xl bg-gradient-to-tr from-pink-600 via-orange-500 to-yellow-400" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-right md:order-2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            CASESPACE
          </h1>
          <p className="mt-3 text-sm tracking-widest font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400">
            GOODNESS OF QUALITY
          </p>
          <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
            نصنع أغلفة هواتف، قمصان، ومنتجات شخصية مصمّمة خصيصًا لك — جودة عالية، تفاصيل دقيقة، ولمسة عصرية مميّزة.
          </p>
          <div className="mt-8 flex items-center justify-end gap-4">
            <a href="#contact" className="relative inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition [background:linear-gradient(110deg,#facc15,45%,#f97316,60%,#ec4899)] bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_0_20px_rgba(236,72,153,0.35)]">
              اطلب تصميمك الآن
            </a>
            <a href="#products" className="text-gray-300 hover:text-white transition">تصفّح المنتجات</a>
          </div>
          <div className="mt-12 flex items-center justify-end gap-6 text-gray-400 text-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600 animate-pulse" />
            <span>تصاميم مخصّصة • شحن محلي ودولي</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="md:order-1" />
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent opacity-50" />
      </div>
    </section>
  )
}
