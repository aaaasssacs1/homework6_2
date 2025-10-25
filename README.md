## 抢红包示例项目（Vue 3 + Vite + TypeScript + Pinia + Vue Router）

本项目演示了一个前端实现的"抢红包"功能的项目结构，包含：

- 路由、状态管理（Pinia）
- 组件（红包列表/抢红包按钮/余额/倒计时/记录/导航）
- 模拟后端（本地存储 + 业务逻辑 + API 封装）
- 红包记录功能
- 红包皮肤系统

### 功能特色

#### 1. 红包记录功能
- **实时记录展示**：在页面右侧设置固定的"我的红包"记录列表
- **记录详情**：每条记录包含抢红包的时间戳和具体金额
- **数据持久化**：使用 localStorage 存储记录，刷新页面后依然保留
- **实时更新**：抢到红包后立即在列表中显示
- **用户筛选**：只显示当前用户抢到的红包记录
- **时间排序**：最新抢到的红包显示在列表顶部

#### 2. 红包皮肤系统
- **多样化外观**：提供三种不同风格的红包皮肤
  - 普通红包：经典红色渐变效果
  - 生日红包：温馨粉色主题
  - 节日红包：喜庆橙红色调
- **视觉差异**：每种皮肤都有独特的渐变背景色
- **自动适配**：根据红包类型自动切换对应皮肤
- **默认样式**：新创建的红包默认使用普通红包样式

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


