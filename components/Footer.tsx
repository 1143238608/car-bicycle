import Link from 'next/link'
import { Car, Bike, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-blue-400" />
              <Bike className="h-6 w-6 text-green-400 -ml-2" />
              <span className="text-xl font-bold">车辆中心</span>
            </div>
            <p className="text-gray-400 text-sm">
              专业的汽车与自行车资讯平台，为您提供最新的车辆信息、评测和购买建议。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cars" className="text-gray-400 hover:text-white transition">汽车频道</Link></li>
              <li><Link href="/bicycles" className="text-gray-400 hover:text-white transition">自行车频道</Link></li>
              <li><Link href="/reviews" className="text-gray-400 hover:text-white transition">专业评测</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-white transition">购车指南</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">热门主题</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/news" className="text-gray-400 hover:text-white transition">新能源汽车</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition">电动自行车</Link></li>
              <li><Link href="/maintenance" className="text-gray-400 hover:text-white transition">维护保养</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-white transition">选购技巧</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">contact@carvehicle.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">400-888-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">中国 北京市</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 车辆中心. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
