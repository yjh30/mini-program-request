# tsigndata-sdk-js sdk版本说明

- v1.0.0
> 初步集成神策sa-sdk-javascript模块

- v1.0.1
> 根据服务端私有部署做相应逻辑更新，可用于生产环境

- v1.0.2 
> 服务端数据接收地址变更，原有的服务端数据接收地址未对外部环境做开放

- v1.0.3
> bugfix：通过修改神策sdk源码修复官网首页广告参数投放bug逻辑

- v1.0.4
> 优化：通过跟神策web开发沟通，使用神策sdk内部方法register（该方法神策文档没有说明）注册预置属性，优化官网首页广告参数投放需求逻辑

- v1.0.5
> bugfix：ie浏览器直接报错，[can i use](https://www.caniuse.com/#search=getOwnPropertyDescriptors)查看ie不支持Object.getOwnPropertyDescriptors，该bug是由于@babel/core 7.4.5版本在编译es6对象展开运算符语法未对Object.getOwnPropertyDescriptors做兼容处理导致的，详见[bebel issues](https://github.com/babel/babel/issues/10183)，后续更新@babel/core7.5.5版本解决

- v1.0.6
> 增加了preparation模拟及其他自定义项目环境配置；文档进行重构，使用者一目了然

- v1.0.7
> 设置神策默认配置项`max_referrer_string_length: 200` 为500，解决存储在cookie字段_latest_tsign_source_detail长度大于200的问题，即页面url参数tsign_source_detail长度大于200；场景：部分页面url参数tsign_source_detail可能带了服务端256长度编码的签署链接，如果大于200将会截取，因此max_referrer_string_length需设置500（神策内部默认设置最大只能设置500）
```
