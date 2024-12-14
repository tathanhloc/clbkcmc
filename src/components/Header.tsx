import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/images/logo.png" // Make sure to add your logo file in the public folder
                            alt="Logo"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#2eb1f2] leading-tight font-montserrat uppercase">
                                Hội sinh viên Trường Đại học Kiên Giang
                            </span>
                            <span className="text-sm font-bold text-[#2eb1f2] leading-tight font-montserrat uppercase">
                               <strong> Câu lạc bộ Truyền thông và Máy tính</strong>
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <Link href="#about" className="text-[#2eb1f2] hover:text-[#0239a8]">
                            Giới thiệu
                        </Link>
                        <Link href="#activities" className="text-[#2eb1f2] hover:text-[#0239a8]">
                            Hoạt động
                        </Link>
                        <Link href="/register" className="text-[#2eb1f2] hover:text-[#0239a8]">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

