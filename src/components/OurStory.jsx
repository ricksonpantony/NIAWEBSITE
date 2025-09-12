import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  BookOpen, 
  Heart, 
  Target, 
  Clock, 
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  GraduationCap,
  Trophy,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const OurStory = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Highest NCLEX-RN & OSCE Success Rates",
      description: "We are proud to have the highest number of internationally qualified nurses who successfully passed and gained AHPRA registration.",
      color: "from-nai-highlight to-nai-deep-teal",
      stats: "95%+ Success Rate",
      highlight: "Australia's #1",
      badge: "Top Rated"
    },
    {
      icon: GraduationCap,
      title: "Expert Nurse Educators",
      description: "Our team delivers training designed according to Australian nursing standards.",
      color: "from-blue-500 to-blue-600",
      stats: "10+ Years Experience",
      highlight: "Certified Trainers",
      badge: "Expert Team"
    },
    {
      icon: Shield,
      title: "Comprehensive OBA Training",
      description: "From NCLEX-RN preparation to OSCE coaching, our programs equip you with the knowledge, skills, and confidence to practice as a Registered Nurse in Australia.",
      color: "from-green-500 to-green-600",
      stats: "3 Core Programs",
      highlight: "Full Coverage",
      badge: "Complete"
    },
    {
      icon: Heart,
      title: "Supportive Learning Environment",
      description: "We guide you every step of the way, ensuring you achieve your dream of adding that prestigious RN before your name.",
      color: "from-purple-500 to-purple-600",
      stats: "24/7 Support",
      highlight: "Personal Guidance",
      badge: "Caring"
    }
  ]

  const trainingPrograms = [
    {
      title: "Next Generation NCLEX-RN (NGN) Training",
      description: "Focused preparation for the computer-based exam assessing critical thinking and clinical judgment.",
      icon: Target,
      features: ["Computer-based exam preparation", "Critical thinking assessment", "Clinical judgment training"],
      color: "from-orange-500 to-red-500",
      duration: "8-12 Weeks",
      level: "Intermediate",
      price: "Contact for Pricing",
      badge: "Most Popular",
      stats: "85% Pass Rate"
    },
    {
      title: "OSCE Training",
      description: "Hands-on coaching to demonstrate safe, competent, and professional nursing practice in simulated clinical scenarios.",
      icon: Users,
      features: ["Simulated clinical scenarios", "Hands-on coaching", "Professional practice demonstration"],
      color: "from-teal-500 to-cyan-500",
      duration: "6-10 Weeks",
      level: "Advanced",
      price: "Contact for Pricing",
      badge: "Hands-On",
      stats: "90% Pass Rate"
    },
    {
      title: "OBA Pathway Guidance",
      description: "End-to-end support to meet NMBA and AHPRA requirements.",
      icon: CheckCircle,
      features: ["NMBA compliance", "AHPRA requirements", "End-to-end support"],
      color: "from-indigo-500 to-purple-500",
      duration: "12-16 Weeks",
      level: "Complete",
      price: "Contact for Pricing",
      badge: "Full Support",
      stats: "98% Success Rate"
    }
  ]

  const timeline = [
    {
      year: "2019",
      title: "OBA Introduction",
      description: "AHPRA and NMBA introduced the Outcome Based Assessment (OBA) as the new model to assess international nurses."
    },
    {
      year: "2020",
      title: "NAI Founded",
      description: "Recognizing the urgent need for specialized training, passionate Nurse Educators established Nurse Assist International."
    },
    {
      year: "Present",
      title: "Leading Institute",
      description: "NAI has become widely known for helping IQNMs confidently prepare for and pass the NCLEX-RN and OSCE exams."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-nai-soft via-white to-nai-soft">
      <div className="container-custom">
        {/* Hero Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          {/* Background Image Section */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-nai-highlight/90 to-nai-deep-teal/90 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            
            {/* Content Overlay */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container-custom">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-white"
                  >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      Our <span className="text-yellow-300">Story</span>
                    </h2>
                    <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-95">
                      Nurse Assist International (NAI) is the leading institute and the first ever registered company in Australia to provide NCLEX-RN and OSCE training for internationally qualified nurses (IQNMs).
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                        <span className="text-sm font-semibold">🏆 Australia's #1</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                        <span className="text-sm font-semibold">📚 Since 2019</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                        <span className="text-sm font-semibold">🎯 95%+ Success Rate</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Story Content with Enhanced Layout */}
        <div className="mb-20">
          {/* Journey Section with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Left - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-nai-dark mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  Our Journey
                </h3>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our journey began in 2019 when the Australian Health Practitioner Regulation Agency (AHPRA) and NMBA introduced the Outcome Based Assessment (OBA) as the new model to assess international nurses.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Since March 2020, all internationally qualified nurses (IQNMs) with relevant but not substantially equivalent qualifications must successfully complete the OBA pathway, which includes the Next Generation NCLEX-RN (NGN) and the OSCE (Objective Structured Clinical Examination).
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Recognizing the urgent need for specialized training, a team of passionate Nurse Educators established Nurse Assist International (NAI). Since then, NAI has become widely known for helping IQNMs confidently prepare for and pass the NCLEX-RN and OSCE exams.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-nai-highlight/20 to-nai-deep-teal/20 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-nai-highlight">2019</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1st</div>
                  <div className="text-sm text-gray-600">Registered</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-nai-dark mb-12">
              Our <span className="text-gradient">Timeline</span>
            </h3>
            
            {/* Compact Timeline Container */}
            <div className="relative max-w-4xl mx-auto">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-nai-highlight via-nai-deep-teal to-nai-highlight rounded-full transform -translate-y-1/2 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="grid md:grid-cols-3 gap-8 relative">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full border-4 border-white shadow-lg z-20 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-nai-highlight/30">
                      {/* Year Badge */}
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal text-white text-sm font-bold px-4 py-2 rounded-full">
                          {item.year}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-lg font-bold text-nai-dark mb-3 text-center group-hover:text-nai-highlight transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {item.description}
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Progress Indicator */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-nai-highlight rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-nai-deep-teal rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-nai-highlight rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Statement with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Left - Image */}
            <div className="relative">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-nai-highlight/20 to-nai-deep-teal/20 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
              </div>
            </div>

            {/* Right - Mission */}
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-nai-highlight/10 to-nai-deep-teal/10 rounded-3xl p-8 border border-nai-highlight/20 w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-nai-dark">Our Mission</h3>
                </div>
                <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                  "At NAI, we don't just train nurses—we empower them to succeed and build a career as a Registered Nurse in Australia."
                </blockquote>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="bg-white/50 rounded-full px-4 py-2">
                    <span className="text-sm font-semibold text-nai-dark">Empowerment</span>
                  </div>
                  <div className="bg-white/50 rounded-full px-4 py-2">
                    <span className="text-sm font-semibold text-nai-dark">Excellence</span>
                  </div>
                  <div className="bg-white/50 rounded-full px-4 py-2">
                    <span className="text-sm font-semibold text-nai-dark">Success</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose NAI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-nai-dark mb-12">
            Why Choose <span className="text-gradient">NAI?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${achievement.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
                  </div>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${achievement.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {achievement.badge}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-bold text-green-600">{achievement.stats}</span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg font-bold text-nai-dark mb-3 leading-tight">{achievement.title}</h4>
                  
                  {/* Highlight */}
                  <div className="bg-gradient-to-r from-nai-highlight/10 to-transparent rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-nai-highlight" />
                      <span className="text-sm font-semibold text-nai-highlight">{achievement.highlight}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-nai-highlight" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-nai-dark mb-12">
            Our <span className="text-gradient">Training Programs</span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Badge */}
                  <div className={`absolute top-6 right-6 bg-gradient-to-r ${program.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {program.badge}
                  </div>
                  
                  {/* Icon with enhanced styling */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl relative`}>
                    <program.icon className="w-10 h-10 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-nai-dark mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-nai-highlight group-hover:to-nai-deep-teal group-hover:bg-clip-text transition-all duration-300">
                    {program.title}
                  </h4>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 text-center">
                      <div className="text-sm font-bold text-nai-dark">{program.stats}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 text-center">
                      <div className="text-sm font-bold text-blue-600">{program.duration}</div>
                      <div className="text-xs text-blue-500">Duration</div>
                    </div>
                  </div>
                  
                  {/* Level Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-purple-700">{program.level} Level</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-green-700">{program.price}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{program.description}</p>
                  
                  {/* Features with enhanced styling */}
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button className={`w-full bg-gradient-to-r ${program.color} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl flex items-center justify-center gap-2`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nai-highlight to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-3xl p-8 text-white text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Opening Hours</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold mb-2">Monday to Saturday</h4>
              <p className="text-lg">9:00 AM – 5:00 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold mb-2">Sunday</h4>
              <p className="text-lg">Closed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
