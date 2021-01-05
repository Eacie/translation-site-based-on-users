# translate-site

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project layout

```text
.
├── README.md                   // 简介
├── babel.config.js             // babel配置文件
├── debug.log                   // debug日志文件
├── node_modules                // 依赖包保存位置
│   └── ...                     // 依赖包
├── package-lock.json           // 依赖包版本限制文件
├── package.json                // 项目配置文件
├── public
│   ├── favicon.ico             // 网站图标
│   └── index.html              // 入口html
├── src                         // 源代码
│   ├── App.vue                 // 根组件
│   ├── assets                  // 组件共享资源
│   │   └── logo.png
│   ├── components              // 公共组件
│   │   └── HeadTop.vue         // 头部导航栏
│   ├── main.js                 // 程序启动代码
│   ├── pages
│   │   ├── About.vue           // 关于页面
│   │   ├── Home.vue            // 首页页面
│   │   └── Login.vue           // 登录/注册页面
│   └── routes.js               // 页面路由
└── .gitignore                  // git忽略配置文件
```
