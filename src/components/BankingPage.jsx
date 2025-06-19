import React from 'react'

const BankingPage = () => {
  const transactions = [
    {
      id: 1,
      name: "田中太郎",
      username: "@tanaka_t",
      description: "ランチ代 🍱",
      amount: -1234.00,
      date: "2025-06-19 • 11:12",
      status: "完了",
      type: "outgoing"
    },
    {
      id: 2,
      name: "佐藤花子",
      username: "@sato_h",
      description: "コーヒー代 ☕",
      amount: -250.00,
      date: "2024-01-15 • 14:30",
      status: "完了",
      type: "outgoing"
    },
    {
      id: 3,
      name: "鈴木一郎",
      username: "@suzuki_i",
      description: "家賃支払い 🏠",
      amount: 500.00,
      date: "2024-01-15 • 09:15",
      status: "完了",
      type: "incoming"
    },
    {
      id: 4,
      name: "山田美咲",
      username: "@yamada_m",
      description: "お買い物 🛍️",
      amount: -75.50,
      date: "2024-01-14 • 16:45",
      status: "完了",
      type: "outgoing"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-red-500 rounded-2xl p-3 font-bold text-xl shadow-md">
              桜
            </div>
            <div>
              <div className="font-medium text-xl">桜バンク</div>
              <div className="text-sm text-red-100 font-light">Sakura Bank</div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="bg-yellow-400 text-stone-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
              2
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">田中太郎様</div>
              <div className="text-xs text-red-100">Tanaka Taro</div>
            </div>
            <div className="text-2xl">🌸</div>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-white to-stone-50 rounded-3xl p-8 shadow-lg border border-stone-200/50">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-stone-500 mb-3 font-light">残高 • Available Balance</div>
              <div className="text-5xl font-light text-stone-800 mb-3">¥1,575,050</div>
              <div className="text-sm text-stone-400 font-light">口座番号: •••• 1234</div>
            </div>
            <div className="text-right">
              <div className="w-12 h-12 border-2 border-red-200 rounded-2xl flex items-center justify-center mb-3 bg-red-50">
                🔄
              </div>
              <div className="text-xs text-stone-400 font-light">最終更新: たった今</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Send Money Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200/50">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-red-50 text-red-500 rounded-2xl w-12 h-12 flex items-center justify-center">
                💸
              </div>
              <div>
                <h2 className="text-2xl font-light text-stone-800">送金</h2>
                <p className="text-sm text-stone-500 font-light">Send Money</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-3">
                  受取人 • Recipient
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400">
                    👤
                  </span>
                  <input
                    type="text"
                    placeholder="@username123"
                    className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-red-300 focus:border-transparent bg-stone-50/50 font-light"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-3">
                  金額 • Amount (¥)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400">
                    ¥
                  </span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-red-300 focus:border-transparent bg-stone-50/50 font-light"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-3">
                  メモ • Memo (任意)
                </label>
                <textarea
                  placeholder="送金の目的を入力してください"
                  rows="3"
                  className="w-full px-4 py-4 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-red-300 focus:border-transparent resize-none bg-stone-50/50 font-light"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-2xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]">
                確認画面へ • Continue to Review
              </button>
            </div>
          </div>

          {/* Recent Transactions Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200/50">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-red-50 text-red-500 rounded-2xl w-12 h-12 flex items-center justify-center">
                📋
              </div>
              <div>
                <h2 className="text-2xl font-light text-stone-800">取引履歴</h2>
                <p className="text-sm text-stone-500 font-light">Recent Transactions</p>
              </div>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-stone-50/50 rounded-2xl transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm ${
                      transaction.type === 'incoming' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {transaction.type === 'incoming' ? '↙️' : '↗️'}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-stone-800">{transaction.name}</span>
                        <span className="text-sm text-stone-500 font-light">{transaction.username}</span>
                      </div>
                      <div className="text-sm text-stone-600 font-light">{transaction.description}</div>
                      <div className="text-xs text-stone-400 font-light">{transaction.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium text-lg ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}¥{Math.abs(transaction.amount).toFixed(0)}
                    </div>
                    <div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-light">
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-stone-100">
                <button className="w-full text-stone-500 py-3 rounded-2xl font-light hover:bg-stone-50 hover:text-stone-700 transition-all duration-200">
                  すべての取引を表示 • View All Transactions
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