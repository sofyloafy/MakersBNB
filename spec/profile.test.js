/**
 * @jest-environment jest-environment-webdriver
 */

const url = "http://localhost:4000/sign-in";

describe('sign up page re-directs us to the correct profile', () => {
    test('it re-directs and displays the user email', async () => {
        await browser.get(url)
        await browser.findElement(by.name("email")).sendKeys("josh@aol.com");
        await browser.findElement(by.name("password")).sendKeys("pa$$word");
        await browser.findElement(by.name("submit")).click();
        const profileUrl = await browser.getCurrentUrl();
        const text = await browser.findElement(by.className("user")).getText();

        expect(profileUrl).toContain('profile')
        expect(text).toContain("josh@aol.com")
    });
});
