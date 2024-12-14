export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-bold mb-2">Tên Câu Lạc Bộ</h3>
              <p className="text-sm">Nơi kết nối đam mê và phát triển bản thân</p>
            </div>
            <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
              <h4 className="text-lg font-bold mb-2">Liên hệ</h4>
              <p className="text-sm">Email: contact@caulacbo.com</p>
              <p className="text-sm">Điện thoại: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
              <h4 className="text-lg font-bold mb-2">Theo dõi chúng tôi</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-white hover:text-gray-400">Facebook</a>
                <a href="#" className="text-white hover:text-gray-400">Instagram</a>
                <a href="#" className="text-white hover:text-gray-400">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2023 Tên Câu Lạc Bộ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  