// wdio.page.js
import Page from './page'

class WdioPage extends Page {
    // Locators 
    get search() { return $('#search_input_react') }
    get helpLink() { return $('header > div > nav > ul > li:nth-child(3) > a') }

    // page path
    get gettingStartedPagePath(){return 'docs/gettingstarted.html'}

    // Actions
    async open(pagePath) {
        super.open(pagePath)
    }

    async navigateToHelp() {
        const helpLink = await this.helpLink;
        // actions
        await helpLink.click();
    }

}

export default new WdioPage()