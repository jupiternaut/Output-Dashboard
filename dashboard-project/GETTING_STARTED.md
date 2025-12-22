# 🎓 新手快速指南

这是一份为编程新手准备的详细指南，帮助你一步步将仪表盘发布到网上。

## 📋 准备工作

### 1. 安装必要工具

#### 安装 Node.js
1. 访问 [nodejs.org](https://nodejs.org/)
2. 下载并安装 LTS（长期支持）版本
3. 打开命令行/终端，输入以下命令验证安装：
   ```bash
   node --version
   npm --version
   ```

#### 安装 Git
1. 访问 [git-scm.com](https://git-scm.com/)
2. 下载并安装
3. 打开命令行/终端，输入以下命令验证：
   ```bash
   git --version
   ```

### 2. 注册账号

#### GitHub 账号
1. 访问 [github.com](https://github.com/)
2. 点击 "Sign up" 注册
3. 验证邮箱

#### Vercel 账号
1. 访问 [vercel.com](https://vercel.com/)
2. 点击 "Sign Up"
3. **重要**：选择 "Continue with GitHub" 使用 GitHub 账号登录
   - 这样可以让 Vercel 直接访问你的 GitHub 仓库

## 🚀 部署步骤

### 第一步：配置 Git

打开命令行/终端，输入以下命令（替换成你自己的信息）：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

### 第二步：进入项目目录

```bash
cd construction-ops-dashboard
```

### 第三步：测试项目（可选）

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

在浏览器打开显示的地址（通常是 http://localhost:5173），查看仪表盘是否正常工作。

按 `Ctrl + C` 停止服务器。

### 第四步：创建 GitHub 仓库

1. 访问 [github.com/new](https://github.com/new)
2. 填写信息：
   - **Repository name**: `construction-ops-dashboard`
   - **Description**: 建筑运营仪表盘
   - **Public** 或 **Private**: 选择 Public（公开）
   - ⚠️ **不要**勾选任何初始化选项
3. 点击 "Create repository"
4. **复制仓库地址**（类似：https://github.com/你的用户名/construction-ops-dashboard.git）

### 第五步：推送代码到 GitHub

#### 方法 A：使用自动脚本（推荐）

在项目目录中运行：

```bash
# Mac/Linux
./deploy.sh

# Windows (使用 Git Bash)
bash deploy.sh
```

按照提示操作即可。

#### 方法 B：手动操作

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit"

# 4. 设置主分支
git branch -M main

# 5. 连接到 GitHub（替换成你的仓库地址）
git remote add origin https://github.com/你的用户名/construction-ops-dashboard.git

# 6. 推送
git push -u origin main
```

### 第六步：在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com/)
2. 点击 "New Project"
3. 在列表中找到你的仓库 `construction-ops-dashboard`
   - 如果没有看到，点击 "Adjust GitHub App Permissions" 授权
4. 点击 "Import"
5. 保持默认配置，点击 "Deploy"
6. 等待 1-2 分钟，部署完成！

### 第七步：访问你的网站

部署完成后，Vercel 会给你一个网址，类似：
```
https://construction-ops-dashboard.vercel.app
```

点击即可访问你的仪表盘！

## 🔄 后续更新

当你修改代码后，只需要：

```bash
# 1. 添加修改
git add .

# 2. 提交修改
git commit -m "描述你的修改"

# 3. 推送到 GitHub
git push
```

Vercel 会自动检测到更新并重新部署！

## 🆘 常见问题

### 问题 1：git push 时要求输入用户名密码

**解决方法**：
1. 访问 GitHub [Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. 点击 "Generate new token (classic)"
3. 选择 `repo` 权限
4. 生成并复制 token
5. 推送时，用户名输入 GitHub 用户名，密码输入 token

### 问题 2：Vercel 找不到我的仓库

**解决方法**：
1. 确保使用 GitHub 账号登录 Vercel
2. 在 Vercel 设置中调整 GitHub App 权限
3. 授权访问仓库

### 问题 3：npm install 失败

**解决方法**：
```bash
# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 清除 npm 缓存
npm cache clean --force

# 重新安装
npm install
```

### 问题 4：部署后页面空白

**解决方法**：
1. 检查浏览器控制台是否有错误（F12 打开开发者工具）
2. 确认 vercel.json 配置正确
3. 查看 Vercel 部署日志

## 📚 学习资源

- [Git 教程](https://www.runoob.com/git/git-tutorial.html)
- [GitHub 入门](https://docs.github.com/zh/get-started)
- [Vercel 文档](https://vercel.com/docs)
- [React 教程](https://react.docschina.org/)

## 💬 需要帮助？

如果遇到问题：
1. 检查本指南的常见问题部分
2. 在 GitHub 仓库提 Issue
3. 查看错误信息并搜索解决方案

---

🎉 祝你部署成功！
