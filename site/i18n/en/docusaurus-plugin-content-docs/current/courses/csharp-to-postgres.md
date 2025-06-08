---
sidebar_position: 3
title: C# to PostgreSQL
author: Yann M. Vidamment (MorganKryze)
description: This learning material will let you create and host a static website for your documentation. The tool is developed for a C# project but can be used for any other project as the articles are written in markdown.
tags: [info]
hide_table_of_contents: false
slug: csharp-to-postgres
---

# C# to PostgreSQL

## Table of Contents

- [C# to PostgreSQL](#c-to-postgresql)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Step 1: Set up the project](#step-1-set-up-the-project)
  - [Step 2: Add the Npgsql package](#step-2-add-the-npgsql-package)
  - [Step 3: Create the database content](#step-3-create-the-database-content)
  - [Step 4: Connect to the database](#step-4-connect-to-the-database)
  - [Step 5: Run the application](#step-5-run-the-application)
  - [Step 8: Add a customer](#step-8-add-a-customer)
  - [Step 7: See the table content](#step-7-see-the-table-content)
  - [To go further](#to-go-further)

## Introduction

This learning material will guide you through the process of connecting a C# application to a PostgreSQL database.

:::caution
In this material, we assume that you have a PostgreSQL database installed on your machine. If you don't, consider reading the [PostgreSQL](postgres-docker.md) learning material.
:::

## Prerequisites

- A code editor (Visual Studio Code, NeoVim, etc.)
- [.NET 6.0](https://dotnet.microsoft.com/download) or later

## Step 1: Set up the project

We will start by creating a new C# basic console application.

```bash
dotnet new console -n MyPostgresApp
cd MyPostgresApp
```

## Step 2: Add the Npgsql package

We will use the Npgsql package to connect to the PostgreSQL database.

```bash
dotnet add package Npgsql
```

## Step 3: Create the database content

[Skip this step if you already have a database created with an init file for example.]

We start by entering via the terminal the PostgreSQL database. Consider replacing `postgres` with the username you used to create the database.

```bash
psql -h localhost -U postgres
```

Then, create a new database and a table.

```sql
CREATE DATABASE mydatabase;
```

Move to the new database.

```sql
\c mydatabase
```

Create a new table.

```sql
CREATE TABLE customer (id SERIAL PRIMARY KEY, name VARCHAR(50));
```

## Step 4: Connect to the database

Open the file named `Program.cs` and add the following code.

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
        Console.WriteLine($"PostgreSQL version: {version}");
    }
}
```

:::caution
Replace `your_password` with the password you used to create the database.
:::

## Step 5: Run the application

Run the application.

```bash
dotnet run
```

You should see the PostgreSQL version displayed in the console.

## Step 8: Add a customer

Add the following code to the `Main` method.

```csharp
using var cmd = new NpgsqlCommand("INSERT INTO customer (name) VALUES ('John Doe')", con);
cmd.ExecuteNonQuery();
```

Run the application again.

```bash
dotnet run
```

## Step 7: See the table content

Add the following code to the `Main` method.

```csharp
using var cmd = new NpgsqlCommand("SELECT * FROM customer", con);
using var reader = cmd.ExecuteReader();
while (reader.Read())
{
    Console.WriteLine($"{reader.GetInt32(0)} {reader.GetString(1)}");
}
```

Run the application again.

```bash
dotnet run
```

You should see "1 John Doe" displayed in the console.

## To go further

- [Npgsql documentation](https://www.npgsql.org/doc/index.html)
- [PostgreSQL documentation](https://www.postgresql.org/docs/current/index.html)
- [Learn SQL](https://roadmap.sh/sql)

---

Last update: May. 2024

Author: [Yann M. Vidamment](https://github.com/MorganKryze)
