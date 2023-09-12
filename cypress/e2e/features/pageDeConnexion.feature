Feature: Redirection page de connexion

Scenario: Je me redirige vers la page de connexion
Given Je suis sur la page d'accueil
And Je clique sur le bouton stagiaire
When Je suis sur la page de connexion
And Je saisis l'identifiant
And Je clique sur le bouton se connecter
Then Je suis rediriger