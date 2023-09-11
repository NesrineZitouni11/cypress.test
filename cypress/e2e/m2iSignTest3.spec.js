describe('Signature stagiaire', () => {
    it('Je signe la feuille de présence', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('nesrinezitouni218@gmail.com')
        cy.get('#inputSmsCode').type('19335')
        cy.get('#connexion').click()
        cy.wait(2000)

        cy.get('.main_nav > :nth-child(2) > a').click()
        cy.get('img[id="09/11/2023am"]').click()
        cy.get('img[id="09/11/2023pm"]').click()
    })
})