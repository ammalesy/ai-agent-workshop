import React from 'react'
import poemImage from '../assets/poem.png'

function PoemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">
            กลอนดัง
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 p-8">
              <div className="flex justify-center">
                <img 
                  src={poemImage}
                  alt="Young boy smiling"
                  className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-white"
                />
              </div>
            </div>

            {/* Poem Content */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-amber-800 mb-6">
                  "ไม่ต้องบินให้สูงอย่างใครเขา"
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-400">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    <span className="font-medium text-amber-800">"ไม่ต้องบินให้สูงอย่างใครเขา"</span> 
                    เป็นวลีที่ได้รับความนิยมในประเทศไทยช่วงนี้
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    เป็นส่วนหนึ่งของบทกลอนที่ว่า
                  </p>

                  <div className="bg-white rounded-xl p-6 shadow-md border border-amber-200">
                    <div className="text-xl leading-relaxed text-amber-900 space-y-4">
                      <p className="font-medium">
                        "ไม่ต้องบินให้สูงอย่างใครเขา
                      </p>
                      <p className="font-medium">
                        จงบินเอาเท่าที่เราจะบินไหว
                      </p>
                      <p className="font-medium">
                        ถ้าที่บินไม่จำเป็นต้องเหมือนใคร
                      </p>
                      <p className="font-medium">
                        แค่บินไปให้ถึงฝันเท่านั้นพอ"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center mt-8 space-x-4">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoemPage