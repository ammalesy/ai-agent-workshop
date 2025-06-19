import { useState } from 'react'
import HelloPage from './components/HelloPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <HelloPage />
      <div className="flex flex-col items-center justify-center p-8 space-y-6">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="btn-primary transform hover:scale-105 active:scale-95"
        >
          count is {count}
        </button>
        <div className="card max-w-md text-center">
          <p className="text-gray-600 mb-2">
            แก้ไข <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600">src/App.jsx</code> และบันทึกเพื่อทดสอบ HMR
          </p>
          <p className="text-sm text-gray-500">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600">src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App