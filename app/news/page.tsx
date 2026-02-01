import { Calendar, TrendingUp, Zap, Award } from 'lucide-react'

export default function NewsPage() {
  const news = [
    {
      id: 1,
      category: '电动车',
      title: '2024年新能源汽车销量突破900万辆',
      summary: '中国新能源汽车市场持续高速增长，2024年全年销量预计将突破900万辆，市场渗透率超过35%。',
      date: '2024-01-15',
      image: 'electric',
      featured: true
    },
    {
      id: 2,
      category: '技术',
      title: '固态电池技术取得重大突破',
      summary: '多家车企宣布固态电池技术取得突破性进展，预计2025年将实现量产，续航里程有望突破1000公里。',
      date: '2024-01-14',
      image: 'tech',
      featured: true
    },
    {
      id: 3,
      category: '自行车',
      title: '碳纤维自行车价格持续下降',
      summary: '随着生产技术的进步，碳纤维自行车的价格逐渐亲民，预计未来将有更多消费者能够享受到高端骑行体验。',
      date: '2024-01-13',
      image: 'bike',
      featured: false
    },
    {
      id: 4,
      category: '政策',
      title: '新能源汽车补贴政策延续至2025年',
      summary: '政府宣布延续新能源汽车购置补贴政策，继续支持新能源汽车产业发展，促进汽车产业转型升级。',
      date: '2024-01-12',
      image: 'policy',
      featured: false
    },
    {
      id: 5,
      category: '市场',
      title: '豪华品牌加速电动化转型',
      summary: '奔驰、宝马、奥迪等豪华品牌纷纷发布电动化战略，计划在未来5年内推出超过50款纯电动车型。',
      date: '2024-01-11',
      image: 'luxury',
      featured: false
    },
    {
      id: 6,
      category: '智能驾驶',
      title: 'L3级自动驾驶获准上路测试',
      summary: '多个城市批准L3级自动驾驶车辆上路测试，智能驾驶技术商业化进程加速。',
      date: '2024-01-10',
      image: 'autonomous',
      featured: false
    },
    {
      id: 7,
      category: '环保',
      title: '自行车共享服务覆盖300个城市',
      summary: '共享单车服务持续扩张，已覆盖全国300多个城市，日均骑行次数超过4000万次。',
      date: '2024-01-09',
      image: 'sharing',
      featured: false
    },
    {
      id: 8,
      category: '赛事',
      title: '2024环法自行车赛路线公布',
      summary: '2024年环法自行车赛路线正式公布，将途经阿尔卑斯山和比利牛斯山，总里程超过3500公里。',
      date: '2024-01-08',
      image: 'race',
      featured: false
    },
    {
      id: 9,
      category: '技术',
      title: '800V高压快充技术普及',
      summary: '越来越多的电动车采用800V高压平台，充电速度大幅提升，15分钟即可充电至80%。',
      date: '2024-01-07',
      image: 'charging',
      featured: false
    },
    {
      id: 10,
      category: '市场',
      title: '电动自行车销量创历史新高',
      summary: '2024年电动自行车销量预计将突破5000万辆，成为城市短途出行的重要选择。',
      date: '2024-01-06',
      image: 'ebike',
      featured: false
    },
    {
      id: 11,
      category: '安全',
      title: '新车安全评级标准更新',
      summary: 'C-NCAP发布最新安全评级标准，对智能驾驶辅助系统提出更高要求。',
      date: '2024-01-05',
      image: 'safety',
      featured: false
    },
    {
      id: 12,
      category: '产业',
      title: '国产芯片在汽车领域应用加速',
      summary: '国产汽车芯片技术不断突破，在智能座舱和自动驾驶领域的应用比例持续提升。',
      date: '2024-01-04',
      image: 'chip',
      featured: false
    }
  ]

  const featuredNews = news.filter(n => n.featured)
  const regularNews = news.filter(n => !n.featured)

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">新闻资讯</h1>
          <p className="text-xl text-blue-100">最新的行业动态和技术趋势</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">头条新闻</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredNews.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-16 w-16 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">{article.image}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    阅读全文 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-8 w-8 text-cyan-600" />
            <h2 className="text-3xl font-bold">最新动态</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-gray-600 mx-auto mb-2" />
                    <p className="text-xs text-gray-500">{article.image}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">{article.summary}</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    阅读更多 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">热门话题</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">新能源汽车</h3>
              <p className="text-blue-100 text-sm mb-3">电动化转型加速</p>
              <span className="text-2xl font-bold">156</span>
              <span className="text-sm text-blue-100 ml-2">篇文章</span>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">智能驾驶</h3>
              <p className="text-green-100 text-sm mb-3">自动驾驶技术突破</p>
              <span className="text-2xl font-bold">89</span>
              <span className="text-sm text-green-100 ml-2">篇文章</span>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">骑行文化</h3>
              <p className="text-purple-100 text-sm mb-3">健康生活方式</p>
              <span className="text-2xl font-bold">67</span>
              <span className="text-sm text-purple-100 ml-2">篇文章</span>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">行业政策</h3>
              <p className="text-orange-100 text-sm mb-3">政策法规解读</p>
              <span className="text-2xl font-bold">43</span>
              <span className="text-sm text-orange-100 ml-2">篇文章</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">订阅我们的新闻通讯</h2>
          <p className="text-xl text-blue-100 mb-8">获取最新的行业资讯和产品评测</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              订阅
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
