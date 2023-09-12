Feature: Redirection vers la feuille d'emargement

Scenario: Je me redirige vers la page où se trouve la feuille de présence
Given Je suis sur la page principale
And Je clique sur le lien feuille de présence
When Je suis sur la page feuille de présence
Then Je valide ma présence