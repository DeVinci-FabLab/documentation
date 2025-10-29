---
title: Créez la documentation de votre projet
description: Ce cours vous permettra de créer et héberger un site web statique pour votre documentation. L'outil est développé pour un projet C# mais peut être utilisé pour tout autre projet, les articles étant rédigés en markdown.
slug: csharp-docs
tags: [course, info, csharp]
last_update:
  date: 2024-04-30
  author: Yann M. Vidamment (MorganKryze)
additional_contributors:
  - username: Yann M. Vidamment (MorganKryze)
    html_url: https://github.com/MorganKryze
    avatar_url: https://github.com/MorganKryze.png
---

## Introduction

La documentation est essentielle pour aider les utilisateurs à comprendre comment utiliser les outils que vous créez. C'est aussi un excellent moyen de mettre en valeur la qualité de votre travail.

Cet article vous guidera dans le processus de création d'une documentation pour votre projet C# en utilisant l'outil [DocFX](https://dotnet.github.io/docfx/).

**Objectifs d'apprentissage :**

- Installer et configurer DocFX pour un projet C#
- Générer automatiquement la documentation API depuis le code
- Personnaliser la documentation avec des sections et pages supplémentaires
- Déployer la documentation sur GitHub Pages

:::info
Bien que ce cours utilise C# comme exemple, DocFX peut documenter tout projet .NET et la méthodologie s'applique à d'autres générateurs de documentation.
:::

## Prérequis & Installation

### Connaissances préalables

- Connaissances de base en C#
- Disposer d'un projet C# à documenter (même une simple application console)

### Outils requis

| Outil           | Version  | Lien                                                                     | Description                 |
| --------------- | -------- | ------------------------------------------------------------------------ | --------------------------- |
| .NET SDK        | 6.0+     | [dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet/6.0) | Framework de développement  |
| DocFX           | Dernière | Installation via dotnet tool                                             | Générateur de documentation |
| Éditeur de code | -        | VS Code, NeoVim, Notepad++, etc.                                         | Pour éditer les fichiers    |

### Installation de DocFX

Vérifiez que dotnet est bien installé :

```bash
dotnet --version
```

Installez ou mettez à jour DocFX :

```bash
dotnet tool update -g docfx
```

## Configuration de l'espace de travail

### Structure de projet initiale

Supposons que votre projet a une structure simple comme celle-ci :

```bash
Example_project  # Dossier racine
└───MyApp
    ├───bin
    ├───MyApp.csproj
    └───Program.cs
```

### Initialisation de DocFX

Placez-vous dans le dossier racine (`Example_project/`) et lancez :

```bash
docfx init -y -o documentation
```

Cela créera un dossier `documentation` à la racine. Structure obtenue :

```bash
Example_project  # racine
├───documentation
│   ├───docs
│   │   ├───getting-started.md
│   │   ├───introduction.md
│   │   └───toc.yml
│   ├───docfx.json
│   ├───index.md
│   └───toc.yml
└───MyApp
    ├───bin
    ├───MyApp.csproj
    └───Program.cs
```

### Configuration de `docfx.json`

Voici le contenu par défaut de `docfx.json` :

```json
{
  "metadata": [
    {
      "src": [
        {
          "src": "../src",
          "files": ["**/*.csproj"]
        }
      ],
      "dest": "api"
    }
  ],
  "build": {
    "content": [
      {
        "files": ["**/*.{md,yml}"],
        "exclude": ["_site/**"]
      }
    ],
    "resource": [
      {
        "files": ["img/**"]
      }
    ],
    "output": "_site",
    "template": ["default", "modern"],
    "globalMetadata": {
      "_appName": "",
      "_appTitle": "",
      "_enableSearch": true,
      "pdf": true
    }
  }
}
```

:::tip
Pour un affichage plus pratique et cibler votre projet, mettez à jour le fichier avec la version ci-dessous. Consultez la [documentation officielle](https://dotnet.github.io/docfx/reference/docfx-json-reference.html) des balises de références pour plus d'informations.
:::

**Configuration recommandée :**

```json
{
  "metadata": [
    {
      "src": [
        {
          "src": "../MyApp",
          "files": ["**/*.csproj"]
        }
      ],
      "dest": "api"
    }
  ],
  "build": {
    "content": [
      {
        "files": ["**/*.{md,yml}"],
        "exclude": ["_site/**"]
      }
    ],
    "output": "_site",
    "resource": ["assets/**"],
    "template": ["default", "modern"],
    "keepFileLink": false,
    "disableGitFeatures": false,
    "globalMetadata": {
      "_appName": "MyApp",
      "_appTitle": "MyApp",
      "_appFooter": "Copyright (C) 2024  Your Name",
      "_enableSearch": true,
      "_disableContribution": true,
      "pdf": true
    }
  }
}
```

### Configuration avancée (optionnel)

Vous pouvez sélectionner le canal de documentation (Debug ou Release) :

```json
...
"metadata": [
    {
      "src": [
        {
          "src": "../MyApp",
          "files": ["**/bin/Debug/**.dll"]
        }
      ],
      "dest": "api",
        "properties": {
          "TargetFramework": "net8.0"
        }
    }
  ],
...
```

N'oubliez pas de régulièrement mettre à jour vos fichiers compilés :

```bash
dotnet build -c Debug
# ou
dotnet build -c Release
```

### Prévisualiser votre documentation

Depuis votre terminal à la racine, exécutez :

```bash
docfx build documentation/docfx.json --serve
```

La sortie devrait se terminer comme ceci :

```bash
...
Serving ".../MyApp/documentation/_site" on http://localhost:8080. Press Ctrl+C to shut down.
```

Votre documentation est désormais accessible sur [localhost:8080](http://localhost:8080) si vous souhaitez un aperçu local.

## Personnaliser votre documentation

### Ajouter des sections

Par défaut, seules les sections `Docs` et `Api Documentation` sont disponibles. Voici comment ajouter une nouvelle section `Articles` :

1. Créez un dossier `articles` dans `documentation`
2. À l'intérieur, ajoutez `index.md` et `toc.yml`

   **Fichier `index.md` :**

   ```markdown
   # Articles

   Ceci est la section des articles. Vous pouvez ajouter des articles pour expliquer comment utiliser votre bibliothèque.
   ```

   **Fichier `toc.yml` :**

   ```yml
   items:
     - name: Articles
       href: index.md
   ```

   :::note
   La balise `items` est la racine de la table des matières et supprime l'erreur `Incorrect Type. Expected "TOC"`.
   :::

3. Mettez à jour `documentation/toc.yml` :

   ```yml
   items:
     - name: Docs
       href: docs/
     - name: API
       href: api/
     - name: Articles
       href: articles/
       homepage: articles/index.md
   ```

### Ajouter des pages

Ajoutez des fichiers markdown dans le dossier et référencez-les dans `toc.yml` :

```yml
items:
  - name: Getting Started
    href: index.md
  - name: How to use the library
    href: how_to_use.md
  - name: How to publish your work
    href: how_to_publish.md
```

**Menu dépliable :**

```yml
items:
  - name: Getting Started
    href: index.md
  - name: Advanced
    items:
      - name: How to use the library
        href: how_to_use.md
      - name: How to publish your work
        href: how_to_publish.md
```

### Ajouter logo et favicon

1. Placez les fichiers dans `documentation/assets/`
2. Mettez à jour `docfx.json` :

```json
...
"build": {
    ...
    "resource": ["assets/**"],
    "globalMetadata": {
      ...
      "_appLogoPath": "assets/logo.svg",
      "_appFaviconPath": "assets/favicon.ico",
      ...
    }
    ...
  }
```

:::tip
Utilisez des fichiers SVG pour que le logo et le favicon restent nets à toutes les tailles.
:::

### Documentation du code

DocFX génère automatiquement la documentation depuis les commentaires `///` dans votre code C#. C’est une bonne pratique pour aider les autres développeurs à comprendre votre code. Veuillez vous référer à la [documentation officielle des commentaires XML](https://docs.microsoft.com/dotnet/csharp/programming-guide/xmldoc/xml-documentation-comments) pour plus d’informations.

**Activer la génération de documentation XML :**

Ajoutez cette ligne dans votre fichier `*.csproj`, à l'intérieur de `<PropertyGroup>` :

```xml
<GenerateDocumentationFile>true</GenerateDocumentationFile>
```

**Exemple de code documenté :**

```csharp
namespace MyApp;

/// <summary>
/// Class <c>Point</c> models a point in a two-dimensional plane.
/// </summary>
public class Point
{
    private int x;
    private int y;

    /// <summary>
    /// Initializes a new instance of the <c>Point</c> class.
    /// </summary>
    /// <param name="x">The x-coordinate of the point.</param>
    /// <param name="y">The y-coordinate of the point.</param>
    public Point(int x, int y)
    {
        this.x = x;
        this.y = y;
    }

    /// <summary>
    /// Gets the x-coordinate of the point.
    /// </summary>
    public int X
    {
        get { return x; }
    }

    /// <summary>
    /// Gets the y-coordinate of the point.
    /// </summary>
    public int Y
    {
        get { return y; }
    }

    /// <summary>
    /// Returns a string that represents the current object.
    /// </summary>
    /// <returns>A string that represents the current object.</returns>
    public override string ToString()
    {
        return $"({x}, {y})";
    }
}
```

Maintenant, votre documentation est prête à être générée dans la section `API` du site généré (vous pouvez changer le nom de toutes les sections dans votre fichier `documentation/toc.yml`).

## Déploiement sur GitHub Pages

GitHub propose un service appelé GitHub Pages permettant d’héberger des sites statiques directement depuis votre dépôt. Nous devrons configurer quelques éléments avant de déployer la documentation.

### Configuration de GitHub Pages

1. Allez dans les paramètres de votre dépôt
2. Section "Pages"
3. Sélectionnez "Déployer depuis une branche"
4. Choisissez la branche "gh-pages" et le dossier racine
5. Cliquez sur "Enregistrer"

:::note
Créez la branche `gh-pages` si elle n'existe pas (de préférence vide au départ).
:::

### Workflow GitHub Actions

Créez `.github/workflows/deploy_docs.yml` :

```yml
name: Deploy docs
on:
  push:
    branches:
      - main
jobs:
  publish-docs:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Dotnet Setup
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: 8.x

      - run: dotnet tool update -g docfx
      - run: docfx documentation/docfx.json

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/_site
```

Poussez vos modifications. Rendez-vous dans la section "Actions" pour voir les logs. Si tout s'est bien passé, vous verrez "Déployé".

Maintenant, à chaque push sur la branche main, la documentation sera générée et déployée sur GitHub Pages.

:::tip
Dans la description de votre dépôt GitHub, sélectionnez l'URL "GitHub Pages" pour un accès direct à la documentation.
:::

## Erreurs courantes

- **Version de dotnet** : Vérifiez avec `dotnet --version`
- **DocFX obsolète** : Mettez à jour avec `dotnet tool update -g docfx`
- **Chemin incorrect** : Vérifiez le chemin dans `docfx.json` (ex : `../MyApp`)
- **Namespace manquant** : Ajoutez un `namespace` dans vos fichiers C#
- **Program.cs ignoré** : Le fichier principal n'est pas documenté, créez au moins une classe supplémentaire

## Ressources

- [Documentation officielle DocFX](https://dotnet.github.io/docfx/index.html)
- [Commentaires XML C#](https://docs.microsoft.com/dotnet/csharp/programming-guide/xmldoc/xml-documentation-comments) - Guide Microsoft
- [Markdown DocFX](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html) - Fonctionnalités supportées
- [DocFX avec GitHub Actions](https://tehgm.net/blog/docfx-github-actions/) - Guide non officiel mais utile
