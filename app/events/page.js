'use client'

import { useState } from 'react'
import Link from 'next/link'
import { events } from '../../data/events'

const categories = [
  { value: 'all', label: '全部' },
  { value: 'outdoor', label: '🏃 户外' },
  { value: 'reading', label: '📚 读书' },
  { value: 'startup', label: '💼 创业' },
  { value: 'social', label: '🤝 社交' },
]

export default function EventsPage() {
  const [filter, setFilter] = useState('all')

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.category === filter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-primary to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">活动日历</h1>
          <p className="text-xl opacity-90">找到你感兴趣的活动，一起突围！</p>
        </div>
      </section>

      {/* 筛选器 */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  filter === cat.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 活动列表 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className={`h-48 bg-gradient-to-r ${event.image}`}></div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {event.categoryLabel}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">🕐</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">💰</span>
                      <span>
                        {event.price === 0 ? '免费' : `¥${event.price}${event.membersPrice > 0 ? ` (会员¥${event.membersPrice})` : ''}`}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">👥</span>
                      <span className={event.remaining < 10 ? 'text-secondary font-semibold' : ''}>
                        剩余 {event.remaining}/{event.total}
                      </span>
                    </div>
                  </div>

                  <Link 
                    href={`/events/${event.id}`}
                    className="block w-full bg-primary hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition"
                  >
                    立即报名
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">😢</div>
              <p className="text-xl text-gray-600">这个类别暂时没有活动</p>
              <button 
                onClick={() => setFilter('all')}
                className="mt-4 text-primary hover:underline"
              >
                查看全部活动
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA 区 */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">没找到合适的活动？</h2>
          <p className="text-xl mb-8">告诉我们你想参加什么活动，我们一起组织！</p>
          <a 
            href="https://mp.weixin.qq.com"
            target="_blank"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
          >
            关注公众号 →
          </a>
        </div>
      </section>
    </div>
  )
}
