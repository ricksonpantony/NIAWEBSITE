import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, X, Youtube } from 'lucide-react'

const VideoHighlights = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    {
      id: 1,
      title: "NAI Success Stories",
      description: "Hear from our graduates about their journey to nursing success",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      duration: "3:45"
    },
    {
      id: 2,
      title: "NCLEX-RN Preparation",
      description: "Learn about our comprehensive NCLEX-RN training program",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      duration: "4:20"
    },
    {
      id: 3,
      title: "OSCE Training Overview",
      description: "See how we prepare students for the Objective Structured Clinical Examination",
      thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      duration: "5:15"
    }
  ]

  const openVideo = (video) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
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
            Video <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our videos to learn more about NAI's programs and hear from our successful students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openVideo(video)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-nai-dark mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeVideo}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-nai-dark mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-600">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* YouTube Channel CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Youtube className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-nai-dark mb-4">
              Subscribe to Our YouTube Channel
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest tips, success stories, and exam preparation strategies.
            </p>
            <button className="btn-primary bg-red-500 hover:bg-red-600">
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoHighlights
