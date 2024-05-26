# 🎉🎉 Vue3 + Vite3 + Element-Plus 管理系统 🎉🎉

### 介绍 📖

- 基于 Vue3、TypeScript、Vite、Element-Plus 企业中台管理模板，项目均使用JS开发，但已经配置TS，可以JS、TS混用


### 一、仓库地址 (欢迎 Star⭐)

- GitHub：

### 二、🔨🔨🔨 项目功能

- 🚀 使用 Vue3 开发
- 🚀 采用 Vite 作为项目开发、打包工具（配置了 Gzip 打包，TSX 语法，跨域代理，JS、TS混用，打包预览工具，打包优化）
- 🚀 使用 Pinia🍍 状态管理工具
- 🚀 使用 vue-router 进行路由权限拦截、路由懒加载、动态路由
- 🚀 支持自定义权限控制菜单，权限按钮
- 🚀 使用 keep-alive 对个页面进行缓存（缓存路由里可配置、页面切换带动画）
- 🚀 常用自定义指令开发（复制、水印、拖拽、节流、防抖）
- 🚀 常用组件开发 有自行封装（全局消息、数字滚动..），第三方的库（富文本、引导页、拖拽..）
- 🚀 常用办公工具（打印、Excel导出导入、关系图）
- 🚀 多层菜单嵌套
- 🚀 echarts大屏适配模板
- 🚀 支持4种Layout布局，自定义主题颜色，黑夜模式，可配置面包屑、标签栏、页脚，锁屏，路由搜索
- 🚀 支持 i18n 国际化（目前仅在i18n多语言页面配置，需要增加可自行配置）


### 三、🌐🌐🌐 浏览地址

### 四、安装使用步骤 📔

- **安装依赖：**

```text
# 建议使用nodejs 16+
pnpm install
```

- **运行：**

```text
npm run serve
```

- **打包：**

```text

# 测试环境
npm run build:test

# 生产环境
npm run build:prod
```

- **检测：**

```text
# eslint 检测代码
npm run lint:eslint

# prettier 格式化代码
npm run lint:prettier

# stylelint 格式化样式
lint:stylelint
```

### 五、项目截图 📷

### 六、文件资源目录 📚

```text
vue3-tempate-admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ hooks               # 常用 Hooks
│  ├─ languages           # 语言国际化
│  ├─ layouts             # 框架布局
│  ├─ mock                # mock数据
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia 状态管理工具
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  └─ main.js             # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ lint-staged.config     # lint-staged 配置文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```
### 注意
- 1.项目使用的是最新的vite搭建的，所以需要nodejs版本>=16.0.0；
- 2.项目使用的是pnpm管理依赖，所以需要安装pnpm；
- 3.项目使用的是vue3，所以需要安装vue3的cli；
- 4.项目使用的是pinia，所以需要安装pinia；
- 5.项目依赖的包比较多，注意你的版本和我的项目的版本是否一致

### 最后

- 如果你觉得这个项目对你有帮助，欢迎star、fork、pr、issue，你的支持是我最大的动力。
- 如果你想联系我，可以通过以下方式：
