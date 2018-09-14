// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'Copyright Test': browser => {
        browser
            .url(process.env.VUE_DEV_SERVER_URL)
            .waitForElementVisible('#app > div.home', 5000)
            .assert.containsText('#app > div.home > footer', 'Copyright © ' + (new Date()).getFullYear() + ' TSS Cyber Pty Ltd')
    }
}
