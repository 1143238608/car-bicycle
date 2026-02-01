export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  description: string;
  features: string[];
  specs: Record<string, string>;
  image?: string;
}

export const carCategories = {
  electric: 'electric',
  sedan: 'sedan',
  suv: 'suv',
  sports: 'sports',
  luxury: 'luxury',
  compact: 'compact'
} as const;

// 60 different car models across 5 categories
export const cars: Product[] = [
  // Electric Cars (15 models)
  { id: 'car-ev-001', name: 'Tesla Model 3', category: 'car', type: 'electric', brand: 'Tesla', model: 'Model 3 Long Range', price: 339900, year: 2024, description: '长续航版本，NEDC续航668公里，零百加速4.4秒', features: ['自动驾驶辅助', '15英寸中控屏', '全景玻璃车顶', '高级音响系统'], specs: { 续航: '668km', 加速: '4.4s', 电池: '78.4kWh', 座位: '5座' }},
  { id: 'car-ev-002', name: 'BYD Han EV', category: 'car', type: 'electric', brand: 'BYD', model: '汉EV 旗舰版', price: 289800, year: 2024, description: '刀片电池技术，超长续航605公里', features: ['刀片电池', 'DiPilot智能驾驶', '15.6英寸悬浮屏', 'Nappa真皮座椅'], specs: { 续航: '605km', 加速: '3.9s', 电池: '85.4kWh', 座位: '5座' }},
  { id: 'car-ev-003', name: 'NIO ET7', category: 'car', type: 'electric', brand: 'NIO', model: 'ET7 100kWh', price: 458000, year: 2024, description: '蔚来旗舰轿车，1000公里超长续航', features: ['换电服务', 'NOMI智能助手', '23个扬声器', '女王副驾'], specs: { 续航: '1000km', 加速: '3.8s', 电池: '100kWh', 座位: '5座' }},
  { id: 'car-ev-004', name: 'Xiaomi SU7', category: 'car', type: 'electric', brand: 'Xiaomi', model: 'SU7 Max', price: 299900, year: 2024, description: '小米首款电动车，科技感十足', features: ['小米澎湃OS', '16.1英寸3K屏', '智能生态互联', '零百加速2.78s'], specs: { 续航: '800km', 加速: '2.78s', 电池: '101kWh', 座位: '5座' }},
  { id: 'car-ev-005', name: 'Li Auto L9', category: 'car', type: 'electric', brand: 'Li Auto', model: 'L9 Max', price: 459800, year: 2024, description: '增程式电动SUV，家庭旗舰', features: ['冰箱彩电大沙发', '3D ToF传感器', '五屏交互', '魔毯悬架'], specs: { 续航: '1315km', 加速: '5.3s', 电池: '44.5kWh', 座位: '6座' }},
  { id: 'car-ev-006', name: 'Zeekr 001', category: 'car', type: 'electric', brand: 'Zeekr', model: '001 YOU', price: 309000, year: 2024, description: '极氪猎装轿跑，性能与优雅并存', features: ['麋鹿测试83km/h', '8155芯片', 'Yamaha音响', '电动尾门'], specs: { 续航: '1032km', 加速: '3.8s', 电池: '100kWh', 座位: '5座' }},
  { id: 'car-ev-007', name: 'XPeng P7', category: 'car', type: 'electric', brand: 'XPeng', model: 'P7 鹏翼版', price: 249900, year: 2024, description: '智能轿跑，XNGP城市领航', features: ['XNGP智驾', '双激光雷达', '鹏翼门', '丹拿音响'], specs: { 续航: '702km', 加速: '3.9s', 电池: '86.2kWh', 座位: '5座' }},
  { id: 'car-ev-008', name: 'Aion LX Plus', category: 'car', type: 'electric', brand: 'Aion', model: 'LX Plus 千里版', price: 289600, year: 2024, description: '广汽埃安旗舰SUV，1008公里续航', features: ['弹匣电池2.0', 'ADiGO 4.0', '全铝车身', '空气悬架'], specs: { 续航: '1008km', 加速: '2.9s', 电池: '144.4kWh', 座位: '5座' }},
  { id: 'car-ev-009', name: 'Volkswagen ID.4', category: 'car', type: 'electric', brand: 'Volkswagen', model: 'ID.4 CROZZ Pro', price: 229888, year: 2024, description: '大众纯电SUV，德系品质', features: ['AR-HUD', 'IQ.Light灯组', 'MEB平台', '智能空调'], specs: { 续航: '600km', 加速: '6.2s', 电池: '84.8kWh', 座位: '5座' }},
  { id: 'car-ev-010', name: 'Mercedes EQS', category: 'car', type: 'electric', brand: 'Mercedes-Benz', model: 'EQS 450+', price: 849800, year: 2024, description: '奔驰电动旗舰，豪华与科技的完美结合', features: ['MBUX Hyperscreen', '后轮转向', '柏林之声', '魔术车身控制'], specs: { 续航: '849km', 加速: '6.2s', 电池: '107.8kWh', 座位: '5座' }},
  { id: 'car-ev-011', name: 'BMW iX', category: 'car', type: 'electric', brand: 'BMW', model: 'iX xDrive50', price: 849900, year: 2024, description: '宝马纯电旗舰SUV，创新豪华', features: ['双联屏', '水晶挡杆', 'Bowers & Wilkins', '空气悬架'], specs: { 续航: '665km', 加速: '4.6s', 电池: '111.5kWh', 座位: '5座' }},
  { id: 'car-ev-012', name: 'Porsche Taycan', category: 'car', type: 'electric', brand: 'Porsche', model: 'Taycan Turbo S', price: 1798000, year: 2024, description: '保时捷纯电跑车，极致性能', features: ['800V快充', '两速变速箱', 'PASM悬架', '陶瓷刹车'], specs: { 续航: '464km', 加速: '2.8s', 电池: '93.4kWh', 座位: '4座' }},
  { id: 'car-ev-013', name: 'Lucid Air', category: 'car', type: 'electric', brand: 'Lucid', model: 'Air Dream Edition', price: 1698000, year: 2024, description: '美国豪华电动车，1111马力', features: ['34英寸屏幕', '梦幻驾驶舱', '超快充电', '空间魔术'], specs: { 续航: '836km', 加速: '2.5s', 电池: '118kWh', 座位: '5座' }},
  { id: 'car-ev-014', name: 'Rivian R1S', category: 'car', type: 'electric', brand: 'Rivian', model: 'R1S Adventure', price: 898000, year: 2024, description: '美式纯电越野SUV，探险家之选', features: ['四电机', '涉水深度1米', '野营厨房', '储物空间'], specs: { 续航: '515km', 加速: '3.0s', 电池: '135kWh', 座位: '7座' }},
  { id: 'car-ev-015', name: 'Hyundai Ioniq 6', category: 'car', type: 'electric', brand: 'Hyundai', model: 'Ioniq 6 长续航', price: 259800, year: 2024, description: '现代流线型电动轿车，超低风阻', features: ['0.21风阻系数', 'V2L功能', '双12.3英寸屏', '智能座舱'], specs: { 续航: '614km', 加速: '5.1s', 电池: '77.4kWh', 座位: '5座' }},

  // Sedans (15 models)
  { id: 'car-sedan-001', name: 'Toyota Camry', category: 'car', type: 'sedan', brand: 'Toyota', model: '凯美瑞 2.5L 旗舰版', price: 259800, year: 2024, description: '丰田中型轿车标杆，可靠耐用', features: ['TNGA架构', 'TSS智行安全', 'JBL音响', '全景天窗'], specs: { 排量: '2.5L', 功率: '209马力', 油耗: '5.9L/100km', 座位: '5座' }},
  { id: 'car-sedan-002', name: 'Honda Accord', category: 'car', type: 'sedan', brand: 'Honda', model: '雅阁 260TURBO 旗舰版', price: 229800, year: 2024, description: '本田运动中级车，驾驶乐趣', features: ['1.5T涡轮增压', 'Honda SENSING', 'Bose音响', '远程启动'], specs: { 排量: '1.5T', 功率: '194马力', 油耗: '6.2L/100km', 座位: '5座' }},
  { id: 'car-sedan-003', name: 'BMW 3 Series', category: 'car', type: 'sedan', brand: 'BMW', model: '325Li M运动套装', price: 359800, year: 2024, description: '宝马运动豪华轿车，操控之王', features: ['M运动套装', '哈曼卡顿', 'iDrive 8.0', '自适应悬架'], specs: { 排量: '2.0T', 功率: '184马力', 油耗: '6.8L/100km', 座位: '5座' }},
  { id: 'car-sedan-004', name: 'Mercedes C-Class', category: 'car', type: 'sedan', brand: 'Mercedes-Benz', model: 'C 260 L 运动版', price: 379800, year: 2024, description: '奔驰C级，优雅与科技', features: ['MBUX系统', '柏林之声', '64色氛围灯', '智能驾驶辅助'], specs: { 排量: '1.5T', 功率: '204马力', 油耗: '6.5L/100km', 座位: '5座' }},
  { id: 'car-sedan-005', name: 'Audi A4L', category: 'car', type: 'sedan', brand: 'Audi', model: 'A4L 45 TFSI 臻选动感型', price: 369800, year: 2024, description: '奥迪A4L，科技豪华轿车', features: ['Quattro四驱', 'Virtual Cockpit', 'B&O音响', 'Matrix LED'], specs: { 排量: '2.0T', 功率: '252马力', 油耗: '7.1L/100km', 座位: '5座' }},
  { id: 'car-sedan-006', name: 'Lexus ES', category: 'car', type: 'sedan', brand: 'Lexus', model: 'ES 300h 卓越版', price: 429000, year: 2024, description: '雷克萨斯混动豪华轿车，静谧舒适', features: ['混合动力', 'Mark Levinson', '东方美学', '零重力座椅'], specs: { 排量: '2.5L混动', 功率: '218马力', 油耗: '4.6L/100km', 座位: '5座' }},
  { id: 'car-sedan-007', name: 'Volkswagen Passat', category: 'car', type: 'sedan', brand: 'Volkswagen', model: '帕萨特 380TSI 旗舰版', price: 279900, year: 2024, description: '大众帕萨特，商务家用两相宜', features: ['MQB平台', 'IQ.Drive', 'Dynaudio', '全液晶仪表'], specs: { 排量: '2.0T', 功率: '220马力', 油耗: '6.7L/100km', 座位: '5座' }},
  { id: 'car-sedan-008', name: 'Nissan Altima', category: 'car', type: 'sedan', brand: 'Nissan', model: '天籁 2.0T 旗舰版', price: 239800, year: 2024, description: '日产天籁，移动大沙发', features: ['VC-TURBO可变压缩比', 'ProPILOT', 'Bose音响', '零重力座椅'], specs: { 排量: '2.0T', 功率: '243马力', 油耗: '6.6L/100km', 座位: '5座' }},
  { id: 'car-sedan-009', name: 'Mazda 6', category: 'car', type: 'sedan', brand: 'Mazda', model: '阿特兹 2.5L 旗舰型', price: 239800, year: 2024, description: '马自达阿特兹，东瀛宝马', features: ['魂动设计', 'GVC加速度矢量控制', 'Bose音响', 'HUD抬头显示'], specs: { 排量: '2.5L', 功率: '192马力', 油耗: '6.3L/100km', 座位: '5座' }},
  { id: 'car-sedan-010', name: 'Hyundai Sonata', category: 'car', type: 'sedan', brand: 'Hyundai', model: '索纳塔 2.0T 旗舰版', price: 219800, year: 2024, description: '现代索纳塔，性价比之选', features: ['Sensuous Sportiness设计', 'SmartSense', 'BOSE音响', '指纹识别'], specs: { 排量: '2.0T', 功率: '240马力', 油耗: '6.8L/100km', 座位: '5座' }},
  { id: 'car-sedan-011', name: 'Kia K5', category: 'car', type: 'sedan', brand: 'Kia', model: 'K5 2.0T GT-Line', price: 209800, year: 2024, description: '起亚K5，运动轿跑风格', features: ['GT-Line套件', 'Drive WiSE', 'JBL音响', '双12.3英寸屏'], specs: { 排量: '2.0T', 功率: '240马力', 油耗: '6.9L/100km', 座位: '5座' }},
  { id: 'car-sedan-012', name: 'Buick LaCrosse', category: 'car', type: 'sedan', brand: 'Buick', model: '君越 Avenir', price: 299900, year: 2024, description: '别克君越，美式豪华', features: ['Avenir专属', 'eConnect 3.0', 'Bose音响', 'CDC悬架'], specs: { 排量: '2.0T', 功率: '237马力', 油耗: '7.2L/100km', 座位: '5座' }},
  { id: 'car-sedan-013', name: 'Cadillac CT5', category: 'car', type: 'sedan', brand: 'Cadillac', model: 'CT5 28T 铂金运动型', price: 329700, year: 2024, description: '凯迪拉克CT5，美式运动豪华', features: ['后驱平台', 'MRC电磁悬架', 'Bose音响', 'Super Cruise'], specs: { 排量: '2.0T', 功率: '237马力', 油耗: '7.3L/100km', 座位: '5座' }},
  { id: 'car-sedan-014', name: 'Genesis G80', category: 'car', type: 'sedan', brand: 'Genesis', model: 'G80 2.5T 豪华版', price: 339800, year: 2024, description: '捷尼赛思G80，韩系豪华新势力', features: ['双线设计', 'Lexicon音响', '后轮转向', '空气悬架'], specs: { 排量: '2.5T', 功率: '304马力', 油耗: '8.1L/100km', 座位: '5座' }},
  { id: 'car-sedan-015', name: 'Volvo S90', category: 'car', type: 'sedan', brand: 'Volvo', model: 'S90 B5 智雅豪华版', price: 429900, year: 2024, description: '沃尔沃S90，北欧豪华安全', features: ['City Safety', 'Bowers & Wilkins', '北欧设计', 'Pilot Assist'], specs: { 排量: '2.0T', 功率: '250马力', 油耗: '6.9L/100km', 座位: '5座' }},

  // SUVs (15 models)
  { id: 'car-suv-001', name: 'Toyota RAV4', category: 'car', type: 'suv', brand: 'Toyota', model: 'RAV4 荣放 双擎 四驱', price: 279800, year: 2024, description: '丰田RAV4，城市SUV标杆', features: ['混合动力', 'E-Four电子四驱', 'TSS 2.0', 'JBL音响'], specs: { 排量: '2.5L混动', 功率: '222马力', 油耗: '4.7L/100km', 座位: '5座' }},
  { id: 'car-suv-002', name: 'Honda CR-V', category: 'car', type: 'suv', brand: 'Honda', model: 'CR-V 锐·混动 四驱', price: 269800, year: 2024, description: '本田CR-V，空间魔术师', features: ['i-MMD混动', 'Honda SENSING', 'Bose音响', '全景天窗'], specs: { 排量: '2.0L混动', 功率: '204马力', 油耗: '5.6L/100km', 座位: '5座' }},
  { id: 'car-suv-003', name: 'BMW X3', category: 'car', type: 'suv', brand: 'BMW', model: 'X3 xDrive30i M运动套装', price: 479800, year: 2024, description: '宝马X3，豪华运动SUV', features: ['xDrive四驱', 'M运动套装', '哈曼卡顿', '自适应悬架'], specs: { 排量: '2.0T', 功率: '245马力', 油耗: '7.6L/100km', 座位: '5座' }},
  { id: 'car-suv-004', name: 'Mercedes GLC', category: 'car', type: 'suv', brand: 'Mercedes-Benz', model: 'GLC 300 L 4MATIC', price: 499800, year: 2024, description: '奔驰GLC，豪华舒适SUV', features: ['4MATIC四驱', 'MBUX系统', '柏林之声', '空气悬架'], specs: { 排量: '2.0T', 功率: '258马力', 油耗: '8.1L/100km', 座位: '5座' }},
  { id: 'car-suv-005', name: 'Audi Q5L', category: 'car', type: 'suv', brand: 'Audi', model: 'Q5L 45 TFSI quattro', price: 459800, year: 2024, description: '奥迪Q5L，科技豪华SUV', features: ['Quattro四驱', 'Virtual Cockpit', 'B&O音响', 'Matrix LED'], specs: { 排量: '2.0T', 功率: '252马力', 油耗: '7.8L/100km', 座位: '5座' }},
  { id: 'car-suv-006', name: 'Lexus RX', category: 'car', type: 'suv', brand: 'Lexus', model: 'RX 450h+ 四驱', price: 629000, year: 2024, description: '雷克萨斯RX，豪华混动SUV', features: ['插电混动', 'E-Four四驱', 'Mark Levinson', '东方美学'], specs: { 排量: '2.5L混动', 功率: '309马力', 油耗: '1.3L/100km', 座位: '5座' }},
  { id: 'car-suv-007', name: 'Porsche Cayenne', category: 'car', type: 'suv', brand: 'Porsche', model: 'Cayenne Turbo', price: 1798000, year: 2024, description: '保时捷卡宴，性能SUV之王', features: ['4.0T V8', 'PASM悬架', 'Burmester音响', '陶瓷刹车'], specs: { 排量: '4.0T', 功率: '550马力', 油耗: '11.7L/100km', 座位: '5座' }},
  { id: 'car-suv-008', name: 'Range Rover', category: 'car', type: 'suv', brand: 'Land Rover', model: 'Range Rover P400', price: 1498000, year: 2024, description: '路虎揽胜，豪华越野之王', features: ['全地形反馈', '空气悬架', 'Meridian音响', '后轮转向'], specs: { 排量: '3.0T', 功率: '400马力', 油耗: '10.2L/100km', 座位: '5座' }},
  { id: 'car-suv-009', name: 'Volvo XC90', category: 'car', type: 'suv', brand: 'Volvo', model: 'XC90 B6 智雅豪华版', price: 739900, year: 2024, description: '沃尔沃XC90，北欧豪华7座SUV', features: ['7座布局', 'Bowers & Wilkins', 'City Safety', '空气悬架'], specs: { 排量: '2.0T+电机', 功率: '310马力', 油耗: '7.9L/100km', 座位: '7座' }},
  { id: 'car-suv-010', name: 'Jeep Grand Cherokee', category: 'car', type: 'suv', brand: 'Jeep', model: 'Grand Cherokee 4xe', price: 699900, year: 2024, description: 'Jeep大切诺基，美式硬派SUV', features: ['插电混动', 'Quadra-Drive四驱', 'McIntosh音响', '空气悬架'], specs: { 排量: '2.0T+电机', 功率: '380马力', 油耗: '2.1L/100km', 座位: '5座' }},
  { id: 'car-suv-011', name: 'Mazda CX-5', category: 'car', type: 'suv', brand: 'Mazda', model: 'CX-5 2.5L 四驱旗舰型', price: 259800, year: 2024, description: '马自达CX-5，魂动设计SUV', features: ['魂动设计', 'i-ACTIV AWD', 'Bose音响', 'HUD抬头显示'], specs: { 排量: '2.5L', 功率: '196马力', 油耗: '7.3L/100km', 座位: '5座' }},
  { id: 'car-suv-012', name: 'Volkswagen Tiguan', category: 'car', type: 'suv', brand: 'Volkswagen', model: '途观L 380TSI 四驱旗舰版', price: 319900, year: 2024, description: '大众途观L，德系品质SUV', features: ['4MOTION四驱', 'IQ.Drive', 'Dynaudio', 'DCC悬架'], specs: { 排量: '2.0T', 功率: '220马力', 油耗: '7.5L/100km', 座位: '5座' }},
  { id: 'car-suv-013', name: 'Ford Explorer', category: 'car', type: 'suv', brand: 'Ford', model: '探险者 2.3T 四驱铂金版', price: 399800, year: 2024, description: '福特探险者，美式大7座SUV', features: ['7座布局', 'Co-Pilot360', 'B&O音响', '全景天窗'], specs: { 排量: '2.3T', 功率: '276马力', 油耗: '8.6L/100km', 座位: '7座' }},
  { id: 'car-suv-014', name: 'Hyundai Tucson', category: 'car', type: 'suv', brand: 'Hyundai', model: '途胜L 2.0T 四驱旗舰版', price: 249800, year: 2024, description: '现代途胜L，科技智能SUV', features: ['Parametric Dynamics设计', 'SmartSense', 'KRELL音响', '全景天窗'], specs: { 排量: '2.0T', 功率: '236马力', 油耗: '7.8L/100km', 座位: '5座' }},
  { id: 'car-suv-015', name: 'Subaru Outback', category: 'car', type: 'suv', brand: 'Subaru', model: '傲虎 2.5L 旗舰版', price: 329900, year: 2024, description: '斯巴鲁傲虎，全时四驱旅行SUV', features: ['水平对置发动机', '全时四驱', 'EyeSight', 'Harman Kardon'], specs: { 排量: '2.5L', 功率: '175马力', 油耗: '7.2L/100km', 座位: '5座' }},

  // Sports Cars (8 models)
  { id: 'car-sports-001', name: 'Porsche 911', category: 'car', type: 'sports', brand: 'Porsche', model: '911 Carrera S', price: 1458000, year: 2024, description: '保时捷911，经典跑车传奇', features: ['后置发动机', 'PDK变速箱', 'PASM悬架', 'Sport Chrono'], specs: { 排量: '3.0T', 功率: '450马力', 油耗: '9.1L/100km', 座位: '4座' }},
  { id: 'car-sports-002', name: 'Chevrolet Corvette', category: 'car', type: 'sports', brand: 'Chevrolet', model: 'Corvette Stingray', price: 998000, year: 2024, description: '雪佛兰科尔维特，美式超跑', features: ['中置发动机', '8速双离合', 'Bose音响', '碳纤维套件'], specs: { 排量: '6.2L V8', 功率: '495马力', 油耗: '11.2L/100km', 座位: '2座' }},
  { id: 'car-sports-003', name: 'BMW M4', category: 'car', type: 'sports', brand: 'BMW', model: 'M4 Competition', price: 998000, year: 2024, description: '宝马M4，性能轿跑', features: ['S58发动机', 'M xDrive', '碳纤维车顶', 'M运动排气'], specs: { 排量: '3.0T', 功率: '510马力', 油耗: '9.8L/100km', 座位: '4座' }},
  { id: 'car-sports-004', name: 'Mercedes-AMG GT', category: 'car', type: 'sports', brand: 'Mercedes-Benz', model: 'AMG GT 63 S', price: 1998000, year: 2024, description: '奔驰AMG GT，四门轿跑', features: ['4.0T V8', 'AMG Performance 4MATIC+', 'Burmester 3D', '碳陶刹车'], specs: { 排量: '4.0T', 功率: '639马力', 油耗: '11.3L/100km', 座位: '4座' }},
  { id: 'car-sports-005', name: 'Audi R8', category: 'car', type: 'sports', brand: 'Audi', model: 'R8 V10 Performance', price: 2298000, year: 2024, description: '奥迪R8，日常超跑', features: ['5.2L V10', 'Quattro四驱', 'Virtual Cockpit', '碳纤维套件'], specs: { 排量: '5.2L V10', 功率: '620马力', 油耗: '13.7L/100km', 座位: '2座' }},
  { id: 'car-sports-006', name: 'Nissan GT-R', category: 'car', type: 'sports', brand: 'Nissan', model: 'GT-R NISMO', price: 2358000, year: 2024, description: '日产GT-R，东瀛战神', features: ['3.8T V6', 'ATTESA E-TS四驱', 'Brembo刹车', 'NISMO套件'], specs: { 排量: '3.8T V6', 功率: '600马力', 油耗: '11.8L/100km', 座位: '4座' }},
  { id: 'car-sports-007', name: 'Maserati MC20', category: 'car', type: 'sports', brand: 'Maserati', model: 'MC20 Cielo', price: 3198000, year: 2024, description: '玛莎拉蒂MC20，意式超跑', features: ['Nettuno V6', '碳纤维单体壳', '蝴蝶门', 'Sonus faber音响'], specs: { 排量: '3.0T V6', 功率: '630马力', 油耗: '11.6L/100km', 座位: '2座' }},
  { id: 'car-sports-008', name: 'McLaren 720S', category: 'car', type: 'sports', brand: 'McLaren', model: '720S Spider', price: 3898000, year: 2024, description: '迈凯伦720S，英伦超跑', features: ['4.0T V8', 'ProActive Chassis', '碳纤维单体壳', '蝴蝶门'], specs: { 排量: '4.0T V8', 功率: '720马力', 油耗: '10.7L/100km', 座位: '2座' }},

  // Luxury Cars (7 models)
  { id: 'car-luxury-001', name: 'Mercedes S-Class', category: 'car', type: 'luxury', brand: 'Mercedes-Benz', model: 'S 500 L 4MATIC', price: 1498000, year: 2024, description: '奔驰S级，豪华轿车标杆', features: ['MBUX Hyperscreen', '后轮转向', 'Burmester 4D', 'E-ACTIVE悬架'], specs: { 排量: '3.0T', 功率: '435马力', 油耗: '8.9L/100km', 座位: '5座' }},
  { id: 'car-luxury-002', name: 'BMW 7 Series', category: 'car', type: 'luxury', brand: 'BMW', model: '740Li 尊享型', price: 1398000, year: 2024, description: '宝马7系，科技豪华旗舰', features: ['iDrive 8.0', '后轮转向', 'Bowers & Wilkins', '魔毯悬架'], specs: { 排量: '3.0T', 功率: '381马力', 油耗: '8.3L/100km', 座位: '5座' }},
  { id: 'car-luxury-003', name: 'Audi A8L', category: 'car', type: 'luxury', brand: 'Audi', model: 'A8L 60 TFSI quattro', price: 1098000, year: 2024, description: '奥迪A8L，科技豪华旗舰', features: ['Quattro四驱', 'MMI touch', 'B&O 3D音响', 'AI主动悬架'], specs: { 排量: '3.0T', 功率: '340马力', 油耗: '8.6L/100km', 座位: '5座' }},
  { id: 'car-luxury-004', name: 'Lexus LS', category: 'car', type: 'luxury', brand: 'Lexus', model: 'LS 500h 行政版', price: 1158000, year: 2024, description: '雷克萨斯LS，东方豪华旗舰', features: ['混合动力', 'Mark Levinson', '东方美学', '空气悬架'], specs: { 排量: '3.5L混动', 功率: '359马力', 油耗: '6.8L/100km', 座位: '5座' }},
  { id: 'car-luxury-005', name: 'Bentley Flying Spur', category: 'car', type: 'luxury', brand: 'Bentley', model: 'Flying Spur V8', price: 2798000, year: 2024, description: '宾利飞驰，英伦奢华', features: ['4.0T V8', 'Naim音响', '手工内饰', '空气悬架'], specs: { 排量: '4.0T V8', 功率: '550马力', 油耗: '12.5L/100km', 座位: '5座' }},
  { id: 'car-luxury-006', name: 'Rolls-Royce Ghost', category: 'car', type: 'luxury', brand: 'Rolls-Royce', model: 'Ghost 标准轴距', price: 4998000, year: 2024, description: '劳斯莱斯古思特，终极奢华', features: ['6.75T V12', '星空顶', 'Bespoke Audio', '魔毯悬架'], specs: { 排量: '6.75T V12', 功率: '571马力', 油耗: '14.8L/100km', 座位: '5座' }},
  { id: 'car-luxury-007', name: 'Maybach S-Class', category: 'car', type: 'luxury', brand: 'Mercedes-Maybach', model: 'S 680 4MATIC', price: 2798000, year: 2024, description: '迈巴赫S级，现代奢华典范', features: ['6.0T V12', 'Burmester 4D', '行政座椅', 'E-ACTIVE悬架'], specs: { 排量: '6.0T V12', 功率: '612马力', 油耗: '13.2L/100km', 座位: '4座' }}
];
