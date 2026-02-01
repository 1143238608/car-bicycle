import { Wrench, Calendar, AlertCircle, CheckCircle, Settings, Droplet } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">维护保养</h1>
          <p className="text-xl text-green-100">专业的维护保养指南，延长车辆使用寿命</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">汽车保养周期表</h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">保养项目</th>
                      <th className="px-6 py-4 text-center">5000km</th>
                      <th className="px-6 py-4 text-center">10000km</th>
                      <th className="px-6 py-4 text-center">20000km</th>
                      <th className="px-6 py-4 text-center">40000km</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold">机油更换</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">机油滤清器</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">空气滤清器</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">空调滤清器</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">刹车片</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center">检查/更换</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">刹车油</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">火花塞</td>
                      <td className="px-6 py-4 text-center">-</td>
                      <td className="px-6 py-4 text-center">-</td>
                      <td className="px-6 py-4 text-center">检查</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">变速箱油</td>
                      <td className="px-6 py-4 text-center">-</td>
                      <td className="px-6 py-4 text-center">-</td>
                      <td className="px-6 py-4 text-center">-</td>
                      <td className="px-6 py-4 text-center">检查/更换</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">常见保养项目详解</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Droplet className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold">机油更换</h3>
              </div>
              <p className="text-gray-600 mb-3">机油是发动机的血液，定期更换可以保护发动机，延长使用寿命。</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>周期：</strong>5000-10000公里或6个月</li>
                <li>• <strong>费用：</strong>200-800元</li>
                <li>• <strong>时长：</strong>30-60分钟</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-8 w-8 text-orange-600" />
                <h3 className="text-xl font-semibold">刹车系统</h3>
              </div>
              <p className="text-gray-600 mb-3">刹车系统关乎行车安全，需要定期检查刹车片磨损情况和刹车油状态。</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>检查周期：</strong>每次保养</li>
                <li>• <strong>更换周期：</strong>3-5万公里</li>
                <li>• <strong>费用：</strong>400-1500元</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-semibold">轮胎保养</h3>
              </div>
              <p className="text-gray-600 mb-3">轮胎是车辆与地面的唯一接触点，定期检查胎压和磨损程度很重要。</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>胎压检查：</strong>每月一次</li>
                <li>• <strong>四轮定位：</strong>1-2万公里</li>
                <li>• <strong>更换周期：</strong>5-8万公里</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-semibold">电池保养</h3>
              </div>
              <p className="text-gray-600 mb-3">电池是车辆电气系统的核心，需要定期检查电压和清洁接线柱。</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>检查周期：</strong>每次保养</li>
                <li>• <strong>使用寿命：</strong>3-5年</li>
                <li>• <strong>费用：</strong>400-1000元</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
                <h3 className="text-xl font-semibold">空调系统</h3>
              </div>
              <p className="text-gray-600 mb-3">空调系统需要定期清洁和检查，确保制冷效果和空气质量。</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>滤芯更换：</strong>1万公里或1年</li>
                <li>• <strong>系统清洗：</strong>每年一次</li>
                <li>• <strong>费用：</strong>100-500元</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-teal-600" />
                <h3 className="text-xl font-semibold">防冻液</h3>
              </div>
              <p className="text-gray-600 mb-3">防冻液不仅防冻，还有防腐、防锈、散热等功能。</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>检查周期：</strong>每次保养</li>
                <li>• <strong>更换周期：</strong>2-4年或4万公里</li>
                <li>• <strong>费用：</strong>150-400元</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">自行车保养指南</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</span>
                  链条保养
                </h3>
                <p className="text-gray-700 mb-3">链条是自行车传动系统的核心部件，需要定期清洁和润滑。</p>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-700"><strong>清洁频率：</strong>每200-300公里或每月一次</p>
                  <p className="text-sm text-gray-700"><strong>润滑：</strong>清洁后立即润滑，使用专用链条油</p>
                  <p className="text-sm text-gray-700"><strong>更换：</strong>2000-3000公里，根据磨损情况</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">2</span>
                  刹车系统
                </h3>
                <p className="text-gray-700 mb-3">刹车系统直接关系到骑行安全，需要定期检查和调整。</p>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-sm text-gray-700"><strong>刹车片：</strong>定期检查磨损，及时更换</p>
                  <p className="text-sm text-gray-700"><strong>刹车线：</strong>检查是否生锈或断裂</p>
                  <p className="text-sm text-gray-700"><strong>碟刹：</strong>检查碟片是否变形，刹车油是否充足</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">3</span>
                  轮胎保养
                </h3>
                <p className="text-gray-700 mb-3">轮胎气压和磨损程度直接影响骑行体验和安全性。</p>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm text-gray-700"><strong>胎压检查：</strong>每次骑行前检查，保持推荐气压</p>
                  <p className="text-sm text-gray-700"><strong>磨损检查：</strong>定期检查胎面磨损和侧壁裂纹</p>
                  <p className="text-sm text-gray-700"><strong>更换周期：</strong>3000-5000公里或出现明显磨损</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">4</span>
                  变速系统
                </h3>
                <p className="text-gray-700 mb-3">变速系统需要定期调整，确保换挡顺畅准确。</p>
                <div className="bg-orange-50 p-4 rounded">
                  <p className="text-sm text-gray-700"><strong>调整频率：</strong>出现换挡不顺时及时调整</p>
                  <p className="text-sm text-gray-700"><strong>线管保养：</strong>定期检查变速线是否顺滑</p>
                  <p className="text-sm text-gray-700"><strong>飞轮清洁：</strong>定期清洁飞轮和导轮</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">需要专业保养服务？</h2>
          <p className="text-xl text-green-100 mb-8">建议定期到专业维修店进行全面检查和保养</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              查找附近维修店
            </button>
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
              预约保养服务
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
