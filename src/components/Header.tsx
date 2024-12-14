import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/images/logo.png"
                            alt="Logo Câu lạc bộ"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-800 leading-tight">
                                Hội sinh viên Trường Đại học Kiên Giang
                            </span>
                            <span className="text-sm font-semibold text-gray-800 leading-tight">
                                Câu lạc bộ Truyền thông và Máy tính
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <Link href="#about" className="text-blue-800 hover:text-gray-600">
                            Giới thiệu
                        </Link>
                        <Link href="#activities" className="text-blue-800 hover:text-gray-600">
                            Hoạt động
                        </Link>
                        <Link href="/auth" className="text-blue-800 hover:text-gray-600">
                            Đăng nhập / Đăng ký
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

