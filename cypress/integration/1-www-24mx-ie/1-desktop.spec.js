// 1. go to page
// 2. find close NostoPopUpWrapper button
// 3. click button
// 4. find button close cookies info
// 5. click close cookies info
// const estores = ['https://www.24mx.ie/', 'https://www.24mx.pl/']
// const sizes = ['iphone-6', 'ipad-2', [1124, 768]]


describe('www-24mx-ie on desktop', () => {
  beforeEach(() => {
    cy.viewport(1200, 768)
    // test recently
    cy.visit('https://www.24mx.ie/')
    cy.xpath('//div[contains(@class,"NostoCloseButton")]').click()
    cy.xpath('//div[contains(@class,"qa-consent-agree-btn")]').click()

  })
  // skip to delete
  it('Fast Checkout', () => {
    cy.xpath("//input[@id='search-desktop']").type("helmet")
    cy.get(':nth-child(6) > .autocomplete-item').click()
    cy.get('.qa-pl-items-grid > :nth-child(1) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    // cy.get('.qa-pl-items-grid > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').any().click()
    cy.get('p-button.ng-star-inserted > .m-button').click()    
    cy.get('.o-cart-process__added > .a-textlink').click()
    cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay', { timeout: 10000 }).should('be.visible')
    cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay', { timeout: 10000 }).should('not.be.visible')
    cy.get('#checkout-email').type("fgn4uqn9q584j@mailinator.com")
    cy.get('#checkout-mobileNumber').type("1234567890")
    cy.get('#checkout-firstName').type("TEST")
    cy.get('#checkout-surname').type("TEST")
    cy.get('#checkout-companyName').type("TEST")
    cy.get('#checkout-streetAndHouseNumber').type("TEST")
    cy.get('#checkout-postCode').type("de12345")
    cy.get('#checkout-city').type("TEST")
    cy.get('#checkout-county').type("TEST")
    cy.get('.m-checkout-finalize > p-button > .m-button').click()
    cy.get('.paySubmit').click()
  })
  // skip to delete
  it.skip('Check Logo', () => {
    cy.get('.d-inline-block > img').should('be.visible')
  })

  it.skip('Shopping cart edit', () => {
    cy.xpath("//input[@id='search-desktop']").type("helmet{enter}")
    cy.get('.qa-pl-items-grid > :nth-child(1) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    cy.get('.m-select__display').click()
    // select random Size of product
    cy.get('.m-select__items-wrapper li').any().click()
    // remember price on product page
   // NOT ALIASES:
    // cy.get('.m-product-pricing__price').should('have.text', ' €79.99 ').then(($price1) => {
    // const cena1 = $price1.text()
    // })  
    cy.get('.m-product-pricing__price').should('have.text', ' €79.99 ').as('pricing__price')
    // ALIASES:
    // cy.get('.m-product-pricing__price').invoke('text').as('text')
    // cy.get('.m-product-pricing__original-price').then(($price2) => {
    // const cena2 = $price2.text()
    //   })  
    cy.get('.m-product-pricing__original-price').invoke('text').as('original-price')

    
    // cy.log($price2)
    // cy.log($price1)
    // check add to cart button and click
    cy.get('p-button.ng-star-inserted > .m-button').should('have.text', ' Add to cart ').click()
    // Click proceed to checkout
    cy.get('.o-cart-process__added > .a-textlink').should('have.text', ' Proceed to checkout ').click({ timeout: 10000 })
    // check price on checkout
    cy.get('.qa-product-actual-price').as('actual-price').should('have.text', ' €79.99 ')
    // cy.get('.qa-product-actual-price').should('have.text', test)
    cy.get('.qa-product-actual-price').then(($price3) => {
      const cena3 = $price3.text()

      cy.wrap(cena3).should('have.text', '@original-price')
      })
  })

  it('Product details page', () => {
    cy.xpath("//input[@id='search-desktop']").type("helmet{enter}")
    cy.get('.qa-pl-items-grid > :nth-child(1) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    // check popups with benefits
    cy.get('p-usp.ng-tns-c65-22 > .o-usp-list').any().click()
    // close popup
    cy.get('.m-overlay__closeBtn > .m-button').click()
    // Check recently
    //  go to bottom page
    cy.scrollTo('bottom')
    cy.get('p-last-viewed-products.ng-star-inserted > .o-productlist > :nth-child(1) > .m-vignette > span').should('have.text', 'Recently viewed')
    // check if product displays
    cy.get('.m-items-slider__items > .col-6 > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-img').should('be.visible')
    // check if image is available
    cy.scrollTo('bottom')
      cy.get('.m-items-slider__items > .col-6 > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-img')
      .find("img")
      .should('be.visible')
      .and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })

  })

  it.skip('Popups with benefits', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it.skip('Recently viewed', () => {
    cy.visit('https://www.24mx.ie/')
  })
})

// backlog kode
// cy.get('.o-product-card__blocklink,ng-star-inserted a').any().click()
    // cy.get('.o-product-card__blocklink,ng-star-inserted a').click()
    // cy.get('.m-product-card-img,m-product-card-img--square div').any().click()
    // cy.xpath("//a[@class='o-product-card__blocklink']").first().click()
    // cy.get('.m-product-card-img__fade-in img').any().click()
