---
title: PostgreSQL avec Docker
sidebar_position: 4
description: Ce support d'apprentissage vous guidera dans le processus de configuration d'une base de données PostgreSQL à l'aide de Docker.
slug: postgres-docker
tags: [course, info, sql, docker]
last_update:
  date: 2024-05-01
  author: Yann M. Vidamment (MorganKryze)
---

# PostgreSQL avec Docker

## Introduction

Ce support d'apprentissage vous guidera dans le processus de configuration d'une base de données PostgreSQL à l'aide de Docker. Docker est une plateforme permettant de développer, déployer et exécuter des applications dans des conteneurs. Les conteneurs sont des environnements légers, autonomes et exécutables qui embarquent tout ce dont une application a besoin pour fonctionner : le code, le runtime, les outils système, les bibliothèques et les paramètres.

Docker sera particulièrement pratique par rapport à une installation traditionnelle de PostgreSQL, car il vous permettra d'exécuter la base de données dans un environnement isolé, sans avoir à l'installer sur votre machine.

## Prérequis

- Un ordinateur.
- De préférence un éditeur de code comme Visual Studio Code.

## Étape 1 : Installer Docker

Docker est disponible pour Windows, macOS et Linux. Vous pouvez télécharger l'installeur depuis le [site officiel](https://www.docker.com/products/docker-desktop).

## Étape 2 : Créer un conteneur PostgreSQL

Docker Compose est un outil permettant de définir et d'exécuter des applications multi-conteneurs Docker. Avec Compose, vous utilisez un fichier YAML pour configurer les services de votre application.

Créez un nouveau répertoire nommé `database` et ajoutez un fichier `docker-compose.yml` avec le contenu suivant :

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

Puis ajoutez un fichier `.env` dans le même répertoire avec le contenu suivant :

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=mydatabase
DB_PORT=5432
```

Enfin, ajoutez le fichier `init.sql` dans le même répertoire avec le contenu suivant :

```sql
\c mydatabase
CREATE TABLE customer (id SERIAL PRIMARY KEY, name VARCHAR(50));
INSERT INTO customer (name) VALUES ('Alice');
INSERT INTO customer (name) VALUES ('Bob');
```

### Explication rapide

Les fichiers :

- `docker-compose.yml` : fichier principal définissant la configuration du conteneur.
- `.env` : contient les variables d'environnement pour le conteneur PostgreSQL (nom, utilisateur, mot de passe, port).
- `init.sql` : script SQL exécuté au démarrage du conteneur, créant une table `customer` et insérant deux lignes.

Configuration Docker :

- `image: postgres:alpine` : exécute un conteneur PostgreSQL sur un OS `alpine`.
- `restart` : si le conteneur s'arrête, il redémarre automatiquement.
- `hostname` : nom d'hôte du conteneur.
- `env_file` : chemin du fichier des variables d'environnement.
- `environment` : variables d'environnement pour PostgreSQL.
- `volumes` : `db` stocke les données de façon persistante, `init.sql` sera exécuté au démarrage.
- `ports` : port exposé pour accéder à la base PostgreSQL (ici [localhost:5432](http://localhost:5432)).

## Étape 3 : Démarrer le conteneur PostgreSQL

Ouvrez un terminal et placez-vous dans le répertoire `database`. Exécutez la commande suivante pour démarrer le conteneur PostgreSQL :

```bash
docker-compose up -d
```

Cette commande va créer et démarrer le conteneur PostgreSQL en arrière-plan. Pour vérifier qu'il est en cours d'exécution, utilisez :

```bash
docker ps
```

Vous devriez voir un conteneur postgres en cours d'exécution. À la fin des lignes, vous devriez voir une section "NAMES" avec le nom du conteneur, je vous recommande de le copier pour l'étape suivante.

## Étape 4 : Accéder à la base de données PostgreSQL

Maintenant que la base de données est démarrée, nous allons essayer de nous y connecter manuellement à l'aide de l'outil en ligne de commande `psql`. Vous pouvez utiliser la commande suivante pour vous connecter à la base :

```bash
docker exec -it database-db-1 psql -U postgres
```

:::caution
Ici, `database-db-1` est le nom du conteneur ; remplacez-le par le nom réel de votre conteneur si vous n'avez pas nommé votre répertoire de travail `database`.
:::

Maintenant que vous êtes connecté à la base de données PostgreSQL, vous pouvez exécuter des requêtes SQL. Par exemple, pour lister les bases de données :

```sql
\l
```

Pour vérifier que votre script SQL d'initialisation a bien été exécuté, vous pouvez lister les éléments de la table `customer`. Commencez par vous connecter à la base `mydatabase` :

```sql
\c mydatabase
```

Ensuite listez les éléments de la table `customer` :

```sql
SELECT * FROM customer;
```

## Étape 5 : Nettoyer

Pour arrêter et supprimer le conteneur PostgreSQL :

```bash
docker-compose down
```

Cependant, pour effacer les données persistantes, pensez à supprimer le répertoire `db`. Sinon, les données seront conservées pour la prochaine exécution du conteneur. Réitérez ces étapes si vous modifiez le fichier `init.sql` avec de nouvelles données.

## Pour aller plus loin

- [Commandes PostgreSQL](https://tomcam.github.io/postgres/) : liste de commandes PostgreSQL et bonnes pratiques.
- [Docker Compose](https://docs.docker.com/compose/) : documentation officielle de Docker Compose.

---

Auteur : [Yann M. Vidamment](https://github.com/MorganKryze)
