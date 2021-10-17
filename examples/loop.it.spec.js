// 1. go to page
// 2. find close NostoPopUpWrapper button
// 3. click button
// 4. find button close cookies info
// 5. click close cookies info
const sizes = ['iphone-6', 'ipad-2', [1124, 768]]


describe('24mx test', () => {
  beforeEach(() => {
   
    // cy.visit('https://www.24mx.ie/')
    // cy.get('NostoCloseButton').click()
    // cy.get('qa-consent-agree-btn').click()
    // Go to testing page:
    sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display logo on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
  		cy.visit('https://www.24mx.ie/')
	    // close popups:
	    cy.xpath("//div[contains(@class,'NostoCloseButton')]").click()
	    cy.xpath("//div[contains(@class,'qa-consent-agree-btn')]").click()
      cy.get('.a-logo-link > img').should('be.visible')
    })})
  })
    sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display logo on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
  		cy.visit('https://www.24mx.ie/')
	    // close popups:
	    cy.xpath("//div[contains(@class,'NostoCloseButton')]").click()
	    cy.xpath("//div[contains(@class,'qa-consent-agree-btn')]").click()
      cy.get('.a-logo-link > img').should('be.visible')
    })
  })

 })