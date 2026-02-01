# 汽车与自行车中心

专业的车辆资讯平台，为您提供最新的汽车和自行车评测、购买指南和维护技巧。

## 功能特点

- 📱 响应式设计，支持各种设备
- 🚗 丰富的汽车资讯和评测
- 🚴 全面的自行车选购指南
- 📝 专业的购车建议
- 🔧 实用的维护保养技巧
- 🎨 现代化的UI设计

## 技术栈

- **框架**: Next.js 14
- **样式**: TailwindCSS
- **图标**: Lucide React
- **语言**: TypeScript

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 生产构建

```bash
npm run build
npm start
```

## 项目结构

```
car-bybicle/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── cars/              # 汽车专区
│   ├── bicycles/          # 自行车专区
│   ├── guides/            # 购车指南
│   ├── reviews/           # 专业评测
│   ├── maintenance/       # 维护保养
│   ├── news/              # 新闻资讯
│   ├── layout.tsx         # 全局布局
│   └── globals.css        # 全局样式
├── components/            # React组件
│   ├── Header.tsx         # 头部导航
│   └── Footer.tsx         # 页脚
├── public/                # 静态资源
└── package.json           # 项目配置
```

## 页面说明

### 首页
- 展示平台核心服务
- 热门车型推荐
- 最新资讯动态

### 汽车专区
- 车型分类介绍
- 详细车型评测
- 购车建议

### 自行车专区
- 自行车类型介绍
- 热门车型推荐
- 骑行健康益处
- 选购建议

### 购车指南
- 购车前准备
- 选车要点
- 购车流程

## 开发说明

本项目使用 Next.js 14 App Router，采用服务端渲染(SSR)和静态生成(SSG)相结合的方式，确保最佳性能和SEO效果。

## 许可证

MIT License
