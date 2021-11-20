const { createProxyMiddleware } = require('http-proxy-middleware');
  
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api',
      {
        target: 'http://127.0.0.1:8081',
      //   target: 'http://api.nesto.cupof.beer:8080',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    )
  );
};