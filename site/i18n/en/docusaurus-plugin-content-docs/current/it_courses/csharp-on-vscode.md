---
title: C# for Visual Studio Code
description: This tutorial will help you set up your development environment for C# using Visual Studio Code.
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

This guide will help you set up your development environment for C# using Visual Studio Code. VS Code is a lightweight and powerful editor, ideal for cross-platform C# development.

**Learning objectives:**

- Install .NET SDK and Visual Studio Code
- Configure essential C# extensions
- Optimize your workflow with tools and shortcuts

## Prerequisites & Installation

### Prior knowledge

- None (beginner's guide)

### Required tools

| Tool               | Version | Link                                                          | Description             |
| ------------------ | ------- | ------------------------------------------------------------- | ----------------------- |
| .NET SDK           | 6.0+    | [dotnet.microsoft.com](https://dotnet.microsoft.com/download) | C# development platform |
| Visual Studio Code | Latest  | [code.visualstudio.com](https://code.visualstudio.com/)       | Code editor             |

## Installing .NET SDK

The .NET SDK is a free, open-source development platform for building many different types of applications. It includes the C# compiler, the .NET runtime, and the ASP.NET Core runtime.

1. Download the .NET SDK installer from the [official website](https://dotnet.microsoft.com/download)
2. Run the installer and follow the instructions
3. Verify the installation:

```bash
dotnet --version
```

## Installing Visual Studio Code

Visual Studio Code is a free source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.

### Windows <!-- TODO: Use Tabs for OS -->

1. Download the installer from [code.visualstudio.com](https://code.visualstudio.com/)
2. Run the installer and follow the instructions
   :::tip
   Consider checking the "Add 'Open with Code' action to Windows Explorer context menu" option for quick access.
   :::

3. Open Visual Studio Code

4. Enable auto-save: `File` > `Auto Save`

### MacOS

**Option 1: Download**

1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Open the file and drag the Visual Studio Code icon to the Applications folder

**Option 2: Homebrew**

```bash
brew install --cask visual-studio-code
```

**Configuration:**

1. Open Visual Studio Code
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Type `shell command` and select `Shell Command: Install 'code' command in PATH`
4. Enable auto-save: `File` > `Auto Save`

### Linux

1. Download the installer from [code.visualstudio.com/download](https://code.visualstudio.com/download) (`.deb` or `.rpm` format)
2. Run the installer and follow the instructions
   :::note
   You can also check the [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/) version for more availability.
   :::

3. Open Visual Studio Code
4. Install command in PATH: Command Palette (`Ctrl+Shift+P`) → `Shell Command: Install 'code' command in PATH`
5. Enable auto-save: `File` > `Auto Save`

## Installing essential C# extensions

The C# extension for Visual Studio Code adds complete support for C#, including syntax highlighting, IntelliSense (code completion), and debugging.

Install the following extensions from the Extensions sidebar (`Ctrl+Shift+X`):

| Extension     | Description         | Link                                                                                         |
| ------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| C#            | Basic C# support    | [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)     |
| C# Extensions | Additional features | [Marketplace](https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions) |
| C# Dev Kit    | Complete tool suite | [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)   |

## Advanced configuration (Bonus)

### Recommended optional extensions

- [CSharpier](https://marketplace.visualstudio.com/items?itemName=csharpier.csharpier-vscode) - Automatic code formatter
- [tokyo-night](https://marketplace.visualstudio.com/items?itemName=Avetis.tokyo-night) - Color theme
- [Reload](https://marketplace.visualstudio.com/items?itemName=natqe.reload) - Quick window reload

### CSharpier configuration (code formatter)

Install CSharpier globally:

```bash
dotnet tool install --global csharpier
```

**Configure format on save:**

1. Open keyboard shortcuts: `Ctrl+K Ctrl+S` (or `Cmd+K Cmd+S` on macOS)
   ![Keyboard Shortcuts](../../../../../static/assets/docs/csharp-on-vscode/shortcuts.jpg)

2. Search for `Format Document`
3. Set the keybinding to `Ctrl+S` (or `Cmd+S` on macOS)
   ![Format Document](../../../../../static/assets/docs/csharp-on-vscode/keybindings.jpg)

4. Open a C# file and press `Ctrl+S` to automatically format

:::tip
Automatic formatting on save saves you time and ensures consistent code across your team.
:::

## Resources

- [Official VS Code documentation for C#](https://code.visualstudio.com/Docs/languages/csharp) - Complete Microsoft guide
- [.NET CLI Reference](https://docs.microsoft.com/dotnet/core/tools/) - dotnet commands
- [C# Programming Guide](https://docs.microsoft.com/dotnet/csharp/) - Learn C#
