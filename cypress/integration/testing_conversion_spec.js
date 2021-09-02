/// <reference types = "cypress" />

describe("testing conversion", () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://data.fixer.io/*', {
            fixture: "rates.json" , statusCode:200 
        })
        cy.visit("http://localhost:8081")
    })

    it("compare results", () => {

        cy.get("#amount").type(1)
        cy.get("#convertFrm").type('AED').select('AED').should('have.value', 'AED')
        cy.get("#convertTo").type('ZWL').select('ZWL').should('have.value', 'ZWL')
        
        cy.get("#buttonClick").click()
        cy.get("#results").should('be.visible')


        cy.get('#results')
        .should('contain', 87.67)
        
        
    })
})



