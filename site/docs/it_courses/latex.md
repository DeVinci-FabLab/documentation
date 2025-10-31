---
title: $\LaTeX$ pour les maths
description: Ce support de cours présente les bases de LaTeX pour rédiger des expressions mathématiques, ainsi que des astuces pour gagner en efficacité avec des snippets dans VS Code et Obsidian.
slug: latex
tags: [course, info, latex]
last_update:
  date: 2024-10-05
  author: Eliott A. Roussille
---

## Introduction

$\LaTeX$ est la référence pour rédiger des expressions mathématiques. Couplé à des éditeurs modernes comme **VS Code**, **Obsidian** ou **Overleaf**, il permet d'écrire des mathématiques efficacement sur PC.

**Objectifs d'apprentissage :**

- Maîtriser la syntaxe mathématique de base de LaTeX
- Être autonome dans l'apprentissage de nouvelles commandes
- Créer des snippets personnalisés pour accélérer la frappe
- Utiliser LaTeX dans différents environnements (Markdown, Overleaf)

## Prérequis & Installation

Plusieurs options sont possibles pour écrire des expressions mathématiques en $\LaTeX$.

### Option 1 : Markdown sur VS Code ou Obsidian

| Composant    | Description                                          | Lien                                                    |
| ------------ | ---------------------------------------------------- | ------------------------------------------------------- |
| **VS Code**  | Éditeur de code                                      | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Obsidian** | Prise de notes en Markdown avec rendu $\LaTeX$ natif | [obsidian.md](https://obsidian.md/)                     |

**Extensions VS Code recommandées :**

- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)

### Option 2 : LaTeX sur Overleaf

| Composant    | Description                         | Lien                                      |
| ------------ | ----------------------------------- | ----------------------------------------- |
| **Overleaf** | IDE $\LaTeX$ en ligne, collaboratif | [overleaf.com](https://www.overleaf.com/) |

### Option 3 : LaTeX sur VS Code + LaTeX Workshop

| Composant          | Description                                             | Lien/Commande                               |
| ------------------ | ------------------------------------------------------- | ------------------------------------------- |
| **TeX Live**       | Distribution $\LaTeX$ recommandée (Windows/macOS/Linux) | [tug.org/texlive](https://tug.org/texlive/) |
| **MiKTeX**         | Alternative à TeX Live                                  | [miktex.org](https://miktex.org/)           |
| **LaTeX Workshop** | Extension pour compilation, snippets, preview           | Marketplace → LaTeX Workshop                |

### Vérification de l'installation

```bash
latex --version   # Doit afficher la version de TeX Live ou MiKTeX
code --version    # VS Code installé
```

## Modes mathématiques

$\LaTeX$ propose deux modes pour écrire des mathématiques :

- **Inline** (en ligne) : `$ ... $` ou `\( ... \)`
- **Display** (bloc centré) : `$$ ... $$` ou `\[ ... \]`

**Exemple :**

```latex
Le théorème de Pythagore s'écrit $a^2 + b^2 = c^2$ pour un triangle rectangle.

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

Le théorème de Pythagore s'écrit $a^2 + b^2 = c^2$ pour un triangle rectangle.

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

:::tip
Toujours charger `\usepackage{amsmath,amssymb,mathtools}` en préambule si vous utilisez LaTeX pur (pas nécessaire en Markdown).
:::

## Symboles et commandes usuelles

### Opérateurs de base

```latex
$\frac{a}{b}$     % fraction
$a_i,\; x^n$      % indices & exposants
$\sqrt[n]{x}$     % racine n-ième
$\sum_{k=0}^N$    % somme
$\int_a^b$        % intégrale
$\prod_{i=1}^n$   % produit
```

### Lettres grecques

```latex
$\alpha, \beta, \gamma, \delta, \epsilon$
$\theta, \lambda, \mu, \pi, \sigma$
$\Omega, \Delta, \Gamma, \Phi$
```

### Ensembles et relations

```latex
$\in, \notin, \subset, \subseteq$
$\cup, \cap, \emptyset$
$\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$
```

### Délimiteurs adaptatifs

```latex
$\left( \frac{a}{b} \right)$
$\left[ x + y \right]$
$\left\{ \frac{1}{2} \right\}$
```

## Environnements mathématiques

### Environnement `align`

Pour aligner plusieurs équations :

```latex
\begin{align}
  f(x) &= x^2 + 2x + 1 \\
  &= (x + 1)^2
\end{align}
```

### Environnement `cases`

Pour les fonctions par morceaux :

```latex
f(x) = \begin{cases}
  x^2 & \text{si } x \geq 0 \\
  -x & \text{si } x < 0
\end{cases}
```

### Matrices

```latex
\begin{pmatrix}
  a & b \\
  c & d
\end{pmatrix}
```

## Ressources pour être autonome

| Ressource                 | Description                                        | Lien                                                                                            |
| ------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Detexify**              | Dessinez un symbole pour trouver la commande LaTeX | [detexify.kirelabs.org](https://detexify.kirelabs.org/classify.html)                            |
| **MathJax Documentation** | Syntaxe TeX complète                               | [onemathematicalcat.org](https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm) |
| **MathJax Macros**        | Liste des macros disponibles                       | [docs.mathjax.org](https://docs.mathjax.org/en/latest/input/tex/macros/index.html)              |

## Snippets dans VS Code

Les _snippets_ génèrent du code prédéfini grâce à un **raccourci** + **Tab**.

### Créer un snippet LaTeX global

1. `Ctrl/Cmd + Shift + P` ➜ **Preferences: Configure User Snippets**
2. Choisir `latex.json` (ou `markdown.json` si vous utilisez Markdown)
3. Ajouter :

```json
"align environment": {
  "prefix": "ali",
  "body": [
    "\\begin{align}",
    "  $1 \\\\",
    "\\end{align}"
  ],
  "description": "Bloc align"
}
```

Tapez `ali` + **Tab**, le bloc complet apparaît avec un curseur au bon endroit.

### Curseurs multiples & tab stops

Utilisez `$1`, `$2` pour vos points d'arrêt ; VS Code navigue avec **Tab**.

**Exemple :**

```json
"fraction": {
  "prefix": "fr",
  "body": "\\frac{$1}{$2}$0",
  "description": "Fraction"
}
```

## Snippets dans Obsidian

### Extension Latex Suite

Obsidian supporte l'extension **Latex Suite** qui fournit des snippets prédéfinis pour LaTeX.

:::note
Consultez la documentation de Latex Suite pour personnaliser vos snippets et créer des templates avec variables.
:::

## Exercices pratiques

| #   | Énoncé                                                           | Objectif pédagogique                            |
| --- | ---------------------------------------------------------------- | ----------------------------------------------- |
| 1   | Rédiger une fiche contenant les formules de dérivation niveau L1 | Maîtriser les environnements `align` et `cases` |
| 2   | Créer un snippet VS Code pour l'environnement `matrix`           | Automatiser la saisie                           |
| 3   | Importer le document sur Overleaf et partager avec un camarade   | Découvrir le mode révision                      |

## Ressources

- [Overleaf – Learn LaTeX in 30 Minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) - Introduction complète
- [LaTeX Math Cheat Sheet](https://wch.github.io/latexsheet/latexsheet.pdf) - Référence rapide
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX) - Documentation communautaire
- [Extension LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) - Auto-build, forward/inverse search
