## 抢红包示例项目（Vue 3 + Vite + TypeScript + Pinia + Vue Router）

本项目演示了一个前端实现的“抢红包”功能的项目结构，包含：

- 路由、状态管理（Pinia）
- 组件（红包列表/抢红包按钮/余额/倒计时/记录/导航）
- 模拟后端（内存数据 + 业务逻辑 + API 封装）

### 快速开始

1. 安装依赖：
```bash
npm install
```
2. 启动开发：
```bash
npm run dev
```
3. 构建生产：
```bash
npm run build
```

> 注意：本示例的“后端”在 `src/mock/` 目录中以内存方式模拟，无需独立服务。

### 目录结构

```
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ src/
│  ├─ main.ts
│  ├─ App.vue
│  ├─ router/
│  │  └─ index.ts
│  ├─ stores/
│  │  ├─ redPacket.ts
│  │  └─ user.ts
│  ├─ components/
│  │  ├─ NavBar.vue
│  │  ├─ BalanceCard.vue
│  │  ├─ GrabButton.vue
│  │  ├─ Countdown.vue
│  │  ├─ RedPacketList.vue
│  │  ├─ RedPacketItem.vue
│  │  └─ RecordList.vue
│  ├─ views/
│  │  ├─ Home.vue
│  │  ├─ Packets.vue
│  │  ├─ Records.vue
│  │  └─ Admin.vue
│  ├─ utils/
│  │  └─ api.ts
│  ├─ mock/
│  │  ├─ data.ts
│  │  └─ server.ts
│  └─ types/
│     └─ index.ts
```

### 切换真实后端

替换 `src/utils/api.ts` 中的实现为真实的 HTTP 请求（如 axios/fetch）并移除 `src/mock/` 引用即可。


