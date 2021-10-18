describe('www-24mx-pl on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('https://www.24mx.pl/')
    cy.xpath('//div[contains(@class,"NostoCloseButton")]').click()
    cy.xpath('//div[contains(@class,"qa-consent-agree-btn")]').click()

  })
  it('Fast Checkout', () => {
    cy.xpath("//input[@id='search-mobile']").type("torba{enter}")
    // cy.get(':nth-child(6) > .autocomplete-item').click()
    cy.get('.qa-pl-items-grid > :nth-child(1) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    // cy.get('.o-product-card__blocklink,ng-star-inserted a').any().click()
    cy.get('body').then(($body) => {
    if ($body.find('.m-select__display').length > 0) {   
      cy.get('.m-select__items-wrapper li').any().click()
      cy.get('p-button.ng-star-inserted > .m-button').click()
    } else {
      cy.get('p-button.ng-star-inserted > .m-button').click()
      }
  })
    cy.get('.o-cart-process__added > .a-textlink').click()
    cy.get('.m-checkout-box__overlay.d-block', { timeout: 10000 }).should('be.visible')
    cy.get('.m-checkout-box__overlay.d-block', { timeout: 10000 }).should('not.be.visible')
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

  it('Check Logo', () => {
    cy.get('.a-logo-link > img')
      .should('be.visible')
      .and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.eq(296)
      })
  })

  it('Shopping cart edit', () => {
    cy.xpath("//input[@id='search-mobile']").type("kask{enter}")
    cy.get('.qa-pl-items-grid > :nth-child(1) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    cy.get('.m-select__display').click()
    // select random Size of product
    cy.get('.m-select__items-wrapper li').any().click()
    // remember price on product page
      // NOT ALIASES:
    // cy.get('.m-product-pricing__price').should('have.text', ' €79.99 ').then(($price1) => {
    // const cena1 = $price1.text()
    // })  
      // ALIASES:
    // cy.get('.m-product-pricing__price').invoke('text').as('text')
    // cy.get('.m-product-pricing__original-price').then(($price2) => {
    // const cena2 = $pricy.get('[customclass="m-button m-button--remove qa-checkout-product-remove-btn"] > .m-button').click()ce2.text()
    //   })  
    
      // Hardcoded compare with price
    cy.get('.m-product-pricing__price').should('have.text', ' €59.99 ').as('pricing__price')
    
    
    cy.get('.m-product-pricing__original-price').invoke('text').as('original-price')
    // check add to cart button and click
    cy.get('p-button.ng-star-inserted > .m-button').should('have.text', ' Add to cart ').click()

    // Click proceed to checkout
    cy.get('.o-cart-process__added > .a-textlink').should('have.text', ' Proceed to checkout ').click({ timeout: 10000 })
    
    // Waitign for chadow to go away
    cy.get('.m-checkout-box__overlay.d-block', { timeout: 10000 }).should('be.visible')
    cy.get('.m-checkout-box__overlay.d-block', { timeout: 10000 }).should('not.be.visible')

     // Add another product from  Looking for something more? - commented - making issue with "Edit product"
    // cy.get(':nth-child(1) > .m-checkout-list__item-content > .m-checkout-list__item-actions > p-button > .m-button > .m-button__default').any().click()
    // cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay', { timeout: 10000 }).should('not.be.visible')

    // Edit product
    cy.scrollTo('top')
    cy.xpath('//button[contains(@class, "m-button__product-edit")]').any().click()

    // cy.get(':nth-child(1) > .m-checkout-list__item-content > .m-checkout-list__item-content-text > .m-checkout-list__item-actions > .m-button').click()
    cy.get('.m-checkout-list__item-actions-quantity--plus > .ng-fa-icon > .svg-inline--fa > path').click()
    // Save edition
    cy.get('[customclass="m-button m-button--navigation m-button--edit qa-checkout-product-save-btn"]').click()
    // check price on checkout - TODO
    // cy.get('.qa-product-actual-price').as('actual-price').should('have.text', ' €59.99 ')
    
    cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay', { timeout: 10000 }).should('not.be.visible')

    // Remove product: - commented - making issue with "Edit product"
    // cy.get('.m-checkout-list__item-actions > .m-button > span').any().click()
    // cy.get('[customclass="m-button m-button--remove qa-checkout-product-remove-btn"] > .m-button').click()
    // cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay', { timeout: 10000 }).should('not.be.visible')

   
    // cy.get('.qa-product-actual-price').should('have.text', test)
    // Compate with const - to fix
    // cy.get('.qa-product-actual-price').then(($price3) => {
    //   const cena3 = $price3.text()

    //   cy.wrap(cena3).eq('€59.99')
    //   })
    // 
  })

  it('Product details page', () => {
    cy.xpath("//input[@id='search-mobile']").type("kask{enter}")
    cy.get('.qa-pl-items-grid > :nth-child(1) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    // check popups with benefits - not available on TABLET
        // cy.get('p-usp.ng-tns-c65-22 > .o-usp-list').any().click()
        // close popup
        // cy.get('.m-overlay__closeBtn > .m-button').click()
    // check 3 accordions 1st is not expanded
    // cy.get('article.ng-tns-c108-15 > .ng-tns-c108-15 > .ng-star-inserted').should('be.visible')
    // Next accordion
    
    // cy.get('*[class^="ng-tns-c"]').any().click()
    cy.xpath('//div[contains(@class, "m-accordion__header")]').any().click()
    // cy.get('*[class^="p-accordion > .ng-tns-c"]').any().click()
    
    // fill short form from 3rd accordion

        // cy.get('p-input[type="text"] > .m-input > .ng-untouched').type("TestName")
        // cy.get('.ng-untouched.ng-star-inserted > p-input[type="email"] > .m-input > .ng-untouched').type("TestEmail")
        // cy.get('.ng-invalid.ng-star-inserted > .ng-pristine').type("Test Me")
        // // Check Submit form button - don't send ot
        // cy.get('.ng-invalid.ng-star-inserted > p-button > .m-button').should('have.text', ' Send ').click()


  })

  it('Popups with benefits', () => {
    
    // One working example
    // cy.get('.o-usp-list > .row > :nth-child(4)').click()
    // dynamic chacking from element 4 

    // TO check wny popup "Fast deliveries" - not working
    // cy.get('.o-usp-list > .row > :nth-child(1)').should('have.text', 'Fast deliveries').click()
    // cy.get('p.ng-tns-c65-11').should('be.visible')
    // cy.get('.m-overlay__closeBtn > .m-button').click()
        // possible to exclude "nth-child(2)"
    cy.get('.o-usp-list > .row > :nth-child(2)').should('have.text', 'Lowest Price Guarantee').click()
    cy.get('p.ng-tns-c65-11').should('be.visible')
    cy.get('.m-overlay__closeBtn > .m-button').click()

    cy.get('.o-usp-list > .row > :nth-child(3)').should('have.text', 'Free shipping over €100*').click()
    cy.get('p.ng-tns-c65-11').should('be.visible')
    cy.get('.m-overlay__closeBtn > .m-button').click()
    
    cy.get('.o-usp-list > .row > :nth-child(4)').should('have.text', '60-day return policy*').click()
    cy.get('p.ng-tns-c65-11').should('be.visible')
    cy.get('.m-overlay__closeBtn > .m-button').click()

    cy.get('.o-usp-list > .row > :nth-child(5)').should('have.text', 'Free Size Exchanges*').click()
    cy.get('p.ng-tns-c65-11').should('be.visible')
    cy.get('.m-overlay__closeBtn > .m-button').click()

  })

  it('Recently viewed', () => {
    cy.xpath("//input[@id='search-mobile']").type("kask{enter}")
    cy.get('.qa-pl-items-grid > :nth-child(1) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    
    cy.visit('https://www.24mx.pl/')
    cy.xpath("//input[@id='search-mobile']").type("torba{enter}")

    cy.get('.qa-pl-items-grid > :nth-child(2) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click()
    cy.visit('https://www.24mx.pl/')
    cy.xpath("//input[@id='search-mobile']").type("kurtka{enter}")

    cy.get('.qa-pl-items-grid > :nth-child(3) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').click() 
    cy.visit('https://www.24mx.pl/')

    cy.scrollTo('bottom')
    // cy.get('.m-items-slider__content').should('be.visible')
    cy.get('p-last-viewed-products.ng-star-inserted > .o-productlist > :nth-child(1) > .m-vignette > span').should('have.text', 'Recently viewed')

  })
})
