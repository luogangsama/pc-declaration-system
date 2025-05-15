# PC志愿者服务队管理系统

![License](https://img.shields.io/badge/许可证-Apache%202.0-yellow)

## 项目简介
基于Web的综合性管理平台，专为PC志愿者服务队设计开发。实现用户认证、订单管理、日程规划等核心功能。支持PC端和移动端自适应。

> 后端服务仓库地址：[NanFangCollegePC](https://github.com/luogangsama/NanFangCollegePC)

## 系统架构
```
pc-declaration-system/
├── src/                    # 源代码
│   ├── html/               # 页面模板
│   │   ├── dashboard.html       # 管理控制台
│   │   ├── mobile_dashboard.html # 移动端控制台
│   │   ├── login.html           # 登录页面
│   │   ├── register.html        # 用户注册
│   │   ├── worker_register.html # 志愿者注册
│   │   └── forgot-password.html # 密码找回
│   ├── js/                 # 业务逻辑
│   │   ├── assign_order.js      # 订单分配
│   │   ├── message_board.js     # 留言板功能
│   │   ├── jquery.js            # jQuery库
│   │   └── crypto-js.min.js     # 加密库
│   ├── css/                # 样式资源
│   │   ├── login.css            # 登录样式
│   │   ├── register.css         # 注册样式 
│   │   ├── forgot-password.css  # 找回密码样式
│   │   └── message_board.css    # 留言板样式
│   ├── images/             # 图像资源
│   └── vendor/             # 第三方库
│       ├── bootstrap/           # UI框架
│       ├── fullcalendar/        # 日程管理组件
│       ├── flatpickr/           # 日期选择器
│       └── swiper/              # 移动端滑动组件
├── .gitignore              # 版本控制
├── README.md               # 项目文档
└── LICENSE                 # 开源协议
```

## 核心功能

| 模块 | 功能描述 |
|------|----------|
| 🔐 用户认证 | 多因素身份认证、会话管理、密码安全、设备识别 |
| 📝 用户管理 | 邮箱验证、密码校验、防重复注册、表单验证 |
| 💻 管理控制台 | 用户管理、天气集成、订单管理、日程管理、安全中心 |
| 📱 移动端适配 | 响应式布局、触控优化、性能优化、交互优化 |
| 📦 订单系统 | 权限控制、志愿者管理、状态管理、实时同步、留言板 |

## 用户权限
| 角色 | 权限范围 |
|------|----------|
| 普通用户 | 订单提交、历史查询、个人信息管理 |
| 志愿者 | 订单处理、状态更新、日程管理 |
| 管理员 | 系统管理、订单分配、用户管理 |

## 技术依赖
| 依赖 | 用途 |
|------|------|
| ![jQuery](https://img.shields.io/badge/jQuery-v3.6.0-blue) | DOM操作和AJAX |
| ![CryptoJS](https://img.shields.io/badge/CryptoJS-v4.1.1-green) | 数据加密 |
| ![FullCalendar](https://img.shields.io/badge/FullCalendar-v5.10.1-orange) | 日程管理 |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.1.3-purple) | UI框架 |
| ![Swiper](https://img.shields.io/badge/Swiper-latest-red) | 移动端交互 |
| ![Flatpickr](https://img.shields.io/badge/Flatpickr-latest-yellow) | 日期选择 |

## 安全机制
- AES加密
- 登录保护
- 会话验证
- 密码安全
- XSS/CSRF防护

---
© 2025 广州南方学院PC志愿者服务队管理系统. Licensed under the Apache License, Version 2.0.

Made with ❤️ by **QiannanYou** and **luogangsama**