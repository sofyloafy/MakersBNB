module.exports = {
    'MakersBnB': function (browser) {
        browser
            .url('http://localhost:4000/')
            .waitForElementVisible('body')
            .assert.containsText('body > h1:first-of-type', 'Welcome to MakersBnB website')
            .end();
    }
};