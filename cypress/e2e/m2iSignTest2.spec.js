describe('Redirection vers la feuille de présence', () => {
    it('Je me redirige vers la feuille de présence', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('nesrinezitouni218@gmail.com')
        cy.get('#inputSmsCode').type('19335')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('.main_nav > :nth-child(2) > a').click()
    })
})


    