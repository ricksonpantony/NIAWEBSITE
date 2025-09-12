import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'

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
      color: "from-blue-500 to-blue-600",
      icon: "🏥",
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
      ]
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
      color: "from-green-500 to-green-600",
      icon: "📚",
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
      ]
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
      color: "from-purple-500 to-purple-600",
      icon: "🎯",
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
      ]
    }
  ]

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
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed specifically for internationally qualified nurses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="card p-8 relative overflow-hidden group h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color}`}></div>
              
              {/* Header */}
              <div className="mb-6">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-nai-dark mb-2">{course.title}</h3>
                <p className="text-nai-highlight font-semibold mb-3">{course.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{course.description}</p>
              </div>
              
              {/* Price and Success Rate */}
              <div className="flex justify-between items-center mb-6 p-4 bg-nai-soft rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-nai-highlight">{course.price}</div>
                  <div className="text-sm text-gray-600">Full Program</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{course.successRate}</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
              
              {/* Key Features */}
              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-nai-dark mb-3">What You'll Learn:</h4>
                <ul className="space-y-2">
                  {course.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Course Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">Next Intake:</span><br />
                  <span className="text-nai-highlight">{course.nextIntake}</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">Includes:</span><br />
                  <span className="text-nai-highlight">{course.includes.length} modules</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full btn-primary flex items-center justify-center gap-2 group-hover:bg-nai-deep-teal mt-auto">
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Detailed Course Information */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-nai-dark text-center mb-12">
            Complete Course Details
          </h3>
          
          <div className="space-y-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Course Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl">{course.icon}</div>
                      <div>
                        <h4 className="text-2xl font-bold text-nai-dark">{course.title}</h4>
                        <p className="text-nai-highlight font-semibold">{course.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                    
                    {/* All Features */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-nai-dark mb-3">Complete Curriculum:</h5>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Course Details Sidebar */}
                  <div className="space-y-6">
                    {/* Pricing */}
                    <div className="bg-nai-soft rounded-xl p-6">
                      <h5 className="font-semibold text-nai-dark mb-3">Investment</h5>
                      <div className="text-3xl font-bold text-nai-highlight mb-2">{course.price}</div>
                      <p className="text-sm text-gray-600">Full program with all materials</p>
                    </div>
                    
                    {/* What's Included */}
                    <div>
                      <h5 className="font-semibold text-nai-dark mb-3">What's Included:</h5>
                      <ul className="space-y-2">
                        {course.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-nai-highlight mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Requirements */}
                    <div>
                      <h5 className="font-semibold text-nai-dark mb-3">Requirements:</h5>
                      <ul className="space-y-2">
                        {course.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-nai-highlight rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg border">
                        <div className="text-2xl font-bold text-green-600">{course.successRate}</div>
                        <div className="text-xs text-gray-600">Success Rate</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border">
                        <div className="text-2xl font-bold text-nai-highlight">{course.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                    </div>
                    
                    <button className="w-full btn-primary">
                      Enroll in {course.title}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consultation CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-nai-teal to-nai-deep-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Help Choosing the Right Course?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our education consultants are here to help you select the perfect course based on your background, experience, and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-nai-deep-teal hover:bg-yellow-300 hover:text-nai-deep-teal">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-nai-deep-teal">
                Download Course Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
