import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-primary to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl opacity-90">13 年坚持，一群人同行</p>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">品牌故事</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">2012 年</strong>，一群热爱户外、热爱生活的小伙伴聚在一起，成立了突围俱乐部。
                </p>
                <p>
                  最初只是几个朋友周末约着爬山、徒步，没想到这个简单的想法，吸引了越来越多志同道合的人加入。
                </p>
                <p>
                  <strong className="text-primary">13 年过去了</strong>，我们从最初的几个人，发展到如今数千人的大家庭。从深圳的山海，到新疆的草原；从香港的海岸线，到西藏的雪山——我们用脚步丈量大地，用汗水书写友谊。
                </p>
                <p>
                  突围，不只是俱乐部，更是一个家。在这里，你可以找到志同道合的朋友，可以找到更好的自己，可以找到生活的另一种可能。
                </p>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-green-300 to-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
              突围俱乐部 13 周年合影
            </div>
          </div>
        </div>
      </section>

      {/* 核心数据 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">13 年，我们一起走过</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">13 年</div>
              <div className="text-gray-600 text-lg">坚持</div>
              <div className="text-sm text-gray-500 mt-2">2012-2026</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">660+</div>
              <div className="text-gray-600 text-lg">场活动</div>
              <div className="text-sm text-gray-500 mt-2">每周一场</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">11500+</div>
              <div className="text-gray-600 text-lg">人次参与</div>
              <div className="text-sm text-gray-500 mt-2">共同成长</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">5000+</div>
              <div className="text-gray-600 text-lg">会员</div>
              <div className="text-sm text-gray-500 mt-2">全国各地</div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">核心价值观</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="text-2xl font-bold mb-4">户外活动</h3>
              <p className="text-gray-700 leading-relaxed">
                每周固定活动，13 年从未间断。夜登南山 334 期+，七娘山、马峦山、麦理浩径...用脚步丈量大地，感受自然的美好。
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4">读书成长</h3>
              <p className="text-gray-700 leading-relaxed">
                深度阅读，思维碰撞。每月共读一本书，线下分享会，在交流中成长，在阅读中突围。
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4">创业赋能</h3>
              <p className="text-gray-700 leading-relaxed">
                AI 时代，抱团突围。创业沙龙、资源对接、项目合作，找到志同道合的创业伙伴。
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">社交连接</h3>
              <p className="text-gray-700 leading-relaxed">
                找到志同道合的朋友。在这里，你不是一个人，有一群人和你一起成长，一起前行。
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">自我突破</h3>
              <p className="text-gray-700 leading-relaxed">
                每一次活动，都是一次突破。突破舒适区，突破自我限制，遇见更好的自己。
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-4">温暖陪伴</h3>
              <p className="text-gray-700 leading-relaxed">
                不只是活动，更是陪伴。在你需要的时候，有一群人愿意倾听，愿意帮助，愿意陪伴。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">发展历程</h2>
          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* 时间节点 */}
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-primary">2012 年</h3>
                  <p className="text-gray-600">突围俱乐部成立</p>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold text-primary">2015 年</h3>
                  <p className="text-gray-600">会员突破 1000 人，夜登南山成为品牌活动</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-primary">2017 年</h3>
                  <p className="text-gray-600">五周年庆典，首次组织新疆长途旅行</p>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold text-primary">2022 年</h3>
                  <p className="text-gray-600">十周年庆典，徒步十公里活动，会员突破 5000 人</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-primary">2024 年</h3>
                  <p className="text-gray-600">转型 AI+ 创业赋能，开启新篇章</p>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold text-primary">2026 年</h3>
                  <p className="text-gray-600">13 年坚持，继续前行</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">核心团队</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-300 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">👤</div>
              <h3 className="text-xl font-bold">创始人</h3>
              <p className="text-gray-600">突围俱乐部发起人</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">👤</div>
              <h3 className="text-xl font-bold">户外领队</h3>
              <p className="text-gray-600">资深户外专家</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-300 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">👤</div>
              <h3 className="text-xl font-bold">读书会长</h3>
              <p className="text-gray-600">阅读推广人</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-300 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">👤</div>
              <h3 className="text-xl font-bold">运营总监</h3>
              <p className="text-gray-600">活动策划专家</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区 */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">加入我们，一起突围</h2>
          <p className="text-xl mb-8">找到属于你的圈子，找到更好的自己</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/membership" className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              加入会员 →
            </Link>
            <Link href="/events" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition">
              查看活动 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
