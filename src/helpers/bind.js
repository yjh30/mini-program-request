export default function bind(fn, thisArg) {
  return function wrap(...args) {
    let i = -1;

    const copyArgs = Array.from({ length: args.length }, () => {
      i += 1;
      return args[i];
    });

    return fn.apply(thisArg, copyArgs);
  };
}
