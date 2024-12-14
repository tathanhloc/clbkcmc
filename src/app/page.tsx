import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/Abouts'
import Leadership from '@/components/Leadership'
import Activities from '@/components/Activities'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Activities />
      </main>
      <Footer />
    </div>
  )
}

