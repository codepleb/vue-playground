// Proxy for webpack dev server to server.js rest client
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        tarhet: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};