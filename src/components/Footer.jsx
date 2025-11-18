export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6 text-right text-gray-300">
          <div>
            <h4 className="text-white font-semibold mb-3">CASESPACE</h4>
            <p className="text-sm">جودة، إبداع، وتخصيص يعبّر عنك.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-white">المنتجات</a></li>
              <li><a href="#about" className="hover:text-white">عنّا</a></li>
              <li><a href="#contact" className="hover:text-white">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">تواصل</h4>
            <ul className="space-y-2 text-sm">
              <li>email@example.com</li>
              <li>+966 000 000 000</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-xs">© {year} CASESPACE. جميع الحقوق محفوظة.</div>
      </div>
    </footer>
  )
}
