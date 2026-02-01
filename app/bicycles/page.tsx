import Link from 'next/link'
import { Bike, Mountain, Zap, Heart, Wind } from 'lucide-react'

export default function BicyclesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">自行车专区</h1>
          <p className="text-xl text-green-100">发现适合您的自行车，享受健康骑行生活</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">自行车类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg">
              <Wind className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">公路自行车</h3>
              <p className="text-blue-100 mb-4">速度快、效率高</p>
              <p className="text-sm">适合长距离骑行和竞技</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-lg shadow-lg">
              <Mountain className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">山地自行车</h3>
              <p className="text-green-100 mb-4">越野性能强</p>
              <p className="text-sm">征服各种复杂地形</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-lg">
              <Zap className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">电动自行车</h3>
              <p className="text-purple-100 mb-4">省力便捷</p>
              <p className="text-sm">城市通勤理想选择</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-6 rounded-lg shadow-lg">
              <Bike className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">城市通勤车</h3>
              <p className="text-orange-100 mb-4">舒适实用</p>
              <p className="text-sm">日常代步首选</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">热门车型推荐</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-8">
                  <Bike className="h-32 w-32 text-white" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">捷安特 TCR Advanced - 公路车之王</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">车架材质</p>
                      <p className="font-semibold">碳纤维</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">重量</p>
                      <p className="font-semibold">7.5kg</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">价格区间</p>
                      <p className="font-semibold">1.5-3万元</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">变速系统</p>
                      <p className="font-semibold">Shimano 105</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    捷安特TCR Advanced系列采用先进的碳纤维技术，实现了轻量化与刚性的完美平衡。空气动力学优化的车架设计，配合高性能的Shimano变速系统，无论是爬坡还是冲刺都能提供卓越的表现。适合追求速度和性能的骑行爱好者。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">轻量化</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">高性能</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">竞技级</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-8">
                  <Mountain className="h-32 w-32 text-white" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">美利达 勇士 - 山地越野专家</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">避震行程</p>
                      <p className="font-semibold">120mm</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">轮径</p>
                      <p className="font-semibold">27.5英寸</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">价格区间</p>
                      <p className="font-semibold">3000-8000元</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">刹车系统</p>
                      <p className="font-semibold">液压碟刹</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    美利达勇士系列专为山地越野设计，配备高性能避震前叉和液压碟刹系统，在复杂地形中提供出色的控制性和安全性。耐用的铝合金车架经过特殊处理，既保证了强度又控制了重量。27速变速系统让您轻松应对各种坡度。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">越野</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">耐用</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">全地形</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center p-8">
                  <Zap className="h-32 w-32 text-white" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">小牛 MQi+ - 智能电动车</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">续航里程</p>
                      <p className="font-semibold">100公里</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">最高时速</p>
                      <p className="font-semibold">45km/h</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">价格区间</p>
                      <p className="font-semibold">4000-7000元</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">充电时间</p>
                      <p className="font-semibold">6-8小时</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    小牛电动自行车融合了现代科技与实用设计。配备智能锂电池管理系统，通过手机APP可以实时查看电量、行驶里程和车辆状态。强劲的电机提供充沛动力，即使在爬坡时也能轻松应对。LED大灯和尾灯确保夜间骑行安全。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">智能</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">省力</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">环保</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">骑行健康益处</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">心血管健康</h3>
              <p className="text-gray-700">
                规律的骑行可以增强心肺功能，降低心血管疾病风险。每周3-5次，每次30分钟以上的骑行，能有效改善心脏健康，降低血压和胆固醇水平。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">增强体能</h3>
              <p className="text-gray-700">
                骑行是一项全身运动，可以锻炼腿部、核心和上肢肌肉。长期坚持能提高耐力、力量和灵活性，塑造健美体型，同时消耗卡路里帮助控制体重。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Wind className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">减压放松</h3>
              <p className="text-gray-700">
                户外骑行能让您亲近大自然，呼吸新鲜空气，有效缓解工作压力和焦虑情绪。骑行时释放的内啡肽能提升心情，改善睡眠质量。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">选购建议</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">根据用途选择</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>通勤代步：</strong>选择城市车或电动车，舒适性和便利性优先</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>健身锻炼：</strong>公路车或山地车，根据路况和强度需求选择</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>休闲娱乐：</strong>折叠车或休闲车，便于携带和存放</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>专业竞技：</strong>高端公路车或山地车，性能至上</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">尺寸选择要点</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>身高匹配：</strong>根据身高选择合适的车架尺寸，确保骑行舒适</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>试骑体验：</strong>购买前一定要试骑，感受车辆的操控和舒适度</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>座椅调节：</strong>正确调整座椅高度和角度，避免运动伤害</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>把手距离：</strong>确保把手距离适中，保持良好的骑行姿势</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始您的骑行之旅</h2>
          <p className="text-xl text-green-100 mb-8">选择一辆适合您的自行车，享受健康快乐的骑行生活</p>
          <Link href="/guides" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block">
            查看选购指南
          </Link>
        </div>
      </section>
    </div>
  )
}
