const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'https://localhost:4000',
			changeOrigin: true,
		})
	);
};