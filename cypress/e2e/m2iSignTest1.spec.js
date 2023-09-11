describe('Connexion page m2i sign', () => {
    it('Je me connecte avec mes identifiants', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('nesrinezitouni218@gmail.com')
        cy.get('#inputSmsCode').type('19335')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('.login_button > a').click()
    })
})


    it('Je me connecte avec des identifiants non valides', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('test@test.fr')
        cy.get('#inputSmsCode').type('12345')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('#erreur-message').contains("Veuillez vérifier votre adresse email ou cliquez sur 'Inscription à M2i Sign' pour vous inscrire")
        //cy.get('.login_button > a').click()
    })


    it('Je me connecte avec mon adresse mail et un mot de passe invalide', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('nesrinezitouni218@gmail.com')
        cy.get('#inputSmsCode').type('12345')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('#erreur-message').contains("Code Pin incorrect, veuillez saisir le code reçu par sms lors de la première connexion ou cliquez sur code pin perdu ")
        //cy.get('.login_button > a').click()
    })

    
    it('Je me connecte avec une adresse mail invalide et mon mot de passe', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('test@test.fr')
        cy.get('#inputSmsCode').type('19335')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('#erreur-message').contains("Veuillez vérifier votre adresse email ou cliquez sur 'Inscription à M2i Sign' pour vous inscrire")
        //cy.get('.login_button > a').click()
    })


    it('Je me connecte avec les champs vides', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type(' ')
        cy.get('#inputSmsCode').type(' ')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('#erreur-message').contains("Email ou numéro de téléphone invalide")
        //cy.get('.login_button > a').click()
    })


    it('Je me connecte avec une adresse mail incomplète', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('nesrinezitouni218@')
        cy.get('#inputSmsCode').type('19335')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('#erreur-message').contains("Email ou numéro de téléphone invalide")
        //cy.get('.login_button > a').click()
    })


    it('Je me connecte avec un mot de passe incomplet', () => {
        cy.visit('https://sign.m2iformation.fr/signin')
        cy.get('#inputPhoneNumber').type('nesrinezitouni218@gmail.com')
        cy.get('#inputSmsCode').type('1933')
        cy.get('#connexion').click()
        cy.wait(2000)
        cy.get('#erreur-message').contains("Code Pin incorrect, veuillez saisir le code reçu par sms lors de la première connexion ou cliquez sur code pin perdu")
        //cy.get('.login_button > a').click()
    })