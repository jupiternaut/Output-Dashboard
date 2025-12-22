#!/bin/bash

# 建筑运营仪表盘 - GitHub 发布脚本

echo "🚀 准备发布到 GitHub..."

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 检查是否已经是 git 仓库
if [ ! -d ".git" ]; then
    echo "${BLUE}📦 初始化 Git 仓库...${NC}"
    git init
    echo "${GREEN}✓ Git 仓库初始化完成${NC}"
else
    echo "${GREEN}✓ Git 仓库已存在${NC}"
fi

# 创建 .gitignore（如果不存在）
if [ ! -f ".gitignore" ]; then
    echo "${BLUE}📝 创建 .gitignore 文件...${NC}"
    cat > .gitignore << 'EOF'
node_modules
dist
.env
.env.local
.DS_Store
.vscode
.idea
*.log
EOF
    echo "${GREEN}✓ .gitignore 创建完成${NC}"
fi

# 添加所有文件
echo "${BLUE}📁 添加文件到 Git...${NC}"
git add .
echo "${GREEN}✓ 文件添加完成${NC}"

# 提交
echo "${BLUE}💾 提交更改...${NC}"
git commit -m "Initial commit: Construction Ops Dashboard"
echo "${GREEN}✓ 提交完成${NC}"

# 设置主分支名称为 main
echo "${BLUE}🔄 设置主分支为 main...${NC}"
git branch -M main
echo "${GREEN}✓ 分支设置完成${NC}"

# 提示用户输入 GitHub 仓库地址
echo ""
echo "${BLUE}════════════════════════════════════════════${NC}"
echo "${BLUE}请按以下步骤操作：${NC}"
echo "${BLUE}════════════════════════════════════════════${NC}"
echo ""
echo "1️⃣  访问 GitHub: https://github.com/new"
echo "2️⃣  创建新仓库（建议命名: construction-ops-dashboard）"
echo "3️⃣  不要勾选任何初始化选项（README, .gitignore 等）"
echo "4️⃣  创建后复制仓库地址"
echo ""
echo "${BLUE}════════════════════════════════════════════${NC}"
echo ""
read -p "请输入你的 GitHub 仓库地址 (例如: https://github.com/username/repo.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "${RED}❌ 错误：仓库地址不能为空${NC}"
    exit 1
fi

# 添加远程仓库
echo "${BLUE}🔗 连接到 GitHub 仓库...${NC}"
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"
echo "${GREEN}✓ 远程仓库连接完成${NC}"

# 推送到 GitHub
echo "${BLUE}⬆️  推送到 GitHub...${NC}"
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "${GREEN}════════════════════════════════════════════${NC}"
    echo "${GREEN}🎉 成功发布到 GitHub！${NC}"
    echo "${GREEN}════════════════════════════════════════════${NC}"
    echo ""
    echo "📍 下一步：部署到 Vercel"
    echo ""
    echo "1️⃣  访问 Vercel: https://vercel.com"
    echo "2️⃣  使用 GitHub 账号登录"
    echo "3️⃣  点击 'New Project'"
    echo "4️⃣  选择你的仓库: construction-ops-dashboard"
    echo "5️⃣  点击 'Deploy'"
    echo ""
    echo "✨ Vercel 会自动检测配置并开始部署"
    echo "⏱️  通常需要 1-2 分钟完成部署"
    echo ""
    echo "${GREEN}════════════════════════════════════════════${NC}"
else
    echo ""
    echo "${RED}════════════════════════════════════════════${NC}"
    echo "${RED}❌ 推送失败${NC}"
    echo "${RED}════════════════════════════════════════════${NC}"
    echo ""
    echo "可能的原因："
    echo "- GitHub 仓库地址错误"
    echo "- 没有配置 Git 凭据"
    echo "- 网络连接问题"
    echo ""
    echo "解决方法："
    echo "1. 检查仓库地址是否正确"
    echo "2. 配置 Git 用户信息："
    echo "   git config --global user.name \"你的名字\""
    echo "   git config --global user.email \"你的邮箱\""
    echo "3. 如果需要，配置 GitHub 认证"
    echo ""
fi
