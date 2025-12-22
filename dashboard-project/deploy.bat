@echo off
chcp 65001 >nul
echo.
echo ========================================
echo 🚀 建筑运营仪表盘 - GitHub 发布工具
echo ========================================
echo.

REM 检查是否是 Git 仓库
if not exist ".git" (
    echo 📦 正在初始化 Git 仓库...
    git init
    if errorlevel 1 (
        echo ❌ Git 初始化失败
        echo 请确保已安装 Git: https://git-scm.com/
        pause
        exit /b 1
    )
    echo ✓ Git 仓库初始化完成
) else (
    echo ✓ Git 仓库已存在
)

REM 创建 .gitignore
if not exist ".gitignore" (
    echo 📝 正在创建 .gitignore 文件...
    (
        echo node_modules
        echo dist
        echo .env
        echo .env.local
        echo .DS_Store
        echo .vscode
        echo .idea
        echo *.log
    ) > .gitignore
    echo ✓ .gitignore 创建完成
)

REM 添加所有文件
echo.
echo 📁 正在添加文件到 Git...
git add .
if errorlevel 1 (
    echo ❌ 文件添加失败
    pause
    exit /b 1
)
echo ✓ 文件添加完成

REM 提交
echo.
echo 💾 正在提交更改...
git commit -m "Initial commit: Construction Ops Dashboard"
if errorlevel 1 (
    echo ⚠️ 没有新的更改需要提交，或提交失败
)
echo ✓ 提交完成

REM 设置主分支
echo.
echo 🔄 正在设置主分支为 main...
git branch -M main
echo ✓ 分支设置完成

REM 提示用户创建 GitHub 仓库
echo.
echo ========================================
echo 请按以下步骤操作：
echo ========================================
echo.
echo 1️⃣  打开浏览器访问: https://github.com/new
echo 2️⃣  创建新仓库（建议命名: construction-ops-dashboard）
echo 3️⃣  不要勾选任何初始化选项（README, .gitignore 等）
echo 4️⃣  创建后复制仓库地址
echo.
echo ========================================
echo.

REM 获取仓库地址
set /p REPO_URL="请输入你的 GitHub 仓库地址: "

if "%REPO_URL%"=="" (
    echo.
    echo ❌ 错误：仓库地址不能为空
    pause
    exit /b 1
)

REM 移除旧的远程仓库（如果存在）
git remote remove origin 2>nul

REM 添加远程仓库
echo.
echo 🔗 正在连接到 GitHub 仓库...
git remote add origin %REPO_URL%
if errorlevel 1 (
    echo ❌ 远程仓库连接失败
    pause
    exit /b 1
)
echo ✓ 远程仓库连接完成

REM 推送到 GitHub
echo.
echo ⬆️  正在推送到 GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ========================================
    echo ❌ 推送失败
    echo ========================================
    echo.
    echo 可能的原因：
    echo - GitHub 仓库地址错误
    echo - 没有配置 Git 凭据
    echo - 网络连接问题
    echo.
    echo 解决方法：
    echo 1. 检查仓库地址是否正确
    echo 2. 配置 Git 用户信息：
    echo    git config --global user.name "你的名字"
    echo    git config --global user.email "你的邮箱"
    echo 3. 如果需要，配置 GitHub 认证
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo 🎉 成功发布到 GitHub！
echo ========================================
echo.
echo 📍 下一步：部署到 Vercel
echo.
echo 1️⃣  访问 Vercel: https://vercel.com
echo 2️⃣  使用 GitHub 账号登录
echo 3️⃣  点击 'New Project'
echo 4️⃣  选择你的仓库: construction-ops-dashboard
echo 5️⃣  点击 'Deploy'
echo.
echo ✨ Vercel 会自动检测配置并开始部署
echo ⏱️  通常需要 1-2 分钟完成部署
echo.
echo ========================================
echo.
pause
