// 1. go to page
// 2. find close NostoPopUpWrapper button
// 3. click button
// 4. find button close cookies info
// 5. click close cookies info
// const estores = ['https://www.24mx.ie/', 'https://www.24mx.pl/']
// const sizes = ['iphone-6', 'ipad-2', [1124, 768]]


describe('example to-do app', () => {
  beforeEach(() => {
    cy.viewport("iphone-6")
    cy.visit('https://www.24mx.ie/')
    cy.xpath("//div[contains(@class,'NostoCloseButton')]").click()
    cy.xpath("//div[contains(@class,'qa-consent-agree-btn')]").click()

  })

  it('Fast Checkout', () => {
    cy.visit('https://www.24mx.ie/')
  })

  it('Check Logo', () => {
    cy.visit('https://www.24mx.ie/')
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
