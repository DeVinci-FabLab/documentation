---
title: C# vers PostgreSQL
description: Ce support d'apprentissage vous permettra de connecter une application C# à une base de données PostgreSQL en utilisant Npgsql.
slug: csharp-to-postgres
tags: [course, info, csharp, sql]
last_update:
  date: 2024-05-01
  author: Yann M. Vidamment (MorganKryze)
additional_contributors:
  - username: Yann M. Vidamment (MorganKryze)
    html_url: https://github.com/MorganKryze
    avatar_url: https://github.com/MorganKryze.png
---

## Introduction

Ce support d'apprentissage vous guidera dans le processus de connexion d'une application C# à une base de données PostgreSQL en utilisant le package Npgsql, le driver .NET le plus populaire pour PostgreSQL.

**Objectifs d'apprentissage :**

- Créer un projet C# et installer Npgsql
- Se connecter à une base de données PostgreSQL
- Exécuter des requêtes SQL (SELECT, INSERT, etc.)
- Lire et afficher des données depuis la base

:::caution
Dans ce cours, nous partons du principe que vous avez déjà installé PostgreSQL sur votre machine. Si ce n'est pas le cas, consultez le cours [PostgreSQL avec Docker](postgres-docker.md).
:::

## Prérequis & Installation

### Connaissances préalables

- Notions de base en C#
- Concepts SQL de base (CREATE, INSERT, SELECT)

### Outils requis

| Outil           | Version       | Lien                                                          | Description                                         |
| --------------- | ------------- | ------------------------------------------------------------- | --------------------------------------------------- |
| .NET SDK        | 6.0+          | [dotnet.microsoft.com](https://dotnet.microsoft.com/download) | Framework de développement                          |
| PostgreSQL      | Toute version | [postgres-docker](postgres-docker.md)                         | Base de données (via Docker ou installation locale) |
| Éditeur de code | -             | VS Code, NeoVim, etc.                                         | Pour éditer le code                                 |

## Configuration du projet

### Création du projet

Créez une nouvelle application console C# :

```bash
dotnet new console -n MyPostgresApp
cd MyPostgresApp
```

### Installation du package Npgsql

Npgsql est le driver .NET pour PostgreSQL. Installez-le via NuGet :

```bash
dotnet add package Npgsql
```

## Création de la base de données

:::note
Ignorez cette étape si vous possédez déjà une base de données créée (par exemple avec un fichier d'initialisation Docker).
:::

### Connexion à PostgreSQL

Entrez dans PostgreSQL via le terminal. Remplacez `postgres` par votre nom d'utilisateur :

```bash
psql -h localhost -U postgres
```

### Créer la base et la table

```sql
CREATE DATABASE mydatabase;
```

Accédez à la nouvelle base de données :

```sql
\c mydatabase
```

Créez une table `customer` :

```sql
CREATE TABLE customer (id SERIAL PRIMARY KEY, name VARCHAR(50));
```

Quittez psql :

```sql
\q
```

## Connexion à la base de données

Ouvrez le fichier `Program.cs` et ajoutez le code suivant :

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

### Exécuter l'application

```bash
dotnet run
```

Vous devriez voir la version de PostgreSQL s'afficher dans la console.

## Ajouter un client (INSERT)

Ajoutez le code suivant dans la méthode `Main`, après la vérification de version :

```csharp
using var cmdInsert = new NpgsqlCommand("INSERT INTO customer (name) VALUES ('John Doe')", con);
cmdInsert.ExecuteNonQuery();
Console.WriteLine("Client ajouté avec succès");
```

Exécutez à nouveau l'application :

```bash
dotnet run
```

## Lire le contenu de la table (SELECT)

Ajoutez le code suivant dans la méthode `Main` :

```csharp
using var cmdSelect = new NpgsqlCommand("SELECT * FROM customer", con);
using var reader = cmdSelect.ExecuteReader();

Console.WriteLine("\nListe des clients :");
while (reader.Read())
{
    Console.WriteLine($"{reader.GetInt32(0)} {reader.GetString(1)}");
}
```

Exécutez l'application :

```bash
dotnet run
```

Vous devriez voir "1 John Doe" (ou plus si vous avez exécuté plusieurs fois l'insertion).

## Code complet

Voici le code `Program.cs` complet :

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

        // Vérifier la version de PostgreSQL
        using var cmdVersion = new NpgsqlCommand("SELECT version()", con);
        var version = cmdVersion.ExecuteScalar().ToString();
        Console.WriteLine($"Version de PostgreSQL : {version}");

        // Ajouter un client
        using var cmdInsert = new NpgsqlCommand("INSERT INTO customer (name) VALUES ('John Doe')", con);
        cmdInsert.ExecuteNonQuery();
        Console.WriteLine("Client ajouté avec succès");

        // Lire tous les clients
        using var cmdSelect = new NpgsqlCommand("SELECT * FROM customer", con);
        using var reader = cmdSelect.ExecuteReader();

        Console.WriteLine("\nListe des clients :");
        while (reader.Read())
        {
            Console.WriteLine($"ID: {reader.GetInt32(0)}, Nom: {reader.GetString(1)}");
        }
    }
}
```

## Bonnes pratiques

- **Chaînes de connexion** : Ne jamais hardcoder les mots de passe. Utilisez des variables d'environnement ou un fichier de configuration
- **Using statements** : Toujours utiliser `using` pour les connexions et commandes SQL afin de libérer les ressources
- **Requêtes paramétrées** : Utilisez des paramètres pour éviter les injections SQL :

```csharp
var cmd = new NpgsqlCommand("INSERT INTO customer (name) VALUES (@name)", con);
cmd.Parameters.AddWithValue("name", "Jane Doe");
cmd.ExecuteNonQuery();
```

- **Gestion des erreurs** : Ajoutez des try-catch pour gérer les exceptions de connexion

## Aller plus loin

- **Entity Framework Core** : ORM pour gérer automatiquement les requêtes SQL
- **Dapper** : Micro-ORM léger et performant
- **Transactions** : Garantir l'intégrité des données avec `BeginTransaction()`
- **Async/Await** : Utilisez les versions asynchrones (`OpenAsync`, `ExecuteReaderAsync`, etc.)

## Ressources

- [Documentation Npgsql](https://www.npgsql.org/doc/index.html) - Documentation officielle du driver .NET
- [PostgreSQL Documentation](https://www.postgresql.org/docs/current/index.html) - Documentation complète PostgreSQL
- [Learn SQL](https://roadmap.sh/sql) - Roadmap pour apprendre SQL
- [ADO.NET Guide](https://docs.microsoft.com/dotnet/framework/data/adonet/) - Fondamentaux de l'accès aux données en .NET
