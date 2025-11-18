import Header from './components/Header'
import Hero from './components/Hero'
import USP from './components/USP'
import Products from './components/Products'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTAContact from './components/CTAContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <USP />
        <Products />
        <Process />
        <Testimonials />
        <CTAContact />
      </main>
      <Footer />
    </div>
  )
}

export default App
