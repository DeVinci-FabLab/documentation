---
title: Create your project documentation
description: This course will let you create and host a static website for your documentation. The tool is developed for a C# project but can be used for any other project as the articles are written in markdown.
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

Documentation is key to help users understand how to use the tools you create. It is also a good way to showcase the quality of your work.

This article will guide you through the process of creating documentation for your C# project using the tool [DocFX](https://dotnet.github.io/docfx/).

**Learning objectives:**

- Install and configure DocFX for a C# project
- Automatically generate API documentation from code
- Customize documentation with additional sections and pages
- Deploy documentation to GitHub Pages

:::info
Although this course uses C# as an example, DocFX can document any .NET project and the methodology applies to other documentation generators.
:::

## Prerequisites & Installation

### Prior knowledge

- Basic knowledge of C#
- Have a C# project to document (even a simple console application)

### Required tools

| Tool        | Version | Link                                                                     | Description             |
| ----------- | ------- | ------------------------------------------------------------------------ | ----------------------- |
| .NET SDK    | 6.0+    | [dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet/6.0) | Development framework   |
| DocFX       | Latest  | Install via dotnet tool                                                  | Documentation generator |
| Code editor | -       | VS Code, NeoVim, Notepad++, etc.                                         | For editing files       |

### Installing DocFX

Verify that dotnet is installed:

```bash
dotnet --version
```

Install or update DocFX:

```bash
dotnet tool update -g docfx
```

## Workspace setup

### Initial project structure

Assume that your project has a simple structure like this:

```bash
Example_project  # Root folder
└───MyApp
    ├───bin
    ├───MyApp.csproj
    └───Program.cs
```

### Initializing DocFX

Navigate to the root folder (`Example_project/`) and run:

```bash
docfx init -y -o documentation
```

This will create a `documentation` folder at the root. Resulting structure:

```bash
Example_project  # root
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

### Configuring `docfx.json`

Here is the default content of `docfx.json`:

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
For a more convenient display and to target your project, update the file with the version below. See the [official documentation](https://dotnet.github.io/docfx/reference/docfx-json-reference.html) of the reference tags for more information.
:::

**Recommended configuration:**

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

### Advanced configuration (optional)

You can select the documentation channel (Debug or Release):

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

Don't forget to regularly update your compiled files:

```bash
dotnet build -c Debug
# or
dotnet build -c Release
```

### Preview your documentation

From your terminal at the root, run:

```bash
docfx build documentation/docfx.json --serve
```

The output should end like this:

```bash
...
Serving ".../MyApp/documentation/_site" on http://localhost:8080. Press Ctrl+C to shut down.
```

Your documentation is now available on [localhost:8080](http://localhost:8080) if you want to see a local preview.

## Customize your documentation

### Add sections

By default, only the `Docs` and `Api Documentation` sections are available. Here's how to add a new `Articles` section:

1. Create an `articles` folder in `documentation`
2. Inside, add `index.md` and `toc.yml`

   **`index.md` file:**

   ```markdown
   # Articles

   This is the articles section. You can add articles to explain how to use your library.
   ```

   **`toc.yml` file:**

   ```yml
   items:
     - name: Articles
       href: index.md
   ```

   :::note
   The `items` tag is the root of the table of contents and removes the error `Incorrect Type. Expected "TOC"`.
   :::

3. Update `documentation/toc.yml`:

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

### Add pages

Add markdown files to the folder and reference them in `toc.yml`:

```yml
items:
  - name: Getting Started
    href: index.md
  - name: How to use the library
    href: how_to_use.md
  - name: How to publish your work
    href: how_to_publish.md
```

**Collapsible menu:**

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

### Add logo and favicon

1. Place files in `documentation/assets/`
2. Update `docfx.json`:

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
Use SVG files so that the logo and favicon remain sharp at all sizes.
:::

### Code documentation

DocFX automatically generates documentation from `///` comments in your C# code. This is a good practice to help other developers understand your code. Please refer to the [official documentation for XML comments](https://docs.microsoft.com/dotnet/csharp/programming-guide/xmldoc/xml-documentation-comments) for more information.

**Enable XML documentation generation:**

Add this line to your `*.csproj` file, inside `<PropertyGroup>`:

```xml
<GenerateDocumentationFile>true</GenerateDocumentationFile>
```

**Example of documented code:**

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

Now, your documentation is ready to be generated in the `API` section of the generated site (you can change all section names in your `documentation/toc.yml` file).

## Deploy to GitHub Pages

GitHub provides a service called GitHub Pages that allows you to host static websites directly from your repository. We will need to set up a few things before deploying the documentation.

### GitHub Pages setup

1. Go to your repository settings
2. "Pages" section
3. Select "Deploy from a branch"
4. Choose the "gh-pages" branch and the root folder
5. Click "Save"

:::note
Create the `gh-pages` branch if it doesn't exist (preferably empty at the start).
:::

### GitHub Actions workflow

Create `.github/workflows/deploy_docs.yml`:

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

Push your changes. Go to the "Actions" section to see the logs. If everything went well, you should see "Deployed".

Now, on every push to the main branch, the documentation will be generated and deployed to GitHub Pages.

:::tip
In your GitHub repository description, select the "GitHub Pages" URL for direct access to the documentation.
:::

## Common errors

- **dotnet version**: Check with `dotnet --version`
- **Outdated DocFX**: Update with `dotnet tool update -g docfx`
- **Incorrect path**: Check the path in `docfx.json` (e.g., `../MyApp`)
- **Missing namespace**: Add a `namespace` in your C# files
- **Program.cs ignored**: The main file is not documented, create at least one additional class

## Resources

- [Official DocFX documentation](https://dotnet.github.io/docfx/index.html)
- [C# XML comments](https://docs.microsoft.com/dotnet/csharp/programming-guide/xmldoc/xml-documentation-comments) - Microsoft guide
- [DocFX markdown](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html) - Supported features
- [DocFX with GitHub Actions](https://tehgm.net/blog/docfx-github-actions/) - Unofficial but useful guide
