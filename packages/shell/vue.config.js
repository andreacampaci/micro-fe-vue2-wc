module.exports = {
    devServer: {
        proxy: {
            '^/apps': {
                target: 'http://127.0.0.1:8888/',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
