import { useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function Header() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handler = (e) => {
      const target = e.target
      if (target.matches('a[href^="#"]')) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-600 shadow-[0_0_20px_rgba(236,72,153,0.35)]"></div>
          <span className="text-white font-extrabold text-lg tracking-wide">CASESPACE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#products" className="text-gray-200 hover:text-white transition">المنتجات</a>
          <a href="#about" className="text-gray-200 hover:text-white transition">عنّا</a>
          <a href="#contact" className="text-gray-200 hover:text-white transition">اتصل بنا</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="القائمة">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
