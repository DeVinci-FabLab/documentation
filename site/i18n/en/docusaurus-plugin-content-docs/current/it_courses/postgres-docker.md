---
title: PostgreSQL with Docker
description: This learning material will guide you through the process of setting up a PostgreSQL database using Docker.
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

Docker is a platform that allows you to develop, ship, and run applications in containers. Containers are lightweight, standalone, and executable packages that include everything needed to run an application: code, runtime, system tools, libraries, and settings.

This guide will help you set up a PostgreSQL database with Docker, which is particularly convenient compared to a traditional installation as you can run the database in an isolated environment without having to install it directly on your machine.

**Learning objectives:**

- Understand the basics of Docker and Docker Compose
- Configure a PostgreSQL container with environment variables
- Use an initialization script to create tables
- Access and interact with PostgreSQL via psql

## Prerequisites & Installation

### Prior knowledge

- Basic command-line knowledge
- Basic SQL concepts (optional but useful)

### Required tools

| Tool          | Version | Link                                                         | Description                  |
| ------------- | ------- | ------------------------------------------------------------ | ---------------------------- |
| Docker Desktop| Latest  | [docker.com](https://www.docker.com/products/docker-desktop) | Containerization platform    |
| Code editor   | -       | VS Code, etc.                                                | For editing config files     |

### Installing Docker

Docker is available for Windows, macOS, and Linux. Download the installer from the [official website](https://www.docker.com/products/docker-desktop) and follow the installation instructions.

### Verification

```bash
docker --version
docker-compose --version
```

## Configure PostgreSQL container

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services.

### Project structure

Create a `database` directory and add three files:

```bash
database/
├── docker-compose.yml    # Docker Compose configuration
├── .env                  # Environment variables
└── init.sql              # Initialization script
```

### `docker-compose.yml` file

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

### `.env` file

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=mydatabase
DB_PORT=5432
```

:::warning
Never commit the `.env` file to a public repository! Add it to `.gitignore`.
:::

### `init.sql` file

```sql
\c mydatabase
CREATE TABLE customer (id SERIAL PRIMARY KEY, name VARCHAR(50));
INSERT INTO customer (name) VALUES ('Alice');
INSERT INTO customer (name) VALUES ('Bob');
```

### Configuration explanations

**Files:**

- **`docker-compose.yml`**: Defines the container configuration
- **`.env`**: Environment variables (name, user, password, port)
- **`init.sql`**: SQL script executed at startup, creating a `customer` table and inserting two rows

**Docker configuration:**

- **`image: postgres:alpine`**: Runs PostgreSQL on Alpine OS (lightweight)
- **`restart: always`**: Automatically restarts the container if it stops
- **`hostname`**: Container hostname
- **`env_file`**: Path to the environment variables file
- **`environment`**: Environment variables for PostgreSQL
- **`volumes`**:
  - `db`: Stores data persistently
  - `init.sql`: Will be executed on first startup
- **`ports`**: Exposed port to access the database (here [`localhost:5432`](http://localhost:5432))

## Start PostgreSQL container

Navigate to the `database` directory and run:

```bash
docker-compose up -d
```

This command creates and starts the PostgreSQL container in the background.

### Verify container is running

```bash
docker ps
```

You should see a postgres container running. In the "NAMES" column, note the container name (probably `database-db-1` if your folder is called `database`).

## Access PostgreSQL database

Now that the database is running, connect manually with the `psql` command-line tool:

```bash
docker exec -it database-db-1 psql -U postgres
```

:::caution
Replace `database-db-1` with the actual name of your container if you didn't name your working directory `database`.
:::

### Useful psql commands

Once connected to PostgreSQL, you can execute SQL queries:

**List databases:**

```sql
\l
```

**Connect to a database:**

```sql
\c mydatabase
```

**List elements in `customer` table:**

```sql
SELECT * FROM customer;
```

You should see the two entries created by the initialization script (Alice and Bob).

**Exit psql:**

```sql
\q
```

## Stop and cleanup

### Stop the container

```bash
docker-compose down
```

### Delete persistent data

Data is kept in the `db/` directory. To completely erase the data:

```bash
rm -rf db/
```

:::note
Delete the `db/` folder if you modify the `init.sql` file and want to reinitialize the database with new data.
:::

## Best practices

- **Environment variables**: Never expose passwords in plain text, use `.env` and `.gitignore`
- **Named volumes**: For production, prefer Docker named volumes rather than bind mounts
- **Data backup**: Remember to regularly backup your `db/` folder
- **Logs**: Check logs with `docker logs database-db-1` in case of problems

## Resources

- [PostgreSQL commands](https://tomcam.github.io/postgres/) - List of commands and best practices
- [Docker Compose documentation](https://docs.docker.com/compose/) - Official guide
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Complete documentation
- [Docker PostgreSQL Image](https://hub.docker.com/_/postgres) - Official image documentation
