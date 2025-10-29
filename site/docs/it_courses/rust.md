---
title: Rust – les bases
description: Un guide pour découvrir les fondamentaux de Rust.
slug: rust
tags: [course, info, rust]
last_update:
  date: 2024-02-01
  author: Urbain Lantrès (UrbsKali)
additional_contributors:
  - username: Urbain Lantrès
    html_url: https://github.com/UrbsKali
    avatar_url: https://github.com/UrbsKali.png
---

## Introduction

Rust est un langage qui vise à remplacer les langages bas-niveau, comme le C. Il est axé sur la performance, la concurrence, mais surtout la sûreté.

En effet, un des plus gros problèmes du C/C++ est qu'il est difficile d'avoir un code qui gère de manière robuste la mémoire, sans fuites. En Rust, le code est sécurisé par défaut, grâce à son système d'emprunt, qui peut être difficile à prendre en main.

Rust peut être utilisé pour les mêmes usages que le C/C++, on peut le retrouver dans le kernel de Linux, dans le backend de Discord, et dans des microcontrôleurs.

**Objectifs d'apprentissage :**

- Comprendre les concepts fondamentaux de Rust (ownership, borrowing, lifetime)
- Maîtriser la syntaxe et les structures de base
- Être capable d'utiliser Cargo pour gérer des projets
- Créer une application CLI fonctionnelle

:::info
**Niveau** : Débutant • **Durée estimée** : 3-4 heures • **Projet pratique** : Application CLI de téléchargement de vidéos YouTube
:::

## Prérequis & Installation

### Connaissances préalables

- Logique de programmation de base
- Familiarité avec un environnement de développement (IDE)

### Outils requis

| Outil                 | Version         | Lien                                                                                      | Description                    |
| --------------------- | --------------- | ----------------------------------------------------------------------------------------- | ------------------------------ |
| Rust (rustup + cargo) | Dernière stable | [rustup.rs](https://www.rust-lang.org/fr/learn/get-started)                               | Toolchain Rust complète        |
| IDE                   | -               | [VS Code](https://code.visualstudio.com/) ou [RustRover](https://www.jetbrains.com/rust/) | Environnement de développement |

### Installation

L'installateur va mettre `rustup` et `cargo` sur votre ordinateur :

- `rustup` permet de gérer tout ce qui touche à Rust sur votre machine, notamment la mise à jour des composants avec `rustup update`
- `cargo` permet de générer des projets, les exécuter, et les publier

### Vérification de l'installation

```bash
rustc --version  # Devrait afficher la version du compilateur Rust
cargo --version  # Devrait afficher la version de Cargo
```

## Utilisation de Cargo

Cargo est l'outil de gestion de projets et de dépendances pour Rust.

### Commandes essentielles

```bash
# Création d'un projet
cargo new <nom-du-projet>

# Exécution d'un projet
cargo run

# Compilation d'un projet
cargo build [--release]

# Vérification (plus rapide que la compilation pour vérifier les erreurs)
cargo check
```

### Le fichier `Cargo.toml`

Exemple de fichier `Cargo.toml` :

```toml
[package]
name = "formation_rust"
version = "0.1.0"
edition = "2023"

[dependencies]
# Ajoutez vos dépendances ici avec : cargo add <nom-du-package>
```

Quand on crée un projet avec `cargo`, un fichier `Cargo.toml` (Tom's Obvious, Minimal Language) est automatiquement ajouté au projet pour définir et suivre les dépendances.

[Plus d'info sur Cargo.toml](https://doc.rust-lang.org/cargo/reference/manifest.html)

## Syntaxe et structures de base

### Point-virgule ou pas ?

Rust a besoin de point-virgule à la fin de chaque ligne pour séparer les instructions, mais il est possible de voir des lignes sans point-virgule dans les fonctions, car si une ligne n'a pas de point-virgule, alors elle est considérée comme un return.

### Macro ? Késako ?

Une macro est une instruction qui termine par `!` (ex : `println!("hehe boi")`), ce n'est pas une fonction classique, mais pas loin.

### Point d'entrée du programme

Un programme Rust commence toujours par la fonction `main`.

### Expression vs instruction

- **Expression** → renvoie une valeur
- **Instruction** → ne renvoie rien

### Types de données

#### Entiers

| Entier relatif | Entier naturel |
| -------------- | -------------- |
| i8             | u8             |
| i16            | u16            |
| i32            | u32            |
| i64            | u64            |
| i128           | u128           |
| isize          | usize          |

`size` est déterminé en fonction de l'architecture du CPU (32 bits ou 64 bits).

:::tip
Séparateur virtuel : `1_000` représente 1000, ce qui facilite la lecture et la compréhension des nombres.
:::

#### Autres types

- **float** : `f32`, `f64`
- **bool** : 1 bit
- **char** : Comme en C#, avec des guillemets simples, UTF 4 octets (emoji aussi)
- **tuple** : Comme en Python, peut avoir des éléments de types différents

```rust
let x: (i32, f64, u8) = (500, 6.4, 1);
let five_hundred = x.0;
let six_point_four = x.1;
let one = x.2;
```

- **array** : Comme en C#, doit avoir des éléments de même type, de taille fixe

```rust
let a: [i32; 5] = [1, 2, 3, 4, 5];
let first = a[0];
let second = a[1];
```

- **string literals** : Immuable, sur le stack
- **String** : Mutable, sur le heap

```rust
let mut s = String::from("hello");
s.push_str(", world!"); // push_str() ajoute un literal à une String
println!("{}", s); // Affiche `hello, world!`
```

### Structures de contrôle

#### Fonctions

```rust
fn hehe(x: i32) {
  println!("{}", x);
}

fn nombre() -> i32 {
  42  // Pas de point-virgule = return
}
```

#### Assignation

```rust
let x = 42;       // Constante
let mut y = 10;   // Variable mutable
```

#### Conditions

```rust
if x > 0 {
  println!("strict. positif");
} else if x == 0 {
  println!("Zéro");
} else {
  println!("strict. négatif");
}
```

Ou en une ligne :

```rust
let condition = true;
let x = if condition { 5 } else { 0 };
```

#### Boucles

**Boucle infinie :**

```rust
loop {
  println!("AAAAAAAAAA");
}
// Ne va jamais s'arrêter
```

Une boucle peut être une expression :

```rust
let mut i = 0;

let y = loop {
  if i == 10 {
    break i + 5;
  }
  i += 1;
};
// y est égal à 15
```

**Boucles labelisées :**

Par défaut `break` termine la boucle la plus imbriquée, mais grâce aux boucles labelisées, on peut terminer n'importe quelle boucle déjà définie. Le label DOIT commencer par `'`.

```rust
let mut i = 0;

'ma_boucle: loop {
  loop {
    if i % 5 == 0 {
      break 'ma_boucle;
    } else {
      break;
    }
  }
  i += 1;
}
// i est à 5
```

**Boucle while :**

```rust
let mut i = 5;
while i > 0 {
  i -= 1;
  println!("{i}");
}
println!("Décollage");
```

**Boucle for :**

```rust
let phrase = ["Thomas", "aime", "les", "gros", "calins"];
for mot in phrase {
  print!("{mot} ");
}
// Affiche "Thomas aime les gros calins "
```

Avec des ranges :

```rust
for i in (1..4) {
  println!("i={i}");
}
// i=1
// i=2
// i=3
```

#### Scope

```rust
let y = {
  let x = 3;
  x + 1
};
// y est égal à 4
```

## Ownership (Système d'appartenance)

La particularité de Rust, c'est son système d'appartenance qui lui permet d'être sécurisé par défaut, ET QUI EMPÊCHE DE COMPILER QUAND ÇA DEVRAIT.

### Les trois règles d'ownership

1. Toute valeur a un propriétaire
2. Il n'y a qu'un seul propriétaire à la fois
3. Quand le propriétaire disparaît, la valeur aussi

Cela conduit à des erreurs de compilation, alors que d'autres langages ne poseraient pas de problème. Pour bien comprendre la subtilité de l'ownership, il faut comprendre les différentes mémoires, le Stack et le Heap.

### Stack vs Heap

Un programme a accès à deux types de mémoire :

- **Le Stack** : pile de données contiguë (LIFO - Last In First Out)
- **Le Heap** : blob de données éparse (DTFYW - Do The F*** You Want)

On ne peut mettre de la mémoire dans le Stack seulement si l'on connaît à l'avance la taille des données, c'est possible avec des types tels que les int, float, bool, etc., mais impossible avec les String.

On utilise donc le Heap, et l'allocateur mémoire doit trouver un espace libre où stocker nos données, ce qui est plus long.

### Cas pratiques

**Variables sur le Stack :**

```rust
let x = 42;
let y = x;
```

Dans ce cas, `x` est une donnée à taille fixe, donc sur le Stack, elle est donc copiée automatiquement (car copier des données sur le Stack est très rapide).

**Variables sur le Heap :**

```rust
let x = String::from("hehe");
let y = x;
```

Mais dans celui-là, la variable `x` est stockée sur le Heap, la copie pouvant être coûteuse, elle n'est pas effectuée. Rust supprime `x` et garde `y`, on dit que l'ownership est transféré.

### Cas des fonctions

De la même manière, mettre une variable du Heap dans une fonction lui fait perdre son ownership, mais une variable du Stack est seulement copiée.

## Solution à l'Ownership : les Références

- `&` = référence
- `*` = déréférence

### Règles des références

1. On peut avoir une référence modifiable OU n références statiques à tout moment
2. Une référence doit toujours pointer vers une valeur (c'est pas évident)

On préfère passer les références des variables, plutôt que la valeur elle-même, c'est un système similaire au pointeur, mais plus simple. Il y a le même système de modification que les variables classiques. On peut avoir une référence mutable à la fois, et autant de références classiques que l'on veut.

```rust
fn main() {
    let mut x = String::from("hehe");
    trust_me(&mut x);
    println!("{}", x); // Affiche "hehe ohoho"
}

fn trust_me(x: &mut String) {
    x.push_str(" ohoho");
}
```

## Durée de vie (Lifetimes)

Chaque variable possède une durée de vie limitée, par exemple :

```rust
{
  let x = 5;
  // On fait des choses avec x
} // x se fait tej :(
// On ne peut plus utiliser x
```

Si on applique ça avec les fonctions :

```rust
fn main() {
    let x = dont_trust_me();
    println!("{}", x);
}

fn dont_trust_me() -> &String {
    let x = String::from("oh no");
    &x  // On retourne la référence
} // Mais ici la valeur de x est perdue
```

Dans ce cas, la référence pointe vers une valeur inexistante, ce que Rust n'autorise pas → le code ne compile pas.

**Solution : les lifetimes**, ce sont des paramètres qu'on ajoute pour spécifier la durée de vie d'une valeur. Pour réparer la fonction précédente, il faudrait plutôt retourner une valeur own qu'une référence.

:::warning
**FAITES CONFIANCE AU COMPILATEUR**
:::

## Exercices pratiques

| #   | Énoncé                                                        | Objectif pédagogique                                   |
| --- | ------------------------------------------------------------- | ------------------------------------------------------ |
| 1   | Créer une application CLI pour télécharger des vidéos YouTube | Maîtriser Cargo, les dépendances et la syntaxe de base |

### Projet : Application CLI YouTube Downloader

Durant cette formation nous allons réaliser une application CLI pour télécharger des vidéos YouTube. ([lien du code](https://gist.github.com/UrbsKali/67e09af49d42791a27a58e896677bcad))

**Étapes majeures :**

1. Génération du projet

   ```shell
   cargo new rust_course
   ```

2. Ajout des librairies

   ```shell
   cargo add rustube
   ```

3. Bip Boup coder en Rust
4. TADA c'est finito

## Ressources

- [The Rust Book](https://doc.rust-lang.org/book/) - Documentation officielle complète
- [Rust Book en vidéo](https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8) - Version vidéo du livre officiel
- [Comprendre les mémoires](https://www.youtube.com/watch?v=_8-ht2AKyH4) - Explication Stack vs Heap
- [FreeCodeCamp Full Rust Course](https://www.youtube.com/watch?v=BpPEoZW5IiY) - Cours complet gratuit
