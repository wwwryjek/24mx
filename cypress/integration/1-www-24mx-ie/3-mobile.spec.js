describe('www-24mx-ie on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('https://www.24mx.ie/')
    cy.xpath('//div[contains(@class,"NostoCloseButton")]').click()
    cy.xpath('//div[contains(@class,"qa-consent-agree-btn")]').click()

  })

  it.skip('Fast Checkout', () => {
    cy.xpath("//input[@id='search-mobile']").type("helmet")
    cy.get(':nth-child(6) > .autocomplete-item').click()
    cy.get('.o-product-card__blocklink,ng-star-inserted a').any().click()
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

  it('Check Logo', () => {
    cy.get('.a-logo-link > img')
      .should('be.visible')
      .and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.eq(296)
      })
  })

  it.skip('Shopping cart edit', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it.skip('Product details page', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it.skip('Popups with benefits', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it.skip('Recently viewed', () => {
    cy.visit('https://www.24mx.ie/')
  })
})
