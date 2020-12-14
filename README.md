```
vue-template
├── README.md
├── build
│   ├── base.plugin.js                    // 基础插件
│   └── loaders.js                        // 公共 loader
│   ├── webpack.config.base.js            // webpack 基础配置
│   └── webpack.config.dev.js             // webpack 开发环境配置
│   ├── webpack.config.prod.js            // webpack 生产环境配置
│   └── webpack.config.dll.js             // webpack DllPlugin 配置
├── config                                
│   ├── dev.env.js                        // 开发环境 process.env 变量配置
│   ├── prod.env.js                       // 生产环境 process.env 变量配置
├── dist                                  // 打包后目录
├── package-lock.json
├── package.json
├── public
│   └── index.html                        // 模板 index.html
├── src
│   ├── App.vue
│   ├── assets                            // 资源文件
│   ├── components                        // 公共组件
│   ├── index.js                          // 入口文件
│   └── utils                             // 公共方法
```
