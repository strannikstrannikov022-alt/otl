import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Workflow from './components/Workflow'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Workflow />
        <Contacts />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  )
}
