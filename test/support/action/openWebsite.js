const pagePath = require('../../data/pagePath.json');
/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (type, page) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    const url = (type === 'url') ? page : browser.options.baseUrl + pagePath[page];
    browser.url(url);
    browser.pause(5000); // wait for pageRender
};