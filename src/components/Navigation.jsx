import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Courses', href: '#courses' },
    { name: 'Success Stories', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/image.png" 
              alt="Nurse Assist International" 
              className="w-28 h-28 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-nai-dark hover:text-nai-highlight font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-2 text-nai-dark hover:text-nai-highlight transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+61 478 320 397</span>
            </button>
            <button className="btn-primary text-sm py-2 px-4">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-nai-dark"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-nai-dark hover:text-nai-highlight font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button className="flex items-center gap-2 text-nai-dark hover:text-nai-highlight transition-colors w-full">
                    <Phone className="w-4 h-4" />
                    <span>+61 478 320 397</span>
                  </button>
                  <button className="flex items-center gap-2 text-nai-dark hover:text-nai-highlight transition-colors w-full">
                    <Mail className="w-4 h-4" />
                    <span>admin@nurseassistinternational.com</span>
                  </button>
                  <button className="w-full btn-primary">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
