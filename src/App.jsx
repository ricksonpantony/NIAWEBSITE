import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import WhyChoose from './components/WhyChoose'
import Courses from './components/Courses'
import StudentGallery from './components/StudentGallery'
import SuccessStories from './components/SuccessStories'
import VideoHighlights from './components/VideoHighlights'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileDock from './components/MobileDock'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-nai-soft w-full">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <OurStory />
      <WhyChoose />
      <section id="courses">
        <Courses />
      </section>
      <section id="gallery">
        <StudentGallery />
      </section>
      <section id="success-stories">
        <SuccessStories />
      </section>
      <VideoHighlights />
      <section id="about">
        <About />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <MobileDock />
      <ScrollToTop />
    </div>
  )
}

export default App
