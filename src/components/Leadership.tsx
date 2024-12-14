'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LeaderProps {
  name: string
  position: string
  image: string
  description: string
}

const Leader: React.FC<LeaderProps> = ({ name, position, image, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={image} alt={name} width={300} height={300} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-blue-600 mb-4">{position}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

export default function Leadership() {
const leaders: LeaderProps[] = [
    {
        name: "Nguyễn Văn A",
        position: "Chủ nhiệm",
        image: "/placeholder.svg?height=300&width=300",
        description: "Với 5 năm kinh nghiệm trong lĩnh vực, A đã dẫn dắt câu lạc bộ đạt được nhiều thành tựu đáng kể."
    },
    {
        name: "Trần Thị B",
        position: "Phó chủ nhiệm",
        image: "/placeholder.svg?height=300&width=300",
        description: "B là người đam mê với công nghệ và luôn tìm kiếm những ý tưởng sáng tạo mới cho câu lạc bộ."
    },
    {
        name: "Lê Văn C",
        position: "Thư ký",
        image: "/placeholder.svg?height=300&width=300",
        description: "C có khả năng tổ chức xuất sắc và đảm bảo mọi hoạt động của câu lạc bộ diễn ra suôn sẻ."
    },
    {
        name: "Phạm Thị D",
        position: "Trưởng ban truyền thông",
        image: "/placeholder.svg?height=300&width=300",
        description: "D có tài năng đặc biệt trong việc xây dựng hình ảnh và quảng bá cho câu lạc bộ."
    },
    {
        name: "Ngô Văn E",
        position: "Trưởng ban tài chính",
        image: "/placeholder.svg?height=300&width=300",
        description: "E có kinh nghiệm quản lý tài chính và đảm bảo nguồn lực cho các hoạt động của câu lạc bộ."
    },
    {
        name: "Hoàng Thị F",
        position: "Trưởng ban nhân sự",
        image: "/placeholder.svg?height=300&width=300",
        description: "F có khả năng tuyển dụng và đào tạo nhân sự, giúp câu lạc bộ luôn có đội ngũ mạnh mẽ."
    },
    {
        name: "Đỗ Văn G",
        position: "Trưởng ban sự kiện",
        image: "/placeholder.svg?height=300&width=300",
        description: "G có kinh nghiệm tổ chức sự kiện và luôn mang đến những chương trình hấp dẫn cho câu lạc bộ."
    },
    {
        name: "Vũ Thị H",
        position: "Trưởng ban đối ngoại",
        image: "/placeholder.svg?height=300&width=300",
        description: "H có khả năng giao tiếp và xây dựng mối quan hệ tốt với các đối tác của câu lạc bộ."
    }
]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ban Chủ Nhiệm
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Leader key={index} {...leader} />
          ))}
        </div>
      </div>
    </section>
  )
}

