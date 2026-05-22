# Site TeSE - Transducteurs et Systemes d'Energie

Ce depot contient une premiere version statique du site de l'equipe TeSE du laboratoire SATIE.
Il est concu pour etre heberge gratuitement avec GitHub Pages.

## Structure

- `index.html` : page d'accueil
- `recherche.html` : axes scientifiques
- `plateformes.html` : moyens experimentaux et plateformes
- `projets.html` : projets, collaborations et demonstrateurs
- `equipe.html` : membres, doctorants, alumni, expertises
- `formation.html` : stages, theses et projets etudiants
- `partenariats.html` : collaboration industrielle et academique
- `actualites.html` : actualites, soutenances, publications
- `contact.html` : point d'entree contact
- `assets/css/styles.css` : design general
- `assets/js/main.js` : menu mobile et annee automatique
- `assets/img/` : dossier pour les photos et illustrations
- `404.html` : page d'erreur personnalisee

## Publication avec GitHub Pages

1. Creer un depot GitHub, par exemple `tese-site`.
2. Envoyer tous les fichiers de ce dossier dans le depot.
3. Aller dans `Settings` puis `Pages`.
4. Choisir la branche `main` et le dossier `/root` comme source de publication.
5. Attendre la generation du site.

URL attendue : `https://votre-identifiant.github.io/tese-site/`

## Domaine personnalise facultatif

Si vous possedez un nom de domaine ou un sous-domaine, ajoutez-le dans `Settings > Pages > Custom domain`.
Pour un sous-domaine, vous pouvez aussi creer un fichier `CNAME` contenant uniquement le domaine voulu, par exemple :

```txt
tese.satie.fr
```

## A personnaliser avant publication officielle

- Ajouter les vraies photos dans `assets/img/`.
- Remplacer les chiffres cles de la page d'accueil.
- Completer la liste des membres dans `equipe.html`.
- Remplacer les projets fictifs/gabarits dans `projets.html`.
- Ajouter des liens HAL, ORCID, Google Scholar et publications.
- Ajouter les logos autorises par les tutelles, dans le respect de leurs chartes graphiques.
- Verifier les mentions legales et la politique de confidentialite si le site devient institutionnel.

## Recommandation editoriale

Le site doit rester court, visuel et oriente publics cibles :

- industriels : comprendre comment collaborer ;
- etudiants : trouver stages et theses ;
- chercheurs : identifier les axes, plateformes et publications ;
- institutions : voir les projets, partenaires et impacts.
