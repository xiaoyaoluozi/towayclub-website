'use client'

import { useState } from 'react'
import Link from 'next/link'

const eventData = {
  id: 1,
  title: '13 年突围・13 段奇遇！马峦山错路徒步',
  category: 'outdoor',
  categoryLabel: '户外活动',
  date: '2025-11-29',
  time: '09:00-17:00',
  location: '马峦山森林公园',
  price: 99,
  membersPrice: 79,
  total: 30,
  remaining: 15,
  difficulty: 2,
  description: '马峦山，深圳东部的一颗明珠。这里有深圳最大的瀑布群，有保存完好的客家古村落，还有漫山遍野的梅花。即使走错了路，也能发现意想不到的瀑布、现宰的美食、未开的梅花——这就是户外的魅力。',
  highlights: [
    '深圳最大瀑布群',
    '客家古村落探访',
    '现宰农家美食',
    '专业领队全程陪同',
  ],
  schedule: [
    { time: '09:00', activity: '深圳大学集合出发' },
    { time: '10:30', activity: '到达马峦山，热身' },
    { time: '11:00', activity: '开始徒步，观赏瀑布' },
    { time: '12:30', activity: '农家午餐' },
    { time: '14:00', activity: '探访客家古村落' },
    { time: '16:00', activity: '下山，返程' },
    { time: '17:00', activity: '回到深圳大学，解散' },
  ],
  includes: ['往返大巴', '午餐', '保险', '领队'],
  excludes: ['个人消费', '其他未提及费用'],
  notes: [
    '穿着运动鞋，带备用衣物',
    '自带饮用水，防晒用品',
    '听从领队安排，不要单独行动',
    '保护环境，带走垃圾',
  ],
}

export default function EventDetailPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 封面图 */}
      <section className="h-96 bg-gradient-to-r from-green-400 to-blue-500 relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/events" className="text-sm hover:underline mb-4 inline-block">
              ← 返回活动列表
            </Link>
            <h1 className="text-4xl font-bold mb-4">{eventData.title}</h1>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold">
                {eventData.categoryLabel}
              </span>
              <span className="flex items-center">
                ⭐⭐⭐⭐⭐ (48 条评价)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 左侧：活动详情 */}
            <div className="lg:col-span-2 space-y-8">
              {/* 活动信息卡片 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-gray-500 text-sm mb-1">活动时间</div>
                    <div className="font-semibold">📅 {eventData.date}</div>
                    <div className="text-sm text-gray-600">🕐 {eventData.time}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">活动地点</div>
                    <div className="font-semibold">📍 {eventData.location}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">活动费用</div>
                    <div className="font-semibold text-secondary">💰 ¥{eventData.price}</div>
                    <div className="text-sm text-gray-600">会员¥{eventData.membersPrice}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">剩余名额</div>
                    <div className="font-semibold text-secondary">👥 {eventData.remaining}/{eventData.total}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowForm(true)}
                    className="flex-1 bg-primary hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg transition"
                  >
                    立即报名
                  </button>
                  <button className="px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-semibold transition">
                    咨询客服
                  </button>
                  <button className="px-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 py-3 rounded-lg font-semibold transition">
                    分享
                  </button>
                </div>
              </div>

              {/* 活动亮点 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">活动亮点</h2>
                <ul className="space-y-3">
                  {eventData.highlights.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 行程安排 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">行程安排</h2>
                <div className="space-y-4">
                  {eventData.schedule.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-24 font-semibold text-primary">{item.time}</div>
                      <div className="flex-1 border-l-2 border-gray-200 pl-4 pb-4">
                        {item.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 费用说明 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">费用说明</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-green-600">费用包含</h3>
                    <ul className="space-y-2">
                      {eventData.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-red-600">费用不含</h3>
                    <ul className="space-y-2">
                      {eventData.excludes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 注意事项 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">注意事项</h2>
                <ul className="space-y-3">
                  {eventData.notes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 右侧：报名卡片 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">快速报名</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">活动费用</span>
                    <span className="font-semibold text-secondary">¥{eventData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">会员价</span>
                    <span className="font-semibold text-green-600">¥{eventData.membersPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">剩余名额</span>
                    <span className="font-semibold text-secondary">{eventData.remaining}/{eventData.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">难度等级</span>
                    <span className="font-semibold">{'⭐'.repeat(eventData.difficulty)}{'☆'.repeat(5-eventData.difficulty)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full bg-primary hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg mb-4 transition"
                >
                  立即报名
                </button>

                <div className="text-center text-sm text-gray-500">
                  <p>已有 127 人报名</p>
                  <p className="mt-2">客服电话：400-888-8888</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 报名表单弹窗 */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold mb-6">活动报名</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">姓名</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">手机号</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="请输入手机号"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">是否会员</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="no">非会员 (¥{eventData.price})</option>
                  <option value="yes">会员 (¥{eventData.membersPrice})</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">备注</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="3"
                  placeholder="饮食禁忌、特殊需求等"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg transition"
              >
                提交报名
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
