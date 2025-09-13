import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Users, BookOpen, Heart } from 'lucide-react'

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Trophy,
      title: "Proven Success Rates",
      description: "95% of our students pass their NCLEX-RN and OSCE exams on their first attempt",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Expert Educators",
      description: "Learn from experienced nurses and educators who understand the international pathway",
      color: "text-blue-500"
    },
    {
      icon: BookOpen,
      title: "OBA Pathway Support",
      description: "Comprehensive support for the Objective Structured Clinical Examination process",
      color: "text-green-500"
    },
    {
      icon: Heart,
      title: "Friendly Environment",
      description: "Supportive learning environment that helps you succeed and build confidence",
      color: "text-pink-500"
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-responsive-lg font-bold text-nai-dark mb-4 sm:mb-6">
            Why Choose <span className="text-gradient">NAI</span>?
          </h2>
          <p className="text-responsive-sm text-gray-600 max-w-3xl mx-auto">
            We're committed to your success with proven methods, expert guidance, and comprehensive support throughout your nursing journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 sm:p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-nai-teal/10 transition-colors duration-300`}>
                <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color} group-hover:text-nai-highlight transition-colors duration-300`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-nai-dark mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 bg-nai-soft rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-nai-highlight mb-1 sm:mb-2">5000+</div>
              <div className="text-sm sm:text-base text-gray-600">Students Trained</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-nai-highlight mb-1 sm:mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-600">First-Time Pass Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-nai-highlight mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-nai-highlight mb-1 sm:mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
