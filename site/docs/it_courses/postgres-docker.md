---
title: PostgreSQL avec Docker
description: Ce support d'apprentissage vous guidera dans le processus de configuration d'une base de données PostgreSQL à l'aide de Docker.
slug: postgres-docker
tags: [course, info, sql, docker]
last_update:
  date: 2024-05-01
  author: Yann M. Vidamment (MorganKryze)
additional_contributors:
  - username: Yann M. Vidamment (MorganKryze)
    html_url: https://github.com/MorganKryze
    avatar_url: https://github.com/MorganKryze.png
---

## Introduction

Docker est une plateforme permettant de développer, déployer et exécuter des applications dans des conteneurs. Les conteneurs sont des environnements légers, autonomes et exécutables qui embarquent tout ce dont une application a besoin pour fonctionner : le code, le runtime, les outils système, les bibliothèques et les paramètres.

Ce guide vous aidera à configurer une base de données PostgreSQL avec Docker, ce qui est particulièrement pratique par rapport à une installation traditionnelle car vous pourrez exécuter la base de données dans un environnement isolé, sans avoir à l'installer directement sur votre machine.

**Objectifs d'apprentissage :**

- Comprendre les bases de Docker et Docker Compose
- Configurer un conteneur PostgreSQL avec variables d'environnement
- Utiliser un script d'initialisation pour créer des tables
- Accéder et interagir avec PostgreSQL via psql

## Prérequis & Installation

### Connaissances préalables

- Notions de base en ligne de commande
- Concepts SQL de base (optionnel mais utile)

### Outils requis

| Outil           | Version  | Lien                                                         | Description                        |
| --------------- | -------- | ------------------------------------------------------------ | ---------------------------------- |
| Docker Desktop  | Dernière | [docker.com](https://www.docker.com/products/docker-desktop) | Plateforme de conteneurisation     |
| Éditeur de code | -        | VS Code, etc.                                                | Pour éditer les fichiers de config |

### Installation de Docker

Docker est disponible pour Windows, macOS et Linux. Téléchargez l'installeur depuis le [site officiel](https://www.docker.com/products/docker-desktop) et suivez les instructions d'installation.

### Vérification

```bash
docker --version
docker-compose --version
```

## Configuration du conteneur PostgreSQL

Docker Compose est un outil permettant de définir et d’exécuter des applications multi-conteneurs Docker. Avec Compose, vous utilisez un fichier YAML pour configurer les services de votre application.

### Structure du projet

Créez un répertoire `database` et ajoutez-y trois fichiers :

```bash
database/
├── docker-compose.yml    # Configuration Docker Compose
├── .env                  # Variables d'environnement
└── init.sql              # Script d'initialisation
```

### Fichier `docker-compose.yml`

```yaml
services:
  db:
    image: postgres:alpine
    restart: always
    hostname: ${DB_HOST}
    env_file:
      - .env
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    volumes:
      - ./db:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - ${DB_PORT}:5432

volumes:
  data:
```

### Fichier `.env`

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=mydatabase
DB_PORT=5432
```

:::warning
Ne commitez jamais le fichier `.env` dans un dépôt public ! Ajoutez-le à `.gitignore`.
:::

### Fichier `init.sql`

```sql
\c mydatabase
CREATE TABLE customer (id SERIAL PRIMARY KEY, name VARCHAR(50));
INSERT INTO customer (name) VALUES ('Alice');
INSERT INTO customer (name) VALUES ('Bob');
```

### Explications de la configuration

**Fichiers :**

- **`docker-compose.yml`** : Définit la configuration du conteneur
- **`.env`** : Variables d'environnement (nom, utilisateur, mot de passe, port)
- **`init.sql`** : Script SQL exécuté au démarrage, créant une table `customer` et insérant deux lignes

**Configuration Docker :**

- **`image: postgres:alpine`** : Exécute PostgreSQL sur un OS Alpine (léger)
- **`restart: always`** : Redémarre automatiquement le conteneur s'il s'arrête
- **`hostname`** : Nom d'hôte du conteneur
- **`env_file`** : Chemin du fichier des variables d'environnement
- **`environment`** : Variables d'environnement pour PostgreSQL
- **`volumes`** :
  - `db` : Stocke les données de façon persistante
  - `init.sql` : Sera exécuté au premier démarrage
- **`ports`** : Port exposé pour accéder à la base (ici [`localhost:5432`](http://localhost:5432))

## Démarrer le conteneur PostgreSQL

Placez-vous dans le répertoire `database` et exécutez :

```bash
docker-compose up -d
```

Cette commande crée et démarre le conteneur PostgreSQL en arrière-plan.

### Vérifier que le conteneur est en cours d'exécution

```bash
docker ps
```

Vous devriez voir un conteneur postgres en cours d'exécution. Dans la colonne "NAMES", notez le nom du conteneur (probablement `database-db-1` si votre dossier s'appelle `database`).

## Accéder à la base de données PostgreSQL

Maintenant que la base de données est démarrée, connectez-vous manuellement avec l'outil en ligne de commande `psql` :

```bash
docker exec -it database-db-1 psql -U postgres
```

:::caution
Remplacez `database-db-1` par le nom réel de votre conteneur si vous n'avez pas nommé votre répertoire de travail `database`.
:::

### Commandes psql utiles

Une fois connecté à PostgreSQL, vous pouvez exécuter des requêtes SQL :

**Lister les bases de données :**

```sql
\l
```

**Se connecter à une base de données :**

```sql
\c mydatabase
```

**Lister les éléments de la table `customer` :**

```sql
SELECT * FROM customer;
```

Vous devriez voir les deux entrées créées par le script d'initialisation (Alice et Bob).

**Quitter psql :**

```sql
\q
```

## Arrêter et nettoyer

### Arrêter le conteneur

```bash
docker-compose down
```

### Supprimer les données persistantes

Les données sont conservées dans le répertoire `db/`. Pour effacer complètement les données :

```bash
rm -rf db/
```

:::note
Supprimez le dossier `db/` si vous modifiez le fichier `init.sql` et souhaitez réinitialiser la base avec de nouvelles données.
:::

## Bonnes pratiques

- **Variables d'environnement** : Ne jamais exposer les mots de passe en clair, utilisez `.env` et `.gitignore`
- **Volumes nommés** : Pour la production, préférez les volumes Docker nommés plutôt que les bind mounts
- **Sauvegarde des données** : Pensez à sauvegarder régulièrement votre dossier `db/`
- **Logs** : Consultez les logs avec `docker logs database-db-1` en cas de problème

## Ressources

- [Commandes PostgreSQL](https://tomcam.github.io/postgres/) - Liste de commandes et bonnes pratiques
- [Documentation Docker Compose](https://docs.docker.com/compose/) - Guide officiel
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Documentation complète
- [Docker PostgreSQL Image](https://hub.docker.com/_/postgres) - Documentation de l'image officielle
