import Link from 'next/link'
import { Car, Bike, TrendingUp, Award, Users, BookOpen, Wrench, Newspaper } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              探索汽车与自行车的世界
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              专业的车辆资讯平台，为您提供最新的汽车和自行车评测、购买指南和维护技巧
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cars" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
                探索汽车
              </Link>
              <Link href="/bicycles" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition">
                探索自行车
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">专业评测</h3>
              <p className="text-gray-600">
                深入的车辆评测和性能分析，帮助您做出明智的购买决策。我们的专业团队对每款车辆进行全面测试。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">购车指南</h3>
              <p className="text-gray-600">
                详细的购车建议和市场分析，涵盖各个价位和类型的车辆，让您轻松找到最适合的选择。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Wrench className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">维护保养</h3>
              <p className="text-gray-600">
                专业的维护技巧和保养建议，延长您的车辆使用寿命，确保最佳性能和安全性。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Newspaper className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">行业资讯</h3>
              <p className="text-gray-600">
                最新的汽车和自行车行业新闻、技术趋势和市场动态，让您始终保持信息领先。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">热门汽车推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Car className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">特斯拉 Model 3</h3>
                <p className="text-gray-600 mb-4">
                  领先的电动汽车技术，卓越的性能表现和智能驾驶辅助系统。续航里程可达600公里，是城市通勤和长途旅行的理想选择。
                </p>
                <Link href="/cars" className="text-blue-600 font-semibold hover:text-blue-800">
                  了解更多 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <Car className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">丰田凯美瑞</h3>
                <p className="text-gray-600 mb-4">
                  可靠性和舒适性的完美结合，混合动力版本提供出色的燃油经济性。宽敞的内部空间和先进的安全配置。
                </p>
                <Link href="/cars" className="text-blue-600 font-semibold hover:text-blue-800">
                  了解更多 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <Car className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">宝马 3系</h3>
                <p className="text-gray-600 mb-4">
                  运动性能与豪华品质的典范，精准的操控和强劲的动力系统。配备最新的互联科技和驾驶辅助功能。
                </p>
                <Link href="/cars" className="text-blue-600 font-semibold hover:text-blue-800">
                  了解更多 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">热门自行车推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Bike className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">捷安特 TCR</h3>
                <p className="text-gray-600 mb-4">
                  专业级公路自行车，采用先进的碳纤维车架技术，轻量化设计配合空气动力学优化，适合竞技和长距离骑行。
                </p>
                <Link href="/bicycles" className="text-green-600 font-semibold hover:text-green-800">
                  了解更多 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Bike className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">美利达 山地车</h3>
                <p className="text-gray-600 mb-4">
                  专为越野设计的山地自行车，配备高性能避震系统和耐用的车架结构，征服各种复杂地形的最佳选择。
                </p>
                <Link href="/bicycles" className="text-green-600 font-semibold hover:text-green-800">
                  了解更多 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Bike className="h-24 w-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">小牛电动自行车</h3>
                <p className="text-gray-600 mb-4">
                  智能电动自行车，配备强劲电机和大容量电池，续航可达100公里。智能互联功能让骑行更加便捷安全。
                </p>
                <Link href="/bicycles" className="text-green-600 font-semibold hover:text-green-800">
                  了解更多 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">最新资讯</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <TrendingUp className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">新能源汽车市场持续增长</h3>
                  <p className="text-gray-600 mb-3">
                    2024年新能源汽车销量创新高，电动汽车技术不断突破，充电基础设施日益完善。各大汽车制造商纷纷推出新款电动车型，市场竞争日趋激烈。
                  </p>
                  <Link href="/news" className="text-blue-600 font-semibold hover:text-blue-800">
                    阅读全文 →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">城市骑行文化兴起</h3>
                  <p className="text-gray-600 mb-3">
                    越来越多的城市居民选择自行车作为日常通勤工具，既环保又健康。各地政府积极建设自行车道，推动绿色出行理念深入人心。
                  </p>
                  <Link href="/news" className="text-green-600 font-semibold hover:text-green-800">
                    阅读全文 →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">自动驾驶技术新突破</h3>
                  <p className="text-gray-600 mb-3">
                    最新的自动驾驶技术在安全性和可靠性方面取得重大进展，多家车企宣布将在未来两年内推出L4级自动驾驶车型，智能出行时代即将到来。
                  </p>
                  <Link href="/news" className="text-purple-600 font-semibold hover:text-purple-800">
                    阅读全文 →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <Wrench className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">车辆保养小贴士</h3>
                  <p className="text-gray-600 mb-3">
                    定期保养是延长车辆使用寿命的关键。本文为您详细介绍汽车和自行车的日常维护要点，包括检查轮胎、更换机油、清洁链条等实用技巧。
                  </p>
                  <Link href="/maintenance" className="text-orange-600 font-semibold hover:text-orange-800">
                    阅读全文 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">为什么选择我们？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-xl text-blue-100">年行业经验</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-blue-100">专业评测</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100万+</div>
              <p className="text-xl text-blue-100">用户信赖</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
