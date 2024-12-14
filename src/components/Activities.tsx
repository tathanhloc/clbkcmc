export default function Activities() {
    const activities = [
      { title: 'Hội thảo chuyên đề', description: 'Tổ chức các buổi hội thảo với chuyên gia trong ngành' },
      { title: 'Dự án cộng đồng', description: 'Thực hiện các dự án có ích cho cộng đồng xung quanh' },
      { title: 'Cuộc thi kỹ năng', description: 'Tổ chức các cuộc thi để nâng cao kỹ năng cho thành viên' },
      { title: 'Giao lưu networking', description: 'Tạo cơ hội kết nối giữa các thành viên và đối tác' },
    ]
  
    return (
      <section id="activities" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Hoạt Động Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  