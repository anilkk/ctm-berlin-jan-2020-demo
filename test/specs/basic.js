const assert = require('assert')
import WdioPage from '../pageObject/wdio.page';

describe('webdriver.io Help page', () => {
    it('should have the right title', async () => {
        await WdioPage.open(WdioPage.gettingStartedPagePath);
        await WdioPage.navigateToHelp();
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})