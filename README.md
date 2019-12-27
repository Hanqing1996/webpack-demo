#### yarn　与　npm
```
yarn add xxx
```
等效于
```
npm install xxx
```

#### webpack
Guides->get started

concept->Simple Configuration

#### Vuepress
Guides-get started/config file


#### 
有Options一般就会有example,直接看example

#### 在package.json的script中不用写webpack
```
  "scripts": {
    "build":"rm -rf dist;webpack",
  },
```


#### webpack insert html,js,css
```
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'hello world',
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
```
* css-loader
把css结尾的文件读入js
* style-loader
封装成style

#### [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
自动执行(会自动更新页面)
```
rm -rf dist;webpack; // 编译src/index.html
~$ http-server . -c-1 // 打开浏览器
```
走内存,不走硬盘(dist目录)


#### 两种使用css的方法
* 使用js生成style(main.css->index.js->index.html)
    * 需要用到style-loader,css-loader 
* 把css抽成(extract)文件 
    1. In production, on the other hand, it's not a good idea to apply your stylesheets depending on JS execution       
    2. Thus it's still better to have them as separate files in your final production build.
    *  extract-loader: you are able to reference your main.css as regular entry.
    








