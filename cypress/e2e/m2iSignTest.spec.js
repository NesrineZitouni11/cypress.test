describe('Redirection vers la page de connexion', () => {
    it('Je me redirige vers la page de connexion', () => {
        cy.visit('https://sign.m2iformation.fr/')
        cy.get('[style="width: 34%; margin-left: auto;margin-right: auto;margin-top: 12em;"] > [style="background: #1E2D69;height: 10em;border-radius: 30px;margin-bottom: 2em"]').click()
        cy.wait(3000)
        cy.get('[style="width: 37%; margin-left: auto;margin-right: auto;margin-top: 2em;"] > .row > .mb-3 > .text-decoration-none').click()
    })
})