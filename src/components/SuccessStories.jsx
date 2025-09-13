import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, X, Quote, Star, Award, MapPin, Calendar, Trophy, Users } from 'lucide-react'
import { successStories } from '../data/successStories'

const SuccessStories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedStory, setSelectedStory] = useState(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [filteredStories, setFilteredStories] = useState(successStories)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredStories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, filteredStories.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredStories.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredStories.length) % filteredStories.length)
    setIsAutoPlaying(false)
  }

  const openLightbox = (story) => {
    setSelectedStory(story)
    setIsAutoPlaying(false)
  }

  const closeLightbox = () => {
    setSelectedStory(null)
    setIsAutoPlaying(true)
  }

  const filterByCourse = (course) => {
    if (course === 'all') {
      setFilteredStories(successStories)
    } else {
      setFilteredStories(successStories.filter(story => story.course === course))
    }
    setCurrentIndex(0)
  }

  const uniqueCourses = ['all', ...new Set(successStories.map(story => story.course))]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-nai-soft to-white">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-responsive-lg font-bold text-nai-dark mb-4 sm:mb-6">
            Student <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-responsive-sm text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how our students achieved their nursing dreams with NAI's comprehensive training programs. 
            Read their inspiring journeys and see how you can join their success.
          </p>

          {/* Course Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {uniqueCourses.map((course) => (
              <button
                key={course}
                onClick={() => filterByCourse(course)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  (course === 'all' && filteredStories.length === successStories.length) ||
                  (course !== 'all' && filteredStories.some(story => story.course === course))
                    ? 'bg-nai-highlight text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-nai-soft hover:text-nai-dark'
                }`}
              >
                {course === 'all' ? 'All Courses' : course}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {filteredStories.slice(0, 6).map((story, index) => (
            <motion.div
              key={story.id}
              className="card p-6 cursor-pointer group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(story)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-nai-teal/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                {/* Score Badge */}
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  {story.score}
                </div>
                {/* Flag */}
                <div className="absolute top-3 left-3 text-2xl bg-white/90 rounded-full p-1">
                  {story.flag}
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-nai-dark mb-1">{story.name}</h3>
                  <p className="text-nai-highlight font-medium mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {story.course}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {story.country} • <Calendar className="w-3 h-3" /> {story.passDate}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 italic">
                  "{story.quote}"
                </p>
                
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-medium">{story.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {filteredStories.map((story) => (
                <div key={story.id} className="w-full flex-shrink-0 px-4">
                  <div className="card p-6">
                    <div className="relative mb-4">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      {/* Score Badge */}
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        {story.score}
                      </div>
                      {/* Flag */}
                      <div className="absolute top-3 left-3 text-2xl bg-white/90 rounded-full p-1">
                        {story.flag}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-nai-dark mb-1">{story.name}</h3>
                        <p className="text-nai-highlight font-medium mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          {story.course}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {story.country} • <Calendar className="w-3 h-3" /> {story.passDate}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 text-sm italic">
                        "{story.quote}"
                      </p>
                      
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500 font-medium">{story.achievement}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-nai-dark" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-nai-dark" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {filteredStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-nai-highlight' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Photo and Basic Info */}
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <img
                          src={selectedStory.image}
                          alt={selectedStory.name}
                          className="w-40 h-40 rounded-full mx-auto object-cover"
                        />
                        {/* Score Badge */}
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          {selectedStory.score}
                        </div>
                        {/* Flag */}
                        <div className="absolute -bottom-2 -left-2 text-3xl bg-white rounded-full p-1 shadow-lg">
                          {selectedStory.flag}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-nai-dark mb-2">{selectedStory.name}</h3>
                      <p className="text-nai-highlight font-semibold mb-2 flex items-center justify-center gap-2">
                        <Award className="w-5 h-5" />
                        {selectedStory.course}
                      </p>
                      <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {selectedStory.country} • <Calendar className="w-4 h-4" /> {selectedStory.passDate}
                      </p>
                      
                      <div className="bg-nai-soft rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-600 font-medium mb-2">Current Position</p>
                        <p className="text-nai-dark font-semibold">{selectedStory.currentPosition}</p>
                      </div>
                    </div>

                    {/* Right Column - Detailed Story */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-nai-teal to-nai-deep-teal rounded-lg p-6 text-white">
                        <Quote className="w-8 h-8 mx-auto mb-4" />
                        <p className="text-lg italic leading-relaxed text-center">
                          "{selectedStory.quote}"
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-nai-dark mb-3">Success Story</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedStory.testimonial}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-nai-soft rounded-lg p-4">
                          <p className="text-sm text-gray-600 font-medium mb-1">Study Duration</p>
                          <p className="text-nai-dark font-semibold">{selectedStory.studyDuration}</p>
                        </div>
                        <div className="bg-nai-soft rounded-lg p-4">
                          <p className="text-sm text-gray-600 font-medium mb-1">Achievement</p>
                          <p className="text-nai-dark font-semibold text-sm">{selectedStory.achievement}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-nai-dark mb-3">Key Program Benefits</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedStory.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                              <Star className="w-4 h-4 text-nai-highlight flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-nai-teal to-nai-deep-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Join Our Success Stories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-2">3000+</div>
                <div className="text-sm opacity-90">Students Passed</div>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Countries</div>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessStories
