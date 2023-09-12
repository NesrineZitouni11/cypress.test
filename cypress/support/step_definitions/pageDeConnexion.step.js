import{Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";

Given("Je suis sur la page d'accueil", () => {
    cy.visit('https://sign.m2iformation.fr/')
})

Given("Je clique sur le bouton stagiaire", () => {
    cy.get('[style="width: 34%; margin-left: auto;margin-right: auto;margin-top: 12em;"] > [style="background: #1E2D69;height: 10em;border-radius: 30px;margin-bottom: 2em"]').click()
})

When("Je suis sur la page de connexion", () => {
    cy.get('[style="margin-left: 1em;color: #dce6ff;font-size: 1.5em;line-height: 1.5em"] > p').should('be.visible')
})

When("Je saisis l'identifiant", () => {
    cy.get('#inputPhoneNumber').type('nesrinezitouni218@gmail.com')
    cy.get('#inputSmsCode').type('19335')
})

When("Je clique sur le bouton se connecter", () => {
    cy.get('#connexion').click()
})

Then("Je suis rediriger", () => {
    cy.visit('https://sign.m2iformation.fr/student')
})