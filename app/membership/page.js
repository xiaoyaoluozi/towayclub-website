import Link from 'next/link'

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-primary to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">会员中心</h1>
          <p className="text-xl opacity-90">突围俱乐部是公益组织，所有活动免费或 AA 制</p>
        </div>
      </section>

      {/* 会员权益 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">关于我们</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">突围俱乐部是公益组织</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">突围俱乐部成立于 2012 年</strong>，是一个<span className="text-green-600 font-semibold">非营利性、公益性质</span>的社群组织。
                </p>
                <p>
                  13 年来，我们始终坚持<span className="text-green-600 font-semibold">公益、自愿、AA、平等</span>的原则，组织户外活动、读书会、创业交流等活动。
                </p>
                <p>
                  <strong className="text-primary">所有活动免费或 AA 制</strong>，没有会员费，没有隐形消费。活动费用透明，多退少补。
                </p>
                <p>
                  在这里，你可以找到志同道合的朋友，可以找到更好的自己，可以找到生活的另一种可能。<strong className="text-primary">突围，不只是俱乐部，更是一个家。</strong>
                </p>
              </div>
            </div>

            {/* 核心原则 */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="text-xl font-bold mb-2">公益</h4>
                <p className="text-gray-600">非营利组织</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-bold mb-2">自愿</h4>
                <p className="text-gray-600">自由参与</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-2">AA</h4>
                <p className="text-gray-600">费用透明</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h4 className="text-xl font-bold mb-2">平等</h4>
                <p className="text-gray-600">人人平等</p>
              </div>
            </div>

            {/* 参与方式 */}
            <div className="bg-gradient-to-br from-primary to-blue-500 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">如何参与</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3">1. 关注公众号</h4>
                  <p className="opacity-90">关注"突围俱乐部"公众号，获取最新活动信息</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">2. 参加活动</h4>
                  <p className="opacity-90">选择感兴趣的活动，按指引报名参与</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">3. 融入集体</h4>
                  <p className="opacity-90">认识志同道合的朋友，一起成长</p>
                </div>
              </div>
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
