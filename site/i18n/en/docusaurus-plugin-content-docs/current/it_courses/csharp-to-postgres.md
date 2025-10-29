---
title: C# to PostgreSQL
description: This learning material will guide you through connecting a C# application to a PostgreSQL database using Npgsql.
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

This learning material will guide you through the process of connecting a C# application to a PostgreSQL database using the Npgsql package, the most popular .NET driver for PostgreSQL.

**Learning objectives:**

- Create a C# project and install Npgsql
- Connect to a PostgreSQL database
- Execute SQL queries (SELECT, INSERT, etc.)
- Read and display data from the database

:::caution
In this course, we assume that you have PostgreSQL already installed on your machine. If not, please refer to the [PostgreSQL with Docker](postgres-docker.md) course.
:::

## Prerequisites & Installation

### Prior knowledge

- Basic knowledge of C#
- Basic SQL concepts (CREATE, INSERT, SELECT)

### Required tools

| Tool        | Version      | Link                                                          | Description                                    |
| ----------- | ------------ | ------------------------------------------------------------- | ---------------------------------------------- |
| .NET SDK    | 6.0+         | [dotnet.microsoft.com](https://dotnet.microsoft.com/download) | Development framework                          |
| PostgreSQL  | Any version  | [postgres-docker](postgres-docker.md)                         | Database (via Docker or local installation)    |
| Code editor | -            | VS Code, NeoVim, etc.                                         | For editing code                               |

## Project setup

### Create the project

Create a new C# console application:

```bash
dotnet new console -n MyPostgresApp
cd MyPostgresApp
```

### Install Npgsql package

Npgsql is the .NET driver for PostgreSQL. Install it via NuGet:

```bash
dotnet add package Npgsql
```

## Create the database

:::note
Skip this step if you already have a database created (for example with a Docker initialization file).
:::

### Connect to PostgreSQL

Enter PostgreSQL via the terminal. Replace `postgres` with your username:

```bash
psql -h localhost -U postgres
```

### Create database and table

```sql
CREATE DATABASE mydatabase;
```

Access the new database:

```sql
\c mydatabase
```

Create a `customer` table:

```sql
CREATE TABLE customer (id SERIAL PRIMARY KEY, name VARCHAR(50));
```

Exit psql:

```sql
\q
```

## Connect to the database

Open the `Program.cs` file and add the following code:

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

### Run the application

```bash
dotnet run
```

You should see the PostgreSQL version displayed in the console.

## Add a customer (INSERT)

Add the following code to the `Main` method, after the version check:

```csharp
using var cmdInsert = new NpgsqlCommand("INSERT INTO customer (name) VALUES ('John Doe')", con);
cmdInsert.ExecuteNonQuery();
Console.WriteLine("Customer added successfully");
```

Run the application again:

```bash
dotnet run
```

## Read table content (SELECT)

Add the following code to the `Main` method:

```csharp
using var cmdSelect = new NpgsqlCommand("SELECT * FROM customer", con);
using var reader = cmdSelect.ExecuteReader();

Console.WriteLine("\nCustomer list:");
while (reader.Read())
{
    Console.WriteLine($"{reader.GetInt32(0)} {reader.GetString(1)}");
}
```

Run the application:

```bash
dotnet run
```

You should see "1 John Doe" (or more if you ran the insertion multiple times).

## Complete code

Here is the complete `Program.cs` code:

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

        // Check PostgreSQL version
        using var cmdVersion = new NpgsqlCommand("SELECT version()", con);
        var version = cmdVersion.ExecuteScalar().ToString();
        Console.WriteLine($"PostgreSQL version: {version}");

        // Add a customer
        using var cmdInsert = new NpgsqlCommand("INSERT INTO customer (name) VALUES ('John Doe')", con);
        cmdInsert.ExecuteNonQuery();
        Console.WriteLine("Customer added successfully");

        // Read all customers
        using var cmdSelect = new NpgsqlCommand("SELECT * FROM customer", con);
        using var reader = cmdSelect.ExecuteReader();

        Console.WriteLine("\nCustomer list:");
        while (reader.Read())
        {
            Console.WriteLine($"ID: {reader.GetInt32(0)}, Name: {reader.GetString(1)}");
        }
    }
}
```

## Best practices

- **Connection strings**: Never hardcode passwords. Use environment variables or a configuration file
- **Using statements**: Always use `using` for connections and SQL commands to free resources
- **Parameterized queries**: Use parameters to avoid SQL injection:

```csharp
var cmd = new NpgsqlCommand("INSERT INTO customer (name) VALUES (@name)", con);
cmd.Parameters.AddWithValue("name", "Jane Doe");
cmd.ExecuteNonQuery();
```

- **Error handling**: Add try-catch blocks to handle connection exceptions

## Going further

- **Entity Framework Core**: ORM to automatically manage SQL queries
- **Dapper**: Lightweight and performant micro-ORM
- **Transactions**: Ensure data integrity with `BeginTransaction()`
- **Async/Await**: Use asynchronous versions (`OpenAsync`, `ExecuteReaderAsync`, etc.)

## Resources

- [Npgsql documentation](https://www.npgsql.org/doc/index.html) - Official .NET driver documentation
- [PostgreSQL Documentation](https://www.postgresql.org/docs/current/index.html) - Complete PostgreSQL documentation
- [Learn SQL](https://roadmap.sh/sql) - Roadmap to learn SQL
- [ADO.NET Guide](https://docs.microsoft.com/dotnet/framework/data/adonet/) - Fundamentals of data access in .NET
