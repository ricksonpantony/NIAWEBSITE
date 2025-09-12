import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openItems, setOpenItems] = useState({})

  const faqCategories = [
    {
      category: "NCLEX-NGN",
      icon: "📚",
      questions: [
        {
          question: "What is the new NCLEX-NGN format?",
          answer: "The Next Generation NCLEX (NGN) focuses on clinical judgment and decision-making skills. It includes new item types like case studies, extended multiple response, and enhanced hot spots that better assess your ability to make sound clinical decisions."
        },
        {
          question: "How long does the NCLEX-NGN preparation take?",
          answer: "Our NCLEX-NGN program typically takes 16 weeks, but this can be adjusted based on your individual needs and schedule. We offer both full-time and part-time options to accommodate different lifestyles."
        },
        {
          question: "What study materials are included?",
          answer: "You'll receive comprehensive study guides, practice questions, case studies, video lectures, and access to our online learning platform. We also provide mock exams that simulate the actual NCLEX-NGN experience."
        },
        {
          question: "Do you offer practice exams?",
          answer: "Yes, we provide multiple practice exams throughout the program, including full-length simulations that mirror the actual NCLEX-NGN format. These help you build confidence and identify areas for improvement."
        }
      ]
    },
    {
      category: "OSCE",
      icon: "🏥",
      questions: [
        {
          question: "What is the OSCE and why is it important?",
          answer: "The Objective Structured Clinical Examination (OSCE) is a practical assessment that evaluates your clinical skills, communication abilities, and professional judgment in simulated healthcare scenarios. It's a crucial part of the OBA pathway for international nurses."
        },
        {
          question: "How do you prepare students for OSCE?",
          answer: "Our OSCE preparation includes hands-on practice sessions with standardized patients, communication skills training, clinical scenario practice, and detailed feedback on your performance. We focus on building both technical skills and confidence."
        },
        {
          question: "What clinical skills are assessed in OSCE?",
          answer: "OSCE assesses various clinical skills including patient assessment, medication administration, wound care, infection control, communication with patients and families, and professional behavior in healthcare settings."
        },
        {
          question: "How many practice sessions are included?",
          answer: "Our program includes multiple practice sessions with increasing complexity. You'll have access to individual and group practice sessions, as well as full OSCE simulations to ensure you're fully prepared."
        }
      ]
    },
    {
      category: "General",
      icon: "❓",
      questions: [
        {
          question: "What are the entry requirements?",
          answer: "To enroll in our programs, you need to be an internationally qualified nurse with a valid nursing license from your home country. We also require English proficiency and completion of our initial assessment."
        },
        {
          question: "Do you offer online or in-person classes?",
          answer: "We offer both online and in-person options to accommodate different learning preferences and locations. Our hybrid approach combines the flexibility of online learning with the benefits of face-to-face interaction."
        },
        {
          question: "What support is available after enrollment?",
          answer: "We provide 24/7 academic support, career counseling, exam preparation assistance, and ongoing mentorship. Our team is committed to your success throughout your entire journey."
        },
        {
          question: "What is your success rate?",
          answer: "We maintain a 95% first-time pass rate for both NCLEX-RN and OSCE exams. Our comprehensive approach and personalized support contribute to these outstanding results."
        }
      ]
    }
  ]

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <section ref={ref} className="section-padding bg-nai-soft">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our programs, the OBA pathway, and exam preparation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-nai-dark">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems[key]

                  return (
                    <motion.div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                      >
                        <span className="font-semibold text-nai-dark pr-4">{item.question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-nai-highlight flex-shrink-0" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <HelpCircle className="w-16 h-16 text-nai-highlight mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-nai-dark mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our education consultants are here to help. Get personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule a Call
              </button>
              <button className="btn-secondary">
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
