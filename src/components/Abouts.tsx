'use client'

import { motion } from 'framer-motion'
import { MissionIcon, VisionIcon, ValuesIcon } from './Icons'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Về Chúng Tôi
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <MissionIcon />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sứ mệnh</h3>
            <p className="text-gray-600 text-center">
              Câu lạc bộ chúng tôi cam kết tạo ra một môi trường học tập và phát triển bản thân 
              cho tất cả các thành viên, thông qua các hoạt động đa dạng và sáng tạo.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <VisionIcon />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Tầm nhìn</h3>
            <p className="text-gray-600 text-center">
              Chúng tôi hướng tới việc trở thành một trong những câu lạc bộ hàng đầu, 
              nơi các thành viên có thể phát triển kỹ năng, xây dựng mạng lưới và tạo ra 
              những đóng góp tích cực cho cộng đồng.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <ValuesIcon />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Giá trị cốt lõi</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Sáng tạo và Đổi mới</li>
              <li>Hợp tác và Chia sẻ</li>
              <li>Trách nhiệm xã hội</li>
              <li>Phát triển bền vững</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Tham gia cùng chúng tôi
          </a>
        </motion.div>
      </div>
    </section>
  )
}

