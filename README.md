# xside-ai-web

[English](#english) | [中文](#中文)

---

## English

### Project Overview

**xside-ai-web** is the official website for [Xside](https://xside.ai) — an AI product that includes a website and browser extension. This repository hosts the marketing landing page and legal pages (such as the Privacy Policy) for the Xside product ecosystem.

The site is built with Next.js App Router and is fully static at build time. There are no API routes, database connections, or server-side data fetching in the current codebase.

### Features

| Route | Description |
|-------|-------------|
| `/` | Home page. Currently displays the default Next.js starter template (placeholder content to be replaced with the official Xside landing page). |
| `/privacy` | Privacy Policy page with full **English and Chinese** content, covering data handling for the Xside website and browser extension. Contact: `support@xside.ai`. |

Additional built-in behavior:

- **Dark mode** — Automatically follows the user's system preference via `prefers-color-scheme`.
- **Static pre-rendering** — All pages are statically generated at build time for fast loading and simple deployment.
- **Responsive layout** — Pages use Tailwind CSS utility classes for mobile and desktop layouts.

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js](https://nextjs.org) 16.2.9 (App Router, Turbopack) |
| UI Library | [React](https://react.dev) 19.2.4 |
| Language | [TypeScript](https://www.typescriptlang.org) 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 + PostCSS (`@tailwindcss/postcss`) |
| Linting | ESLint 9 + `eslint-config-next` |
| Fonts | System font stack (ui-sans-serif, system-ui, sans-serif) |

### Project Structure

```
xside-ai-web/
├── app/
│   ├── layout.tsx        # Root layout and site metadata
│   ├── page.tsx          # Home page (/)
│   ├── privacy/
│   │   └── page.tsx      # Privacy Policy (/privacy)
│   └── globals.css       # Global styles and Tailwind theme
├── public/               # Static assets (SVG icons)
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS / Tailwind plugin
├── tsconfig.json         # TypeScript configuration
└── eslint.config.mjs     # ESLint configuration
```

### Prerequisites

- **Node.js** 20 or later (tested with Node.js 22)
- **npm** (or yarn / pnpm / bun)

No environment variables are required for the current version.

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/idkwii5/xside-ai-web.git
   cd xside-ai-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000) for the home page, or [http://localhost:3000/privacy](http://localhost:3000/privacy) for the Privacy Policy.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint checks |

### Deployment

This project produces a standard Next.js static/server output. No custom Docker or CI configuration is included in the repository.

#### Option 1: Vercel (Recommended)

[Vercel](https://vercel.com) is the platform created by the Next.js team and requires minimal configuration:

1. Import the GitHub repository into Vercel.
2. Use the default settings (Framework Preset: **Next.js**).
3. Deploy — no environment variables are needed for the current version.

#### Option 2: Node.js Server

Build and run on any Node.js hosting environment:

```bash
npm run build
npm run start
```

The production server listens on port **3000** by default. Set the `PORT` environment variable to use a different port.

#### Option 3: Static Export

The current pages are fully static. If you need a pure static export in the future, configure `output: 'export'` in `next.config.ts` and run `npm run build`. This is not enabled by default.

### Contact

For privacy-related questions, email **support@xside.ai**.

---

## 中文

### 项目简介

**xside-ai-web** 是 [Xside](https://xside.ai) 的官方网站项目。Xside 是一款包含网站与浏览器插件的 AI 产品，本仓库负责承载官网落地页及相关法律文档（如隐私政策）。

项目基于 Next.js App Router 构建，所有页面在构建时静态预渲染。当前代码库中没有 API 路由、数据库连接或服务端数据请求。

### 主要功能

| 路由 | 说明 |
|------|------|
| `/` | 首页。当前仍为 Next.js 默认 starter 模板（占位内容，待替换为 Xside 正式落地页）。 |
| `/privacy` | 隐私政策页面，包含完整的**中英文**内容，说明 Xside 网站与浏览器插件的数据处理方式。联系方式：`support@xside.ai`。 |

其他内置特性：

- **深色模式** — 通过 `prefers-color-scheme` 自动跟随系统主题偏好。
- **静态预渲染** — 所有页面在构建时生成静态 HTML，加载快、部署简单。
- **响应式布局** — 使用 Tailwind CSS 工具类适配移动端与桌面端。

### 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | [Next.js](https://nextjs.org) 16.2.9（App Router，Turbopack） |
| UI 库 | [React](https://react.dev) 19.2.4 |
| 语言 | [TypeScript](https://www.typescriptlang.org) 5 |
| 样式 | [Tailwind CSS](https://tailwindcss.com) 4 + PostCSS（`@tailwindcss/postcss`） |
| 代码检查 | ESLint 9 + `eslint-config-next` |
| 字体 | 系统字体栈（ui-sans-serif、system-ui、sans-serif） |

### 项目结构

```
xside-ai-web/
├── app/
│   ├── layout.tsx        # 根布局与站点元数据
│   ├── page.tsx          # 首页 (/)
│   ├── privacy/
│   │   └── page.tsx      # 隐私政策 (/privacy)
│   └── globals.css       # 全局样式与 Tailwind 主题
├── public/               # 静态资源（SVG 图标）
├── next.config.ts        # Next.js 配置
├── postcss.config.mjs    # PostCSS / Tailwind 插件
├── tsconfig.json         # TypeScript 配置
└── eslint.config.mjs     # ESLint 配置
```

### 环境要求

- **Node.js** 20 及以上（已在 Node.js 22 上验证）
- **npm**（或 yarn / pnpm / bun）

当前版本无需配置任何环境变量。

### 本地开发

1. **克隆仓库**

   ```bash
   git clone https://github.com/idkwii5/xside-ai-web.git
   cd xside-ai-web
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

3. **启动开发服务器**

   ```bash
   npm run dev
   ```

4. **在浏览器中访问**

   打开 [http://localhost:3000](http://localhost:3000) 查看首页，或访问 [http://localhost:3000/privacy](http://localhost:3000/privacy) 查看隐私政策。

### 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器，支持热更新 |
| `npm run build` | 构建优化后的生产版本 |
| `npm run start` | 启动生产服务器（需先执行 `build`） |
| `npm run lint` | 运行 ESLint 代码检查 |

### 部署说明

本项目为标准 Next.js 应用，仓库中未包含 Docker 或 CI 配置文件。

#### 方式一：Vercel（推荐）

[Vercel](https://vercel.com) 由 Next.js 团队创建，配置最简单：

1. 将 GitHub 仓库导入 Vercel。
2. 使用默认设置（Framework Preset：**Next.js**）。
3. 直接部署 — 当前版本无需环境变量。

#### 方式二：Node.js 服务器

在任何支持 Node.js 的环境中构建并运行：

```bash
npm run build
npm run start
```

生产服务器默认监听 **3000** 端口，可通过 `PORT` 环境变量修改。

#### 方式三：静态导出

当前所有页面均为静态内容。如需纯静态导出，可在 `next.config.ts` 中配置 `output: 'export'` 后执行 `npm run build`。此选项默认未启用。

### 联系方式

隐私相关问题请联系：**support@xside.ai**
