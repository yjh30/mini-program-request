# mini-program-request

> 小程序原生网络请求api没有类似axios请求类库的一些功能，如：请求，响应拦截器功能，以及没有请求，响应数据转换功能；mini-program-request是一个类似axios的请求模块，默认支持微信，支付宝小程序，如果你还需要支持其他小程序，你需要更新请求适配器adapter

## axios 与 mini-program-request

| 功能点 | axios | mini-program-request
| --- | --- | --- |
适配器 | 默认支持浏览器与node端 | 默认支持微信，支付宝小程序端
请求/响应拦截器 | 支持 | 支持
transformRequest | 支持 | 支持
处理headers['content-type'] | 根据请求数据data | 小程序原生处理
transformResponse | 支持（可模拟响应数据结构，测试非常有用） | 支持（可模拟响应数据结构，测试非常有用）
get,post,put...快捷方法 | 支持 | 不支持，与小程序用法保持一致

备注：小程序请求api设置请求超时无效

## 安装

```bash
npm i axios -S
```

```bash
yarn add axios
```

## 使用

```js
import axios from 'mini-program-request'

/**
 * 小程序请求默认配置
 * api文档：https://opendocs.alipay.com/mini/api/owycmh
 */
const request = axios.create({
  timeout: 30000, // ms
  dataType: 'json',
  method: 'GET',
  headers: {
    'content-type': 'application/json'
  },
});

// 设置请求拦截器，响应拦截器
request.interceptors.request.use(
  setRequestConfig,
  error => Promise.reject(error)
);

request.interceptors.response.use(
  handlerResponse,
  error => Promise.reject(error)
);

request.interceptors.response.use(
  data => data,
  error => Promise.reject(error)
);

// 同微信/支付宝小程序请求参数
request({
  url: '/api/xxx',
  method: 'POST',
  data: {},
  headers: {},
  dataType: 'json',
})
  .then(res => {
    // TODO res
  })
  .catch(err => {
    // TODO err
  })
```
