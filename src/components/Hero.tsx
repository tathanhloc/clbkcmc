'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

export default function Hero() {
  const [sliderLoaded, setSliderLoaded] = useState(false)

  useEffect(() => {
    import('slick-carousel/slick/slick.css')
    import('slick-carousel/slick/slick-theme.css')
    setSliderLoaded(true)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const slides = [
    {
      image: '/placeholder.svg?height=400&width=800',
      title: 'Chào mừng đến với Câu Lạc Bộ của chúng tôi',
      description: 'Nơi kết nối đam mê và phát triển bản thân',
    },
    {
      image: '/placeholder.svg?height=400&width=800',
      title: 'Khám phá tiềm năng của bạn',
      description: 'Cùng nhau học hỏi và phát triển',
    },
    {
      image: '/placeholder.svg?height=400&width=800',
      title: 'Tham gia ngay hôm nay',
      description: 'Bắt đầu hành trình của bạn với chúng tôi',
    },
  ]

  return (
    <section className="bg-blue-600 text-white">
      {sliderLoaded ? (
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[400px]">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="h-[400px] flex items-center justify-center">
          <p>Loading slider...</p>
        </div>
      )}
    </section>
  )
}

