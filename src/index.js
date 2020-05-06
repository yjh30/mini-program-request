import defaults from './defaults';
import Axios from './core/Axios';
import bind from './helpers/bind';
import { extend } from './utils';

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);

  // instance是包装Axios.prototype.request函数的一个wrap函数，需要
  // 继承Axios.prototype原型对象的成员（如可以访问get, post...等方法）
  // 继承context实例对象的成员（如可以访问interceptors）

  // Copy axios.prototype to instance
  extend(instance, Axios.prototype, context);

  // Copy context to instance
  extend(instance, context);

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = (instanceConfig = {}) => createInstance({
  ...axios.defaults,
  ...instanceConfig,
});

export default axios;
