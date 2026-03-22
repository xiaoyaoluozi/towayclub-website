#!/bin/bash

# 突围俱乐部官网 - 阿里云部署脚本
# 使用方法：bash deploy-aliyun.sh

set -e

echo "🚀 开始部署到阿里云服务器..."

# 配置信息
SERVER_IP="your-server-ip"  # 替换为实际服务器 IP
SERVER_USER="root"
PROJECT_NAME="towayclub-website"
PROJECT_PATH="/var/www/towayclub-website"

# 1. 构建项目
echo "📦 正在构建项目..."
npm run build

# 2. 打包
echo "📦 正在打包..."
tar -czf /tmp/${PROJECT_NAME}.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.next' \
  --exclude='*.log' \
  .

# 3. 上传到服务器
echo "⬆️  正在上传到服务器..."
scp /tmp/${PROJECT_NAME}.tar.gz ${SERVER_USER}@${SERVER_IP}:/tmp/

# 4. 部署到服务器
echo "🔧 正在服务器端部署..."
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
  # 创建目录
  sudo mkdir -p /var/www/towayclub-website
  cd /var/www/towayclub-website
  
  # 解压
  sudo tar -xzf /tmp/towayclub-website.tar.gz
  
  # 安装依赖
  sudo npm install --production
  
  # 构建
  sudo npm run build
  
  # 使用 PM2 启动
  sudo pm2 delete towayclub || true
  sudo pm2 start npm --name "towayclub" -- start
  sudo pm2 save
  sudo pm2 startup
  
  # 清理
  rm -f /tmp/towayclub-website.tar.gz
ENDSSH

echo "✅ 部署完成！"
echo "🌐 访问地址：http://${SERVER_IP}:3000"
