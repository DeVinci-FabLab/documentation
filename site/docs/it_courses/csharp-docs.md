---
title: Créez la documentation de votre projet
description: Ce cours vous permettra de créer et héberger un site web statique pour votre documentation. L’outil est développé pour un projet C# mais peut être utilisé pour tout autre projet, les articles étant rédigés en markdown.
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

Cet article vous guidera dans le processus de création d’une documentation pour votre projet C# en utilisant l’outil [DocFX](https://dotnet.github.io/docfx/). La documentation est essentielle pour aider les utilisateurs à comprendre comment utiliser les outils que vous créez. C’est aussi un excellent moyen de mettre en valeur la qualité de votre travail.

:::caution
Ce cours suppose que vous avez des connaissances de base en C# et que vous disposez d’un projet à documenter (même une simple application console).
:::

## Prérequis

- [.NET 6.0](https://dotnet.microsoft.com/download/dotnet/6.0) ou version ultérieure
- Un éditeur de code (par ex. Visual Studio Code, NeoVim, Notepad +, etc.)
- Un projet C#

## Installation

### Étape 1 : Installer DocFX

Vérifiez que dotnet est bien installé en exécutant :

```bash
dotnet --version
```

Pour installer ou mettre à jour docfx, ouvrez un terminal et exécutez :

```bash
dotnet tool update -g docfx
```

### Étape 2 : Configurer l’espace de travail

Supposons que votre projet a une structure simple comme ceci :

```bash
Example_project  <-- dossier racine
└───MyApp
    ├───bin
    ├───MyApp.csproj
    └───Program.cs
```

Placez-vous dans le dossier racine (`Example_project/`) et lancez :

```bash
docfx init -y -o documentation
```

Cela créera un dossier "documentation" à la racine. Structure obtenue :

```bash
Example_project  <-- racine
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

Pour un affichage plus pratique, des fonctionnalités et pour cibler le projet, je vous recommande de mettre à jour le fichier à la version ci-dessous. Pour plus d’informations, consultez la [documentation officielle](https://dotnet.github.io/docfx/reference/docfx-json-reference.html) des balises de références.

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

### Étape 3 : [ Optionnel ] Mettre à jour le contenu

:::note
Vous souhaiterez peut-être sélectionner le canal de la documentation que vous souhaitez générer. Par exemple, si vous souhaitez générer la documentation uniquement pour la version Debug ou Release. N’hésitez pas à mettre à jour `files` sur Debug ou Release et `TargetFramework` sur votre version dotnet (disponible dans le `MyApp.csproj`).
:::

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

N’oubliez pas de mettre à jour régulièrement vos fichiers compilés en utilisant la commande `dotnet build` au fur et à mesure des modifications du code :

```bash
dotnet build -c Debug
# ou
dotnet build -c Release
```

### Étape 4 : Prévisualiser votre documentation

Maintenant, depuis votre terminal à la racine, exécutez la commande suivante :

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

### Étape 1 : Ajouter des sections

Par défaut, seules les sections `Docs` et `Api Documentation` sont disponibles. Vous pouvez ajouter de nouvelles sections à votre documentation. Pour ce faire, vous devrez suivre quelques étapes :

1. Ajoutez un nouveau dossier dans le dossier `documentation`. Par exemple, `articles`.
2. À l’intérieur d’articles, ajoutez un fichier `index.md` et un fichier `toc.yml`.

Voici un exemple du fichier `index.md` :

```markdown
# Articles

Ceci est la section des articles. Vous pouvez ajouter des articles pour expliquer comment utiliser votre bibliothèque.
```

Voici un exemple du fichier `toc.yml` :

```yml
items:
  - name: Articles
    href: index.md
```

:::note
Nous avons ajouté la balise `items` au fichier `toc.yml`. C’est la racine de la table des matières et cela supprimera l’erreur `Incorrect Type. Expected "TOC"`.
:::

3. Maintenant, nous devons mettre à jour le fichier `toc.yml` dans le dossier `documentation` pour ajouter la nouvelle section. Je recommande d’ajouter une mention à la page d’accueil (sera la page d’atterrissage lorsque la section est cliquée). Voici un exemple du fichier `toc.yml` :

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

### Étape 2 : Ajouter des pages

Maintenant que vous savez créer de nouvelles sections, pour ajouter des pages vous pouvez simplement ajouter des fichiers markdown dans le dossier des sections, et les ajouter au fichier `toc.yml`. Voici un exemple du fichier `toc.yml` :

```yml
items:
  - name: Getting Started
    href: index.md
  - name: How to use the library
    href: how_to_use.md
  - name: How to publish your work
    href: how_to_publish.md
```

Cependant vous pouvez également être en mesure de créer un menu dépliable dans le `toc.yml` file. Voici un exemple de fichier `toc.yml` :

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

Ou utiliser un autre style et afficher le nom de la catégorie, et les pages sans être dépliables :

```yml
items:
  - name: Getting Started
    href: index.md
  - name: Other pages
    href: how_to_use.md
    href: how_to_publish.md
```

### Étape 3 : Voir les fonctionnalités Markdown supportées

Consultez [DocFX Markdown](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html).

### Logo & favicon

Pour ajouter un logo ou un favicon à votre documentation, commencez par les ajouter dans le dossier assets (si vous ne l’avez pas, créez-le dans le dossier `documentation`). Ensuite, mettez à jour le fichier `docfx.json` pour ajouter les balises `logo` et `favicon`. Voici un exemple :

```json
...
"build": {
    ...
    "resource": ["assets/**"],
    "globalMetadata": {
      ...
      "_appLogoPath": "assets/logo.jpg",
      "_appFaviconPath": "assets/favicon.ico",
      ...
    }
    ...
  }
```

Pour les deux, je vous recommande d’utiliser des fichiers svg afin que le logo et le favicon soient évolutifs et ne perdent pas en qualité.

### Étape 4 : Ajouter la documentation du code

En programmant en C#, vous êtes peut-être au courant de l’utilisation des commentaires `///` pour documenter votre code. C’est une bonne pratique pour aider les autres développeurs à comprendre votre code. DocFX prendra ces commentaires en compte pour générer une documentation précise. Veuillez vous référer à la [documentation officielle](https://docs.microsoft.com/dotnet/csharp/programming-guide/xmldoc/xml-documentation-comments) pour plus d’informations.

Pour que docfx prenne en compte ces métadonnées, vérifiez qu’un fichier de documentation est bien généré. Ajoutez cette ligne à votre "\*\*.csproj" fichier, à l’intérieur de la balise "PropertyGroup" :

```xml
<GenerateDocumentationFile>true</GenerateDocumentationFile>
```

Voici quelques conseils de dépannage si vous rencontrez une erreur lors de la génération de la documentation :

- Vérifiez la version de votre dotnet.
- Mettez à jour docfx.
- Vérifiez le chemin de votre fichier `docfx.json` vers votre projet (par exemple, `../MyApp`).
- Vérifiez si vous avez bien mis un `namespace` dans votre fichier.
- Votre `program.cs` ne sera pas utilisé dans la documentation, donc vous devrez avoir au moins une autre classe. Voici un exemple rapide à copier/coller dans un nouveau fichier :

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
    public override string ToString()
    {
        return $"({x}, {y})";
    }
}
```

Maintenant, votre documentation est prête à être générée dans la section `API` du site généré (vous pouvez changer le nom de toutes les sections dans votre fichier `toc.yml` à la racine de votre dossier de documentation).

## Déployer la documentation

### Étape 1 : Configuration de GitHub Pages

GitHub propose un service appelé GitHub Pages permettant d’héberger des sites statiques directement depuis votre dépôt. Nous devrons configurer quelques éléments avant de déployer la documentation.

Tout d’abord, allez dans les paramètres de votre dépôt, puis dans la section "Pages". Sélectionnez "Déployer depuis une branche", puis sélectionnez la branche "gh-pages" et le dossier racine. Cliquez ensuite sur "Enregistrer". Si vous n’avez pas de branche "gh-pages", vous devrez en créer une (il est préférable qu’elle soit vide au début mais ce n’est pas obligatoire).

### Étape 2 : Déploiement sur le web

Ensuite, vous devrez créer un nouveau dossier nommé `.github` à la racine de votre projet. À l’intérieur de ce dossier, créez un nouveau dossier nommé `workflows`. À l’intérieur de ce dossier, créez un nouveau fichier nommé `deploy_docs.yml`. Ce fichier contiendra le flux de travail pour générer et déployer la documentation sur GitHub Pages.

Voici un exemple de fichier `deploy_docs.yml` :

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

Poussez vos modifications puis rendez-vous dans la section "Actions" de votre dépôt. Vous devriez voir un nouveau flux de travail appelé "Deploy docs". Cliquez dessus pour voir les journaux. Si tout s’est bien passé, vous devriez voir un message "Déployé" à la fin des journaux.

Maintenant, à chaque push sur la branche main, la documentation sera générée et déployée sur GitHub Pages.

:::note
Dans la description de votre dépôt GitHub, cliquez sur "Edit" puis pour l’URL sélectionnez l’option d’URL "GitHub Pages". Ainsi, votre documentation sera directement accessible depuis votre dépôt.
:::

## Sources

- [DocFX documentation](https://dotnet.github.io/docfx/index.html)
- [Documentation utile mais non officielle](https://tehgm.net/blog/docfx-github-actions/)
- [Commentaires de documentation C#](https://docs.microsoft.com/dotnet/csharp/programming-guide/xmldoc/xml-documentation-comments)
- [Support Markdown dans DocFX](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html)
