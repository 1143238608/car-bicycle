'use client'

import Link from 'next/link'
import { Car, Bike, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600" />
              <Bike className="h-8 w-8 text-green-600 -ml-2" />
            </div>
            <span className="text-2xl font-bold text-gray-800">车辆中心</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">首页</Link>
            <Link href="/cars" className="text-gray-700 hover:text-blue-600 transition">汽车</Link>
            <Link href="/bicycles" className="text-gray-700 hover:text-blue-600 transition">自行车</Link>
            <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition">评测</Link>
            <Link href="/guides" className="text-gray-700 hover:text-blue-600 transition">购车指南</Link>
            <Link href="/maintenance" className="text-gray-700 hover:text-blue-600 transition">维护保养</Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600 transition">新闻资讯</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition">首页</Link>
            <Link href="/cars" className="block text-gray-700 hover:text-blue-600 transition">汽车</Link>
            <Link href="/bicycles" className="block text-gray-700 hover:text-blue-600 transition">自行车</Link>
            <Link href="/reviews" className="block text-gray-700 hover:text-blue-600 transition">评测</Link>
            <Link href="/guides" className="block text-gray-700 hover:text-blue-600 transition">购车指南</Link>
            <Link href="/maintenance" className="block text-gray-700 hover:text-blue-600 transition">维护保养</Link>
            <Link href="/news" className="block text-gray-700 hover:text-blue-600 transition">新闻资讯</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
