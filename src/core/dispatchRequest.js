import transformData from './transformData';
import defaults from '../defaults';

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} options The options that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
export default function dispatchRequest(options) {
  const config = {
    ...options,

    // Ensure headers exist
    headers: options.headers || {},
  };

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest,
  );

  const adapter = config.adapter || defaults.adapter;
  const promise = adapter({ ...config });

  return promise.then((response) => {
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse,
    );

    // 返回response，增加config，与axios包(npm)保持一致，响应拦截器有可能需要用到请求配置config对象
    return {
      ...response,
      config,
    };
  });
}
