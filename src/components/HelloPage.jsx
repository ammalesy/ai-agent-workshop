import React from 'react'
import { Link } from 'react-router-dom'

const HelloPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header - Matching BankingPage style */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-green-600 rounded-lg p-3 font-bold text-xl shadow-sm">
              ไทย
            </div>
            <div>
              <div className="font-semibold text-xl">ไทยแบงก์</div>
              <div className="text-sm text-green-100 font-normal">Thai Bank</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            
            
            <div className="bg-yellow-400 text-neutral-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold shadow-sm">
              1
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">ระบบต้อนรับ</div>
              <div className="text-xs text-green-100">Welcome System</div>
            </div>
            <div className="text-2xl">🌸</div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow border border-neutral-200">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-neutral-500 mb-3 font-normal">ยินดีต้อนรับ • Welcome</div>
              <div className="text-5xl font-normal text-neutral-700 mb-3">สวัสดีครับ</div>
              <div className="text-sm text-neutral-400 font-normal">แอปพลิเคชัน React • React Application</div>
            </div>
            <div className="text-right">
              <div className="w-12 h-12 border-2 border-green-200 rounded-lg flex items-center justify-center mb-3 bg-green-50">
                🌸
              </div>
              <div className="text-xs text-neutral-400 font-normal">เตรียมพร้อม: เรียบร้อย</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features Section */}
          <div className="bg-white rounded-lg p-8 shadow border border-neutral-200">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-green-50 text-green-500 rounded-lg w-12 h-12 flex items-center justify-center">
                ⚡
              </div>
              <div>
                <h2 className="text-2xl font-normal text-neutral-700">คุณลักษณะ</h2>
                <p className="text-sm text-neutral-500 font-normal">Features</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-md transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-sm bg-green-500">
                    ⚡
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-neutral-700">การพัฒนาที่รวดเร็ว</span>
                      <span className="text-sm text-neutral-500 font-normal">Vite</span>
                    </div>
                    <div className="text-sm text-neutral-600 font-normal">Fast Development with Vite</div>
                  </div>
                </div>
                <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-normal">
                  พร้อมใช้งาน
                </div>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-md transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-sm bg-blue-500">
                    ⚛️
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-neutral-700">React 18</span>
                      <span className="text-sm text-neutral-500 font-normal">Latest</span>
                    </div>
                    <div className="text-sm text-neutral-600 font-normal">เวอร์ชันล่าสุด</div>
                  </div>
                </div>
                <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-normal">
                  อัปเดต
                </div>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-md transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-sm bg-purple-500">
                    🎨
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-neutral-700">Tailwind CSS</span>
                      <span className="text-sm text-neutral-500 font-normal">Styling</span>
                    </div>
                    <div className="text-sm text-neutral-600 font-normal">การจัดรูปแบบ</div>
                  </div>
                </div>
                <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-normal">
                  ใช้งานได้
                </div>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-md transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-sm bg-red-500">
                    🔥
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-neutral-700">Hot Reload</span>
                      <span className="text-sm text-neutral-500 font-normal">Live</span>
                    </div>
                    <div className="text-sm text-neutral-600 font-normal">รองรับการอัปเดตสด</div>
                  </div>
                </div>
                <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-normal">
                  เชื่อมต่อแล้ว
                </div>
              </div>
              
              <div className="pt-4 border-t border-neutral-200">
                <button className="w-full text-neutral-500 py-3 rounded-md font-normal hover:bg-neutral-50 hover:text-neutral-700 transition-colors duration-200">
                  ดูคุณลักษณะทั้งหมด • View All Features
                </button>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="bg-white rounded-lg p-8 shadow border border-neutral-200">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-green-50 text-green-500 rounded-lg w-12 h-12 flex items-center justify-center">
                🚀
              </div>
              <div>
                <h2 className="text-2xl font-normal text-neutral-700">เริ่มต้นใช้งาน</h2>
                <p className="text-sm text-neutral-500 font-normal">Getting Started</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg mx-auto">
                  <span className="text-white text-2xl">🌸</span>
                </div>
                <div>
                  <div className="text-xl font-medium text-neutral-700 mb-2">ยินดีต้อนรับสู่โลกแห่งซากุระ</div>
                  <div className="text-sm text-neutral-500 font-normal">Welcome to your elegant React Application</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-3">
                    ชื่อผู้ใช้ • Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      👤
                    </span>
                    <input
                      type="text"
                      placeholder="กรอกชื่อของคุณ"
                      className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-neutral-50 font-normal"
                    />
                  </div>
                </div>

                <button className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition-colors duration-200 shadow-sm hover:shadow-md">
                  เริ่มต้นใช้งาน • Get Started
                </button>
                
                <button className="w-full text-center bg-blue-50 text-blue-700 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-100 py-3 rounded-md font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                  📚 เอกสารประกอบ • Documentation
                </button>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <div className="text-xs text-neutral-400 text-center font-normal">
                  อัปเดตล่าสุด: เมื่อกี้นี้ • Last updated: just now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelloPage