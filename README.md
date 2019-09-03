# React

## create-react-app
项目是用create-react-app这个脚手架自动生成的

```bash
# 安装命令行程序
$ npm i -g create-react-app

# 创建项目
$ create-react-app react-impl
```

[create-react-app GitHub地址](https://github.com/facebook/create-react-app).

## 启动命令


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 构建流程

`npm start`的时候会从src/index.js为入口开始构建。
