### 关于 webpack 的一些配置 (都差不多)

需要全局安装 `cross-env`



  {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },