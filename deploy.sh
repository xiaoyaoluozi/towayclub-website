#!/bin/bash

# 突围俱乐部官网 - 一键部署脚本
# 使用方法：在服务器上执行 bash deploy.sh

set -e

echo "🚀 开始部署突围俱乐部官网..."

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "⚠️  Node.js 未安装，正在安装..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install 18
fi

echo "✅ Node.js 版本：$(node -v)"

# 检查 PM2
if ! command -v pm2 &> /dev/null; then
    echo "⚠️  PM2 未安装，正在安装..."
    npm install -g pm2
fi

echo "✅ PM2 版本：$(pm2 -v)"

# 创建项目目录
PROJECT_DIR="/var/www/towayclub-website"
echo "📁 创建项目目录：$PROJECT_DIR"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# 检查是否有 Git
if command -v git &> /dev/null; then
    echo "📦 使用 Git 克隆项目..."
    if [ -d ".git" ]; then
        git pull
    else
        git clone https://github.com/xiaoyaoluozi/towayclub-website.git .
    fi
else
    echo "⚠️  Git 未安装，请手动上传代码"
    echo "请使用 SCP 或 FTP 将代码上传到：$PROJECT_DIR"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install --production

# 构建项目
echo "🔨 构建项目..."
npm run build

# 停止旧进程
echo "⏹️  停止旧进程..."
pm2 stop towayclub 2>/dev/null || true
pm2 delete towayclub 2>/dev/null || true

# 启动新进程
echo "🚀 启动服务（3000 端口）..."
pm2 start npm --name "towayclub" -- start --port 3000

# 保存配置
echo "💾 保存 PM2 配置..."
pm2 save

# 设置开机自启
echo "⚙️  设置开机自启..."
pm2 startup | tail -1 | bash 2>/dev/null || true

echo ""
echo "✅ 部署完成！"
echo "🌐 访问地址：http://120.26.179.205:3000"
echo ""
echo "📊 查看服务状态：pm2 status"
echo "📋 查看日志：pm2 logs towayclub"
echo "🔄 重启服务：pm2 restart towayclub"
