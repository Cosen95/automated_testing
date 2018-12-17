const { expect } = require('chai');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const chromeDriver = require('selenium-webdriver/chrome');

describe('百度首页UI测试', function() {
    this.timeout(50000);

    let driver;

    before(() => {
        driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
        .build();
    });

    it('should have title "百度一下，你就知道"', done => {
        driver.get('https://www.baidu.com').then(() => {
            driver.getTitle().then(title => {
                expect(title).to.equal('百度一下，你就知道');
                done();
            });
        }).catch(e => {
            console.log(e);
        })
    });

    it('should have button value "百度一下', done => {
        driver.findElement(By.id('su')).then(button => {
            button.getAttribute('value').then(val => {
                expect(val).to.equal('百度一下');
                done()
            })
        }).catch(e => {
            console.log(e);
        })
    })

    after(() => {
        driver.quit();
    })
})