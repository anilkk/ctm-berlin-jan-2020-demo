const {
    pagePaths
} = require('../../data/pagePath.json');
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
    const pagePath = pagePaths.find((path) => path.pathName === page);
    const url = (type === 'url') ? page : browser.options.baseUrl + pagePath.pathValue;
    browser.url(url);
    browser.pause(5000); // wait for pageRender
};