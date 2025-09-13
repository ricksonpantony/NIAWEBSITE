import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Target, Users, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const timeline = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We evaluate your current qualifications and experience to create a personalized learning plan."
    },
    {
      step: "2",
      title: "Comprehensive Training",
      description: "Engage in our structured programs covering all aspects of NCLEX-RN and OSCE preparation."
    },
    {
      step: "3",
      title: "Practice & Feedback",
      description: "Participate in mock exams and receive detailed feedback to improve your performance."
    },
    {
      step: "4",
      title: "Exam Success",
      description: "Take your exam with confidence, knowing you're fully prepared for success."
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We care deeply about our students' success and well-being throughout their journey."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in education and student support services."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive learning community where students help each other succeed."
    },
    {
      icon: Award,
      title: "Achievement",
      description: "We celebrate every milestone and success, big or small, in our students' journey."
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
            About <span className="text-gradient">NAI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurse Assist International is dedicated to helping internationally qualified nurses achieve their dreams of practicing in Australia.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-nai-dark mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by experienced nursing professionals who understand the challenges of international nursing registration, 
                NAI was born from a simple belief: every qualified nurse deserves the opportunity to practice their profession 
                in Australia.
              </p>
              <p>
                Over the past 5+ years, we've helped hundreds of internationally qualified nurses successfully navigate the 
                complex pathways to Australian nursing registration. Our comprehensive approach combines expert education, 
                cultural support, and personalized guidance.
              </p>
              <p>
                Today, NAI stands as a trusted partner for nurses worldwide, offering proven programs that deliver results 
                and build confidence for exam success.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-nai-teal to-nai-deep-teal rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-blue-100 leading-relaxed">
                  To empower internationally qualified nurses with the knowledge, skills, and confidence needed to 
                  successfully transition to Australian nursing practice through comprehensive education and unwavering support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-nai-dark text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-nai-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-nai-highlight" />
                </div>
                <h4 className="text-xl font-semibold text-nai-dark mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* OBA Pathway Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-nai-dark text-center mb-12">OBA Pathway Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-nai-teal/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-nai-highlight text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-nai-dark mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-nai-teal to-nai-deep-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful nurses who have achieved their dreams with NAI's comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-nai-deep-teal hover:bg-yellow-300 hover:text-nai-deep-teal">
                Get Started Today
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-nai-deep-teal">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
