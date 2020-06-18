/**
 * @jest-environment jest-environment-webdriver
 */

const url = "http://localhost:4000";

describe('our index has a title', () => {
    test('it renders', async () => {
        await browser.get(url)
        const title = await browser.findElement(by.tagName('h1')).getText()
        expect(title).toContain('MakersBnB')
    });

    test('it has to contain Josh', async () => {
        await browser.get(url)
        const text = await browser.findElement(by.className('attempt')).getText()
        expect(text).toContain('Josh')
    });
});


// describe('webdriver.io page', () => {
//     it('should have the right title', () => {
//         browser.get('http://localhost:3000/')
//         const title = await browser.findElement(by.tagName('h1')).getText()
//         expect(title).toContain('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
//     });
// });
