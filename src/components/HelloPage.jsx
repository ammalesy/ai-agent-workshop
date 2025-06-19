import React from 'react'

const HelloPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="inline-block animate-pulse">สวัสดี! 👋</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ไม่ต้องบิ่นให้สู่งอย่างใครเคลา!
            </span>
          </h1>
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl text-blue-200 font-medium">
              ยินดีต้อนรับสู่ React Application ของคุณ
            </p>
            <p className="text-lg text-slate-300">
              Welcome to your new React Application!
            </p>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">
              การตั้งค่าสำเร็จแล้ว
            </h2>
            <p className="text-slate-200 leading-relaxed">
              โปรเจ็กต์ React ของคุณพร้อมใช้งานแล้ว พร้อมสำหรับการพัฒนาต่อ
            </p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">
              Features
            </h3>
            <ul className="text-left space-y-3 text-slate-200">
              <li className="flex items-center group/item">
                <span className="text-emerald-400 mr-3 text-lg group-hover:item:scale-110 transition-transform">⚡</span>
                <span>Vite สำหรับการพัฒนาที่รวดเร็ว</span>
              </li>
              <li className="flex items-center group/item">
                <span className="text-blue-400 mr-3 text-lg group-hover:item:scale-110 transition-transform">⚛️</span>
                <span>React 18 ล่าสุด</span>
              </li>
              <li className="flex items-center group/item">
                <span className="text-purple-400 mr-3 text-lg group-hover:item:scale-110 transition-transform">🎨</span>
                <span>Tailwind CSS v4 Styling</span>
              </li>
              <li className="flex items-center group/item">
                <span className="text-red-400 mr-3 text-lg group-hover:item:scale-110 transition-transform">🔥</span>
                <span>Hot Module Replacement</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="pt-8">
          <button className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-pink-500/25">
            <span className="relative z-10 flex items-center gap-2">
              เริ่มต้นใช้งาน Tailwind CSS! 
              <span className="group-hover:translate-x-1 transition-transform duration-200">🚀</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HelloPage