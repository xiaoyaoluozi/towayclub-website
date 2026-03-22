import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {/* 导航栏 */}
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-primary">
                  突围俱乐部
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">首页</Link>
                  <Link href="/events" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">活动日历</Link>
                  <Link href="/events?category=outdoor" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">户外活动</Link>
                  <Link href="/events?category=reading" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">读书会</Link>
                  <Link href="/events?category=startup" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">创业赋能</Link>
                  <Link href="/membership" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">会员中心</Link>
                  <Link href="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">关于我们</Link>
                </div>
              </div>
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* 主内容区 */}
        <main className="pt-16">
          {children}
        </main>

        {/* 页脚 */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">突围俱乐部</h3>
                <p className="text-gray-400">13 年坚持，一群人同行<br/>突围，不只是俱乐部，更是一个家</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">联系我们</h3>
                <p className="text-gray-400">客服微信：towayclub<br/>邮箱：contact@towayclub.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">关注公众号</h3>
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-800 text-sm text-center">公众号二维码<br/>towayclub</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2012-2026 突围俱乐部 版权所有</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
