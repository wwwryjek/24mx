// 1. go to page
// 2. find close NostoPopUpWrapper button
// 3. click button
// 4. find button close cookies info
// 5. click close cookies info
const estores = ['https://www.24mx.ie/', 'https://www.24mx.pl/']
const sizes = ['iphone-6', 'ipad-2', [1124, 768]]


describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
        cy.visit('https://www.24mx.ie/')
        cy.xpath("//div[contains(@class,'NostoCloseButton')]").click()
        cy.xpath("//div[contains(@class,'qa-consent-agree-btn')]").click()
      } else {
        cy.viewport(size)
      }

     
      // cy.get('picture > img').should('be.visible')

  })




    // cy.visit('https://www.24mx.ie/')
    // cy.xpath("//div[contains(@class,'NostoCloseButton')]").click()
    // cy.xpath("//div[contains(@class,'qa-consent-agree-btn')]").click()

  })


    // close popups:


  it('search-product-mobile', () => {
    
    // close popups:
  })

  it('search-product-tablet', () => {

  })

  it('search-product-desktop', () => {

  // })

    // type query
    // cy.xpath("input[id='search-desktop']").type("motor")
    // cy.xpath("input[id='search-mobile']").type("motor")
    cy.xpath("//input[@id='search-tablet']").type("helmet")
    //choose one of autocomplete item
    // cy.get(".ng-star-inserted li").eq(3).click()
    // cy.xpath("//li[contains(@calss, 'ng-star-inserted')]/a").click()
    // cy.get('#autocomplete-item a').click()
    cy.get(':nth-child(6) > .autocomplete-item').click()

    // Stackoverflow - dodanie funkcji " .any()" ktora wybiera losowy element z wielu zaznaczonych. kod dodany do commands.js
    cy.get('.o-product-card__blocklink,ng-star-inserted a').any().click()

    // dodanie do koszyka
    // jeśli nie ma IFKA
    cy.get('p-button.ng-star-inserted > .m-button').click()

    //do checkoutu
    cy.get('.o-cart-process__added > .a-textlink').click()

    // czekanie na czekałcie
    // nine dziala cy.get('.o-checkout-form.ng-invalid.ng-dirty.ng-touched').should('not.be.visible')
    // cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay')
    cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay', { timeout: 10000 }).should('be.visible')
    cy.get('p-checkout-form > .m-checkout-box > :nth-child(2) > .m-checkout-box__overlay', { timeout: 10000 }).should('not.be.visible')
    // cy.get('.o-checkoutpage', { timeout: 10000 }).should('not.be.visible')
    // Wypelnianie czekałtu
    cy.get('#checkout-email').type("fgn4uqn9q584j@mailinator.com")
    cy.get('#checkout-mobileNumber').type("1234567890")
    cy.get('#checkout-firstName').type("TEST")
    cy.get('#checkout-surname').type("TEST")
    cy.get('#checkout-companyName').type("TEST")
    cy.get('#checkout-streetAndHouseNumber').type("TEST")
    cy.get('#checkout-postCode').type("de12345")
    cy.get('#checkout-city').type("TEST")
    cy.get('#checkout-county').type("TEST")
    // Finalise your order
    cy.get('.m-checkout-finalize > p-button > .m-button').click()
    // PAY orde
    cy.get('.paySubmit').click()


  })

 })