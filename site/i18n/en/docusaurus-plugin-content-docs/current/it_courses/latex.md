---
title: Writing Math in LaTeX
description: This course material presents the basics of LaTeX for writing mathematical expressions, along with tips for efficiency using snippets in VS Code and Obsidian.
slug: latex
tags: [course, info, latex]
last_update:
  date: 2025-11-05
  author: Eliott A. Roussille
---
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

## Introduction

$\LaTeX$ is **the universal standard** for writing mathematical expressions. Coupled with modern editors like **VS Code**, **Obsidian**, or **Overleaf**, it allows you to write mathematics efficiently on a PC.

### Why LaTeX?

With LaTeX, you can write **absolutely anything** in mathematics:

- Simple or complex equations with fractions, roots, indices
- Matrices, determinants, systems of equations
- Multiple integrals, partial derivatives
- Specialized symbols (quantum physics, set theory, logic)
- Commutative diagrams, graphs
- Musical notation, chess, chemistry...

**The good news:** It is impossible (and useless) to know all LaTeX commands by heart. There are thousands of them, and even experts regularly look up the exact syntax.

:::tip Learn progressively
Don't worry if you don't remember everything immediately. Mastery comes with practice. Commands you use often (fractions, sums, integrals) will naturally engrave themselves in your memory. For the rest, there are tools!
:::

### Detexify: Your Best Ally

**[Detexify](https://detexify.kirelabs.org/classify.html)** is a magical tool that recognizes symbols drawn with the mouse:

1. Draw approximately the symbol you're looking for
2. The AI suggests corresponding LaTeX commands
3. Copy the command and use it in your document

**Recommended workflow for beginners:**

- Use Detexify every time you're looking for an unknown symbol
- Note the commands you use frequently
- After a few weeks, you'll naturally know the common symbols
- Create snippets for commands you type often (see following sections)

:::note My personal advice
At first, keep Detexify open in a tab. Over time, you'll barely need it for common mathematics, but it will remain essential for rare or specialized symbols.
:::

**Learning objectives:**

- Master basic mathematical syntax in LaTeX
- Be autonomous in learning new commands
- Use Detexify to quickly find symbols
- Create custom snippets to speed up typing
- Use LaTeX in different environments (Markdown, Overleaf)

**Example of what you'll be able to do:**

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
What is written above is false, it's only for demonstration purposes!
:::

## Prerequisites & Installation

Several options are available for writing mathematical expressions in LaTeX.

<Tabs>
  <TabItem value="markdown-vscode" label="Markdown on VS Code">
    Code editor with LaTeX rendering via extensions: [code.visualstudio.com](https://code.visualstudio.com/)

    **Recommended extensions:**

    - [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
    - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
    - [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)
  </TabItem>
  <TabItem value="markdown-obsidian" label="Markdown on Obsidian">
    Note-taking in Markdown with native LaTeX rendering: [obsidian.md](https://obsidian.md/)

    **Recommended plugins:**

    - [Latex Suite](obsidian://show-plugin?id=obsidian-latex-suite)
    - [Better Math in Callouts & Blockquotes](obsidian://show-plugin?id=math-in-callout)
  </TabItem>
  <TabItem value="latex-overleaf" label="LaTeX on Overleaf (online)">
    Online, collaborative LaTeX IDE: [overleaf.com](https://www.overleaf.com/)

    :::tip
    Always load `\usepackage{amsmath,amssymb,mathtools}` in the preamble.
    :::
  </TabItem>
  <TabItem value="latex-vscode" label="LaTeX on VS Code">
    Code editor with local LaTeX compilation: [code.visualstudio.com](https://code.visualstudio.com/)

    Add the [**LaTeX Workshop**](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) extension for compilation, snippets, and preview.

    **Install a LaTeX distribution:**

    - [TeX Live](https://tug.org/texlive/): Recommended LaTeX distribution (Windows/macOS/Linux)
    - [MiKTeX](https://miktex.org/): Lighter alternative to TeX Live

    :::tip
    Always load `\usepackage{amsmath,amssymb,mathtools}` in the preamble.
    :::
  </TabItem>
</Tabs>

## Math Modes

LaTeX offers two modes for writing mathematics. Understanding these modes is essential as they influence the rendering of symbols and spacing.

### Inline vs Display Mode

| Mode        | Syntax                     | Usage                                | Rendering                                      |
| ----------- | -------------------------- | ------------------------------------ | ---------------------------------------------- |
| **Inline**  | `$ ... $` or `\( ... \)`   | Mathematics within running text      | Compact, reduced indices/exponents             |
| **Display** | `$$ ... $$` or `\[ ... \]` | Equations centered on their own line | Enlarged, indices/exponents placed above/below |

**Example:**

```latex
The Pythagorean theorem is written $a^2 + b^2 = c^2$ for a right triangle.

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

> The Pythagorean theorem is written $a^2 + b^2 = c^2$ for a right triangle.
>
> $$
> \int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
> $$

### Force display style in inline mode

Use `\displaystyle` to get enlarged rendering even in inline mode:

```latex
Compare $\sum_{i=1}^{n} i$ with $\displaystyle\sum_{i=1}^{n} i$ in the text.
```

> Compare $\sum_{i=1}^{n} i$ with $\displaystyle\sum_{i=1}^{n} i$ in the text.

:::tip Professional tip
In inline mode, avoid `\displaystyle` as it disrupts line spacing. Rather prefer switching to display mode with `$$ ... $$` for complex expressions.
:::

## Quick Symbol Reference

### Basic Operators

| LaTeX Command    | Rendering                     | Description           |
| ---------------- | ----------------------------- | --------------------- |
| `\cdot`          | $\cdot$                       | Multiplication        |
| `\frac{a}{b}`    | $\frac{a}{b}$                 | Fraction              |
| `a_i`, `x^{n+1}` | $a_i,\; x^{n+1}$              | Indices and exponents |
| `\sqrt[n]{x}`    | $\sqrt[n]{x}$                 | nth root              |
| `\sum_{k=0}^n`   | $\displaystyle\sum_{k=0}^n$   | Sum                   |
| `\int_a^b`       | $\displaystyle\int_a^b$       | Integral              |
| `\prod_{i=1}^n`  | $\displaystyle\prod_{i=1}^n$  | Product               |
| `\lim_{x \to 0}` | $\displaystyle\lim_{x \to 0}$ | Limit                 |

### Sets and Relations

| Command      | Rendering    | Description        |
| ------------ | ------------ | ------------------ |
| `\in`        | $\in$        | Belongs to         |
| `\notin`     | $\notin$     | Does not belong to |
| `\subset`    | $\subset$    | Strict inclusion   |
| `\subseteq`  | $\subseteq$  | Inclusion          |
| `\cup`       | $\cup$       | Union              |
| `\cap`       | $\cap$       | Intersection       |
| `\emptyset`  | $\emptyset$  | Empty set          |
| `\mathbb{N}` | $\mathbb{N}$ | Natural numbers    |
| `\mathbb{Z}` | $\mathbb{Z}$ | Integers           |
| `\mathbb{Q}` | $\mathbb{Q}$ | Rational numbers   |
| `\mathbb{R}` | $\mathbb{R}$ | Real numbers       |
| `\mathbb{C}` | $\mathbb{C}$ | Complex numbers    |

### Adaptive Delimiters

Delimiters `\left` and `\right` automatically adapt to the content size:

```latex
$\displaystyle( \frac{a}{b} )$ vs $\displaystyle\left( \frac{a}{b} \right)$
```

> $\displaystyle( \frac{a}{b} )$ vs $\displaystyle\left( \frac{a}{b} \right)$

| Delimiter   | Static  | Adaptive           |
| ----------- | ------- | ------------------ |
| Parentheses | `( )`   | `\left( \right)`   |
| Brackets    | `[ ]`   | `\left[ \right]`   |
| Braces      | `\{ \}` | `\left\{ \right\}` |
| Bars        | `\| \|` | `\left\| \right\|` |

## Advanced Math Environments

### `align` Environment

To align multiple equations on the `&` symbol:

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

:::note Numbering
`align` automatically numbers each line. To avoid numbering, use `align*` or add `\nonumber` on a specific line.
:::

### `cases` Environment: Piecewise Functions

Ideal for defining conditional functions:

```latex
f(x) = \begin{cases}
  x^2 & \text{if } x \geq 0 \\
  -x & \text{if } x < 0
\end{cases}
```

> $$
> f(x) = \begin{cases}
> x^2 & \text{if } x \geq 0 \\
> -x & \text{if } x < 0
> \end{cases}
> $$

**Application in probability:**

```latex
P(X = k) = \begin{cases}
  \binom{n}{k} p^k (1-p)^{n-k} & \text{if } k \in \{0,\ldots,n\} \\
  0 & \text{otherwise}
\end{cases}
```

> $$
> P(X = k) = \begin{cases}
> \binom{n}{k} p^k (1-p)^{n-k} & \text{if } k \in \{0,\ldots,n\} \\
> 0 & \text{otherwise}
> \end{cases}
> $$

### Matrices: Types and Variants

LaTeX offers several matrix environments with different delimiters:

| Environment   | Delimiters | Code                                                   | Rendering                                              |
| ------------- | ---------- | ------------------------------------------------------ | ------------------------------------------------------ |
| `matrix`      | None       | `\begin{matrix} a & b \\ c & d \end{matrix}`           | $\begin{matrix} a & b \\ c & d \end{matrix}$           |
| `pmatrix`     | `( )`      | `\begin{pmatrix} a & b \\ c & d \end{pmatrix}`         | $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$         |
| `bmatrix`     | `[ ]`      | `\begin{bmatrix} a & b \\ c & d \end{bmatrix}`         | $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$         |
| `Bmatrix`     | `{ }`      | `\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}`         | $\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}$         |
| `vmatrix`     | `\| \|`    | `\begin{vmatrix} a & b \\ c & d \end{vmatrix}`         | $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$         |
| `smallmatrix` | None       | `\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}` | $\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}$ |

:::tip Practical usage: smallmatrix
`smallmatrix` is perfect for vectors and small matrices in inline mode, avoiding disruption of paragraph line spacing. Use it with `\left(` and `\right)` to add delimiters.

```latex
The matrix $\left(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right)$ is invertible if $ad - bc \neq 0$.
```

> The matrix $\left(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\right)$ is invertible if $ad - bc \neq 0$.
:::

**Complete example: system of linear equations:**

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

## Speed Up Input with Snippets

_Snippets_ transform a shortcut into predefined code. Example: `fr` + `Tab` → `\frac{•}{•}`

### Snippets in VS Code

#### Initial Setup

1. `Ctrl/Cmd + Shift + P` → **Preferences: Configure User Snippets**
2. Choose `latex.json` (or `markdown.json` for Markdown)
3. Add your snippets in JSON format

#### Anatomy of a VS Code Snippet

```json
"sum": {
  "prefix": "sum",                    // Shortcut to type
  "body": "\\sum_{i=$1}^{$2} $3",     // Generated code
  "description": "Sum"                // Description (optional)
}
```

**Properties of a snippet:**

- **prefix**: The shortcut to type (e.g., `sum`)
- **body**: The generated LaTeX code (escape backslashes: `\\`)
- **description**: Description displayed in autocompletion

**Smart navigation (tab stops)**: `$1`, `$2`, `$3` define where the cursor is positioned. After insertion, your cursor is placed on `$1`, then `Tab` moves to `$2`, etc.

**Default values**: `${1:value}` defines a default value for the tab stop.

#### Examples of Useful Snippets

Add these snippets to your `latex.json` or `markdown.json` configuration:

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
    "description": "Sum with bounds"
  },
  "integral": {
    "prefix": "int",
    "body": "\\int_{${1:a}}^{${2:b}} ${3:f(x)} \\,\\mathrm{d}${4:x}$0",
    "description": "Definite integral"
  },
  "limit": {
    "prefix": "lim",
    "body": "\\lim_{${1:x} \\to ${2:0}} $0",
    "description": "Limit"
  },
  "matrix": {
    "prefix": "mat",
    "body": [
      "\\begin{${1|matrix,pmatrix,bmatrix,vmatrix|}}",
      "\t$2",
      "\\end{${1|matrix,pmatrix,bmatrix,vmatrix|}}"
    ],
    "description": "Matrix with choice of delimiters"
  },
  "cases": {
    "prefix": "cas",
    "body": [
      "\\begin{cases}",
      "\t$1 & \\text{if } $2 \\\\",
      "\t$3 & \\text{if } $4",
      "\\end{cases}$0"
    ],
    "description": "Piecewise function (2 cases)"
  },
  "align": {
    "prefix": "ali",
    "body": [
      "\\begin{align${1:*}}",
      "\t$2 &= $3 \\\\",
      "\t&= $4",
      "\\end{align${1:*}}$0"
    ],
    "description": "Equation alignment"
  }
}
```

:::tip Advanced technique: multiple choices
The `${1|option1,option2,option3|}` syntax displays a dropdown menu upon insertion. Used in the `mat` snippet above to choose the matrix type.
:::

### Snippets in Obsidian with Latex Suite

**Latex Suite** is the reference extension for writing mathematics quickly in Obsidian. It transforms the writing experience by enabling input as fluid as with pen on paper.

**Installation:**

1. Open Obsidian → **Settings** → **Community plugins options**
2. Search for "**Latex Suite**" in the plugin browser
3. Click **Install**, then **Enable**

**Key features:**

| Feature            | Description                              | Example                              |
| ------------------ | ---------------------------------------- | ------------------------------------ |
| **Auto-expansion** | Automatic expansion without pressing Tab | `//` → `\frac{•}{•}`                 |
| **Visual mode**    | Transformation of selected text          | Select `x+y` then `S` → `\sqrt{x+y}` |
| **Context-aware**  | Snippets active only in math mode        | `@a` works in `$$...$$` only         |
| **Regex triggers** | Advanced patterns for auto-formatting    | `x2` → `x_{2}` automatically         |
| **Variables**      | Predefined symbols to simplify regex     | `${GREEK}` for all Greek letters     |

#### Anatomy of a Latex Suite Snippet

A Latex Suite snippet is a JavaScript object with 4 main properties:

```js
{
  trigger: "//",                    // Trigger: text that activates the snippet
  replacement: "\\frac{$0}{$1}$2",  // Replacement: generated LaTeX code
  options: "mA",                    // Options: context and behavior
  priority: 1,                      // Execution priority. In case of conflict, the snippet with the highest priority will be preferred (optional)
  description: "Quick fraction",    // Description (optional)
  flags: "i"                        // Regex flags (optional)
}
```

**Options explained:**

| Option | Meaning              | Description                                       |
| ------ | -------------------- | ------------------------------------------------- |
| `t`    | **Text mode**        | Snippet active outside math environments          |
| `m`    | **Math mode**        | Snippet active in `$$...$$` or `$...$`            |
| `M`    | **Block math mode**  | Snippet active in `$$...$$`                       |
| `n`    | **Inline math mode** | Snippet active in `$...$`                         |
| `c`    | **Code mode**        | Snippet active in ` ``` ``` `                     |
| `A`    | **Auto-expand**      | Automatic expansion without Tab                   |
| `v`    | **Visual**           | Snippet active when text is selected              |
| `w`    | **Word boundary**    | Requires a space or line start before the trigger |
| `r`    | **Regex**            | The trigger is a regular expression               |

**Tab stops with `$0`, `$1`, `$2`:**

As in VS Code, tab stops define where the cursor is positioned after expansion:

```js
{ trigger: "sum", replacement: "\\sum_{${0:k}=${1:0}}^{${2:n}} $3", options: "mA" }
```

- `${0:k}`: First stop with default value "k"
- `${1:0}`: Second stop with default value "0"
- `$3`: Last stop without default value

```js
{ trigger: "begin", replacement: "\\begin{$1}\n  $2\n\\end{$1}", options: "MA" }
```

Here, the first stop `$1` is automatically reused in `\end{...}`.

**Advanced regex triggers:**

Snippets can use regex to detect patterns:

```js
{
  trigger: "([A-Za-z])(\\d)",      // Detects letter + digit
  replacement: "[[0]]_{[[1]]}",    // [[0]] = letter, [[1]] = digit
  options: "rmA"                   // r = regex
}
```

Example: `x2` → `x_{2}` automatically

**Predefined variables:**

The `default_snippet_variables.js` file defines constants to simplify regex:

```js
{
  "${GREEK}": "alpha|beta|gamma|delta|...",
  "${SYMBOL}": "parallel|nabla|hbar|...",
  "${UNITS}": "V|A|Hz|kg|m|..."
}
```

Usage in a snippet:

```js
{
  trigger: "\\\\(${GREEK})([A-Za-z])",
  replacement: "\\[[0]] [[1]]",    // Inserts a space after Greek letters
  options: "rmA"
}
```

#### My Personal Configuration

I've created a complete configuration with **over 250 snippets** optimized for mathematics and physics. This configuration is the result of two years of daily note-taking.

- <a href="/assets/docs/latex/default_snippets.js" target="_blank">**default_snippets.js**</a> (custom snippets)
- <a href="/assets/docs/latex/default_snippet_variables.js" target="_blank">**default_snippet_variables.js**</a> (variables and symbols)

:::note Complete configuration
The snippets cover:

- Automatic Obsidian callouts
- Advanced mathematical symbols
- Physical units (automatic detection: `10Hz` → `10\text{Hz}`)
- Shortcuts for sequences and series: `uu` → $(u_{n})_{n\in\mathbb{N}}$, `ff` → $(f_{n})_{n\in\mathbb{N}}$, `SS` → $(S_{n})_{n\in\mathbb{N}}$
- Automatic conversion of isolated letters to math mode

I advise you to read the document even diagonally to discover them and know that they exist, so you can come back later with a `ctrl+f`.
:::

**Installation:**

1. Copy the contents of the two files above
2. In Obsidian: **Settings → Latex Suite → Snippets**
3. Paste the contents of `default_snippets.js` in the text area
4. Go to **Snippets variables**
5. Paste the contents of `default_snippet_variables.js`

:::tip Recommended configuration
I highly recommend using my configuration as a base, then customize it according to your needs.
:::

<details>
<summary>Examples of snippets from my configuration</summary>

##### 1. Quick entry to math mode

| Shortcut | Result              | Description                        |
| -------- | ------------------- | ---------------------------------- |
| `ml`     | `$\displaystyle •$` | Inline math mode with displaystyle |
| `dm`     | `$$\n•\n$$`         | Display math mode (block)          |

##### 2. Fractions and operations

| Shortcut | Result        | Description    |
| -------- | ------------- | -------------- |
| `//`     | `\frac{•}{•}` | Quick fraction |
| `sr`     | `^{2}`        | Square         |
| `cb`     | `^{3}`        | Cube           |
| `sq`     | `\sqrt{•}`    | Square root    |
| `ee`     | `e^{•}`       | Exponential    |

##### 3. Greek letters with `@`

The `@` prefix allows quick insertion of Greek letters:

| Shortcut | Result        | Shortcut | Result    |
| -------- | ------------- | -------- | --------- |
| `@a`     | `\alpha`      | `@G`     | `\Gamma`  |
| `@b`     | `\beta`       | `@D`     | `\Delta`  |
| `@g`     | `\gamma`      | `@T`     | `\Theta`  |
| `@d`     | `\delta`      | `@L`     | `\Lambda` |
| `@e`     | `\varepsilon` | `@S`     | `\Sigma`  |
| `@t`     | `\theta`      | `@O`     | `\Omega`  |
| `@l`     | `\lambda`     | `@P`     | `\Pi`     |
| `@p`     | `\varphi`     |          |           |
| `@o`     | `\omega`      |          |           |
| `@s`     | `\sigma`      |          |           |

##### 4. Sets and symbols with double capitals

| Shortcut | Result        | Description     |
| -------- | ------------- | --------------- |
| `RR`     | $\mathbb{R}$  | Real numbers    |
| `CC`     | $\mathbb{C}$  | Complex numbers |
| `NN`     | $\mathbb{N}$  | Natural numbers |
| `ZZ`     | $\mathbb{Z}$  | Integers        |
| `KK`     | $\mathbb{K}$  | Generic field   |
| `LL`     | $\mathcal{L}$ | Function space  |
| `MM`     | $\mathcal{M}$ | Matrix space    |

##### 5. Automatic indices

Snippets automatically detect common indices:

```latex
x2     →  x_{2}           (numeric indices)
xii    →  x_{i}           (indices i, j, k, n, m)
xip1   →  x_{i+1}         (indices with +)
xim2   →  x_{i-2}         (indices with -)
```

##### 6. Accents and modifiers

Type a letter followed by:

| Suffix | Result     | Example              | Preview    |
| ------ | ---------- | -------------------- | ---------- |
| `vec`  | `\vec{•}`  | `xvec` → `\vec{x}`   | $\vec{x}$  |
| `dot`  | `\dot{•}`  | `xdot` → `\dot{x}`   | $\dot{x}$  |
| `ddot` | `\ddot{•}` | `xddot` → `\ddot{x}` | $\ddot{x}$ |
| `bar`  | `\bar{•}`  | `xbar` → `\bar{x}`   | $\bar{x}$  |
| `hat`  | `\hat{•}`  | `xhat` → `\hat{x}`   | $\hat{x}$  |

##### 7. Derivatives and integrals

| Shortcut | Result                                  | Example preview                         | Description                 |
| -------- | --------------------------------------- | --------------------------------------- | --------------------------- |
| `par`    | `\frac{\partial •}{\partial •}`         | $\frac{\partial f}{\partial x}$         | Partial derivative          |
| `pa2`    | `\frac{\partial^{2} •}{\partial •^{2}}` | $\frac{\partial^{2} f}{\partial x^{2}}$ | Second derivative           |
| `ddt`    | `\frac{d}{dt}`                          | $\frac{d}{dt}$                          | Time derivative             |
| `int`    | `\int_{0}^{\infty} • \, d•`             | $\int_{0}^{\infty} f(x) \, dx$          | Integral with bounds        |
| `oinf`   | `\int_{0}^{\infty} • \, d•`             | $\int_{0}^{\infty} f(x) \, dx$          | Integral from 0 to infinity |
| `infi`   | `\int_{-\infty}^{+\infty} • \, d•`      | $\int_{-\infty}^{+\infty} f(x) \, dx$   | Integral over R             |

##### 8. Quick matrices

| Shortcut | Result                              | Example preview                                                  | Description             |
| -------- | ----------------------------------- | ---------------------------------------------------------------- | ----------------------- |
| `pmat`   | `\begin{pmatrix}\n•\n\end{pmatrix}` | $\begin{pmatrix} a&b\\c&d \end{pmatrix}$                         | Matrix with parentheses |
| `bmat`   | `\begin{bmatrix}\n•\n\end{bmatrix}` | $\begin{bmatrix} a&b\\c&d \end{bmatrix}$                         | Matrix with brackets    |
| `vmat`   | `\begin{vmatrix}\n•\n\end{vmatrix}` | $\begin{vmatrix} a&b\\c&d \end{vmatrix}$                         | Determinant             |
| `cases`  | `\begin{cases}\n•\n\end{cases}`     | $\begin{cases} 0&\text{if } x=0\\1&\text{otherwise} \end{cases}$ | Piecewise function      |

##### 9. Visual mode: selection transformations

Select text then press:

| Key | Transformation         | Example                        | Preview                |
| --- | ---------------------- | ------------------------------ | ---------------------- |
| `S` | `\sqrt{...}`           | `x+1` → `\sqrt{x+1}`           | $\sqrt{x+1}$           |
| `U` | `\underbrace{...}_{•}` | `a+b` → `\underbrace{a+b}_{•}` | $\underbrace{a+b}_{•}$ |
| `O` | `\overbrace{...}^{•}`  | `a+b` → `\overbrace{a+b}^{•}`  | $\overbrace{a+b}^{•}$  |
| `C` | `\cancel{...}`         | `x` → `\cancel{x}`             | $\cancel{x}$           |

</details>

## Practical Exercises

| #   | Task                                                          | Educational objective                   |
| --- | ------------------------------------------------------------- | --------------------------------------- |
| 1   | Write a sheet containing A1 level differentiation formulas    | Master `align` and `cases` environments |
| 2   | Create a VS Code snippet for the `matrix` environment         | Automate input                          |
| 3   | Import the document on Overleaf and share it with a classmate | Discover revision mode                  |

## Resources

### Documentation and Online Tools

- [Overleaf – Learn LaTeX in 30 Minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) - Complete introduction
- [Detexify - Find LaTeX symbols by drawing](https://detexify.kirelabs.org/classify.html) - Draw a symbol to find the LaTeX command
- [MathJax Documentation - TeX Syntax](https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm) - Complete TeX syntax
- [MathJax Macros - List of available macros](https://docs.mathjax.org/en/latest/input/tex/macros/index.html) - List of available macros
- [LaTeX Math Cheat Sheet](https://wch.github.io/latexsheet/latexsheet.pdf) - Quick reference
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX) - Community documentation

### Obsidian Configuration Files

- <a href="/assets/docs/latex/default_snippets.js" target="_blank">**Open default_snippets.js**</a> - Latex Suite snippets configuration
- <a href="/assets/docs/latex/default_snippet_variables.js" target="_blank">**Open default_snippet_variables.js**</a> - Variables and symbols for Latex Suite

:::tip
These files contain over 250 snippets optimized for quick input of mathematics, physics, and chemistry in Obsidian. See the [Snippets in Obsidian](#snippets-in-obsidian-with-latex-suite) section for installation instructions.
:::
