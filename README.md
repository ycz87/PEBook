# 电力电子教材

本仓库现已初始化为一个 [Docusaurus](https://docusaurus.io/) 教材站点骨架，用于承载电力电子课程的章节文档、插图与教学资源。

## 环境要求

- Node.js 20+

## 安装依赖

```bash
npm install
```

## 本地开发

```bash
npm run start
```

## 生产构建

```bash
npm run build
```

## 目录约定

- `docs/`：教材正文与章节索引
- `static/`：图片、图标与其他静态资源
- `src/pages/`：首页等独立页面
- `src/components/`：可复用页面组件

## 部署提示

如果后续使用 GitHub Pages，可基于 `docusaurus.config.ts` 里的 `organizationName`、`projectName` 和 `baseUrl` 继续接通部署。
