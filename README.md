# 电力电子教材

本仓库现已初始化为一个 [Docusaurus](https://docusaurus.io/) 教材站点骨架，用于承载电力电子课程的章节文档、插图与教学资源。

## 环境要求

- Node.js 20+

## 安装依赖

```bash
npm ci
```

## 本地开发

```bash
npm run start
```

## 校验与构建

```bash
npm run typecheck
npm run build
```

## 目录约定

- `docs/`：教材正文与章节索引
- `static/`：图片、图标与其他静态资源
- `src/pages/`：首页等独立页面
- `src/components/`：可复用页面组件

## 部署提示

当前配置面向 GitHub Pages 项目站点 `https://ycz87.github.io/PEBook/`，因此 `docusaurus.config.ts` 使用 `baseUrl: '/PEBook/'`。如果后续改为用户主页仓库或自定义域名，需要同步调整 `url` 与 `baseUrl`。
