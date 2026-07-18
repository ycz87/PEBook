# PEBook（电力电子教材）

PEBook 是“电力电子教材”项目的简称与仓库名。教材内容目前仍在建设中；本仓库现阶段提供经过技术验证的 Docusaurus 站点骨架、欢迎导览与参与编写入口，不代表正式课程内容已经发布。

## 内容状态

- 尚未发布正式课程目录、章节正文、完整例题或练习。
- 真正章节的教学结构与内容体例留待首章任务确定。
- 当前未接入 KaTeX 数学渲染链，不宣称现已支持公式渲染。

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

截至技术复审提交 `9e562b3`，Node.js `v20.20.2`、npm `10.8.2` 全新环境中的安装、类型检查和生产构建均已通过；明暗主题关键文字对比度与 `/PEBook/` 构建路径也已通过复核。文案变更实际合入后仍需重新执行上述验证。

## 目录约定

- `docs/`：后续实际发布的教材目录与章节文档。
- `static/`：图片、图标与其他静态资源
- `src/pages/`：首页等独立页面
- `src/components/`：可复用页面组件

## GitHub Pages 发布边界

当前配置面向 GitHub Pages 项目站点 `https://ycz87.github.io/PEBook/`，因此 `docusaurus.config.ts` 使用 `baseUrl: '/PEBook/'`。构建产物路径与受控静态服务测试已经通过，但真实 GitHub Pages 工作流和线上 URL 尚未验证；接入部署后仍需检查线上资源、内部链接与 404 路径。

如果后续改为用户主页仓库或自定义域名，需要同步调整 `url` 与 `baseUrl`。

## 已知依赖风险

- `npm ci` 仍会提示传递依赖 `uuid@8.3.2` 已弃用。
- `npm audit --omit=dev` 当前报告 20 项 moderate 和 1 项 high。high 为构建链中的间接依赖 `serialize-javascript@6.0.2`，未进入静态产物；在仅使用受信任仓库内容构建的当前条件下，不阻塞 GitHub Pages 静态发布。
- 若允许不可信代码或插件进入构建环境，或 CI 策略要求 high 清零，该风险应改判为发布阻塞项。
- 不应直接执行 `npm audit fix --force`；应在独立依赖安全变更中跟踪 Docusaurus 上游，或评估 `serialize-javascript@7.0.7` override 并完整回归。
