import getNativeRequestApi from './helpers/getNativeRequestApi';

export function getAdapter() {
  return config => new Promise((resolve, reject) => {
    getNativeRequestApi()({
      ...config,
      success(res) {
        resolve(res);
      },
      fail(err) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          config,
          ...(typeof err === 'object' ? err : {}),
        });
      },
    });
  });
}

export default {
  adapter: getAdapter(),

  transformRequest: [
    // 参考：https://opendocs.alipay.com/mini/api/owycmh，这里不需要做转换，小程序api内部会做自动转换
    data => data,
  ],

  transformResponse: [(data) => {
    let transformedData = data;
    if (typeof data === 'string') {
      try {
        transformedData = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return transformedData;
  }],

  /**
   * 小程序默认值为30000
   */
  timeout: 30000,
};
