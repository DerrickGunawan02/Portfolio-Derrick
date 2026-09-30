import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ExperienceTimeline from './components/ExperienceTimeline'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  const [top, setTop] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    const onScroll = () => setTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
  return (
    <>
      <Navbar />
      <main><Hero /><About /><Projects /><ExperienceTimeline /><Skills /><Contact /></main>
      <Footer />
      {top && <a href="#home" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg hover:bg-accent">↑</a>}
    </>
  )
}
