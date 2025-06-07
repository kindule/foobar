# Hello World 项目 🌍

一个使用 Vite 和 Tailwind CSS 构建的现代化 Hello World 项目。

## 特性

- ⚡ **Vite** - 快速的构建工具
- 🎨 **Tailwind CSS** - 实用优先的CSS框架
- 📱 **响应式设计** - 适配各种设备
- 🎯 **交互式界面** - 动态问候功能
- ⏰ **实时时间显示** - 当前时间显示

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

项目将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
├── index.html          # HTML入口文件
├── package.json        # 项目配置
├── vite.config.ts      # Vite配置
├── src/
│   ├── main.js         # 主JavaScript文件
│   └── style.css       # 样式文件
└── README.md           # 项目说明
```

## 功能介绍

1. **欢迎界面** - 美观的渐变背景和卡片设计
2. **多语言问候** - 点击按钮获取随机语言的问候
3. **实时时间** - 显示当前时间
4. **响应式布局** - 适配手机和桌面端
5. **动画效果** - 流畅的交互动画

## 技术栈

- **Vite 5.0+** - 现代化前端构建工具
- **Tailwind CSS 4.1+** - CSS框架
- **原生JavaScript** - 无框架依赖
- **ES6+ 模块** - 现代JavaScript语法

## 部署

项目配置了自动化 CI/CD 流水线，支持自动部署到 AWS S3：

### 自动部署特性

- ✅ **GitHub Actions** - 每次推送自动触发
- ☁️ **AWS S3** - 静态网站托管
- 🚀 **自动构建** - Vite 生产环境构建
- 🔄 **缓存清除** - 可选 CloudFront 缓存失效

### 配置部署

详细配置步骤请参考 [AWS_DEPLOYMENT_SETUP.md](./AWS_DEPLOYMENT_SETUP.md)

### 部署流程

1. 推送代码至 `main` 分支
2. GitHub Actions 自动触发构建
3. 构建完成后同步到 S3 存储桶
4. 网站自动更新

## 开发说明

这是一个入门级的前端项目，适合学习：

- Vite 项目配置
- Tailwind CSS 使用
- 响应式设计
- JavaScript DOM操作
- 现代前端开发工作流
- CI/CD 自动化部署

祝你编程愉快！ 🚀 