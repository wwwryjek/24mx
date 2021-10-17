// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('all at onec', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('all at onec', async function() {
    // Test name: all at onec
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://www.24mx.ie/")
    // 2 | setWindowSize | 1440x822 | 
    await driver.manage().window().setRect({ width: 1440, height: 822 })
    // 3 | click | css=.NostoOverlayClose | 
    await driver.findElement(By.css(".NostoOverlayClose")).click()
    // 4 | click | id=nostoOverlaySend | 
    await driver.findElement(By.id("nostoOverlaySend")).click()
    // 5 | click | id=nostoCoupon | 
    await driver.findElement(By.id("nostoCoupon")).click()
    // 6 | click | id=nostoCoupon | 
    await driver.findElement(By.id("nostoCoupon")).click()
    // 7 | doubleClick | id=nostoCoupon | 
    {
      const element = await driver.findElement(By.id("nostoCoupon"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 8 | click | id=nostoCouponCopyBtn | 
    await driver.findElement(By.id("nostoCouponCopyBtn")).click()
    // 9 | click | id=nostoContinueBtn | 
    await driver.findElement(By.id("nostoContinueBtn")).click()
    // 10 | click | css=.m-button | 
    await driver.findElement(By.css(".m-button")).click()
    // 11 | click | id=search-desktop | 
    await driver.findElement(By.id("search-desktop")).click()
    // 12 | type | id=search-desktop | helmet
    await driver.findElement(By.id("search-desktop")).sendKeys("helmet")
    // 13 | sendKeys | id=search-desktop | ${KEY_ENTER}
    await driver.findElement(By.id("search-desktop")).sendKeys(Key.ENTER)
    // 14 | mouseOver | css=.m-navigation-item:nth-child(3) a | 
    {
      const element = await driver.findElement(By.css(".m-navigation-item:nth-child(3) a"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 15 | runScript | window.scrollTo(0,230) | 
    await driver.executeScript("window.scrollTo(0,230)")
    // 16 | click | css=.col-6:nth-child(1) .m-product-card-img__fade-in | 
    await driver.findElement(By.css(".col-6:nth-child(1) .m-product-card-img__fade-in")).click()
    // 17 | runScript | window.scrollTo(0,0) | 
    await driver.executeScript("window.scrollTo(0,0)")
    // 18 | click | css=.a-select__display-placeholder | 
    await driver.findElement(By.css(".a-select__display-placeholder")).click()
    // 19 | click | css=.a-select-item:nth-child(1) .a-product-variation__title | 
    await driver.findElement(By.css(".a-select-item:nth-child(1) .a-product-variation__title")).click()
    // 20 | click | css=.m-button--purchase > .m-button__default | 
    await driver.findElement(By.css(".m-button--purchase > .m-button__default")).click()
    // 21 | click | linkText=Proceed to checkout | 
    await driver.findElement(By.linkText("Proceed to checkout")).click()
    // 22 | runScript | window.scrollTo(0,59) | 
    await driver.executeScript("window.scrollTo(0,59)")
    // 23 | runScript | window.scrollTo(0,1611) | 
    await driver.executeScript("window.scrollTo(0,1611)")
    // 24 | click | css=.m-checkout-list__item:nth-child(1) .m-button__default | 
    await driver.findElement(By.css(".m-checkout-list__item:nth-child(1) .m-button__default")).click()
    // 25 | click | css=.m-checkout-list__item:nth-child(2) .m-checkout-list__item-content-text > .m-checkout-list__item-actions span | 
    await driver.findElement(By.css(".m-checkout-list__item:nth-child(2) .m-checkout-list__item-content-text > .m-checkout-list__item-actions span")).click()
    // 26 | mouseOver | css=.m-checkout-list__item:nth-child(2) .m-checkout-list__item-content-text > .m-checkout-list__item-actions span | 
    {
      const element = await driver.findElement(By.css(".m-checkout-list__item:nth-child(2) .m-checkout-list__item-content-text > .m-checkout-list__item-actions span"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 27 | click | css=.m-button--remove > .m-button__default | 
    await driver.findElement(By.css(".m-button--remove > .m-button__default")).click()
    // 28 | mouseOver | css=.m-button--remove > .m-button__default | 
    {
      const element = await driver.findElement(By.css(".m-button--remove > .m-button__default"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 29 | mouseOut | css=.m-button--remove > .m-button__default | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 30 | click | css=.action--voucher | 
    await driver.findElement(By.css(".action--voucher")).click()
    // 31 | click | css=.qa-voucher-code > .ng-tns-c150-28 | 
    await driver.findElement(By.css(".qa-voucher-code > .ng-tns-c150-28")).click()
    // 32 | type | css=.qa-voucher-code > .ng-tns-c150-28 | OCT21
    await driver.findElement(By.css(".qa-voucher-code > .ng-tns-c150-28")).sendKeys("OCT21")
    // 33 | click | css=.qa-use-voucher-btn > .m-button__default | 
    await driver.findElement(By.css(".qa-use-voucher-btn > .m-button__default")).click()
    // 34 | click | css=.NostoRibbonPopUpText | 
    await driver.findElement(By.css(".NostoRibbonPopUpText")).click()
    // 35 | click | css=.NostoOverlayClose | 
    await driver.findElement(By.css(".NostoOverlayClose")).click()
    // 36 | click | css=.ng-tns-c65-35:nth-child(1) > .a-textlink | 
    await driver.findElement(By.css(".ng-tns-c65-35:nth-child(1) > .a-textlink")).click()
    // 37 | click | css=.m-button__icon > .svg-inline--fa | 
    await driver.findElement(By.css(".m-button__icon > .svg-inline--fa")).click()
    // 38 | click | css=.ng-tns-c65-35:nth-child(2) > .a-textlink | 
    await driver.findElement(By.css(".ng-tns-c65-35:nth-child(2) > .a-textlink")).click()
    // 39 | click | css=.ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2) | 
    await driver.findElement(By.css(".ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2)")).click()
    // 40 | click | css=.ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2) | 
    await driver.findElement(By.css(".ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2)")).click()
    // 41 | doubleClick | css=.ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2) | 
    {
      const element = await driver.findElement(By.css(".ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2)"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 42 | click | css=.ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2) | 
    await driver.findElement(By.css(".ng-tns-c16-36 > .ng-tns-c65-35:nth-child(2)")).click()
    // 43 | click | css=.m-button--square | 
    await driver.findElement(By.css(".m-button--square")).click()
    // 44 | click | css=.ng-tns-c65-35:nth-child(3) > .a-textlink | 
    await driver.findElement(By.css(".ng-tns-c65-35:nth-child(3) > .a-textlink")).click()
    // 45 | mouseDown | css=.m-button__icon path | 
    {
      const element = await driver.findElement(By.css(".m-button__icon path"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 46 | mouseUp | css=.m-button__icon > .svg-inline--fa | 
    {
      const element = await driver.findElement(By.css(".m-button__icon > .svg-inline--fa"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 47 | click | css=.m-button__icon > .svg-inline--fa | 
    await driver.findElement(By.css(".m-button__icon > .svg-inline--fa")).click()
    // 48 | click | css=.ng-tns-c65-35:nth-child(4) > .a-textlink | 
    await driver.findElement(By.css(".ng-tns-c65-35:nth-child(4) > .a-textlink")).click()
    // 49 | mouseDown | css=.m-button__icon > .svg-inline--fa | 
    {
      const element = await driver.findElement(By.css(".m-button__icon > .svg-inline--fa"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 50 | mouseUp | css=.m-button__icon path | 
    {
      const element = await driver.findElement(By.css(".m-button__icon path"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 51 | click | css=.m-button__icon > .svg-inline--fa | 
    await driver.findElement(By.css(".m-button__icon > .svg-inline--fa")).click()
    // 52 | click | css=.notification-container | 
    await driver.findElement(By.css(".notification-container")).click()
    // 53 | click | css=.notification-container | 
    await driver.findElement(By.css(".notification-container")).click()
    // 54 | click | css=.ng-tns-c65-35:nth-child(4) | 
    await driver.findElement(By.css(".ng-tns-c65-35:nth-child(4)")).click()
    // 55 | click | css=.m-button__icon > .svg-inline--fa | 
    await driver.findElement(By.css(".m-button__icon > .svg-inline--fa")).click()
    // 56 | click | css=.notification-container | 
    await driver.findElement(By.css(".notification-container")).click()
    // 57 | click | css=.ng-tns-c65-35:nth-child(5) > .a-textlink | 
    await driver.findElement(By.css(".ng-tns-c65-35:nth-child(5) > .a-textlink")).click()
    // 58 | click | css=.m-button__icon > .svg-inline--fa | 
    await driver.findElement(By.css(".m-button__icon > .svg-inline--fa")).click()
    // 59 | click | css=.notification-container | 
    await driver.findElement(By.css(".notification-container")).click()
    // 60 | click | css=.notification-container | 
    await driver.findElement(By.css(".notification-container")).click()
    // 61 | click | css=.notification-container | 
    await driver.findElement(By.css(".notification-container")).click()
    // 62 | click | css=.notification-container | 
    await driver.findElement(By.css(".notification-container")).click()
    // 63 | click | css=.o-desktop-header__logo-link img | 
    await driver.findElement(By.css(".o-desktop-header__logo-link img")).click()
    // 64 | click | css=.o-navigation-link__outlet-badge | 
    await driver.findElement(By.css(".o-navigation-link__outlet-badge")).click()
    // 65 | runScript | window.scrollTo(0,241) | 
    await driver.executeScript("window.scrollTo(0,241)")
    // 66 | click | id=search-desktop | 
    await driver.findElement(By.id("search-desktop")).click()
    // 67 | type | id=search-desktop | jacket
    await driver.findElement(By.id("search-desktop")).sendKeys("jacket")
    // 68 | sendKeys | id=search-desktop | ${KEY_ENTER}
    await driver.findElement(By.id("search-desktop")).sendKeys(Key.ENTER)
    // 69 | runScript | window.scrollTo(0,261) | 
    await driver.executeScript("window.scrollTo(0,261)")
    // 70 | click | css=.ng-star-inserted:nth-child(3) .col-6:nth-child(5) .m-product-card-img__fade-in:nth-child(1) | 
    await driver.findElement(By.css(".ng-star-inserted:nth-child(3) .col-6:nth-child(5) .m-product-card-img__fade-in:nth-child(1)")).click()
    // 71 | runScript | window.scrollTo(0,0) | 
    await driver.executeScript("window.scrollTo(0,0)")
    // 72 | click | css=.a-select__display-placeholder | 
    await driver.findElement(By.css(".a-select__display-placeholder")).click()
    // 73 | click | css=.a-select-item:nth-child(2) .a-product-variation | 
    await driver.findElement(By.css(".a-select-item:nth-child(2) .a-product-variation")).click()
    // 74 | click | css=.m-button--purchase | 
    await driver.findElement(By.css(".m-button--purchase")).click()
    // 75 | mouseOver | css=.m-button--purchase | 
    {
      const element = await driver.findElement(By.css(".m-button--purchase"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 76 | mouseOut | css=.m-button--purchase | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 77 | click | css=.qa-continue-shopping > .m-button__default | 
    await driver.findElement(By.css(".qa-continue-shopping > .m-button__default")).click()
    // 78 | runScript | window.scrollTo(0,238) | 
    await driver.executeScript("window.scrollTo(0,238)")
    // 79 | click | css=.drawer-indicator-text--cart | 
    await driver.findElement(By.css(".drawer-indicator-text--cart")).click()
    // 80 | click | css=.m-button--minicart > .m-button__default | 
    await driver.findElement(By.css(".m-button--minicart > .m-button__default")).click()
    // 81 | click | css=.action--voucher | 
    await driver.findElement(By.css(".action--voucher")).click()
    // 82 | click | css=.qa-voucher-code > .ng-tns-c140-27 | 
    await driver.findElement(By.css(".qa-voucher-code > .ng-tns-c140-27")).click()
    // 83 | type | css=.qa-voucher-code > .ng-tns-c140-27 | OCT21
    await driver.findElement(By.css(".qa-voucher-code > .ng-tns-c140-27")).sendKeys("OCT21")
    // 84 | click | css=.qa-use-voucher-btn > .m-button__default | 
    await driver.findElement(By.css(".qa-use-voucher-btn > .m-button__default")).click()
    // 85 | click | css=.m-rebate-ItemPercentageOffDiscount > .col-4 | 
    await driver.findElement(By.css(".m-rebate-ItemPercentageOffDiscount > .col-4")).click()
    // 86 | click | css=.m-rebate-ItemPercentageOffDiscount > .col-4 | 
    await driver.findElement(By.css(".m-rebate-ItemPercentageOffDiscount > .col-4")).click()
    // 87 | doubleClick | css=.m-rebate-ItemPercentageOffDiscount > .col-4 | 
    {
      const element = await driver.findElement(By.css(".m-rebate-ItemPercentageOffDiscount > .col-4"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
  })
})