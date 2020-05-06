import InterceptorManager from './InterceptorManager';
import dispatchRequest from './dispatchRequest';

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
export default class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }

  /**
   * Dispatch a request
   *
   * @param {Object} options The options specific for this request (merged with this.defaults)
   */
  request(options) {
    if (Object.prototype.toString(options) !== '[object Object]') {
      return Promise.reject(new Error('请求参数错误'));
    }

    const config = {
      ...this.defaults,
      ...options,
    };

    // Hook up interceptors middleware
    const chain = [dispatchRequest, undefined];
    let promise = Promise.resolve(config);

    this.interceptors.request.forEach((interceptor) => {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    this.interceptors.response.forEach((interceptor) => {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }
}
