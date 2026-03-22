import Link from 'next/link'
import { events } from '../data/events'

export default function Home() {
  // 获取最近的 3 个活动
  const recentEvents = events.slice(0, 3)
  
  return (
    <div>
      {/* 英雄区 */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">13 年坚持，一群人同行</h1>
          <p className="text-2xl md:text-3xl mb-8">突围，不只是俱乐部，更是一个家</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/events" className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
              查看近期活动 →
            </Link>
            <Link href="/membership" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full text-lg font-semibold transition">
              加入会员
            </Link>
          </div>
        </div>
      </section>

      {/* 核心数据 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">13 年</div>
              <div className="text-gray-600">坚持</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">660+ 场</div>
              <div className="text-gray-600">活动</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">11500+</div>
              <div className="text-gray-600">人次参与</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">会员</div>
            </div>
          </div>
        </div>
      </section>

      {/* 近期活动 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">近期活动</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`h-48 bg-gradient-to-r ${event.image}`}></div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{event.categoryLabel}</div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description?.slice(0, 50)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">📅 {event.date}</span>
                    <span className={event.remaining < 10 ? 'text-secondary font-semibold' : 'text-green-600 font-semibold'}>
                      {event.price === 0 ? '免费' : `剩余${event.remaining}/${event.total}`}
                    </span>
                  </div>
                  <Link 
                    href={`/events/${event.id}`} 
                    className="block mt-4 bg-primary hover:bg-green-700 text-white text-center py-2 rounded-lg transition"
                  >
                    {event.price === 0 ? '免费参加' : '立即报名'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/events" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition">
              查看更多活动 →
            </Link>
          </div>
        </div>
      </section>

      {/* 精彩瞬间 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">精彩瞬间</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-64 bg-gradient-to-br from-green-300 to-blue-500 rounded-lg flex items-center justify-center text-white">
              七娘山日出
            </div>
            <div className="h-64 bg-gradient-to-br from-orange-300 to-red-500 rounded-lg flex items-center justify-center text-white">
              马峦山瀑布
            </div>
            <div className="h-64 bg-gradient-to-br from-purple-300 to-pink-500 rounded-lg flex items-center justify-center text-white">
              新疆伊犁
            </div>
            <div className="h-64 bg-gradient-to-br from-blue-300 to-cyan-500 rounded-lg flex items-center justify-center text-white">
              麦理浩径
            </div>
          </div>
        </div>
      </section>

      {/* 突友说 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">突友说</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"在突围，我找到了志同道合的朋友，也找到了更好的自己。从一个人参加活动，到现在带着家人一起，突围成了我们生活的一部分。"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-blue-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">张</div>
                <div>
                  <div className="font-semibold">老张</div>
                  <div className="text-sm text-gray-500">参与 5 年 · 终身会员</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"每次活动都是一次充电，回到城市又充满能量。通过突围，我认识了很多优秀的人，甚至找到了现在的创业合伙人。"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">李</div>
                <div>
                  <div className="font-semibold">小李</div>
                  <div className="text-sm text-gray-500">参与 3 年 · VIP 会员</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"从 2015 年加入到现在，参加了 200+ 场活动。突围不只是一个俱乐部，更像是一个温暖的大家庭。13 年坚持，一群人同行！"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-red-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">王</div>
                <div>
                  <div className="font-semibold">王姐</div>
                  <div className="text-sm text-gray-500">参与 7 年 · 终身会员</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区 */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">准备好一起突围了吗？</h2>
          <p className="text-xl mb-8">加入我们，找到属于你的圈子</p>
          <Link href="/membership" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            立即加入 →
          </Link>
        </div>
      </section>
    </div>
  )
}
