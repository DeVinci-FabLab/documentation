---
title: Écrire des maths en LaTeX
description: Ce support de cours présente les bases de LaTeX pour rédiger des expressions mathématiques, ainsi que des astuces pour gagner en efficacité avec des snippets dans VS Code et Obsidian.
slug: latex
tags: [course, info, latex]
last_update:
  date: 2025-11-05
  author: Eliott A. Roussille
---
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

## Introduction

$\LaTeX$ est **la référence universelle** pour rédiger des expressions mathématiques. Couplé à des éditeurs modernes comme **VS Code**, **Obsidian** ou **Overleaf**, il permet d'écrire des mathématiques efficacement sur PC.

### Pourquoi LaTeX ?

Avec LaTeX, vous pouvez écrire **absolument tout** en mathématiques :

- Équations simples ou complexes avec fractions, racines, indices
- Matrices, déterminants, systèmes d'équations
- Intégrales multiples, dérivées partielles
- Symboles spécialisés (physique quantique, théorie des ensembles, logique)
- Diagrammes commutatifs, graphes
- Notation musicale, échecs, chimie...

**La bonne nouvelle :** Il est impossible (et inutile) de connaître toutes les commandes LaTeX par cœur. Il en existe des milliers, et même les experts cherchent régulièrement la syntaxe exacte.

:::tip Apprendre progressivement
Ne vous inquiétez pas si vous ne retenez pas tout immédiatement. La maîtrise vient avec la pratique. Les commandes que vous utilisez souvent (fractions, sommes, intégrales) se graveront naturellement dans votre mémoire. Pour le reste, il existe des outils !
:::

### Detexify : votre meilleur allié

**[Detexify](https://detexify.kirelabs.org/classify.html)** est un outil magique qui reconnaît les symboles dessinés à la souris :

1. Dessinez approximativement le symbole que vous cherchez
2. L'IA vous propose les commandes LaTeX correspondantes
3. Copiez la commande et utilisez-la dans votre document

**Workflow recommandé pour débuter :**

- Utilisez Detexify chaque fois que vous cherchez un symbole inconnu
- Notez les commandes que vous utilisez fréquemment
- Après quelques semaines, vous connaîtrez naturellement les symboles courants
- Créez des snippets pour les commandes que vous tapez souvent (voir sections suivantes)

:::note Mon conseil personnel
Au début, gardez Detexify ouvert dans un onglet. Avec le temps, vous n'en aurez presque plus besoin pour les mathématiques courantes, mais il restera indispensable pour les symboles rares ou spécialisés.
:::

**Objectifs d'apprentissage :**

- Maîtriser la syntaxe mathématique de base de LaTeX
- Être autonome dans l'apprentissage de nouvelles commandes
- Utiliser Detexify pour trouver rapidement des symboles
- Créer des snippets personnalisés pour accélérer la frappe
- Utiliser LaTeX dans différents environnements (Markdown, Overleaf)

**Exemple de ce que vous pourrez faire :**

$$
\displaystyle
\boxed{
\left(
\begin{smallmatrix}
\color{red}\displaystyle \sum_{i=1}^{n}\frac{\alpha_i x^{i}}{i!}
      & \displaystyle \color{purple} \cancel{\int_{a}^{b} f(t)\,\mathrm{d}t}\\[4pt]
\displaystyle \left.\frac{\partial^2 g}{\partial y^2}\right|_{y=0}
      & \displaystyle \color{green}\sqrt{\beta^2+\gamma^2}
\end{smallmatrix}
\right)_{x=\hat{\theta}_{\scriptscriptstyle 0}}
\cdot
\vec{v}_{\lfloor\gamma\rfloor}
\;+\;
\overbrace{\lim_{x\to0^{+}}\sum_{k=0}^{\infty}\frac{(-1)^k x^{2k}}{(2k)!}}^{\cos x}
\;=\;
\color{blue}
\frac{\Gamma\!\bigl(\tfrac{1}{2}\bigr)}{\sqrt{\pi}}
}
$$

:::warning
Ce qu'il y a écrit ci-dessus est faux, c'est uniquement à but démonstratif !
:::

## Prérequis & Installation

Plusieurs options sont possibles pour écrire des expressions mathématiques en LaTeX.

<Tabs>
  <TabItem value="markdown-vscode" label="Markdown sur VS Code">
    Éditeur de code avec rendu LaTeX via extensions : [code.visualstudio.com](https://code.visualstudio.com/)

    **Extensions recommandées :**

    - [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
    - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
    - [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)
  </TabItem>
  <TabItem value="markdown-obsidian" label="Markdown sur Obsidian">
    Prise de notes en Markdown avec rendu LaTeX natif : [obsidian.md](https://obsidian.md/)

    **Plugins recommandés :**

    - [Latex Suite](obsidian://show-plugin?id=obsidian-latex-suite)
    - [Better Math in Callouts & Blockquotes](obsidian://show-plugin?id=math-in-callout)
  </TabItem>
  <TabItem value="latex-overleaf" label="LaTeX sur Overleaf (en ligne)">
    IDE LaTeX en ligne, collaboratif : [overleaf.com](https://www.overleaf.com/)

    :::tip
    Toujours charger `\usepackage{amsmath,amssymb,mathtools}` en préambule.
    :::
  </TabItem>
  <TabItem value="latex-vscode" label="LaTeX sur VS Code">
    Éditeur de code avec compilation LaTeX locale : [code.visualstudio.com](https://code.visualstudio.com/)

    Ajouter l'extension [**LaTeX Workshop**](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) pour compilation, snippets et preview.

    **Installer une distribution LaTeX :**

    - [TeX Live](https://tug.org/texlive/) : Distribution LaTeX recommandée (Windows/macOS/Linux)
    - [MiKTeX](https://miktex.org/) : Alternative plus légère à TeX Live

    :::tip
    Toujours charger `\usepackage{amsmath,amssymb,mathtools}` en préambule.
    :::
  </TabItem>
</Tabs>

## Modes mathématiques

LaTeX propose deux modes pour écrire des mathématiques. Comprendre ces modes est essentiel car ils influencent le rendu des symboles et des espacements.

### Mode Inline vs Display

| Mode        | Syntaxe                    | Usage                                    | Rendu                                               |
| ----------- | -------------------------- | ---------------------------------------- | --------------------------------------------------- |
| **Inline**  | `$ ... $` ou `\( ... \)`   | Mathématiques dans le texte courant      | Compact, indices/exposants réduits                  |
| **Display** | `$$ ... $$` ou `\[ ... \]` | Équations centrées sur leur propre ligne | Agrandi, indices/exposants placés au-dessus/dessous |

**Exemple :**

```latex
Le théorème de Pythagore s'écrit $a^2 + b^2 = c^2$ pour un triangle rectangle.

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

> Le théorème de Pythagore s'écrit $a^2 + b^2 = c^2$ pour un triangle rectangle.
>
> $$
> \int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
> $$

### Forcer le style display en mode inline

Utilisez `\displaystyle` pour obtenir un rendu agrandi même en mode inline :

```latex
Comparez $\sum_{i=1}^{n} i$ avec $\displaystyle\sum_{i=1}^{n} i$ dans le texte.
```

> Comparez $\sum_{i=1}^{n} i$ avec $\displaystyle\sum_{i=1}^{n} i$ dans le texte.

:::tip Astuce professionnelle
En mode inline, évitez `\displaystyle` car il perturbe l'interligne. Préférez plutôt basculer en mode display avec `$$ ... $$` pour les expressions complexes.
:::

## Référence rapide des symboles

### Opérateurs de base

| Commande LaTeX   | Rendu                         | Description          |
| ---------------- | ----------------------------- | -------------------- |
| `\cdot`          | $\cdot$                       | Multiplication       |
| `\frac{a}{b}`    | $\frac{a}{b}$                 | Fraction             |
| `a_i`, `x^{n+1}` | $a_i,\; x^{n+1}$              | Indices et exposants |
| `\sqrt[n]{x}`    | $\sqrt[n]{x}$                 | Racine n-ième        |
| `\sum_{k=0}^n`   | $\displaystyle\sum_{k=0}^n$   | Somme                |
| `\int_a^b`       | $\displaystyle\int_a^b$       | Intégrale            |
| `\prod_{i=1}^n`  | $\displaystyle\prod_{i=1}^n$  | Produit              |
| `\lim_{x \to 0}` | $\displaystyle\lim_{x \to 0}$ | Limite               |

### Ensembles et relations

| Commande     | Rendu        | Description       |
| ------------ | ------------ | ----------------- |
| `\in`        | $\in$        | Appartient à      |
| `\notin`     | $\notin$     | N'appartient pas  |
| `\subset`    | $\subset$    | Inclusion stricte |
| `\subseteq`  | $\subseteq$  | Inclusion large   |
| `\cup`       | $\cup$       | Union             |
| `\cap`       | $\cap$       | Intersection      |
| `\emptyset`  | $\emptyset$  | Ensemble vide     |
| `\mathbb{N}` | $\mathbb{N}$ | Entiers naturels  |
| `\mathbb{Z}` | $\mathbb{Z}$ | Entiers relatifs  |
| `\mathbb{Q}` | $\mathbb{Q}$ | Rationnels        |
| `\mathbb{R}` | $\mathbb{R}$ | Réels             |
| `\mathbb{C}` | $\mathbb{C}$ | Complexes         |

### Délimiteurs adaptatifs

Les délimiteurs `\left` et `\right` s'adaptent automatiquement à la taille du contenu :

```latex
$\displaystyle( \frac{a}{b} )$ vs $\displaystyle\left( \frac{a}{b} \right)$
```

> $\displaystyle( \frac{a}{b} )$ vs $\displaystyle\left( \frac{a}{b} \right)$

| Délimiteur  | Statique | Adaptatif          |
| ----------- | -------- | ------------------ |
| Parenthèses | `( )`    | `\left( \right)`   |
| Crochets    | `[ ]`    | `\left[ \right]`   |
| Accolades   | `\{ \}`  | `\left\{ \right\}` |
| Barres      | `\| \|`  | `\left\| \right\|` |

## Environnements mathématiques avancés

### Environnement `align`

Pour aligner plusieurs équations sur le symbole `&` :

```latex
\begin{align}
  f(x) &= x^2 + 2x + 1 \\
  &= (x + 1)^2
\end{align}
```

> $$
> \begin{align}
> f(x) &= x^2 + 2x + 1 \\
> &= (x + 1)^2
> \end{align}
> $$

:::note Numérotation
`align` numérote automatiquement chaque ligne. Pour éviter la numérotation, utilisez `align*` ou ajoutez `\nonumber` sur une ligne spécifique.
:::

### Environnement `cases` : fonctions par morceaux

Idéal pour définir des fonctions conditionnelles :

```latex
f(x) = \begin{cases}
  x^2 & \text{si } x \geq 0 \\
  -x & \text{si } x < 0
\end{cases}
```

> $$
> f(x) = \begin{cases}
> x^2 & \text{si } x \geq 0 \\
> -x & \text{si } x < 0
> \end{cases}
> $$

**Application en probabilités :**

```latex
P(X = k) = \begin{cases}
  \binom{n}{k} p^k (1-p)^{n-k} & \text{si } k \in \{0,\ldots,n\} \\
  0 & \text{sinon}
\end{cases}
```

> $$
> P(X = k) = \begin{cases}
> \binom{n}{k} p^k (1-p)^{n-k} & \text{si } k \in \{0,\ldots,n\} \\
> 0 & \text{sinon}
> \end{cases}
> $$

### Matrices : types et variantes

LaTeX offre plusieurs environnements de matrices avec différents délimiteurs :

| Environnement | Délimiteurs | Code                                                   | Rendu                                                  |
| ------------- | ----------- | ------------------------------------------------------ | ------------------------------------------------------ |
| `matrix`      | Aucun       | `\begin{matrix} a & b \\ c & d \end{matrix}`           | $\begin{matrix} a & b \\ c & d \end{matrix}$           |
| `pmatrix`     | `( )`       | `\begin{pmatrix} a & b \\ c & d \end{pmatrix}`         | $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$         |
| `bmatrix`     | `[ ]`       | `\begin{bmatrix} a & b \\ c & d \end{bmatrix}`         | $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$         |
| `Bmatrix`     | `{ }`       | `\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}`         | $\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}$         |
| `vmatrix`     | `\| \|`     | `\begin{vmatrix} a & b \\ c & d \end{vmatrix}`         | $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$         |
| `smallmatrix` | Aucun       | `\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}` | $\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}$ |

:::tip Usage pratique : smallmatrix
`smallmatrix` est parfait pour les vecteurs et petites matrices en mode inline, évitant de perturber l'interligne du paragraphe. Utilisez-le avec `\left(` et `\right)` pour ajouter des délimiteurs.

```latex
La matrice $\left(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right)$ est inversible si $ad - bc \neq 0$.
```

> La matrice $\left(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right)$ est inversible si $ad - bc \neq 0$.
:::

**Exemple complet : système d'équations linéaires :**

```latex
\begin{bmatrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9
\end{bmatrix}
\begin{pmatrix}
  x \\
  y \\
  z
\end{pmatrix}
=
\begin{pmatrix}
  b_1 \\
  b_2 \\
  b_3
\end{pmatrix}
```

> $$
> \begin{bmatrix}
> 1 & 2 & 3 \\
> 4 & 5 & 6 \\
> 7 & 8 & 9
> \end{bmatrix}
> \begin{pmatrix}
> x \\
> y \\
> z
> \end{pmatrix}
> =
> \begin{pmatrix}
> b_1 \\
> b_2 \\
> b_3
> \end{pmatrix}
> $$

## Accélérer la saisie avec les Snippets

Les _snippets_ transforment un raccourci en code prédéfini. Exemple : `fr` + `Tab` → `\frac{•}{•}`

### Snippets dans VS Code

#### Configuration initiale

1. `Ctrl/Cmd + Shift + P` → **Preferences: Configure User Snippets**
2. Choisir `latex.json` (ou `markdown.json` pour Markdown)
3. Ajouter vos snippets au format JSON

#### Anatomie d'un snippet VS Code

```json
"sum": {
  "prefix": "sum",                    // Raccourci à taper
  "body": "\\sum_{i=$1}^{$2} $3",     // Code généré
  "description": "Somme"              // Description (optionnelle)
}
```

**Propriétés d'un snippet :**

- **prefix** : Le raccourci à taper (ex: `sum`)
- **body** : Le code LaTeX généré (échapper les backslashes : `\\`)
- **description** : Description affichée dans l'autocomplétion

**Navigation intelligente (tab stops)** : `$1`, `$2`, `$3` définissent où le curseur se positionne. Après insertion, votre curseur se place sur `$1`, puis `Tab` passe à `$2`, etc.

**Valeurs par défaut** : `${1:valeur}` définit une valeur par défaut pour le tab stop.

#### Exemples de snippets utiles

Ajoutez ces snippets dans votre configuration `latex.json` ou `markdown.json` :

```json
{
  "fraction": {
    "prefix": "fr",
    "body": "\\frac{$1}{$2}$0",
    "description": "Fraction a/b"
  },
  "sum": {
    "prefix": "sum",
    "body": "\\sum_{${1:i}=${2:0}}^{${3:n}} $0",
    "description": "Somme avec bornes"
  },
  "integral": {
    "prefix": "int",
    "body": "\\int_{${1:a}}^{${2:b}} ${3:f(x)} \\,\\mathrm{d}${4:x}$0",
    "description": "Intégrale définie"
  },
  "limit": {
    "prefix": "lim",
    "body": "\\lim_{${1:x} \\to ${2:0}} $0",
    "description": "Limite"
  },
  "matrix": {
    "prefix": "mat",
    "body": [
      "\\begin{${1|matrix,pmatrix,bmatrix,vmatrix|}}",
      "\t$2",
      "\\end{${1|matrix,pmatrix,bmatrix,vmatrix|}}"
    ],
    "description": "Matrice avec choix de délimiteurs"
  },
  "cases": {
    "prefix": "cas",
    "body": [
      "\\begin{cases}",
      "\t$1 & \\text{si } $2 \\\\",
      "\t$3 & \\text{si } $4",
      "\\end{cases}$0"
    ],
    "description": "Fonction par morceaux (2 cas)"
  },
  "align": {
    "prefix": "ali",
    "body": [
      "\\begin{align${1:*}}",
      "\t$2 &= $3 \\\\",
      "\t&= $4",
      "\\end{align${1:*}}$0"
    ],
    "description": "Alignement d'équations"
  }
}
```

:::tip Technique avancée : choix multiples
La syntaxe `${1|option1,option2,option3|}` affiche un menu déroulant lors de l'insertion. Utilisé dans le snippet `mat` ci-dessus pour choisir le type de matrice.
:::

### Snippets dans Obsidian avec Latex Suite

**Latex Suite** est l'extension de référence pour écrire des mathématiques rapidement dans Obsidian. Elle transforme l'expérience d'écriture en permettant une saisie aussi fluide qu'avec un stylo sur papier.

**Installation :**

1. Ouvrir Obsidian → **Paramètres** → **Options des plugins communautaires**
2. Rechercher "**Latex Suite**" dans le navigateur de plugins
3. Cliquer sur **Installer**, puis **Activer**

**Fonctionnalités clés :**

| Fonctionnalité     | Description                                   | Exemple                                     |
| ------------------ | --------------------------------------------- | ------------------------------------------- |
| **Auto-expansion** | Expansion automatique sans appuyer sur Tab    | `//` → `\frac{•}{•}`                        |
| **Mode visuel**    | Transformation de texte sélectionné           | Sélectionner `x+y` puis `S` → `\sqrt{x+y}`  |
| **Context-aware**  | Snippets actifs uniquement en mode math       | `@a` fonctionne dans `$$...$$` uniquement   |
| **Regex triggers** | Patterns avancés pour auto-formatage          | `x2` → `x_{2}` automatiquement              |
| **Variables**      | Symboles prédéfinis pour simplifier les regex | `${GREEK}` pour toutes les lettres grecques |

#### Anatomie d'un snippet Latex Suite

Un snippet Latex Suite est un objet JavaScript avec 4 propriétés principales :

```js
{
  trigger: "//",                    // Déclencheur : texte qui active le snippet
  replacement: "\\frac{$0}{$1}$2",  // Remplacement : code LaTeX généré
  options: "mA",                    // Options : contexte et comportement
  priority: 1,                      // Priorité d'exécution. En cas de conflit, le snippet avec la plus haute priorité sera préféré (optionnelle)
  description: "Fraction rapide",   // Description (optionnelle)
  flags: "i"                        // Flags regex (optionnels)
}
```

**Les options expliquées :**

| Option | Signification        | Description                                            |
| ------ | -------------------- | ------------------------------------------------------ |
| `t`    | **Text mode**        | Snippet actif en dehors des environnements math        |
| `m`    | **Math mode**        | Snippet actif dans `$$...$$` ou `$...$`                |
| `M`    | **Block math mode**  | Snippet actif dans `$$...$$`                           |
| `n`    | **Inline math mode** | Snippet actif dans `$...$`                             |
| `c`    | **Code mode**        | Snippet actif dans ` ``` ``` `                         |
| `A`    | **Auto-expand**      | Expansion automatique sans Tab                         |
| `v`    | **Visual**           | Snippet actif lors de la sélection de texte            |
| `w`    | **Word boundary**    | Nécessite un espace ou début de ligne avant le trigger |
| `r`    | **Regex**            | Le trigger est une expression régulière                |

**Tab stops avec `$0`, `$1`, `$2` :**

Comme dans VS Code, les tab stops définissent où le curseur se positionne après l'expansion :

```js
{ trigger: "sum", replacement: "\\sum_{${0:k}=${1:0}}^{${2:n}} $3", options: "mA" }
```

- `${0:k}` : Premier arrêt avec valeur par défaut "k"
- `${1:0}` : Deuxième arrêt avec valeur par défaut "0"
- `$3` : Dernier arrêt sans valeur par défaut

```js
{ trigger: "begin", replacement: "\\begin{$1}\n  $2\n\\end{$1}", options: "MA" }
```

Ici, le premier arrêt `$1` est automatiquement réutilisé dans `\end{...}`.

**Regex triggers avancés :**

Les snippets peuvent utiliser des regex pour détecter des patterns :

```js
{
  trigger: "([A-Za-z])(\\d)",      // Détecte lettre + chiffre
  replacement: "[[0]]_{[[1]]}",    // [[0]] = lettre, [[1]] = chiffre
  options: "rmA"                   // r = regex
}
```

Exemple : `x2` → `x_{2}` automatiquement

**Variables prédéfinies :**

Le fichier `default_snippet_variables.js` définit des constantes pour simplifier les regex :

```js
{
  "${GREEK}": "alpha|beta|gamma|delta|...",
  "${SYMBOL}": "parallel|nabla|hbar|...",
  "${UNITS}": "V|A|Hz|kg|m|..."
}
```

Utilisation dans un snippet :

```js
{
  trigger: "\\\\(${GREEK})([A-Za-z])",
  replacement: "\\[[0]] [[1]]",    // Insère un espace après les lettres grecques
  options: "rmA"
}
```

#### Ma configuration personnelle

J'ai créé une configuration complète avec **plus de 250 snippets** optimisés pour les mathématiques et la physique. Cette configuration est le fruit de deux années de prise de notes quotidiennes.

- <a href="/assets/docs/latex/default_snippets.js" target="_blank">**default_snippets.js**</a> (snippets personnalisés)
- <a href="/assets/docs/latex/default_snippet_variables.js" target="_blank">**default_snippet_variables.js**</a> (variables et symboles)

:::note Configuration complète
Les snippets couvrent :

- Callouts Obsidian automatiques
- Symboles mathématiques avancés
- Unités physiques (détection automatique : `10Hz` → `10\text{Hz}`)
- Raccourcis pour suites et séries : `uu` → $(u_{n})_{n\in\mathbb{N}}$, `ff` → $(f_{n})_{n\in\mathbb{N}}$, `SS` → $(S_{n})_{n\in\mathbb{N}}$
- Conversion automatique de lettres isolées en mode math

Je vous conseille de lire le document même en diagonale pour les découvrir et savoir qu'ils existent quitte à revenir plus tard avec un `ctrl+f`.
:::

**Installation :**

1. Copier le contenu des deux fichiers ci-dessus
2. Dans Obsidian : **Paramètres → Latex Suite → Snippets**
3. Coller le contenu de `default_snippets.js` dans la zone de texte
4. Aller dans **Snippets variables**
5. Coller le contenu de `default_snippet_variables.js`

:::tip Configuration recommandée
Je vous conseille vivement d'utiliser ma configuration comme base, puis de la personnaliser selon vos besoins.
:::

<details>
<summary>Exemples de snippets de ma configuration</summary>

##### 1. Entrée rapide en mode math

| Raccourci | Résultat            | Description                        |
| --------- | ------------------- | ---------------------------------- |
| `ml`      | `$\displaystyle •$` | Mode math inline avec displaystyle |
| `dm`      | `$$\n•\n$$`         | Mode math display (bloc)           |

##### 2. Fractions et opérations

| Raccourci | Résultat      | Description     |
| --------- | ------------- | --------------- |
| `//`      | `\frac{•}{•}` | Fraction rapide |
| `sr`      | `^{2}`        | Carré (square)  |
| `cb`      | `^{3}`        | Cube            |
| `sq`      | `\sqrt{•}`    | Racine carrée   |
| `ee`      | `e^{•}`       | Exponentielle   |

##### 3. Lettres grecques avec `@`

Le préfixe `@` permet d'insérer rapidement des lettres grecques :

| Raccourci | Résultat      | Raccourci | Résultat  |
| --------- | ------------- | --------- | --------- |
| `@a`      | `\alpha`      | `@G`      | `\Gamma`  |
| `@b`      | `\beta`       | `@D`      | `\Delta`  |
| `@g`      | `\gamma`      | `@T`      | `\Theta`  |
| `@d`      | `\delta`      | `@L`      | `\Lambda` |
| `@e`      | `\varepsilon` | `@S`      | `\Sigma`  |
| `@t`      | `\theta`      | `@O`      | `\Omega`  |
| `@l`      | `\lambda`     | `@P`      | `\Pi`     |
| `@p`      | `\varphi`     |           |           |
| `@o`      | `\omega`      |           |           |
| `@s`      | `\sigma`      |           |           |

##### 4. Ensembles et symboles avec majuscules doublées

| Raccourci | Résultat      | Description         |
| --------- | ------------- | ------------------- |
| `RR`      | $\mathbb{R}$  | Réels               |
| `CC`      | $\mathbb{C}$  | Complexes           |
| `NN`      | $\mathbb{N}$  | Naturels            |
| `ZZ`      | $\mathbb{Z}$  | Entiers relatifs    |
| `KK`      | $\mathbb{K}$  | Corps générique     |
| `LL`      | $\mathcal{L}$ | Espace de fonctions |
| `MM`      | $\mathcal{M}$ | Espace de matrices  |

##### 5. Indices automatiques

Les snippets détectent automatiquement les indices courants :

```latex
x2     →  x_{2}           (indices numériques)
xii    →  x_{i}           (indices i, j, k, n, m)
xip1   →  x_{i+1}         (indices avec +)
xim2   →  x_{i-2}         (indices avec -)
```

##### 6. Accents et modificateurs

Tapez une lettre suivie de :

| Suffixe | Résultat   | Exemple              | Aperçu     |
| ------- | ---------- | -------------------- | ---------- |
| `vec`   | `\vec{•}`  | `xvec` → `\vec{x}`   | $\vec{x}$  |
| `dot`   | `\dot{•}`  | `xdot` → `\dot{x}`   | $\dot{x}$  |
| `ddot`  | `\ddot{•}` | `xddot` → `\ddot{x}` | $\ddot{x}$ |
| `bar`   | `\bar{•}`  | `xbar` → `\bar{x}`   | $\bar{x}$  |
| `hat`   | `\hat{•}`  | `xhat` → `\hat{x}`   | $\hat{x}$  |

##### 7. Dérivées et intégrales

| Raccourci | Résultat                                | Exemple d'aperçu                        | Description               |
| --------- | --------------------------------------- | --------------------------------------- | ------------------------- |
| `par`     | `\frac{\partial •}{\partial •}`         | $\frac{\partial f}{\partial x}$         | Dérivée partielle         |
| `pa2`     | `\frac{\partial^{2} •}{\partial •^{2}}` | $\frac{\partial^{2} f}{\partial x^{2}}$ | Dérivée seconde           |
| `ddt`     | `\frac{d}{dt}`                          | $\frac{d}{dt}$                          | Dérivée temporelle        |
| `int`     | `\int_{0}^{\infty} • \, d•`             | $\int_{0}^{\infty} f(x) \, dx$          | Intégrale avec bornes     |
| `oinf`    | `\int_{0}^{\infty} • \, d•`             | $\int_{0}^{\infty} f(x) \, dx$          | Intégrale de 0 à l'infini |
| `infi`    | `\int_{-\infty}^{+\infty} • \, d•`      | $\int_{-\infty}^{+\infty} f(x) \, dx$   | Intégrale sur R           |

##### 8. Matrices rapides

| Raccourci | Résultat                            | Exemple d'aperçu                                             | Description              |
| --------- | ----------------------------------- | ------------------------------------------------------------ | ------------------------ |
| `pmat`    | `\begin{pmatrix}\n•\n\end{pmatrix}` | $\begin{pmatrix} a&b\\c&d \end{pmatrix}$                     | Matrice avec parenthèses |
| `bmat`    | `\begin{bmatrix}\n•\n\end{bmatrix}` | $\begin{bmatrix} a&b\\c&d \end{bmatrix}$                     | Matrice avec crochets    |
| `vmat`    | `\begin{vmatrix}\n•\n\end{vmatrix}` | $\begin{vmatrix} a&b\\c&d \end{vmatrix}$                     | Déterminant              |
| `cases`   | `\begin{cases}\n•\n\end{cases}`     | $\begin{cases} 0&\text{si } x=0\\1&\text{sinon} \end{cases}$ | Fonction par morceaux    |

##### 9. Mode visuel : transformations de sélection

Sélectionnez du texte puis appuyez sur :

| Touche | Transformation         | Exemple                        | Aperçu                 |
| ------ | ---------------------- | ------------------------------ | ---------------------- |
| `S`    | `\sqrt{...}`           | `x+1` → `\sqrt{x+1}`           | $\sqrt{x+1}$           |
| `U`    | `\underbrace{...}_{•}` | `a+b` → `\underbrace{a+b}_{•}` | $\underbrace{a+b}_{•}$ |
| `O`    | `\overbrace{...}^{•}`  | `a+b` → `\overbrace{a+b}^{•}`  | $\overbrace{a+b}^{•}$  |
| `C`    | `\cancel{...}`         | `x` → `\cancel{x}`             | $\cancel{x}$           |

</details>

## Exercices pratiques

| #   | Énoncé                                                           | Objectif pédagogique                            |
| --- | ---------------------------------------------------------------- | ----------------------------------------------- |
| 1   | Rédiger une fiche contenant les formules de dérivation niveau A1 | Maîtriser les environnements `align` et `cases` |
| 2   | Créer un snippet VS Code pour l'environnement `matrix`           | Automatiser la saisie                           |
| 3   | Importer le document sur Overleaf et partager avec un camarade   | Découvrir le mode révision                      |

## Ressources

### Documentation et outils en ligne

- [Overleaf – Learn LaTeX in 30 Minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) - Introduction complète
- [Detexify - Find LaTeX symbols by drawing](https://detexify.kirelabs.org/classify.html) - Dessinez un symbole pour trouver la commande LaTeX
- [MathJax Documentation - TeX Syntax](https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm) - Syntaxe TeX complète
- [MathJax Macros - List of available macros](https://docs.mathjax.org/en/latest/input/tex/macros/index.html) - Liste des macros disponibles
- [LaTeX Math Cheat Sheet](https://wch.github.io/latexsheet/latexsheet.pdf) - Référence rapide
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX) - Documentation communautaire

### Fichiers de configuration Obsidian

- <a href="/assets/docs/latex/default_snippets.js" target="_blank">**Ouvrir default_snippets.js**</a> - Configuration des snippets Latex Suite
- <a href="/assets/docs/latex/default_snippet_variables.js" target="_blank">**Ouvrir default_snippet_variables.js**</a> - Variables et symboles pour Latex Suite

:::tip
Ces fichiers contiennent plus de 250 snippets optimisés pour la saisie rapide de mathématiques, physique et chimie dans Obsidian. Voir la section [Snippets dans Obsidian](#snippets-dans-obsidian-avec-latex-suite) pour les instructions d'installation.
:::
