import React from 'react'
import { Link } from 'react-router-dom'

const HelloPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-red-50 to-stone-100 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">🌸</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-800 leading-tight">
              <span className="block mb-2">สวัสดี! 🌸</span>
              <span className="text-red-500 font-medium">
                ยินดีต้อนรับสู่โลกแห่งซากุระ
              </span>
            </h1>
          </div>
          <div className="space-y-3">
            <p className="text-xl sm:text-2xl text-stone-600 font-light">
              แอปพลิเคชัน React ใหม่ของคุณ
            </p>
            <p className="text-lg text-stone-500">
              Welcome to your elegant React Application
            </p>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <div className="text-4xl mb-6">🎋</div>
            <h2 className="text-2xl font-light text-stone-800 mb-4 group-hover:text-red-500 transition-colors">
              เตรียมพร้อมเรียบร้อย
              <span className="block text-lg text-stone-500 font-light mt-1">Setup Complete</span>
            </h2>
            <p className="text-stone-600 leading-relaxed font-light">
              โปรเจค React ทำงานได้อย่างปกติ พร้อมที่จะเริ่มพัฒนาแล้ว
            </p>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <div className="text-4xl mb-6">⚡</div>
            <h3 className="text-2xl font-light text-stone-800 mb-4 group-hover:text-red-500 transition-colors">
              คุณลักษณะ
              <span className="block text-lg text-stone-500 font-light mt-1">Features</span>
            </h3>
            <ul className="text-left space-y-4 text-stone-600 font-light">
              <li className="flex items-center group/item">
                <span className="text-red-400 mr-4 text-lg group-hover:item:scale-110 transition-transform">⚡</span>
                <span>การพัฒนาที่รวดเร็วด้วย Vite</span>
              </li>
              <li className="flex items-center group/item">
                <span className="text-red-400 mr-4 text-lg group-hover:item:scale-110 transition-transform">⚛️</span>
                <span>React 18 เวอร์ชันล่าสุด</span>
              </li>
              <li className="flex items-center group/item">
                <span className="text-red-400 mr-4 text-lg group-hover:item:scale-110 transition-transform">🎨</span>
                <span>การจัดรูปแบบด้วย Tailwind CSS</span>
              </li>
              <li className="flex items-center group/item">
                <span className="text-red-400 mr-4 text-lg group-hover:item:scale-110 transition-transform">🔥</span>
                <span>รองรับ Hot Reload</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="pt-12 space-y-6">
          <button className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            <span className="relative z-10 flex items-center gap-3">
              เริ่มกันเลย 🚀
              <span className="text-sm font-light">Let's Start</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <Link 
            to="/home"
            className="group relative overflow-hidden bg-white text-stone-700 border-2 border-stone-200 hover:border-red-300 font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md inline-flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-3">
              🏦 อินเทอร์เฟซธนาคาร
              <span className="text-sm font-light">Banking Interface</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HelloPage