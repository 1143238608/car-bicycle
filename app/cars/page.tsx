import Link from 'next/link'
import { Car, Zap, Fuel, Shield, TrendingUp } from 'lucide-react'

export default function CarsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">汽车专区</h1>
          <p className="text-xl text-blue-100">探索最新的汽车资讯、评测和购买指南</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">热门车型分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg">
              <Zap className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">新能源汽车</h3>
              <p className="text-blue-100 mb-4">电动汽车、混合动力车型</p>
              <p className="text-sm">环保节能，代表未来出行趋势</p>
            </div>
            <div className="bg-gradient-to-br from-gray-500 to-gray-700 text-white p-6 rounded-lg shadow-lg">
              <Car className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">轿车</h3>
              <p className="text-gray-100 mb-4">紧凑型、中型、豪华轿车</p>
              <p className="text-sm">舒适驾乘，适合家庭使用</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SUV</h3>
              <p className="text-green-100 mb-4">城市SUV、越野SUV</p>
              <p className="text-sm">空间宽敞，通过性强</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">跑车</h3>
              <p className="text-red-100 mb-4">运动跑车、超级跑车</p>
              <p className="text-sm">极致性能，驾驶乐趣</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">推荐车型详解</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-8">
                  <Car className="h-32 w-32 text-white" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">特斯拉 Model 3 - 电动轿车标杆</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">续航里程</p>
                      <p className="font-semibold">600公里</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">百公里加速</p>
                      <p className="font-semibold">3.3秒</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">价格区间</p>
                      <p className="font-semibold">25-35万元</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">能源类型</p>
                      <p className="font-semibold">纯电动</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    特斯拉Model 3作为电动汽车市场的标杆产品，凭借出色的续航能力、强劲的动力表现和先进的自动驾驶辅助系统，成为了众多消费者的首选。车辆配备了15英寸中控大屏，支持OTA在线升级，持续优化用户体验。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">智能驾驶</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">零排放</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">高性能</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center p-8">
                  <Car className="h-32 w-32 text-white" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">丰田凯美瑞 - 可靠家用之选</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">油耗</p>
                      <p className="font-semibold">5.8L/100km</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">发动机</p>
                      <p className="font-semibold">2.5L混动</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">价格区间</p>
                      <p className="font-semibold">18-28万元</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">座位数</p>
                      <p className="font-semibold">5座</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    丰田凯美瑞以其卓越的可靠性和燃油经济性闻名。混合动力版本采用丰田成熟的THS混动系统，综合油耗低至5.8L/100km。宽敞的内部空间、舒适的乘坐体验以及丰富的安全配置，使其成为中型轿车市场的常青树。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">省油</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">可靠</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">舒适</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center p-8">
                  <Car className="h-32 w-32 text-white" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">宝马3系 - 运动豪华典范</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">动力</p>
                      <p className="font-semibold">2.0T涡轮增压</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">百公里加速</p>
                      <p className="font-semibold">6.2秒</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">价格区间</p>
                      <p className="font-semibold">30-45万元</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">驱动方式</p>
                      <p className="font-semibold">后驱/四驱</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    宝马3系是豪华运动轿车的代表作，完美融合了驾驶乐趣与豪华品质。精准的转向、出色的底盘调校以及强劲的动力系统，为驾驶者带来纯粹的驾驶体验。内饰采用高品质材料，配备最新的iDrive系统和全液晶仪表盘。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">运动</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">豪华</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">操控</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">购车建议</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Fuel className="h-6 w-6 text-blue-600 mr-2" />
                如何选择动力类型
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>纯电动：</strong>适合城市通勤，充电便利的用户，零排放且使用成本低</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>混合动力：</strong>兼顾燃油和电动优势，无需充电焦虑，油耗低</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>燃油车：</strong>技术成熟，加油方便，适合长途驾驶需求</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                安全配置要点
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>主动安全：</strong>自动紧急制动、车道保持辅助、盲点监测等</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>被动安全：</strong>多气囊配置、车身结构强度、儿童座椅接口</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>辅助系统：</strong>360度全景影像、自适应巡航、自动泊车等</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">需要购车咨询？</h2>
          <p className="text-xl text-blue-100 mb-8">我们的专业团队随时为您提供购车建议和车型对比分析</p>
          <Link href="/guides" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block">
            查看购车指南
          </Link>
        </div>
      </section>
    </div>
  )
}
