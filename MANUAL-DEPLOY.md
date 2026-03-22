# 🚀 突围俱乐部官网 - 手动部署指南

## ⚠️ SSH 密码登录问题

如果 SSH 密码登录失败，可能是以下原因：

### 原因 1：服务器只允许密钥登录

**解决方法：使用阿里云 Workbench**

1. 登录阿里云控制台：https://ecs.console.aliyun.com
2. 找到实例 `i-bp1gmuub645jy20vd76e`
3. 点击 "连接" → "Workbench 远程连接"
4. 用阿里云账号登录（无需密码）
5. 在浏览器终端中执行部署命令

---

## 📋 手动部署步骤（在 Workbench 或 SSH 中执行）

### 步骤 1：安装 Node.js

```bash
# 安装 NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 加载 NVM
source ~/.bashrc

# 安装 Node.js 18
nvm install 18

# 验证
node -v  # 应该显示 v18.x.x
npm -v
```

---

### 步骤 2：安装 PM2

```bash
npm install -g pm2
pm2 -v
```

---

### 步骤 3：克隆项目

```bash
# 创建目录
mkdir -p /var/www/towayclub-website
cd /var/www/towayclub-website

# 克隆代码
git clone https://github.com/xiaoyaoluozi/towayclub-website.git .
```

---

### 步骤 4：安装依赖并构建

```bash
# 安装依赖
npm install

# 构建项目
npm run build
```

---

### 步骤 5：启动服务

```bash
# 使用 PM2 启动（3000 端口）
pm2 start npm --name "towayclub" -- start --port 3000

# 保存配置
pm2 save

# 设置开机自启（可选）
pm2 startup
```

---

### 步骤 6：检查状态

```bash
# 查看 PM2 进程
pm2 status

# 查看日志
pm2 logs towayclub

# 检查端口
netstat -tlnp | grep 3000
```

---

## 🌐 访问网站

部署完成后，在浏览器访问：

```
http://120.26.179.205:3000
```

应该能看到突围俱乐部官网！

---

## 🔧 配置 Nginx（可选）

如果要用域名或 80 端口访问：

```bash
# 创建 Nginx 配置
sudo cat > /etc/nginx/sites-available/towayclub << 'EOF'
server {
    listen 80;
    server_name 120.26.179.205;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# 启用配置
sudo ln -s /etc/nginx/sites-available/towayclub /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

---

## 📞 遇到问题？

### 问题 1：Git 未安装
```bash
apt update && apt install -y git
```

### 问题 2：权限不足
```bash
# 使用 sudo
sudo npm install -g pm2
```

### 问题 3：端口被占用
```bash
# 改用其他端口
pm2 start npm --name "towayclub" -- start --port 3001
```

### 问题 4：内存不足
```bash
# 查看内存
free -h

# 如果内存<1GB，增加 swap
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## ✅ 检查清单

- [ ] Node.js 18 已安装
- [ ] PM2 已安装
- [ ] 代码已克隆
- [ ] 依赖已安装
- [ ] 项目已构建
- [ ] PM2 进程运行中
- [ ] 可以访问 http://120.26.179.205:3000

---

**最后更新**: 2026-03-22 14:35
