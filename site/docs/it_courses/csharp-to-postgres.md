---
title: C# vers PostgreSQL
sidebar_position: 3
description: Ce support d'apprentissage vous permettra de créer et d'héberger un site web statique pour votre documentation. L'outil est développé pour un projet C# mais peut être utilisé pour tout autre projet, les articles étant rédigés en markdown.
slug: csharp-to-postgres
tags: [course, info, csharp]
last_update:
  date: 2024-05-01
  author: Yann M. Vidamment (MorganKryze)
additional_contributors:
  - username: Yann M. Vidamment (MorganKryze)
    html_url: https://github.com/MorganKryze
    avatar_url: https://github.com/MorganKryze.png
---

# C# vers PostgreSQL

## Introduction

Ce support d'apprentissage vous guidera dans le processus de connexion d'une application C# à une base de données PostgreSQL.

:::caution
Dans ce cours, nous partons du principe que vous avez déjà installé PostgreSQL sur votre machine. Si ce n'est pas le cas, consultez plutôt le matériel d'apprentissage [PostgreSQL](postgres-docker.md).
:::

## Prérequis

- Un éditeur de code (Visual Studio Code, NeoVim, etc.)
- [.NET 6.0](https://dotnet.microsoft.com/download) ou version ultérieure

## Étape 1 : Configurer le projet

Nous allons commencer par créer une nouvelle application console C# de base.

```bash
dotnet new console -n MyPostgresApp
cd MyPostgresApp
```

## Étape 2 : Ajouter le package Npgsql

Nous allons utiliser le package Npgsql pour nous connecter à la base de données PostgreSQL.

```bash
dotnet add package Npgsql
```

## Étape 3 : Créer le contenu de la base de données

(Ignorez cette étape si vous possédez déjà une base de données créée, par exemple avec un fichier d'initialisation.)

Nous commençons par entrer dans la base de données PostgreSQL via le terminal. Remplacez `postgres` par le nom d'utilisateur que vous avez utilisé pour créer la base de données.

```bash
psql -h localhost -U postgres
```

Ensuite, créez une nouvelle base de données et une table.

```sql
CREATE DATABASE mydatabase;
```

Accédez à la nouvelle base de données.

```sql
\c mydatabase
```

Créez une nouvelle table.

```sql
CREATE TABLE customer (id SERIAL PRIMARY KEY, name VARCHAR(50));
```

## Étape 4 : Se connecter à la base de données

Ouvrez le fichier nommé `Program.cs` et ajoutez le code suivant.

```csharp
using System;
using Npgsql;

class Program
{
    static void Main()
    {
        var cs = "Host=localhost;Username=postgres;Password=your_password;Database=mydatabase";
        using var con = new NpgsqlConnection(cs);
        con.Open();

        using var cmd = new NpgsqlCommand("SELECT version()", con);
        var version = cmd.ExecuteScalar().ToString();
        Console.WriteLine($"Version de PostgreSQL : {version}");
    }
}
```

:::caution
Remplacez `your_password` par le mot de passe que vous avez utilisé pour créer la base de données.
:::

## Étape 5 : Exécuter l'application

Exécutez l'application.

```bash
dotnet run
```

Vous devriez voir la version de PostgreSQL s'afficher dans la console.

## Étape 8 : Ajouter un client

Ajoutez le code suivant dans la méthode `Main`.

```csharp
using var cmd = new NpgsqlCommand("INSERT INTO customer (name) VALUES ('John Doe')", con);
cmd.ExecuteNonQuery();
```

Exécutez à nouveau l'application.

```bash
dotnet run
```

## Étape 7 : Voir le contenu de la table

Ajoutez le code suivant dans la méthode `Main`.

```csharp
using var cmd = new NpgsqlCommand("SELECT * FROM customer", con);
using var reader = cmd.ExecuteReader();
while (reader.Read())
{
    Console.WriteLine($"{reader.GetInt32(0)} {reader.GetString(1)}");
}
```

Exécutez à nouveau l'application.

```bash
dotnet run
```

Vous devriez voir « 1 John Doe » s'afficher dans la console.

## Pour aller plus loin

- [Documentation Npgsql](https://www.npgsql.org/doc/index.html)
- [Documentation PostgreSQL](https://www.postgresql.org/docs/current/index.html)
- [Apprendre le SQL](https://roadmap.sh/sql)
