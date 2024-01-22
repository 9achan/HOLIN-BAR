const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/users',
    createProxyMiddleware({
      target: 'http://localhost:5501',  // 將請求代理到的目標地址
      changeOrigin: true,  // 改變源，以便將主機標頭的主機部分更改為目標URL
    })
  );
};
