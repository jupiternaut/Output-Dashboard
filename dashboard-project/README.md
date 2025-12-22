# 🏗️ 建筑运营仪表盘

一个现代化的建筑运营数据可视化仪表盘，支持实时数据监控和 Excel 文件导入。

## ✨ 功能特性

- 📊 实时数据可视化
- 📈 多种图表类型（柱状图、折线图、饼图）
- 📁 支持 Excel/CSV 文件导入
- 🎨 响应式设计，适配各种设备
- ⚡ 快速加载，性能优化

## 🚀 快速开始

### 本地开发

1. **克隆项目**
```bash
git clone https://github.com/你的用户名/construction-ops-dashboard.git
cd construction-ops-dashboard
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **构建生产版本**
```bash
npm run build
```

## 📦 部署到 Vercel

### 方法一：通过 GitHub 自动部署（推荐）

1. **将代码推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/construction-ops-dashboard.git
   git push -u origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"

3. **完成！**
   - Vercel 会自动检测到这是一个 Vite 项目
   - 每次推送代码到 GitHub，Vercel 会自动重新部署

### 方法二：使用 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   vercel
   ```

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **图表库**: Recharts
- **图标**: Lucide React
- **样式**: Tailwind CSS
- **数据处理**: PapaParse, XLSX

## 📁 项目结构

```
construction-ops-dashboard/
├── src/
│   ├── components/         # React 组件
│   │   ├── Charts.tsx     # 图表组件
│   │   ├── FileUploader.tsx  # 文件上传组件
│   │   └── MetricCard.tsx    # 指标卡片组件
│   ├── App.tsx            # 主应用组件
│   ├── index.tsx          # 入口文件
│   ├── types.ts           # TypeScript 类型定义
│   ├── utils.ts           # 工具函数
│   └── mockData.ts        # 模拟数据
├── index.html             # HTML 入口
├── package.json           # 项目依赖
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── vercel.json            # Vercel 配置
```

## 🔧 配置说明

### Vite 配置 (vite.config.ts)
项目使用 Vite 作为构建工具，配置了 React 插件和必要的构建选项。

### Vercel 配置 (vercel.json)
已配置好 Vercel 的构建命令和输出目录，无需手动修改。

## 📝 使用说明

1. **查看仪表盘**: 打开应用即可看到预设的示例数据
2. **导入数据**: 
   - 点击"上传文件"按钮
   - 选择 Excel (.xlsx, .xls) 或 CSV 文件
   - 数据会自动加载并更新图表
3. **数据要求**:
   - Excel/CSV 文件应包含以下列：项目名称、完成率、预算等
   - 支持中文列名

## 🐛 常见问题

### 部署失败？
- 确保 `package.json` 中的依赖版本正确
- 检查是否有 TypeScript 类型错误
- 查看 Vercel 的构建日志

### 本地运行错误？
- 删除 `node_modules` 和 `package-lock.json`
- 重新运行 `npm install`
- 确保 Node.js 版本 >= 16

### 文件上传不工作？
- 检查浏览器控制台是否有错误
- 确认文件格式正确（.xlsx, .xls, .csv）
- 检查文件大小是否过大

## 📄 License

MIT License

## 👤 作者

如有问题，欢迎提 Issue 或 PR！

---

⭐ 如果这个项目对你有帮助，请给一个 Star！
