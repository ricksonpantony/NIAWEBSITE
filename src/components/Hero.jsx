import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Clean White Background */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="container-custom pt-32 pb-24 relative z-10">
        <div className="flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-nai-teal/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Award className="w-4 h-4" />
                Trusted by 500+ International Nurses
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
                  Transform Your
                  <br />
                  <span className="text-nai-highlight">Nursing Career</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Master the NCLEX-RN and OSCE with Australia's most trusted nursing education program designed for international nurses.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:border-nai-highlight hover:text-nai-highlight transition-all duration-300">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-nai-highlight mb-1">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nai-highlight mb-1">500+</div>
                  <div className="text-sm text-gray-600">Students Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nai-highlight mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual - Compact Success Stories */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Clean White Background */}
              <div className="absolute inset-0 bg-white rounded-3xl"></div>
              
              {/* Compact Success Stories Gallery */}
              <div className="relative z-10 p-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-nai-dark mb-1">Success Stories</h3>
                  <p className="text-sm text-gray-600">Real nurses, real results</p>
                </div>

                {/* Simple Rotating Testimonial Card */}
                <div className="relative h-16 mb-4 overflow-hidden">
                  {[
                    { 
                      name: "Sarah Johnson", 
                      course: "NCLEX-RN", 
                      country: "Australia", 
                      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
                      quote: "NAI's program gave me the confidence to pass on my first attempt!" 
                    },
                    { 
                      name: "Michael Chen", 
                      course: "OSCE", 
                      country: "Singapore", 
                      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
                      quote: "The hands-on training was exactly what I needed!" 
                    },
                    { 
                      name: "Priya Sharma", 
                      course: "NCLEX-NGN", 
                      country: "India", 
                      img: "https://images.unsplash.com/photo-1594824374893-1b0b0b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
                      quote: "From doubt to success - NAI made it possible!" 
                    },
                    { 
                      name: "Emma Wilson", 
                      course: "OSCE", 
                      country: "UK", 
                      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
                      quote: "Professional training that delivered results!" 
                    },
                    { 
                      name: "David Kim", 
                      course: "NCLEX", 
                      country: "South Korea", 
                      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
                      quote: "The best investment in my nursing career!" 
                    }
                  ].map((student, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, -20]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        delay: index * 6,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="flex items-center gap-3 h-full">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img 
                            src={student.img} 
                            alt={`${student.name} - ${student.course} Success`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{student.name}</h4>
                            <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                              PASSED
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{student.course} • {student.country}</p>
                          <p className="text-xs text-gray-700 italic">"{student.quote}"</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 10 Images at a Time - Looping */}
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {Array.from({ length: 10 }, (_, i) => {
                    const allStudents = [
                      { name: "Alex", course: "NCLEX", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Maria", course: "OSCE", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "James", course: "OBA", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Lisa", course: "NCLEX", img: "https://images.unsplash.com/photo-1594824374893-1b0b0b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Ahmed", course: "OSCE", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Sophie", course: "NCLEX", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Carlos", course: "OSCE", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Yuki", course: "OBA", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Anna", course: "NCLEX", img: "https://images.unsplash.com/photo-1594824374893-1b0b0b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Mohammed", course: "OSCE", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Emma", course: "NCLEX", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "David", course: "OSCE", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Sarah", course: "NCLEX", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Michael", course: "OSCE", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Priya", course: "OBA", img: "https://images.unsplash.com/photo-1594824374893-1b0b0b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "John", course: "NCLEX", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Fatima", course: "OSCE", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Robert", course: "NCLEX", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Aisha", course: "OSCE", img: "https://images.unsplash.com/photo-1594824374893-1b0b0b0b0b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Thomas", course: "OBA", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
                    ];
                    
                    return (
                      <motion.div
                        key={i}
                        className="bg-white rounded-lg shadow-md p-2 text-center relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0],
                          scale: [0.8, 1, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm mx-auto mb-1">
                          <img 
                            src={allStudents[i % allStudents.length].img} 
                            alt={`${allStudents[i % allStudents.length].name} - ${allStudents[i % allStudents.length].course} Success`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h6 className="font-semibold text-gray-900 text-xs mb-1">{allStudents[i % allStudents.length].name}</h6>
                        <p className="text-xs text-gray-600 mb-1">{allStudents[i % allStudents.length].course}</p>
                         <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">
                           PASSED
                         </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Compact Success Stats */}
                <div className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-lg p-3 text-white text-center">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <div className="text-lg font-bold">5000+</div>
                      <div className="text-xs opacity-90">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">3000+</div>
                      <div className="text-xs opacity-90">Passed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">50+</div>
                      <div className="text-xs opacity-90">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
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
