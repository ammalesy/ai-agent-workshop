import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import HelloPage from './components/HelloPage'
import BankingPage from './components/BankingPage'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      {/* Navigation Bar - Thai Theme */}
      <nav className="bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🌸</span>
              </div>
              <h1 className="text-xl font-medium text-stone-800 tracking-wide">
                แอปซากุระ
                <span className="text-sm text-stone-500 ml-2 font-light">Sakura App</span>
              </h1>
            </div>
            <div className="flex space-x-2">
              <Link 
                to="/hello"
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  location.pathname === '/hello' 
                    ? 'bg-red-500 text-white shadow-md' 
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:shadow-sm'
                }`}
              >
                <span className="text-sm font-medium">🏠 หน้าแรก</span>
              </Link>
              <Link 
                to="/home"
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  location.pathname === '/home' 
                    ? 'bg-red-500 text-white shadow-md' 
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:shadow-sm'
                }`}
              >
                <span className="text-sm font-medium">💳 ธนาคาร</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<BankingPage />} />
        <Route path="/hello" element={
          <div>
            <HelloPage />
            <div className="flex flex-col items-center justify-center p-8 space-y-6">
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="px-8 py-3 bg-red-500 text-white rounded-full font-medium shadow-lg hover:bg-red-600 hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200"
              >
                นับ: {count}
              </button>
              <div className="bg-white rounded-2xl p-6 max-w-md text-center shadow-sm border border-stone-200">
                <p className="text-stone-600 mb-2 text-sm leading-relaxed">
                  <code className="bg-stone-100 px-2 py-1 rounded text-sm font-mono text-red-600">src/App.jsx</code> แก้ไขและบันทึกเพื่อทดสอบ HMR
                </p>
                <p className="text-xs text-stone-500">
                  Edit <code className="bg-stone-100 px-2 py-1 rounded text-xs font-mono text-red-600">src/App.jsx</code> and save to test HMR
                </p>
              </div>
            </div>
          </div>
        } />
        <Route path="/" element={<HelloPage />} />
      </Routes>
    </div>
  )
}

export default App