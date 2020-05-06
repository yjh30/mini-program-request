let nativeRequest;
const noop = () => {};

export default function getNativeRequestApi() {
  if (typeof nativeRequest === 'function') {
    return nativeRequest;
  }

  if (typeof my !== 'undefined' && typeof my.request === 'function') {
    nativeRequest = my.request;
    return nativeRequest;
  }

  if (typeof wx !== 'undefined' && typeof wx.request === 'function') {
    nativeRequest = wx.request;
    return nativeRequest;
  }

  return noop;
}
