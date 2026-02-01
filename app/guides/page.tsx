import Link from 'next/link'
import { CheckCircle, AlertCircle, Info } from 'lucide-react'

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">购车指南</h1>
          <p className="text-xl text-purple-100">专业的购车建议，帮助您做出明智的选择</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">购车前的准备工作</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">明确预算范围</h3>
                    <p className="text-gray-700 mb-3">
                      购车预算应该包括车辆价格、购置税、保险费用、上牌费等。建议预算控制在家庭年收入的50%以内，避免过度负债。
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 裸车价格：车辆本身的售价</li>
                      <li>• 购置税：约为裸车价的10%</li>
                      <li>• 保险费用：首年约5000-10000元</li>
                      <li>• 其他费用：上牌、装饰等约3000-5000元</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <Info className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">确定用车需求</h3>
                    <p className="text-gray-700 mb-3">
                      根据实际使用场景选择合适的车型。考虑家庭成员数量、日常通勤距离、是否需要越野能力等因素。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">城市通勤</h4>
                        <p className="text-sm text-gray-600">推荐紧凑型轿车或小型SUV，燃油经济性好，停车方便</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">家庭用车</h4>
                        <p className="text-sm text-gray-600">推荐中型SUV或MPV，空间宽敞，舒适性好</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">商务接待</h4>
                        <p className="text-sm text-gray-600">推荐中大型轿车，品牌形象好，配置豪华</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">越野探险</h4>
                        <p className="text-sm text-gray-600">推荐硬派SUV，通过性强，可靠性高</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">选择购车时机</h3>
                    <p className="text-gray-700 mb-3">
                      合适的购车时机可以节省不少费用。一般来说，年中和年末是购车的好时机，优惠力度较大。
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>6-7月：</strong>年中促销，清理库存</li>
                      <li>• <strong>11-12月：</strong>年底冲量，优惠最大</li>
                      <li>• <strong>新车上市前：</strong>老款车型降价促销</li>
                      <li>• <strong>车展期间：</strong>现场订车有额外优惠</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">选车要点</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">品牌选择</h3>
                <p className="text-gray-700 mb-3">
                  选择知名品牌，售后服务网点多，配件供应充足，保值率相对较高。
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 合资品牌：技术成熟，品质稳定</li>
                  <li>• 自主品牌：性价比高，配置丰富</li>
                  <li>• 豪华品牌：品牌溢价，豪华体验</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">动力系统</h3>
                <p className="text-gray-700 mb-3">
                  根据使用需求选择合适的动力类型，平衡性能与经济性。
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 燃油车：技术成熟，补能方便</li>
                  <li>• 混动车：省油环保，无续航焦虑</li>
                  <li>• 纯电车：使用成本低，驾驶平顺</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">配置选择</h3>
                <p className="text-gray-700 mb-3">
                  优先选择实用配置，避免为不常用的配置支付过高费用。
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 必选：ESP、气囊、倒车影像</li>
                  <li>• 推荐：自动空调、天窗、导航</li>
                  <li>• 可选：座椅加热、自动泊车</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">试驾体验</h3>
                <p className="text-gray-700 mb-3">
                  购车前一定要试驾，亲身感受车辆的驾驶感受和舒适性。
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 动力响应：加速是否平顺有力</li>
                  <li>• 操控性：转向是否精准灵活</li>
                  <li>• 舒适性：座椅支撑和隔音效果</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">购车流程</h2>
            
            <div className="space-y-4">
              {[
                { step: 1, title: '选定车型', desc: '通过对比评测，确定目标车型和配置' },
                { step: 2, title: '询价比价', desc: '向多家4S店询价，对比优惠政策' },
                { step: 3, title: '试乘试驾', desc: '实地试驾，检查车辆状况' },
                { step: 4, title: '谈判议价', desc: '与销售顾问协商价格和赠品' },
                { step: 5, title: '签订合同', desc: '仔细阅读合同条款，确认无误后签字' },
                { step: 6, title: '办理手续', desc: '缴纳费用，办理保险、上牌等手续' },
                { step: 7, title: '验车提车', desc: '检查车辆外观和功能，确认无问题后提车' },
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">需要更多帮助？</h2>
          <p className="text-xl text-purple-100 mb-8">浏览我们的车型评测和维护指南</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reviews" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              查看评测
            </Link>
            <Link href="/maintenance" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
              维护指南
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
