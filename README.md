## @Template/ts
> TS版本的SDK模板工程，开箱即用

1. 集成JEST单元测试
2. 集成覆盖测试
```
npm run test:cov
```
生成的分析文档在`coverage`文件夹下

3. 集成babel
4. 集成ESLINT代码校验
5. 打包
```npm
npm run build:prod // 生产环境有压缩
npm run build:test // 开发环境没有压缩
```
5.1 打包后会生成ESM、umd两种形式的文件，如果需要支持IIEF等可自行配置
5.2 打包后还会生成对应的声明文件用于代码智能提示


如有改善支持欢迎提交PR~
