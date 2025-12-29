# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# public 目录

在 Create React App（简称 CRA）项目结构中，public 目录是一个非常重要的文件夹。它存放静态资源和不会被 Webpack 处理的文件，这些文件在构建（build）时会直接复制到输出目录（通常是 build 文件夹）的根路径下。
1. public 目录的主要作用

存放静态文件：这些文件不会经过 Webpack 的模块打包处理，而是原样复制到构建输出目录。
作为网站的根路径：构建后，public 里的文件直接位于网站根目录（例如 /favicon.ico 而不是 /static/...）。
支持环境变量替换：文件中的 %VARIABLE% 占位符会在构建时被替换为对应的过程环境变量值。
2. public 目录中默认包含的文件及作用

![public目录文件含义](./public/image1.png)


# src 目录

![src目录文件含义](./public/image2.png)
![src目录文件含义](./public/image3.png)

src/
├── index.js              → 启动应用，渲染 App
├── App.js                → 根组件，包含路由和布局
├── index.css             → 全局样式
├── App.css               → App 组件局部样式
├── logo.svg              → 示例图片
├── reportWebVitals.js    → 性能监控
├── setupTests.js         → 测试配置
└── App.test.js           → App 组件测试

重要提醒

src 里的文件都会被 Webpack 打包、压缩、tree-shaking，最终输出到 build/static/js/ 和 build/static/css/。
与 public 目录区别：src 中的资源需要 import 引入才能使用，且路径会被处理成 hash 版本（利于缓存）；public 中的资源直接复制，原样访问（根路径）。
你可以自由删除或修改这些默认文件（除了 index.js 和 App.js 建议保留结构），实际项目中通常会进行大量拆分。

如果你正在使用 TypeScript 模板（npx create-react-app my-app --template typescript），对应文件会是 .tsx 和 .ts 结尾，作用完全相同。


文件加载流程：
    首先加载index.js文件，该文件是项目的入口文件，它负责渲染App组件。
    然后加载App.js文件，该文件是根组件，它包含了路由和布局。
    最后加载index.css文件，该文件是全局样式文件，它会被应用到整个应用中。
    App.css文件是App组件的局部样式文件，它只会在App组件中生效。

# 样式模块化
解决样式名冲突问题

只需在样式文件名中添加 .module 后缀即可，例如：index.module.css
然后在组件中引入样式时，使用 import 语句，并指定样式文件名，例如：import styles from './index.module.css'
在组件的 JSX 代码中，使用 styles 对象来引用样式类名，例如：<div className={styles.container}></div>

