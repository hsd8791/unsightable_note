{ //loaders
  module: {
    //加载器配置
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.js$/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
}, { //webpack-dev-server config
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  postcss: [
    require('autoprefixer') //调用autoprefixer插件
  ],
}, { //single css file 单css文件
  module: {
    rules: [{
      test: /\.css$/,
      // use: [ 'style-loader', 'css-loader' ]
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
}

`<script type='text/javascript' src='<%= htmlWebpackPlugin.files.chunks.main.entry %>'></script>`
webpack--display--reasons