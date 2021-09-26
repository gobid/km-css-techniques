const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/*', { target: 'https://km-localserver-new.run-us-west2.goorm.io' }))
}