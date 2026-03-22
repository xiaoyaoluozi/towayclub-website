# 🚀 突围俱乐部官网 - 阿里云服务器部署指南

## 📦 部署包已准备好

**位置**: `/tmp/towayclub-deploy.tar.gz`

---

## 📋 部署步骤（请按顺序执行）

### 第 1 步：登录服务器

```bash
# 使用 SSH 登录
ssh root@120.26.179.205

# 或者使用密码登录
# 系统会提示输入密码
```

---

### 第 2 步：检查环境

```bash
# 检查 Node.js 是否安装
node -v

# 如果没有安装，执行以下命令：
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
node -v  # 应该显示 v18.x.x

# 检查 PM2 是否安装
pm2 -v

# 如果没有安装，执行：
npm install -g pm2
```

---

### 第 3 步：创建项目目录

```bash
# 创建目录
mkdir -p /var/www/towayclub-website
cd /var/www/towayclub-website
```

---

### 第 4 步：上传代码

**方式一：使用 SCP（从本地电脑上传）**

在**本地电脑**上执行：
```bash
scp /tmp/towayclub-deploy.tar.gz root@120.26.179.205:/tmp/
```

**方式二：使用 Git**

在**服务器**上执行：
```bash
cd /var/www/towayclub-website
git clone https://github.com/xiaoyaoluozi/towayclub-website.git .
```

**方式三：使用 FTP 工具**
- 使用 FileZilla 或 WinSCP
- 主机：120.26.179.205
- 用户：root
- 端口：22
- 上传整个项目文件夹到 `/var/www/towayclub-website`

---

### 第 5 步：解压和安装

```bash
# 如果使用的是 tar.gz 包
cd /var/www/towayclub-website
tar -xzf /tmp/towayclub-deploy.tar.gz

# 安装依赖
npm install --production

# 构建项目
npm run build
```

---

### 第 6 步：启动服务

```bash
# 使用 PM2 启动（3000 端口）
pm2 start npm --name "towayclub" -- start --port 3000

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
# 按提示执行生成的命令
```

---

### 第 7 步：配置 Nginx（可选，但推荐）

```bash
# 创建 Nginx 配置文件
cat > /etc/nginx/sites-available/towayclub << 'EOF'
server {
    listen 8888;  # 使用 8888 端口访问突围网站
    server_name 120.26.179.205;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# 启用配置
ln -s /etc/nginx/sites-available/towayclub /etc/nginx/sites-enabled/

# 测试配置
nginx -t

# 重启 Nginx
systemctl restart nginx
```

---

### 第 8 步：检查服务状态

```bash
# 检查 PM2 进程
pm2 status

# 查看日志
pm2 logs towayclub

# 检查 Nginx 状态
systemctl status nginx

# 检查端口占用
netstat -tlnp | grep -E '3000|8888'
```

---

## 🌐 访问地址

部署完成后，可以通过以下方式访问：

### 方式一：直接访问（3000 端口）
```
http://120.26.179.205:3000
```

### 方式二：通过 Nginx（8888 端口，如果配置了）
```
http://120.26.179.205:8888
```

---

## 🔧 常用命令

### 查看服务状态
```bash
pm2 status
pm2 logs towayclub
```

### 重启服务
```bash
pm2 restart towayclub
```

### 停止服务
```bash
pm2 stop towayclub
```

### 删除服务
```bash
pm2 delete towayclub
```

### 更新代码
```bash
cd /var/www/towayclub-website
git pull
npm install
npm run build
pm2 restart towayclub
```

---

## ⚠️ 注意事项

1. **防火墙设置**
   - 确保阿里云安全组开放了 3000 端口（或 8888 端口）
   - 登录阿里云控制台 → ECS → 安全组 → 添加规则

2. **端口冲突**
   - 如果 3000 端口被占用，可以改用其他端口：
   ```bash
   pm2 start npm --name "towayclub" -- start --port 3001
   ```

3. **内存不足**
   - 如果服务器内存较小（<2GB），可能需要增加 swap：
   ```bash
   fallocate -l 2G /swapfile
   chmod 600 /swapfile
   mkswap /swapfile
   swapon /swapfile
   echo '/swapfile none swap sw 0 0' >> /etc/fstab
   ```

---

## 📞 遇到问题？

### 常见问题 1：Node.js 未安装
```bash
# 解决：安装 Node.js 18
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
```

### 常见问题 2：权限不足
```bash
# 使用 sudo 执行
sudo npm install -g pm2
```

### 常见问题 3：端口被占用
```bash
# 查看占用端口的进程
lsof -i :3000

# 杀掉进程或改用其他端口
pm2 start npm --name "towayclub" -- start --port 3001
```

### 常见问题 4：Nginx 启动失败
```bash
# 检查配置
nginx -t

# 查看错误日志
tail -f /var/log/nginx/error.log
```

---

## ✅ 部署检查清单

- [ ] Node.js 18 已安装
- [ ] PM2 已安装
- [ ] 项目代码已上传
- [ ] 依赖已安装（npm install）
- [ ] 项目已构建（npm run build）
- [ ] PM2 进程已启动
- [ ] 可以通过 IP:端口访问网站
- [ ] 移动端测试通过
- [ ] 所有页面加载正常

---

**需要帮助？** 把错误信息截图发给我！

**最后更新**: 2026-03-22 14:20
