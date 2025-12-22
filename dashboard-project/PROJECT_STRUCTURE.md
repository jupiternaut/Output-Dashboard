# 📦 项目文件说明

## 📂 核心文件

### `package.json`
项目依赖和脚本配置文件
- 定义了项目使用的所有 npm 包
- 包含构建和开发命令

### `vite.config.ts`
Vite 构建工具配置
- 配置 React 插件
- 设置构建选项

### `tsconfig.json`
TypeScript 编译器配置
- 定义 TypeScript 编译规则
- 设置类型检查选项

### `index.html`
应用的 HTML 入口文件
- 引入 Tailwind CSS
- 加载 React 应用

### `vercel.json`
Vercel 部署配置
- 指定构建命令
- 设置输出目录

## 📁 源代码目录 (src/)

### `src/index.tsx`
React 应用入口文件
- 将 App 组件挂载到 DOM

### `src/App.tsx`
主应用组件
- 包含整个仪表盘的布局和逻辑
- 管理数据状态和文件上传

### `src/types.ts`
TypeScript 类型定义
- 定义数据结构
- 确保类型安全

### `src/utils.ts`
工具函数
- 文件解析函数
- 数据处理函数

### `src/mockData.ts`
示例数据
- 提供默认的演示数据

## 🎨 组件目录 (src/components/)

### `src/components/MetricCard.tsx`
指标卡片组件
- 显示单个指标
- 包含图标和数值

### `src/components/Charts.tsx`
图表组件集合
- 柱状图
- 折线图
- 饼图

### `src/components/FileUploader.tsx`
文件上传组件
- 处理 Excel/CSV 文件上传
- 数据解析和验证

## 🔧 配置文件

### `.gitignore`
Git 忽略文件配置
- 指定不需要提交到 Git 的文件
- 如 node_modules, dist 等

## 📝 文档文件

### `README.md`
项目主文档
- 项目介绍
- 安装和部署说明
- 使用指南

### `GETTING_STARTED.md`
新手入门指南
- 详细的步骤说明
- 常见问题解答
- 学习资源

## 🚀 部署脚本

### `deploy.sh` (Mac/Linux)
自动部署脚本
- 初始化 Git 仓库
- 推送到 GitHub
- 提供部署指引

### `deploy.bat` (Windows)
Windows 批处理脚本
- 与 deploy.sh 功能相同
- 适用于 Windows 系统

## 🎯 使用这些文件

### 开发时需要的文件：
- `src/` 目录下的所有文件
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `index.html`

### 部署时需要的文件：
- 所有开发文件
- `vercel.json`
- `.gitignore`

### 不需要上传的文件/目录：
- `node_modules/` (会被 .gitignore 忽略)
- `dist/` (构建输出，会被 .gitignore 忽略)
- `.env` 文件

## 💡 修改建议

### 要修改样式：
编辑 `src/App.tsx` 和组件文件中的 Tailwind 类名

### 要修改数据结构：
1. 更新 `src/types.ts` 中的类型定义
2. 修改 `src/utils.ts` 中的数据处理逻辑
3. 更新组件以使用新的数据结构

### 要添加新功能：
1. 在 `src/components/` 创建新组件
2. 在 `src/App.tsx` 中引入和使用
3. 必要时更新 `src/types.ts`

### 要修改图表：
编辑 `src/components/Charts.tsx`，参考 [Recharts 文档](https://recharts.org/)

## 📊 文件大小参考

```
总大小: ~50 KB（不含 node_modules）
├── src/: ~35 KB
├── 配置文件: ~10 KB
└── 文档: ~5 KB
```

## 🔄 工作流程

1. **开发**: 修改 `src/` 下的文件
2. **测试**: 运行 `npm run dev`
3. **提交**: 使用 Git 提交更改
4. **部署**: 推送到 GitHub，Vercel 自动部署

---

💡 **小贴士**: 大部分时候你只需要修改 `src/` 目录下的文件即可！
