---
pagination_label: Git & Github
sidebar_label: Git & Github 
description: Introduction aux outils Git et Github
slug: git&github
tags: [course, it-courses]
last_update:
  date: 2026-10-24
  author: Clément DEMOL & Albane LECOCQ
---

> Documentation rédigée par Clément DEMOL & Albane LECOCQ (FabLab DeVinci).


# Introduction

Quand on développe un projet, les fichiers évoluent constamment : on ajoute des fonctionnalités, on corrige des bugs et on modifie du code. Il devient vite difficile de savoir ce qui a changé, de revenir à une version précédente ou de travailler à plusieurs sans écraser le travail des autres.

**Git** permet de suivre l'historique des modifications d'un projet. **GitHub** permet notamment d'héberger des dépôts Git en ligne et de collaborer avec d'autres personnes.

Les deux outils sont complémentaires, mais différents : Git peut fonctionner sans GitHub, tandis que GitHub utilise Git pour gérer l'historique du code.

## Qu'est-ce que Git ?

**Git est un logiciel de gestion de versions distribué.** Il enregistre l'évolution des fichiers d'un projet sous forme de versions appelées *commits*.

Avec Git, on peut notamment :
- consulter les modifications effectuées ;
- retrouver qui a modifié quoi et à quel moment ;
- revenir à un état antérieur du projet ;
- développer une fonctionnalité dans une branche séparée ;
- fusionner les modifications de plusieurs personnes ;
- travailler localement, même sans connexion à Internet.

### Quelques notions importantes

| Terme | Définition |
|---|---|
| **Dépôt (repository ou repo)** | Dossier dont Git suit l'historique. |
| **Commit** | Enregistrement d'un ensemble de modifications, accompagné d'un message et d'un identifiant. |
| **Branche (branch)** | Ligne de développement séparée, pratique pour travailler sur une fonctionnalité ou une correction. |
| **Working tree** | État actuel des fichiers dans le dossier du projet. |
| **Staging area / index** | Zone où l'on prépare les modifications qui seront incluses dans le prochain commit. |
| **Merge** | Opération qui réunit les changements de plusieurs branches. |
| **Conflit** | Situation dans laquelle Git ne peut pas réunir automatiquement certaines modifications. |
| **Remote** | Dépôt distant, par exemple un dépôt hébergé sur GitHub. |

### Le cycle de base

Un cycle Git courant suit ces étapes :

1. **Modifier** les fichiers du projet.
2. **Préparer** les changements à enregistrer avec `git add`.
3. **Créer un commit** avec `git commit`.
4. **Envoyer les commits** vers le dépôt distant avec `git push`, si le projet possède un dépôt distant.

Exemple :

```bash
git status
git add .
git commit -m "Ajout de la page d'accueil"
git push
```

`git add .` prépare les modifications de tout le dossier courant. Avant de l'utiliser, vérifiez que vous ne préparez pas de fichier sensible ou inutile.

## Qu'est-ce que GitHub ?

**GitHub est une plateforme en ligne qui héberge des dépôts Git** et ajoute des outils pour travailler en équipe.

GitHub permet notamment de :
- héberger des projets à distance ;
- partager du code avec d'autres personnes ;
- gérer les branches et les demandes de fusion (*pull requests*) ;
- signaler et suivre des bugs ou des idées avec les *Issues* ;
- organiser le travail avec les *Projects* ;
- automatiser des tâches avec GitHub Actions ;
- documenter un projet avec un fichier `README.md` et un Wiki.

Un dépôt GitHub peut être **public** (visible par tous) ou **privé** (accessible uniquement aux personnes autorisées, selon les réglages et permissions).

:::info À retenir 
Git est l'outil de gestion de versions ; GitHub est une plateforme qui héberge les dépôts et facilite la collaboration. D'autres plateformes existent, comme GitLab ou Bitbucket.
:::


## Pourquoi utiliser Git et GitHub ?

### Pour un projet individuel
- garder un historique des changements ;
- expérimenter sans risquer de perdre une version fonctionnelle ;
- revenir sur une modification qui a introduit un bug ;
- sauvegarder une copie distante du projet ;
- présenter son travail dans un portfolio.

### Pour un projet en équipe
- travailler en parallèle sur plusieurs fonctionnalités ;
- relire les modifications avant de les intégrer ;
- éviter de s'envoyer des archives ZIP en permanence ;
- répartir et suivre les tâches ;
- garder une trace des décisions et des corrections.

### Bonnes pratiques à adopter
- faire des commits réguliers et cohérents ;
- écrire des messages de commit explicites ;
- créer une branche pour une fonctionnalité ou une correction importante ;
- récupérer les changements distants avant de commencer à travailler, lorsque c'est adapté au projet ;
- relire les changements avant de les envoyer ;
- ne jamais publier de secrets, de mots de passe ou de clés d'API.

---

## Outils et fichiers utiles

### Le fichier `.gitignore`

Le fichier **`.gitignore`** indique à Git quels fichiers ou dossiers non suivis il doit ignorer. Il sert notamment à exclure les fichiers générés, les dépendances installées localement et les fichiers propres à un ordinateur.

Exemple de `.gitignore` :

```gitignore
# Secrets et configuration locale
.env
.env.*
!.env.example

# Python
__pycache__/
*.py[cod]
.venv/
venv/

# Node.js
node_modules/

# Visual Studio Code : paramètres locaux éventuels
.vscode/

# Systèmes d'exploitation
.DS_Store
Thumbs.db

# Fichiers de compilation
bin/
obj/
dist/
build/
```

Adaptez cet exemple à la technologie du projet. Par exemple, il ne faut pas ignorer systématiquement `.vscode/` si le projet partage volontairement des paramètres VS Code utiles à toute l'équipe.


:::warning
n'arrête pas le suivi d'un fichier déjà ajouté à Git. Pour retirer un fichier de l'index sans le supprimer du disque :
:::


```bash
git rm --cached nom-du-fichier
git commit -m "Arrêt du suivi d'un fichier local"
```

Pour un dossier, ajoutez l'option `-r` si nécessaire :

```bash
git rm -r --cached nom-du-dossier
```

Si un secret a déjà été envoyé sur GitHub, l'ajouter à `.gitignore` ne suffit pas : **révoquez ou renouvelez immédiatement le secret**. Il peut rester dans l'historique Git.

### Le fichier `.env`

:::warning
Un fichier **`.env`** contient généralement des variables de configuration propres à l'environnement d'exécution du projet.
:::

Exemple de `.env` :

```dotenv
APP_ENV=development
DATABASE_URL=postgresql://localhost:5432/mon_projet
API_KEY=remplacer_par_une_cle_locale
```

Le programme ou une bibliothèque adaptée peut lire ces variables au démarrage. Le format et la manière de charger le fichier dépendent du langage et du projet.

#### Règles de sécurité
- Ne commitez généralement **pas** le fichier `.env` : il peut contenir des mots de passe, des jetons ou des clés d'API.
- Ajoutez-le au `.gitignore`.
- N'écrivez pas de vrais secrets dans les exemples, les captures d'écran ou la documentation.
- Si un secret est exposé, révoquez-le et remplacez-le. Supprimer le fichier dans un commit ultérieur ne l'efface pas nécessairement de l'historique.

Pour aider les autres à configurer le projet, fournissez plutôt un fichier **`.env.example`** avec des valeurs fictives :

```dotenv
APP_ENV=development
DATABASE_URL=
API_KEY=
```

Le fichier `.env.example` peut être versionné, à condition qu'il ne contienne aucun secret réel.

### Le fichier `README.md`


:::tip
Le fichier `README.md` est la page de présentation du projet. Il apparaît généralement sur la page principale du dépôt GitHub.
:::

Il peut contenir :
- le but du projet ;
- les fonctionnalités principales ;
- les prérequis ;
- les étapes d'installation et de lancement ;
- les variables d'environnement nécessaires ;
- des exemples d'utilisation ;
- les instructions pour contribuer ;
- la licence et les contacts pertinents.

### Les fichiers de licence

Si un projet est destiné à être partagé, une licence explique les conditions dans lesquelles d'autres personnes peuvent utiliser, modifier ou redistribuer son code. **Public ne signifie pas automatiquement libre de réutilisation.** Le choix de la licence dépend du projet et de ses objectifs.

---

## Comment utiliser Git dans Visual Studio Code

Visual Studio Code (VS Code) dispose d'une interface Git intégrée. Il faut toutefois que **Git soit installé** sur l'ordinateur.

### Préparer l'environnement

1. Installer Git depuis le site officiel : [git-scm.com](https://git-scm.com/).
2. Installer Visual Studio Code depuis le site officiel : [code.visualstudio.com](https://code.visualstudio.com/).
3. Ouvrir VS Code.
4. Ouvrir le dossier du projet avec **Fichier → Ouvrir un dossier**.
5. Ouvrir le terminal intégré via **Terminal → Nouveau terminal**.
6. Vérifier que Git est disponible :

```bash
git --version
```

Si une version s'affiche, Git est accessible depuis le terminal.

### Initialiser un dépôt

Pour commencer à suivre un projet existant qui ne possède pas encore de dépôt Git :

```bash
git init
```

On peut également cliquer sur l'icône **Contrôle de code source** dans la barre latérale, puis choisir d'initialiser le dépôt si VS Code le propose.

:::tip
Si le projet est déjà cloné depuis GitHub, ne lancez pas `git init` sans raison : le dépôt existe déjà.
:::

### Comprendre l'interface Source Control

Dans l'onglet **Contrôle de code source** (*Source Control*), VS Code affiche généralement :
- les fichiers modifiés ;
- les fichiers ajoutés ou supprimés ;
- les changements à préparer ;
- le champ de message de commit ;
- les actions de commit, de synchronisation et de gestion des branches.

Le détail exact de l'interface peut varier selon la version de VS Code et les extensions installées.

### Enregistrer un commit depuis VS Code

1. Modifier un ou plusieurs fichiers.
2. Ouvrir **Contrôle de code source**.
3. Cliquer sur un fichier pour examiner les différences.
4. Cliquer sur le `+` à côté du fichier pour préparer ce fichier, ou utiliser l'action de préparation de tous les changements.
5. Écrire un message clair, par exemple `Ajout de la validation du formulaire`.
6. Cliquer sur **Commit**.

Si des modifications ne sont pas préparées, VS Code peut proposer de les préparer automatiquement. Vérifiez toujours ce qui sera inclus.

### Envoyer et récupérer des changements

Si le projet est connecté à un dépôt distant :
- **Push** : envoie les commits locaux vers le dépôt distant ;
- **Pull** : récupère les changements distants et les intègre à la branche locale ;
- **Fetch** : récupère les informations du dépôt distant sans intégrer automatiquement les changements ;
- **Sync Changes / Synchroniser les modifications** : action de VS Code pouvant combiner récupération et envoi des changements.

Pour travailler avec GitHub, connectez-vous à GitHub dans VS Code si nécessaire. L'authentification peut être demandée lors du clonage ou du premier envoi.

### Gérer les branches dans VS Code

Le nom de la branche active apparaît généralement dans la barre d'état en bas à gauche.

On peut cliquer sur ce nom pour :
- changer de branche ;
- créer une branche ;
- sélectionner une branche existante.

Exemple de nom de branche : `feat/ajout-authentification` ou `fix/correction-connexion`.

### En cas de problème

- **Git n'est pas détecté :** vérifiez l'installation de Git, puis redémarrez VS Code.
- **Le push est refusé :** le dépôt distant contient peut-être des commits que vous n'avez pas. Examinez l'état du dépôt et récupérez les changements avant de réessayer.
- **Un fichier n'apparaît pas :** il peut être ignoré par `.gitignore`, déjà suivi ou exclu par une autre configuration.
- **Un conflit apparaît :** ouvrez les fichiers concernés, comparez les deux versions, résolvez les marqueurs de conflit, puis préparez et validez le résultat.
- **Une authentification est demandée :** suivez la procédure de connexion GitHub proposée par VS Code ou votre gestionnaire d'identifiants.

---

## Commandes Git essentielles

:::tip
Les commandes suivantes sont à exécuter dans un terminal, depuis le dossier du projet.
:::

### Configuration initiale

Définir le nom et l'adresse e-mail associés aux commits :

```bash
git config --global user.name "Prénom Nom"
git config --global user.email "adresse@example.com"
```

Vérifier la configuration :

```bash
git config --list
```

:::info
L'adresse e-mail utilisée peut être visible dans l'historique du dépôt. GitHub propose aussi des options pour protéger son adresse e-mail.
:::

### Créer ou récupérer un dépôt

| Commande | Rôle |
|---|---|
| `git init` | Initialise un dépôt Git dans le dossier courant. |
| `git clone URL_DU_DEPOT` | Copie un dépôt distant sur l'ordinateur. |
| `git remote -v` | Affiche les dépôts distants configurés. |
| `git remote add origin URL_DU_DEPOT` | Ajoute un dépôt distant nommé `origin`. |

Exemple :

```bash
git clone https://github.com/organisation/mon-projet.git
cd mon-projet
```

### Consulter l'état et l'historique

| Commande | Rôle |
|---|---|
| `git status` | Affiche les fichiers modifiés, préparés ou non suivis. |
| `git diff` | Affiche les modifications non préparées. |
| `git diff --staged` | Affiche les modifications préparées pour le prochain commit. |
| `git log` | Affiche l'historique des commits. |
| `git log --oneline --graph --all` | Affiche un historique condensé sous forme de graphe. |

**Réflexe utile :** exécuter `git status` avant un commit ou après une opération inhabituelle.

### Préparer et enregistrer des modifications

| Commande | Rôle |
|---|---|
| `git add fichier.txt` | Prépare un fichier précis. |
| `git add .` | Prépare les changements du dossier courant et de ses sous-dossiers. |
| `git commit -m "Message"` | Crée un commit avec les changements préparés. |
| `git commit --amend` | Modifie le dernier commit ; à utiliser avec prudence s'il a déjà été partagé. |

Exemple :

```bash
git status
git add src/main.py
git diff --staged
git commit -m "Correction du traitement des erreurs"
```

Un bon message décrit le changement : `Ajout de la commande /help` est plus utile que `modifs`.

### Branches

| Commande | Rôle |
|---|---|
| `git branch` | Liste les branches locales. |
| `git branch nom-branche` | Crée une branche. |
| `git switch nom-branche` | Change de branche. |
| `git switch -c nom-branche` | Crée une branche et bascule dessus. |
| `git merge nom-branche` | Fusionne la branche indiquée dans la branche courante. |
| `git branch -d nom-branche` | Supprime une branche locale déjà fusionnée, si Git l'autorise. |

Exemple :

```bash
git switch -c feat/ajout-recherche
# Modifier les fichiers, puis créer un commit
git add .
git commit -m "Ajout de la recherche"
git switch main
git pull
git merge feat/ajout-recherche
```

La branche principale peut s'appeler `main` ou avoir un autre nom selon le dépôt. Vérifiez son nom avant de copier l'exemple.

### Dépôt distant

| Commande | Rôle |
|---|---|
| `git fetch` | Récupère les informations distantes sans fusionner les changements dans la branche courante. |
| `git pull` | Récupère et intègre les changements distants. |
| `git push` | Envoie les commits locaux vers le dépôt distant. |
| `git push -u origin nom-branche` | Envoie une branche et configure son suivi distant. |

Exemple pour la première publication d'une branche :

```bash
git push -u origin feat/ajout-recherche
```

### Annuler ou corriger : prudence

| Commande | Effet et précaution |
|---|---|
| `git restore fichier.txt` | Abandonne les modifications non préparées du fichier. Les changements concernés peuvent être perdus. |
| `git restore --staged fichier.txt` | Retire le fichier de la zone de préparation sans supprimer ses modifications du disque. |
| `git revert IDENTIFIANT_DU_COMMIT` | Crée un nouveau commit qui annule les effets d'un commit précédent. Souvent préférable pour un commit déjà partagé. |
| `git reset --hard` | Réinitialise les fichiers et l'index à l'état ciblé. Peut détruire des changements locaux. À éviter sans comprendre ses effets. |
| `git stash` | Met temporairement de côté des modifications locales. |
| `git stash pop` | Réapplique les changements mis de côté. |

Avant une commande destructive, vérifiez l'état du dépôt et, si nécessaire, faites une copie des modifications. Ne copiez pas aveuglément une commande trouvée en ligne.

### Les erreurs courantes

- **Oublier `git add` :** les modifications ne sont pas incluses dans le commit.
- **Oublier de créer un commit :** les changements locaux ne sont pas enregistrés dans l'historique.
- **Oublier `git push` :** le commit existe localement, mais n'est pas encore envoyé sur GitHub.
- **Confondre `pull` et `push` :** `pull` récupère des changements ; `push` envoie les commits locaux.
- **Commiter un `.env` :** vérifier le contenu du commit et traiter immédiatement tout secret exposé.
- **Utiliser `reset --hard` sans réfléchir :** les changements locaux peuvent être perdus.

---

## Comment utiliser GitHub

GitHub s'utilise depuis son site web. Pour créer un dépôt, contribuer à un projet ou administrer une organisation, il faut être connecté avec un compte ayant les permissions nécessaires.

Site officiel : [https://github.com](https://github.com).

### Repository (dépôt)

Un **repository** est l'espace consacré à un projet. Il peut contenir le code source, les fichiers de configuration, la documentation et l'historique Git.

#### Créer un dépôt
1. Se connecter à GitHub.
2. Cliquer sur **New repository**.
3. Donner un nom au dépôt.
4. Ajouter éventuellement une description.
5. Choisir entre **Public** et **Private**.
6. Ajouter si nécessaire un `README.md`, un `.gitignore` et une licence.
7. Créer le dépôt.


:::tip
Si vous possédez déjà un projet local, vous pouvez créer un dépôt distant vide puis le connecter à votre dépôt local. Si vous débutez, créer le dépôt avec un README peut être plus simple, mais il faudra tenir compte de son contenu initial lors de la connexion du dépôt local.
:::

#### Cloner un dépôt existant
Sur la page du dépôt, cliquez sur **Code** et copiez l'URL adaptée, puis exécutez :

```bash
git clone URL_DU_DEPOT
```

Vous obtenez une copie locale du dépôt, avec son historique.

#### Branches et Pull Requests
Une méthode de travail courante est la suivante :

1. Créer une branche dédiée à une fonctionnalité ou une correction.
2. Modifier les fichiers et créer des commits.
3. Envoyer la branche avec `git push`.
4. Ouvrir une **Pull Request (PR)** sur GitHub.
5. Expliquer le changement et demander une revue de code.
6. Corriger les remarques éventuelles.
7. Fusionner la PR selon les règles du projet.

:::tip
Une Pull Request permet de discuter et de vérifier les changements **avant leur fusion** dans la branche cible. Elle ne se limite pas à « envoyer du code ».
:::

#### Issues
Les **Issues** servent à suivre les bugs, tâches, demandes de fonctionnalités et questions liées au projet. Elles peuvent être associées à des personnes, des étiquettes (*labels*), des jalons (*milestones*) et des Pull Requests.

#### Releases
Les **Releases** servent à publier des versions identifiées d'un projet, par exemple `v1.0.0`, avec des notes de version et éventuellement des fichiers téléchargeables.

### Project

**GitHub Projects** est un outil de suivi et d'organisation du travail. Il permet de visualiser les tâches d'un ou de plusieurs dépôts sous forme de tableau, de liste ou de feuille de calcul, selon la vue choisie.

Il peut servir à :
- répartir les tâches entre les membres ;
- suivre leur avancement ;
- organiser les priorités ;
- relier les tâches aux Issues et aux Pull Requests ;
- avoir une vue globale du projet.

Exemple de colonnes pour un tableau de suivi :

| À faire | En cours | En revue | Terminé |
|---|---|---|---|
| Créer la page d'accueil | Développer la connexion | Vérifier le formulaire | Préparer le dépôt |

Ces colonnes sont un exemple d'organisation, pas des colonnes obligatoires de GitHub Projects.

**Différence à retenir :** un *repository* contient les fichiers et l'historique du code ; un *Project* aide à organiser les tâches et leur progression. Un Project peut regrouper des éléments provenant de plusieurs dépôts.

### Organisation

Une **GitHub Organization** est un espace partagé pour regrouper les dépôts et gérer la collaboration au nom d'une équipe, d'une association, d'une entreprise ou d'un groupe.

Une organisation permet notamment de :
- centraliser les dépôts de l'équipe ;
- gérer les membres et leurs rôles ;
- attribuer des permissions différentes selon les dépôts ;
- partager des paramètres et des règles ;
- utiliser des équipes (*Teams*) pour gérer plus facilement les accès ;
- gérer des Projects communs.

#### Exemple de structure pour une organisation

```text
Organisation GitHub
├── bot-discord
├── site-web
├── infrastructure
└── documentation
```

Les membres n'ont pas nécessairement tous les mêmes droits sur chaque dépôt. Il est préférable d'accorder **le minimum de permissions nécessaire** à chaque personne, puis d'augmenter les droits uniquement lorsque c'est justifié.

#### Bonnes pratiques de sécurité
- Activer l'authentification multifacteur (MFA/2FA).
- Limiter les droits d'administration aux personnes qui en ont réellement besoin.
- Vérifier régulièrement les membres et leurs permissions.
- Utiliser des équipes pour attribuer les accès plutôt que de gérer chaque personne séparément, lorsque c'est pertinent.
- Protéger la branche principale avec des règles adaptées au projet : revue obligatoire, vérifications automatisées ou restrictions de fusion.
- Ne jamais partager de mots de passe ou de jetons d'accès dans les dépôts, les Issues ou les messages.

---

## Workflow conseillé pour un projet en équipe

Voici un exemple de workflow simple. Les conventions exactes dépendent de l'équipe et du projet.

1. Récupérer le dépôt avec `git clone`.
2. Se placer dans le dossier du projet.
3. Récupérer les derniers changements avec `git pull`, lorsque c'est adapté.
4. Créer une branche de travail.
5. Modifier les fichiers.
6. Vérifier les changements avec `git status` et `git diff`.
7. Préparer les fichiers voulus avec `git add`.
8. Créer un commit clair.
9. Envoyer la branche avec `git push`.
10. Ouvrir une Pull Request.
11. Faire relire les changements, corriger si nécessaire, puis fusionner la PR.
12. Mettre à jour sa branche locale avant de commencer le travail suivant.

Exemple :

```bash
git clone https://github.com/organisation/mon-projet.git
cd mon-projet
git pull
git switch -c feat/ma-fonctionnalite

# Modifier les fichiers...

git status
git diff
git add src/
git diff --staged
git commit -m "Ajout de ma fonctionnalité"
git push -u origin feat/ma-fonctionnalite
```

Après l'envoi, ouvrez GitHub pour créer la Pull Request si le projet utilise ce processus.

### Convention de nommage des branches

Quelques préfixes courants :

- `feat/` : nouvelle fonctionnalité ;
- `fix/` : correction de bug ;
- `docs/` : documentation ;
- `refactor/` : réorganisation du code sans changement fonctionnel attendu ;
- `test/` : ajout ou modification de tests ;
- `chore/` : maintenance et tâches diverses.

Exemples : `feat/login`, `fix/503-reconnect`, `docs/installation`.

### Écrire de bons messages de commit

Un message de commit doit être court, précis et décrire le changement.

| À éviter | Préférer |
|---|---|
| `modif` | `Correction du calcul du total` |
| `test` | `Ajout des tests de validation` |
| `ça marche` | `Correction de la connexion à la base de données` |
| `update` | `Mise à jour des instructions d'installation` |

Il est possible d'adopter une convention commune à l'équipe, par exemple les préfixes `feat:`, `fix:`, `docs:` et `refactor:`.

---

## Sécurité : les règles à ne pas oublier

Un dépôt Git est un historique. Une donnée supprimée du dernier état des fichiers peut encore exister dans les anciens commits.

- **Ne jamais commiter de secrets** : mots de passe, clés privées, clés d'API, jetons ou fichiers de configuration sensibles.
- Ajouter les fichiers sensibles au `.gitignore` avant de les ajouter à Git.
- Utiliser un `.env.example` contenant uniquement des valeurs fictives.
- Vérifier les changements préparés avec `git diff --staged` avant chaque commit.
- Révoquer immédiatement tout secret publié accidentellement. Le retirer du fichier ne suffit pas.
- Ne pas considérer un dépôt privé comme un coffre-fort : les personnes autorisées à y accéder peuvent voir son contenu.
- Vérifier les permissions des collaborateurs et des applications connectées.
- Éviter d'ajouter au dépôt des données personnelles, des sauvegardes, des fichiers de logs ou des fichiers volumineux inutiles.
- Pour un projet sensible, prévoir des règles de protection de branches et une revue de code.

---

## Glossaire rapide

| Terme | Signification |
|---|---|
| Git | Outil de gestion de versions. |
| GitHub | Plateforme d'hébergement et de collaboration autour de dépôts Git. |
| Repository | Dépôt contenant les fichiers et l'historique d'un projet. |
| Commit | Enregistrement d'un ensemble de modifications. |
| Branch | Branche de développement. |
| Merge | Fusion de changements. |
| Remote | Dépôt distant. |
| Clone | Copie locale d'un dépôt distant. |
| Push | Envoi des commits locaux vers le dépôt distant. |
| Pull | Récupération et intégration des changements distants. |
| Fetch | Récupération des informations distantes sans intégration automatique. |
| Pull Request | Proposition de fusion de changements, avec possibilité de revue. |
| Issue | Élément de suivi d'un bug, d'une tâche ou d'une demande. |
| `.gitignore` | Fichier indiquant les chemins à ignorer lorsqu'ils ne sont pas déjà suivis. |
| `.env` | Fichier local de variables de configuration, souvent utilisé pour les secrets. |
| README | Documentation de présentation du projet. |

## Ressources officielles pour aller plus loin

- [Site officiel de Git](https://git-scm.com/)
- [Documentation de référence Git](https://git-scm.com/docs)
- [GitHub Docs](https://docs.github.com/)
- [GitHub Skills : formations pratiques](https://skills.github.com/)
- [Documentation Git intégrée à VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview)

---




Pour commencer, maîtrisez surtout ces commandes :

```bash
git status
git add
git commit
git pull
git push
git switch
```

Prenez l'habitude de vérifier les changements avant de les commiter et de ne jamais envoyer de secrets. Ces deux réflexes évitent déjà une bonne partie des problèmes classiques.
