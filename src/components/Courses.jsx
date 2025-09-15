import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle, Clock, Users, Award, BookOpen, Target } from 'lucide-react'

const Courses = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const courses = [
    {
      title: "OBA Pathway Program",
      subtitle: "Objective Structured Clinical Examination",
      description: "Complete preparation for the OBA pathway to Australian nursing registration. Our comprehensive program covers all aspects of the Objective Structured Clinical Examination process.",
      features: [
        "Clinical skills assessment preparation with real scenarios",
        "Communication and cultural competency training for Australian healthcare",
        "Mock OSCE practice sessions with standardized patients",
        "Cultural adaptation workshops for international nurses",
        "Professional documentation and record-keeping training",
        "Ethics and legal framework education"
      ],
      duration: "12 weeks",
      students: "50+ per cohort",
      color: "slate",
      icon: Award,
      price: "AUD $2,500",
      successRate: "94%",
      nextIntake: "March 2024",
      includes: [
        "24/7 online learning platform access",
        "Personal mentor assignment",
        "Mock exam sessions (10+ practice tests)",
        "Cultural competency certification",
        "Job placement assistance",
        "Lifetime alumni support"
      ],
      requirements: [
        "Internationally qualified nurse",
        "IELTS 7.0 or equivalent",
        "Valid nursing license from home country",
        "Minimum 2 years clinical experience"
      ],
      priority: "Most Popular"
    },
    {
      title: "NCLEX-NGN Preparation",
      subtitle: "Next Generation NCLEX",
      description: "Advanced preparation for the new NCLEX-RN format with enhanced focus on clinical judgment and decision-making skills. Updated curriculum for 2024 exam changes.",
      features: [
        "Clinical judgment development with case studies",
        "Next Generation NCLEX item types mastery",
        "Adaptive testing strategies and time management",
        "Pharmacology and pathophysiology review",
        "Mental health and psychiatric nursing focus",
        "Maternal and pediatric nursing specialization"
      ],
      duration: "16 weeks",
      students: "30+ per cohort",
      color: "emerald",
      icon: BookOpen,
      price: "AUD $3,200",
      successRate: "96%",
      nextIntake: "February 2024",
      includes: [
        "Comprehensive study materials and textbooks",
        "Access to 5,000+ practice questions",
        "Weekly live review sessions",
        "Personal study plan development",
        "Progress tracking and analytics",
        "Exam day preparation and support"
      ],
      requirements: [
        "Bachelor's degree in nursing",
        "English proficiency (IELTS 7.0+)",
        "Valid nursing license",
        "Completed nursing education verification"
      ],
      priority: "Comprehensive"
    },
    {
      title: "OSCE Intensive Training",
      subtitle: "Objective Structured Clinical Examination",
      description: "Specialized intensive training for OSCE assessments with hands-on practice, standardized patient interactions, and comprehensive feedback systems.",
      features: [
        "Station-based practice sessions (15+ stations)",
        "Standardized patient interactions and feedback",
        "Performance assessment and improvement plans",
        "Clinical reasoning and decision-making training",
        "Communication skills for diverse populations",
        "Emergency and critical care scenarios"
      ],
      duration: "8 weeks",
      students: "20+ per cohort",
      color: "indigo",
      icon: Target,
      price: "AUD $1,800",
      successRate: "92%",
      nextIntake: "April 2024",
      includes: [
        "Individual performance coaching",
        "Video recording and analysis sessions",
        "Peer learning and group practice",
        "OSCE simulation center access",
        "Professional feedback reports",
        "Confidence building workshops"
      ],
      requirements: [
        "Completed OBA pathway or equivalent",
        "Basic clinical skills competency",
        "English communication proficiency",
        "Commitment to intensive practice schedule"
      ],
      priority: "Intensive"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      slate: {
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        text: 'text-slate-600',
        accent: 'text-slate-800',
        icon: 'bg-slate-100 text-slate-700',
        button: 'bg-slate-800 hover:bg-slate-900 text-white'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-600',
        accent: 'text-emerald-800',
        icon: 'bg-emerald-100 text-emerald-700',
        button: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        accent: 'text-indigo-800',
        icon: 'bg-indigo-100 text-indigo-700',
        button: 'bg-indigo-700 hover:bg-indigo-800 text-white'
      }
    }
    return colorMap[color] || colorMap.slate
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-nai-highlight/10 rounded-full mb-6">
            <span className="text-sm font-medium text-nai-highlight">Professional Training</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expertly designed courses for internationally qualified nurses seeking Australian registration
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color)
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Priority Badge */}
                {course.priority === "Most Popular" && (
                  <div className="absolute -top-3 left-6 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative bg-white rounded-2xl p-8 h-full transition-all duration-300 border-2 ${colors.border} group-hover:border-gray-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <course.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-nai-highlight transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 font-medium mb-3">{course.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{course.description}</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{course.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{course.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{course.price}</div>
                      <div className="text-sm text-gray-600">Complete Program</div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${colors.button} transform group-hover:scale-105 flex items-center justify-center gap-2`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Our Programs */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Training Programs?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our programs are designed by industry experts with years of experience in Australian healthcare
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h4>
              <p className="text-gray-600">Learn from registered nurses and healthcare professionals with extensive Australian experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Small Class Sizes</h4>
              <p className="text-gray-600">Personalized attention with limited cohort sizes ensuring quality education for every student</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">High success rates and comprehensive support throughout your journey to registration</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of internationally qualified nurses who have successfully obtained their Australian registration through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                Download Program Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
