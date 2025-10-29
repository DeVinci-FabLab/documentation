---
title: LaTeX pour les maths
description: Ce support de cours présente les bases de LaTeX pour rédiger des expressions mathématiques, ainsi que des astuces pour gagner en efficacité avec des snippets dans VS Code et Obsidian.
slug: latex
tags: [course, info, latex]
last_update:
  date: 2024-10-05
  author: Eliott A. Roussille
---

# Formation $\LaTeX$ pour les maths

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

## Rappels : écrire des maths en $\LaTeX$

`$ ... $` `\( ... \)`
et `$$ ... $$` `\[ ... \]`

### Modes mathématiques

exemple d'une dingz à mettre au départ :

<!-- $$
\displaystyle
\boxed{
\left(
\begin{smallmatrix}
\color{red}\displaystyle \sum_{i=1}^{n}\frac{\alpha_i x^{i}}{i!}
      & \displaystyle \color{purple} \cancelto{0}{\int_{a}^{b} f(t)\,\mathrm{d}t}\\[4pt]
\displaystyle \left.\frac{\partial^2 g}{\partial y^2}\right|_{y=0}
      & \displaystyle \color{green}\sqrt{\beta^2+\gamma^2}
\end{smallmatrix}
\right)_{x=\hat{\theta}_{\scriptscriptstyle 0}}
\!\cdot\!
\vec{v}_{\lfloor\gamma\rfloor}
\;+\;
\overbrace{\lim_{x\to0^{+}}\sum_{k=0}^{\infty}\frac{(-1)^k x^{2k}}{(2k)!}}^{\cos x}
\;=\;
\color{blue}
\frac{\Gamma\!\bigl(\tfrac{1}{2}\bigr)}{\sqrt{\pi}}
}
$$ -->

insérer tableau de commandes de bases ensuite

### Symboles et commandes usuelles

```LaTeX
$\frac{a}{b}$     % fraction
$a_i,\; x^n$      % indices & exposants
$\sqrt[n]{x}$     % racine n-ième
$\sum_{k=0}^N$    % somme
$\alpha,\beta$    % lettres grecques
```

::: tip
Toujours charger `\usepackage{amsmath,amssymb,mathtools}` en préambule si $\LaTeX$
:::

ressources pour etre autonome

[Detexify](https://detexify.kirelabs.org/classify.html)
[MathJax Documentation](https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm)
[MathJax Macros](https://docs.mathjax.org/en/latest/input/tex/macros/index.html)

## Snippets dans VS Code

Les _snippets_ génèrent du code prédéfini grâce à un **raccourci** + **Tab**.

### Créer un snippet LaTeX global

1. `Ctrl/Cmd + Shift + P` ➜ **Preferences: Configure User Snippets**.
2. Choisir _latex.json_.
3. Ajouter :

```json
"align environment": {
  "prefix": "ali",
  "body": [
    "\\begin{align}",
    "  $1: \\placeholder{expression} \\",
    "\\end{align}"
  ],
  "description": "Bloc align"
}
```

> Tapez `ali` + **Tab**, le bloc complet apparaît avec un curseur au bon endroit.

### Curseurs multiples & tab stops

Utilisez `$1`, `$2` pour vos points d'arrêt ; VS Code navigue avec **Tab**.

## Snippets & templates dans Obsidian

Latex Suite
parler de comment intégrer les siens dedans, tuto avec variables, etc

### Exemple de snippet _Templater_

```tpl
<%*
const eq = tp.file.cursor();
%>
$$
<%* eq %>
$$
```

Tapez `<tp>` puis **Tab** ➜ un bloc affiché.

---

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
