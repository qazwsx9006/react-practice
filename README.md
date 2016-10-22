# react-practice
Start Learn React

## 初探，環境設置紀錄
+ 使用 MAC 開發
+ OS 10.11
+ 參考 [reactjs101](https://github.com/kdchang/reactjs101) 學習

### 透過 Homebrew 安裝 nvm (Node Version Manager)
1. $ brew install nvm
### 測試 nvm
2. $ nvm --version
3. $ nano .bash_profile
#### 在.bash_profile （或 .bashrc） 內輸入
> export NVM_DIR=~/.nvm
> source $(brew --prefix nvm)/nvm.sh
### 重新載入 .bash_profile （或 .bashrc）
4. $ source .bash_profile
### 透過 nvm 安裝 node 4.6.0 （練習當下 LTS 最新為 4.6.0）
5. $ nvm install 4.6.0
### 測試 node & npm
6. $ node -v
7. $ npm -v

node相關安裝設定參考 [http://mac-osx-for-newbie-book.kejyun.com/software/softwareWebDeveloperNodeJS.html](http://mac-osx-for-newbie-book.kejyun.com/software/softwareWebDeveloperNodeJS.html)


### 開始React專案
1. $ mkdir first-react
2. $ cd first-react
` 按指示初始化 NPM 設定檔 package.json  `
3. $ npm init
` --save-dev 是可以讓你將安裝套件的名稱和版本資訊存放到 package.json，方便日後使用 `
4. $ npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin webpack webpack-dev-server
` 在根目錄設定 webpack.config.js `
5. $ nano webpack.config.js

  ```javascript
	// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname  
	const HtmlWebpackPlugin = require('html-webpack-plugin');

	const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	  template: `${__dirname}/app/index.html`,
	  filename: 'index.html',
	  inject: 'body',
	});
	
	module.exports = {
	  // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
	  entry: [
	    './app/index.js',
	  ],
	  // output 是放入產生出來的結果的相關參數
	  output: {
	    path: `${__dirname}/dist`,
	    filename: 'index_bundle.js',
	  },
	  module: 
	  	// loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
	    loaders: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['es2015', 'react'],
	        },
	      },
	    ],
	  },
	  // devServer 則是 webpack-dev-server 設定
	  devServer: {
	    inline: true,
	    port: 8008,
	  },
	  // plugins 放置所使用的外掛
	  plugins: [HTMLWebpackPluginConfig],
	};
	```
` 在根目錄設定 .babelrc `
6. $ nano .babelrc

	```javascript 
	{
	  "presets": [
	    "es2015",
	    "react",
	  ],
	  "plugins": []
	}
	```
`安裝 react 和 react-dom`
7. $ npm install --save react react-dom
`建立 app folder`
8. $ mkdir app
`建立 index.html & index.js`
  ```html 
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>React Setup</title>
		<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	</head>
	<body>
		<!-- 欲插入 React Component 的位置 -->
		<div id="app"></div>
	</body>
	</html>
	```

	`index.js`

	```js 
	import React from 'react';
	import ReactDOM from 'react-dom';

	class App extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	    };
	  }
	  render() {
	    return (
	      <div>
	        <h1>Hello, World!</h1>
	      </div>
	    );
	  }
	}

	ReactDOM.render(<App />, document.getElementById('app'));
	```
9. 可執行 webpack 指令展示成果
若無法執行 webpack 可執行 `$ npm install webpack -g ` 即可在終端機以指令執行。


> 以上為第一次操作練習，部分指令內容來源為 [reactjs101-CH02](https://github.com/kdchang/reactjs101/blob/master/Ch02/webpack-dev-enviroment.md)
