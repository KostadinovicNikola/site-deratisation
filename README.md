# Site Dératisation

Site vitrine statique (HTML/CSS, sans outil de compilation) d'une entreprise de lutte contre les nuisibles en Île-de-France.

## Pages

- `index.html` : accueil
- `deratisation.html`, `desinsectisation.html`, `depigeonnage.html`, `desinfection.html` : services
- `clients.html` : particuliers, professionnels, copropriétés
- `a-propos.html`, `contact.html` (formulaire de devis), `mentions-legales.html`
- `assets/` : styles, script du menu mobile, icône

## Valeurs à remplacer

Ces textes provisoires sont présents dans toutes les pages ; un « rechercher / remplacer » dans tout le dossier suffit :

| Texte provisoire | À remplacer par |
|---|---|
| `[NOM DU SITE]` | nom de l'entreprise |
| `[TÉLÉPHONE]` | numéro (aussi utilisé dans les liens `tel:`, écrire de préférence sans espaces là-bas) |
| `[EMAIL]` | adresse e-mail (reçoit aussi les demandes du formulaire) |
| `[ADRESSE]`, `[SIRET]`, `[FORME JURIDIQUE]`, `[CAPITAL]`, `[NOM DU GÉRANT]`, `[HÉBERGEUR]` | mentions légales |

## Formulaire de devis

Le formulaire passe par [FormSubmit](https://formsubmit.co) (gratuit, sans compte). À la première demande envoyée, FormSubmit envoie un e-mail de confirmation à l'adresse indiquée : il suffit de cliquer sur le lien d'activation une fois.

## Voir le site en local

Ouvrir `index.html` dans un navigateur.
