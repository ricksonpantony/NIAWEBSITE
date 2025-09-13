import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Star, Award, CheckCircle } from 'lucide-react'
import { heroTestimonials, heroGridStudents } from '../data/heroImages'

const Hero = () => {
  const [tIndex, setTIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTIndex((prev) => (prev + 1) % heroTestimonials.length)
    }, 5000) // rotate every 5s
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fluid Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Floating Orbs */}
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-sky-200/25 to-blue-200/25 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-cyan-200/35 to-teal-200/35 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Secondary Floating Elements */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-lg animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-200/25 to-blue-200/25 rounded-full blur-xl animate-float-slow" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-200/30 to-emerald-200/30 rounded-full blur-md animate-float-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Subtle Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-100/15 to-transparent rounded-full blur-2xl"></div>
        
        {/* Shimmer Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-nai-highlight/30 to-transparent animate-shimmer"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-nai-teal/20 to-transparent animate-shimmer" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Geometric Accents */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-nai-highlight/60 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-nai-teal/80 rounded-full animate-pulse-soft" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-blue-400/70 rounded-full animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse-soft" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-pulse-soft" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]"></div>

      <div className="container-responsive pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 relative z-10">
        <div className="flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center w-full">
            
            {/* Left Content */}
            <motion.div 
              className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-nai-teal/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Award className="w-4 h-4" />
                Trusted by 5000+ International Nurses
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-responsive-xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6">
                  Transform Your
                  <br />
                  <span className="text-nai-highlight">Nursing Career</span>
                  <br />
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-nai-highlight via-nai-deep-teal to-nai-highlight bg-clip-text text-transparent tracking-wider">
                    with NAI
                  </span>
                </h1>
                <p className="text-responsive-sm text-gray-600 leading-relaxed max-w-2xl">
                  Master the NCLEX-RN and OSCE with Australia's most trusted nursing education program designed for international nurses.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <a 
                  href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20nursing%20programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:border-green-500 hover:text-green-600 transition-all duration-300"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Chat Now
                </a>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex items-center gap-2 bg-nai-teal/10 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Interactive Classes</span>
                </div>
                <div className="flex items-center gap-2 bg-nai-teal/10 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-2 bg-nai-teal/10 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Job Placement Assistance</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="relative isolate"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20"></div>
              
                <div className="relative z-10 p-6">
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <div className="relative inline-block">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-nai-highlight to-nai-deep-teal bg-clip-text text-transparent mb-3">
                          Success Stories
                        </h3>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-600 font-medium mt-4">
                        <span className="text-nai-highlight font-semibold">Real nurses</span>, 
                        <span className="text-gray-500"> real results</span>
                      </p>
                    </motion.div>
                  </div>

                {/* Testimonial card */}
                <div className="relative h-20 mb-6 overflow-hidden isolate z-0">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const student = heroTestimonials[tIndex]
                      return (
                        <motion.div
                          key={tIndex}
                          className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-3 will-change-transform"
                          initial={{ opacity: 0, y: 18, filter: 'blur(2px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: -18, filter: 'blur(2px)' }}
                          transition={{ duration: 0.45, ease: 'easeInOut' }}
                        >
                          <div className="flex items-center gap-3 h-full">
                            <div className="relative shrink-0">
                              <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm ring-2 ring-white">
                                <img
                                  src={student.img}
                                  alt={`${student.name} - ${student.course} Success`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5">
                                <CheckCircle className="w-2.5 h-2.5" />
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-gray-900 text-sm truncate">{student.name}</h4>
                                <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                                  PASSED
                                </div>
                              </div>
                              <p className="text-xs text-gray-600 mb-1 font-medium truncate">
                                {student.course} • {student.country}
                              </p>
                              <p className="text-xs text-gray-800 italic leading-relaxed line-clamp-1">
                                “{student.quote}”
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })()}
                  </AnimatePresence>
                </div>

                {/* Student grid */}
                <motion.div 
                  className="grid grid-cols-5 gap-2 mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  {Array.from({ length: 10 }, (_, i) => {
                    const student = heroGridStudents[i % heroGridStudents.length];
                    return (
                      <motion.div
                        key={i}
                        className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-white/30 p-2 text-center relative hover:shadow-lg hover:bg-white transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                        transition={{ duration: 5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm mx-auto mb-1">
                          <img 
                            src={student.img} 
                            alt={`${student.name} - ${student.course} Success`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h6 className="font-semibold text-gray-900 text-xs mb-1">{student.name}</h6>
                        <p className="text-xs text-gray-600 mb-1">{student.course}</p>
                        <div className="bg-green-100 text-green-800 px-1 py-0.5 rounded-full text-xs font-semibold">
                          PASSED
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* CTA */}
                <motion.div 
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">Join Our Success Stories</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Be part of our growing community of successful nurses</p>
                    <button className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 w-full">
                      Start Your Journey Today
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-nai-teal/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-nai-highlight rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
