module.exports = {
    lintOnSave: true,
    devServer: {
        host: '0.0.0.0',
        port: 80,
        disableHostCheck: true // That solved it
    }
}
