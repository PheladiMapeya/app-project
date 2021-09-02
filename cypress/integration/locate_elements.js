/// <reference types = "cypress" />

describe("locators", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('testing elements', () => {
    cy.get('h1').should('contain', 'Currency Converter')
    cy.get('#amount')
    cy.get('#convertFrm')
    cy.get('#convertTo')
    cy.get('#buttonClick')
    cy.get('h1').should('contain', 'Results =')
    cy.get('#results')
    cy.get('#resetButton')
  })

  it('showcase error message', () => {
    cy.get('#convertFrm').type('USD').select('USD')
    cy.get('#convertTo').type('USD').select('USD')
    cy.get('#buttonClick').click()
    cy.contains('Choose Different Currency').should('be.visible')
  })

  it("input values", () => {
    cy.get("#amount").type(1)
    cy.get("#convertFrm").type('USD').select('USD').should('have.value', 'USD')
    cy.get("#convertTo").type('ZAR').select('ZAR').should('have.value', 'ZAR')
    
    cy.get("#buttonClick").click()
    cy.get("#results").should('be.visible')
  })

  it('display results when button clicked', () => {
    cy.get('#amount').type(1)
    cy.get('#convertFrm').type('USD').select('USD')
    cy.get('#convertTo').type('ZAR').select('ZAR')
    cy.get('#buttonClick').click()
    cy.get('#results').should('be.visible')
  })

  it("display rates", () => { 
    cy.get("select")
    .should("contain", "USD")
  })

  

})