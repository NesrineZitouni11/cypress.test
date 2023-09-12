import{Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"

Given("Je suis sur la page principale", () => {
    cy.visit('https://sign.m2iformation.fr/signin')
    cy.get('#inputPhoneNumber').type('nesrinezitouni218@gmail.com')
    cy.get('#inputSmsCode').type('19335')
    cy.get('#connexion').click()
    cy.wait(2000)
})


Given("Je clique sur le lien feuille de présence", () => {
    cy.get('.main_nav > :nth-child(2) > a').click()
})


When("Je suis sur la page feuille de présence", () => {
    cy.get('.main_nav > :nth-child(2) > a').click()
})


Then("Je valide ma présence", () => {
    cy.get('.main_nav > :nth-child(2) > a').click()
    cy.get('img[id="09/11/2023am"]').click()
    cy.get('img[id="09/11/2023pm"]').click()
})