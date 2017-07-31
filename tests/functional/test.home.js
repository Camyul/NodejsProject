const { expect } = require('chai');
const { setupDriver } = require('./setup/setup');
const webdriver = require('selenium-webdriver')

describe('Home routes', () => {
    let driver = null;
    beforeEach(() => {
        driver = setupDriver('chrome');
    });

    it('Check title', () => {
        return driver.get('http://localhost:3001/')
            .then(() => {
                return driver.getTitle();

            })
            .then((title) => {
                console.log(title);
                return expect(title).to.not.equal('Euro Travels');
            })
    });
    it('Expect nav bar to be loaded', () => {
        return driver.get('http://localhost:3001/')
            .then(() => {
                return driver.findElement(webdriver.By.css('a'));
            })
            .then((el) => {
                return el.getText();
            })
            .then((text) => {
                return Promise.resolve(expect(text).to.contain('Euro Travel'));
            })
    });
    it('Expect link that leads to offers.', () => {
        return driver.get('http://localhost:3001/')
            .then(() => {
                return driver.findElement(webdriver.By.className('custom-btn'));
            })
            .then((el) => {
                return el.getText();
            })
            .then((text) => {
                return Promise.resolve(expect(text).to.contain('TRAVEL NOW'));
            })
    });
    it('Expect footer to exist.', () => {
        return driver.get('http://localhost:3001/')
            .then(() => {
                return driver.findElement(webdriver.By.css('footer'));
            })
            .then((el) => {
                return expect(el).to.exist;
            })
    });
});