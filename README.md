# xside-ai-web

[English](#english) | [中文](#中文)

---

## English

### Project Overview

**xside-ai-web** is the official website repository for [Xside](https://xside.ai). It is a lightweight Next.js web application that currently serves as the public-facing web presence for the Xside AI product.

At version `0.1.0`, this repository is an early scaffold. Most of the home page still uses the default `create-next-app` template, while the only Xside-specific page implemented so far is the bilingual privacy policy at `/privacy`. The privacy policy describes the broader Xside product (website + browser extension + AI features), but **this repo contains only the website shell** — no browser extension code, backend API, authentication, database, or AI integration is implemented here yet.

### Main Features

| Feature | Route | Description |
|---------|-------|-------------|
| Home page | `/` | Default Next.js starter landing page with Tailwind CSS styling and dark mode support via `prefers-color-scheme`. |
| Privacy policy | `/privacy` | Bilingual (English + Chinese) privacy policy page describing Xside's data handling practices. Contact: `support@xside.ai`. |

**What is NOT included in this repository:**

- No API routes (`app/api/` does not exist)
- No authentication or user accounts
- No database or ORM
- No AI / third-party API client code
- No browser extension source code
- No analytics, cookies, or environment-based configuration

### Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [Next.js](https://nextjs.org) (App Router) | 16.2.9 |
| UI Library | [React](https://react.dev) | 19.2.4 |
| Language | [TypeScript](https://www.typescriptlang.org) | ^5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) | ^4 |
| CSS Pipeline | PostCSS + `@tailwindcss/postcss` | ^4 |
| Linting | ESLint + `eslint-config-next` | ^9 / 16.2.9 |

**Project structure:**

```
xside-ai-web/
├── app/
│   ├── layout.tsx          # Root layout and metadata
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Tailwind v4 + CSS variables (dark mode)
│   └── privacy/
│       └── page.tsx        # Privacy policy (/privacy)
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration (default)
├── tsconfig.json           # TypeScript config (@/* path alias)
├── postcss.config.mjs      # Tailwind PostCSS plugin
├── eslint.config.mjs       # ESLint configuration
└── package.json
```

### Local Development

#### Prerequisites

- **Node.js** 18.18+ or 20+ (required for Next.js 16)
- **npm** (lockfile: `package-lock.json`)

No environment variables are required — the codebase does not reference any `.env` configuration.

#### Setup

```bash
# Clone the repository
git clone <repository-url>
cd xside-ai-web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Pages to verify:**

| URL | Page |
|-----|------|
| `http://localhost:3000/` | Home (starter template) |
| `http://localhost:3000/privacy` | Privacy policy (EN + 中文) |

#### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with hot reload |
| `build` | `npm run build` | Create an optimized production build |
| `start` | `npm run start` | Serve the production build (run `build` first) |
| `lint` | `npm run lint` | Run ESLint across the codebase |

#### Production Build (Local)

```bash
npm run build
npm run start
```

The production server also runs on port 3000 by default.

### Deployment

This project has no custom deployment configuration (no Dockerfile, CI/CD pipeline, or `vercel.json`). It follows the standard Next.js deployment model.

#### Option 1: Vercel (Recommended)

[Vercel](https://vercel.com) is the recommended platform for Next.js applications.

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project on [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no build settings changes needed.
4. Deploy.

Build command: `next build`  
Output directory: `.next` (handled automatically)

No environment variables are required for the current codebase.

#### Option 2: Self-hosted (Node.js)

Any server that can run Node.js can host this application:

```bash
npm install
npm run build
npm run start
```

Use a process manager (e.g. PM2, systemd) and a reverse proxy (e.g. Nginx, Caddy) for production. Set `PORT` to change the default port 3000.

#### Option 3: Docker (Manual)

No Dockerfile is included. To containerize, create a Dockerfile based on the [Next.js Docker deployment guide](https://nextjs.org/docs/app/building-your-application/deploying#docker-image).

### Contact

For privacy-related questions: **support@xside.ai**

---

## 中文

### 项目简介

**xside-ai-web** 是 [Xside](https://xside.ai) 产品的官方网站仓库，基于 Next.js 构建的轻量级 Web 应用，目前作为 Xside AI 产品的对外 Web 入口。

当前版本为 `0.1.0`，处于早期脚手架阶段。首页仍使用 `create-next-app` 默认模板，目前唯一实现的 Xside 专属页面是位于 `/privacy` 的中英双语隐私政策页。隐私政策中描述了 Xside 完整产品（网站 + 浏览器插件 + AI 功能）的数据处理方式，但 **本仓库仅包含网站部分** — 尚未实现浏览器插件源码、后端 API、用户认证、数据库或 AI 集成。

### 主要功能

| 功能 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | Next.js 默认 starter 落地页，使用 Tailwind CSS 样式，支持 `prefers-color-scheme` 暗色模式。 |
| 隐私政策 | `/privacy` | 中英双语隐私政策页，说明 Xside 的数据处理规范。联系方式：`support@xside.ai`。 |

**本仓库尚未包含的功能：**

- 无 API 路由（不存在 `app/api/` 目录）
- 无用户认证或账户系统
- 无数据库或 ORM
- 无 AI / 第三方 API 客户端代码
- 无浏览器插件源码
- 无分析统计、Cookie 或环境变量配置

### 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | [Next.js](https://nextjs.org)（App Router） | 16.2.9 |
| UI 库 | [React](https://react.dev) | 19.2.4 |
| 语言 | [TypeScript](https://www.typescriptlang.org) | ^5 |
| 样式 | [Tailwind CSS](https://tailwindcss.com) | ^4 |
| CSS 构建 | PostCSS + `@tailwindcss/postcss` | ^4 |
| 代码检查 | ESLint + `eslint-config-next` | ^9 / 16.2.9 |

**项目结构：**

```
xside-ai-web/
├── app/
│   ├── layout.tsx          # 根布局与 metadata
│   ├── page.tsx            # 首页 (/)
│   ├── globals.css         # Tailwind v4 + CSS 变量（暗色模式）
│   └── privacy/
│       └── page.tsx        # 隐私政策 (/privacy)
├── public/                 # 静态资源
├── next.config.ts          # Next.js 配置（默认）
├── tsconfig.json           # TypeScript 配置（@/* 路径别名）
├── postcss.config.mjs      # Tailwind PostCSS 插件
├── eslint.config.mjs       # ESLint 配置
└── package.json
```

### 本地开发

#### 环境要求

- **Node.js** 18.18+ 或 20+（Next.js 16 要求）
- **npm**（锁文件：`package-lock.json`）

无需配置环境变量 — 代码中未引用任何 `.env` 配置。

#### 启动步骤

```bash
# 克隆仓库
git clone <repository-url>
cd xside-ai-web

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

**可访问页面：**

| 地址 | 页面 |
|------|------|
| `http://localhost:3000/` | 首页（starter 模板） |
| `http://localhost:3000/privacy` | 隐私政策（英文 + 中文） |

#### 可用脚本

| 脚本 | 命令 | 说明 |
|------|------|------|
| `dev` | `npm run dev` | 启动开发服务器，支持热更新 |
| `build` | `npm run build` | 构建生产版本 |
| `start` | `npm run start` | 运行生产构建（需先执行 `build`） |
| `lint` | `npm run lint` | 运行 ESLint 代码检查 |

#### 本地生产构建

```bash
npm run build
npm run start
```

生产服务器默认监听 3000 端口。

### 部署说明

项目未包含自定义部署配置（无 Dockerfile、CI/CD 流水线或 `vercel.json`），采用标准 Next.js 部署方式。

#### 方式一：Vercel（推荐）

[Vercel](https://vercel.com) 是 Next.js 应用的推荐部署平台。

1. 将仓库推送到 GitHub、GitLab 或 Bitbucket。
2. 在 [Vercel](https://vercel.com/new) 导入项目。
3. Vercel 会自动识别 Next.js，无需修改构建配置。
4. 点击部署即可。

构建命令：`next build`  
输出目录：`.next`（自动处理）

当前代码无需配置环境变量。

#### 方式二：自托管（Node.js）

任何支持 Node.js 的服务器均可部署：

```bash
npm install
npm run build
npm run start
```

生产环境建议使用进程管理器（如 PM2、systemd）和反向代理（如 Nginx、Caddy）。可通过 `PORT` 环境变量修改默认 3000 端口。

#### 方式三：Docker（需自行配置）

仓库未包含 Dockerfile。如需容器化部署，请参考 [Next.js Docker 部署指南](https://nextjs.org/docs/app/building-your-application/deploying#docker-image) 自行编写 Dockerfile。

### 联系方式

隐私相关问题请联系：**support@xside.ai**

---

## License

Private project — see repository settings for license details.
