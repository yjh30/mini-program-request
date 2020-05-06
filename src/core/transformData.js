/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
export default (data, headers, fns) => {
  let transformedData = data;

  fns.forEach((fn) => {
    transformedData = fn(transformedData, headers);
  });

  return transformedData;
};
