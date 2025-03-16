// egg.js包多了一层，将options和app参数传进来了
module.exports = (options, app) => {
  return async (ctx, next) => {
    console.log('中间件开始', options);
    await next();
    console.log('中间件结束', options);
  };
};
