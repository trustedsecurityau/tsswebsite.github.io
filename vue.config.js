var path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
    lintOnSave: true,
    devServer: {
        host: '0.0.0.0',
        port: 80,
        disableHostCheck: true // That solved it
    },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                // Index.html is in the root directory.
                staticDir: path.join(__dirname, 'dist'),

                // outputDir: path.join(__dirname, 'prerendered'),

                routes: [ '/', '/about', '/labs', '/services', '/services/security-assurance', '/services/security-testing', '/services/managed-security', '/careers', '/contact', '/privacy' ],

                // Optional minification.
                minify: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    decodeEntities: true,
                    keepClosingSlash: true,
                    sortAttributes: true
                },

                // Server configuration options.
                server: {
                    // Normally a free port is autodetected, but feel free to set this if needed.
                    port: 8065
                },

                renderer: new Renderer({
                    renderAfterDocumentEvent: 'render-event',
                    headless: true,
                    inject: {
                        noJS: true
                    },
                    renderAfterTime: 5000 // Wait 5 seconds.
                })
            })
        ]
    }
}
