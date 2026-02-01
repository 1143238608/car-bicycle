import Link from 'next/link'
import { Star, TrendingUp, Award, ThumbsUp } from 'lucide-react'
import { cars } from '@/lib/products-cars'
import { bicycles } from '@/lib/products-bicycles'

export default function ReviewsPage() {
  const featuredCars = cars.slice(0, 8)
  const featuredBikes = bicycles.slice(0, 6)

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">专业评测</h1>
          <p className="text-xl text-indigo-100">深入的车辆评测，帮助您做出明智的购买决策</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-indigo-600" />
            <h2 className="text-3xl font-bold">编辑推荐 - 汽车</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-700">{car.brand}</p>
                    <p className="text-sm text-gray-500">{car.model}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">5.0</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{car.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">¥{(car.price / 10000).toFixed(1)}万</span>
                    <Link href={`/cars#${car.id}`} className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold">
                      查看详情 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold">热门推荐 - 自行车</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBikes.map((bike) => (
              <div key={bike.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-700">{bike.brand}</p>
                    <p className="text-sm text-gray-500">{bike.model}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{bike.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{bike.description}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">重量:</span>
                      <span className="font-semibold">{bike.specs['重量']}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">变速:</span>
                      <span className="font-semibold">{bike.specs['变速']}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">¥{(bike.price / 100).toFixed(0)}</span>
                    <Link href={`/bicycles#${bike.id}`} className="text-purple-600 hover:text-purple-800 text-sm font-semibold">
                      查看详情 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <ThumbsUp className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold">评测标准</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">性能测试</h3>
              <p className="text-gray-600">专业的加速、制动、操控性能测试，提供客观数据</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">舒适度评估</h3>
              <p className="text-gray-600">座椅舒适性、噪音控制、悬架表现等全方位评估</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">配置分析</h3>
              <p className="text-gray-600">详细的配置对比，分析性价比和实用性</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">长期使用</h3>
              <p className="text-gray-600">长期使用体验，包括可靠性、维护成本等</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">想了解更多车型？</h2>
          <p className="text-xl text-indigo-100 mb-8">浏览完整的车型库，找到最适合您的选择</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cars" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              查看所有汽车
            </Link>
            <Link href="/bicycles" className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition">
              查看所有自行车
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
