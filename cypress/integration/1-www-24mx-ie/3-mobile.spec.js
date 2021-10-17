// 1. go to page
// 2. find close NostoPopUpWrapper button
// 3. click button
// 4. find button close cookies info
// 5. click close cookies info
// const estores = ['https://www.24mx.ie/', 'https://www.24mx.pl/']
// const sizes = ['iphone-6', 'ipad-2', [1124, 768]]


describe('www-24mx-ie on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('https://www.24mx.ie/')
    cy.xpath('//div[contains(@class,"NostoCloseButton")]').click()
    cy.xpath('//div[contains(@class,"qa-consent-agree-btn")]').click()

  })

  it('Fast Checkout', () => {
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
    cy.get('.d-inline-block > img').should('be.visible')

  })

  it('Shopping cart edit', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it('Product details page', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it('Popups with benefits', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it('Recently viewed', () => {
    cy.visit('https://www.24mx.ie/')
  })
})
