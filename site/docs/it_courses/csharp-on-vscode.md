---
title: C# pour Visual Studio Code
description: Ce tutoriel vous aidera à configurer votre environnement de développement pour C# avec Visual Studio Code.
slug: csharp-on-vscode
tags: [course, info, csharp]
last_update:
  date: 2024-05-01
  author: Yann M. Vidamment (MorganKryze)
additional_contributors:
  - username: Yann M. Vidamment (MorganKryze)
    html_url: https://github.com/MorganKryze
    avatar_url: https://github.com/MorganKryze.png
---

## Introduction

Ce guide vous aidera à configurer votre environnement de développement pour C# en utilisant Visual Studio Code. VS Code est un éditeur léger et puissant, idéal pour le développement C# cross-platform.

**Objectifs d'apprentissage :**

- Installer le SDK .NET et Visual Studio Code
- Configurer les extensions C# essentielles
- Optimiser votre workflow avec des outils et raccourcis

## Prérequis & Installation

### Connaissances préalables

- Aucune (guide pour débutants)

### Outils requis

| Outil              | Version  | Lien                                                          | Description                    |
| ------------------ | -------- | ------------------------------------------------------------- | ------------------------------ |
| SDK .NET           | 6.0+     | [dotnet.microsoft.com](https://dotnet.microsoft.com/download) | Plateforme de développement C# |
| Visual Studio Code | Dernière | [code.visualstudio.com](https://code.visualstudio.com/)       | Éditeur de code                |

## Installation du SDK .NET

Le SDK .NET est une plateforme de développement gratuite et open source permettant de créer différents types d'applications. Il inclut le compilateur C#, le runtime .NET et le runtime ASP.NET Core.

1. Téléchargez l'installeur du SDK .NET depuis le [site officiel](https://dotnet.microsoft.com/download)
2. Exécutez l'installeur et suivez les instructions
3. Vérifiez l'installation :

```bash
dotnet --version
```

## Installation de Visual Studio Code

Visual Studio Code est un éditeur de code source gratuit développé par Microsoft pour Windows, Linux et macOS. Il prend en charge le débogage, le contrôle Git intégré, la mise en surbrillance syntaxique, l'auto-complétion intelligente, les extraits de code et le refactoring.

### Windows <!-- TODO: Utiliser des Tabs pour les OS -->

1. Téléchargez l'installeur depuis [code.visualstudio.com](https://code.visualstudio.com/)
2. Exécutez l'installeur et suivez les instructions
   :::tip
   Pensez à cocher l'option "Ajouter l'action 'Ouvrir avec Code' au menu contextuel de l'Explorateur Windows" pour un accès rapide.
   :::

3. Ouvrez Visual Studio Code

4. Activez l'enregistrement automatique : `File` > `Auto Save`

### MacOS

**Option 1 : Téléchargement**

1. Téléchargez depuis [code.visualstudio.com](https://code.visualstudio.com/)
2. Ouvrez le fichier et glissez l'icône Visual Studio Code dans le dossier Applications

**Option 2 : Homebrew**

```bash
brew install --cask visual-studio-code
```

**Configuration :**

1. Ouvrez Visual Studio Code
2. Ouvrez la palette de commandes (`Ctrl+Shift+P` ou `Cmd+Shift+P`)
3. Tapez `shell command` et sélectionnez `Shell Command: Install 'code' command in PATH`
4. Activez l'enregistrement automatique : `File` > `Auto Save`

### Linux

1. Téléchargez l'installeur depuis [code.visualstudio.com/download](https://code.visualstudio.com/download) (format `.deb` ou `.rpm`)
2. Exécutez l'installeur et suivez les instructions
   :::note
   Vous pouvez aussi consulter la [version Insiders de Visual Studio Code](https://code.visualstudio.com/insiders/) pour plus de disponibilité.
   :::

3. Ouvrez Visual Studio Code
4. Installez la commande dans PATH : Palette de commandes (`Ctrl+Shift+P`) → `Shell Command: Install 'code' command in PATH`
5. Activez l'enregistrement automatique : `File` > `Auto Save`

## Installation des extensions essentielles pour C\#

L'extension C# pour Visual Studio Code ajoute la prise en charge complète de C#, avec notamment la coloration syntaxique, IntelliSense (auto-complétion) et le débogage.

Installez les extensions suivantes depuis la barre latérale Extensions (`Ctrl+Shift+X`) :

| Extension     | Description                     | Lien                                                                                         |
| ------------- | ------------------------------- | -------------------------------------------------------------------------------------------- |
| C#            | Support de base pour C#         | [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)     |
| C# Extensions | Fonctionnalités supplémentaires | [Marketplace](https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions) |
| C# Dev Kit    | Suite complète d'outils         | [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)   |

## Configuration avancée (Bonus)

### Extensions optionnelles recommandées

- [CSharpier](https://marketplace.visualstudio.com/items?itemName=csharpier.csharpier-vscode) - Formateur de code automatique
- [tokyo-night](https://marketplace.visualstudio.com/items?itemName=Avetis.tokyo-night) - Thème de couleurs
- [Reload](https://marketplace.visualstudio.com/items?itemName=natqe.reload) - Rechargement rapide de la fenêtre

### Configuration de CSharpier (formateur de code)

Installez CSharpier globalement :

```bash
dotnet tool install --global csharpier
```

**Configurer le formatage au save :**

1. Ouvrez les raccourcis clavier : `Ctrl+K Ctrl+S` (ou `Cmd+K Cmd+S` sur macOS)
   ![Raccourcis clavier](../../static/assets/docs/csharp-on-vscode/shortcuts.jpg)

2. Recherchez `Format Document`
3. Affectez le raccourci `Ctrl+S` (ou `Cmd+S` sur macOS)
   ![Format Document](../../static/assets/docs/csharp-on-vscode/keybindings.jpg)

4. Ouvrez un fichier C# et appuyez sur `Ctrl+S` pour formater automatiquement

:::tip
Le formatage automatique au save vous fait gagner du temps et garantit un code cohérent dans toute votre équipe.
:::

## Ressources

- [Documentation officielle VS Code pour C#](https://code.visualstudio.com/Docs/languages/csharp) - Guide complet Microsoft
- [.NET CLI Reference](https://docs.microsoft.com/dotnet/core/tools/) - Commandes dotnet
- [C# Programming Guide](https://docs.microsoft.com/dotnet/csharp/) - Apprendre C#
