import React from 'react'

const BankingPage = () => {
  const transactions = [
    {
      id: 1,
      name: "สมชาย จันทร์แสง",
      username: "@somchai_j",
      description: "ค่าอาหารกลางวัน 🍱",
      amount: -1234.00,
      date: "2025-06-19 • 11:12",
      status: "เสร็จสิ้น",
      type: "outgoing"
    },
    {
      id: 2,
      name: "สมหญิง ศรีสุข",
      username: "@somying_s",
      description: "ค่ากาแฟ ☕",
      amount: -250.00,
      date: "2024-01-15 • 14:30",
      status: "เสร็จสิ้น",
      type: "outgoing"
    },
    {
      id: 3,
      name: "วิชัย รุ่งเรือง",
      username: "@wichai_r",
      description: "ค่าเช่าบ้าน 🏠",
      amount: 500.00,
      date: "2024-01-15 • 09:15",
      status: "เสร็จสิ้น",
      type: "incoming"
    },
    {
      id: 4,
      name: "มาลี ใจดี",
      username: "@malee_j",
      description: "ค่าช้อปปิ้ง 🛍️",
      amount: -75.50,
      date: "2024-01-14 • 16:45",
      status: "เสร็จสิ้น",
      type: "outgoing"
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Simplified Header - Bank Branding Only */}
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
              2
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">คุณสมชาย จันทร์แสง</div>
              <div className="text-xs text-green-100">Somchai Jansaeng</div>
            </div>
            <div className="text-2xl">🇹🇭</div>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow border border-neutral-200">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-neutral-500 mb-3 font-normal">ยอดเงินคงเหลือ • Available Balance</div>
              <div className="text-5xl font-normal text-neutral-700 mb-3">฿1,575,050</div>
              <div className="text-sm text-neutral-400 font-normal">เลขที่บัญชี: •••• 1234</div>
            </div>
            <div className="text-right">
              <div className="w-12 h-12 border-2 border-green-200 rounded-lg flex items-center justify-center mb-3 bg-green-50">
                🔄
              </div>
              <div className="text-xs text-neutral-400 font-normal">อัปเดตล่าสุด: เมื่อกี้นี้</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Send Money Section */}
          <div className="bg-white rounded-lg p-8 shadow border border-neutral-200">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-green-50 text-green-500 rounded-lg w-12 h-12 flex items-center justify-center">
                💸
              </div>
              <div>
                <h2 className="text-2xl font-normal text-neutral-700">โอนเงิน</h2>
                <p className="text-sm text-neutral-500 font-normal">Send Money</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  ผู้รับเงิน • Recipient
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                    👤
                  </span>
                  <input
                    type="text"
                    placeholder="@username123"
                    className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-neutral-50 font-normal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  จำนวนเงิน • Amount (฿)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                    ฿
                  </span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-neutral-50 font-normal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  หมายเหตุ • Memo (ไม่บังคับ)
                </label>
                <textarea
                  placeholder="กรุณาระบุวัตถุประสงค์ในการโอนเงิน"
                  rows="3"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none bg-neutral-50 font-normal"
                />
              </div>

              <button className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition-colors duration-200 shadow-sm hover:shadow-md">
                ไปยังหน้าตรวจสอบ • Continue to Review
              </button>
            </div>
          </div>

          {/* Recent Transactions Section */}
          <div className="bg-white rounded-lg p-8 shadow border border-neutral-200">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-green-50 text-green-500 rounded-lg w-12 h-12 flex items-center justify-center">
                📋
              </div>
              <div>
                <h2 className="text-2xl font-normal text-neutral-700">ประวัติการทำรายการ</h2>
                <p className="text-sm text-neutral-500 font-normal">Recent Transactions</p>
              </div>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-md transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-sm ${
                      transaction.type === 'incoming' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {transaction.type === 'incoming' ? '↙️' : '↗️'}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-neutral-700">{transaction.name}</span>
                        <span className="text-sm text-neutral-500 font-normal">{transaction.username}</span>
                      </div>
                      <div className="text-sm text-neutral-600 font-normal">{transaction.description}</div>
                      <div className="text-xs text-neutral-400 font-normal">{transaction.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium text-lg ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}฿{Math.abs(transaction.amount).toFixed(0)}
                    </div>
                    <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-normal">
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-neutral-200">
                <button className="w-full text-neutral-500 py-3 rounded-md font-normal hover:bg-neutral-50 hover:text-neutral-700 transition-colors duration-200">
                  ดูรายการทั้งหมด • View All Transactions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankingPage