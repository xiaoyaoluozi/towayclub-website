import Link from 'next/link'

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-primary to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">会员中心</h1>
          <p className="text-xl opacity-90">加入突围俱乐部，享受专属权益</p>
        </div>
      </section>

      {/* 会员权益 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">会员权益</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 普通会员 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">普通会员</h3>
                <div className="text-4xl font-bold text-gray-400">免费</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>参加活动资格</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>公众号文章阅读</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>活动照片查看</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-3">✗</span>
                  <span>会员折扣</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-3">✗</span>
                  <span>专属活动</span>
                </li>
              </ul>
              <Link 
                href="/events"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-3 rounded-lg font-semibold transition"
              >
                免费注册
              </Link>
            </div>

            {/* VIP 会员 */}
            <div className="bg-gradient-to-br from-primary to-blue-500 rounded-lg shadow-lg p-8 text-white transform scale-105">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-semibold">
                推荐
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">VIP 会员</h3>
                <div className="text-4xl font-bold">¥199<span className="text-lg font-normal">/年</span></div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>所有普通会员权益</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>活动会员价（8-9 折）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>专属会员活动</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>生日礼物</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>优先报名权</span>
                </li>
              </ul>
              <button className="block w-full bg-white text-primary hover:bg-gray-100 text-center py-3 rounded-lg font-semibold transition">
                立即开通
              </button>
            </div>

            {/* 终身会员 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-secondary">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">终身会员</h3>
                <div className="text-4xl font-bold text-secondary">¥999</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>所有 VIP 会员权益</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>终身有效</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>终身会员折扣（7-8 折）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>年度大礼包</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>创始人俱乐部资格</span>
                </li>
              </ul>
              <button className="block w-full bg-secondary hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold transition">
                立即开通
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 会员故事 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">会员故事</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">"在突围，我找到了志同道合的朋友，也找到了更好的自己。从一个人参加活动，到现在带着家人一起，突围成了我们生活的一部分。"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">老张</div>
                  <div className="text-sm text-gray-500">VIP 会员 · 5 年</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">"每次活动都是一次充电，回到城市又充满能量。通过突围，我认识了很多优秀的人，甚至找到了现在的创业合伙人。"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">小李</div>
                  <div className="text-sm text-gray-500">终身会员 · 3 年</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">"从 2015 年加入到现在，参加了 200+ 场活动。突围不只是一个俱乐部，更像是一个温暖的大家庭。"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">王姐</div>
                  <div className="text-sm text-gray-500">终身会员 · 7 年</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">常见问题</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Q: 如何成为会员？</h3>
              <p className="text-gray-700">A: 点击"立即开通"按钮，填写信息并完成支付即可成为会员。会员资格即时生效。</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Q: 会员有效期多久？</h3>
              <p className="text-gray-700">A: VIP 会员有效期为 1 年，到期后可续费。终身会员永久有效。</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Q: 会员折扣如何使用？</h3>
              <p className="text-gray-700">A: 报名时系统会自动识别会员身份，享受对应折扣价格。</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Q: 可以退款吗？</h3>
              <p className="text-gray-700">A: 会员开通后 7 天内可全额退款，超过 7 天不予退款，请谨慎购买。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区 */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">准备好加入了吗？</h2>
          <p className="text-xl mb-8">成为会员，享受专属权益，找到属于你的圈子</p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            立即开通会员 →
          </button>
        </div>
      </section>
    </div>
  )
}
