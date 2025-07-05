---
sidebar_position: 5
title: Rust - les bases
author: Urbain Lantrès (UrbKali)
description: Un guide pour découvrir les fondamentaux de Rust.
tags: [info]
hide_table_of_contents: false
slug: rust-course
---

# Rust - Base

> Le but de cette formation est de vous rendre autonome sur Rust

|      | Pré requis                        | Compétences             |
| ---- | --------------------------------- | ----------------------- |
| Rust | Logique de programmation, IDE     | Cargo, syntaxe, mémoire |

## Introduction

Rust est un langage qui vise à remplacer les langages bas-niveau, comme le C. Il est axé sur la performance, la concurrence, mais surtout la sûreté.

En effet, un des plus gros problèmes du C/C++ est qu’il est difficile d’avoir un code qui gère de manière robuste la mémoire, sans fuites

En Rust, le code est sécurisé par défaut, grâce à son système d'emprunt, qui peut être difficile à prendre en main

Rust peut être utilisé pour les mêmes usages que le C/C++, on peut le retrouver dans le kernel de Linux, dans le backend de Discord, et dans des microcontrôleurs.

## Setup

IDE conseillé : RustRover ou VS code : [Lien vers l'installeur](https://www.rust-lang.org/fr/learn/get-started)

L’installateur va mettre `rustup` et `cargo` sur votre ordinateur :

- `rustup` permet de gérer tout ce qui touche à Rust sur votre machine, notamment la mise à jour des composants avec `rustup update`
- `cargo` permet de générer des projets, les exécuter, et les publier

### Déroulé du cours

Durant cette formation nous allons réaliser une application CLI pour télécharger des vidéos youtube. ([lien du code](https://gist.github.com/UrbsKali/67e09af49d42791a27a58e896677bcad))

Etapes majeures :

- Génération du projet

  ```shell
  cargo new rust_course
  ```

- Ajout des librairies

  ```shell
  cargo add rustube
  ```

- bip boup coder en rust
- tada c'est finito

### Utilisation de `cargo`

- Création d’un projet

  ```bash
  cargo new <nom-du-projet>
  ```

- Exécution d’un projet

  ```bash
  cargo run
  ```

- Compilation d'un projet

  ```bash
  cargo build [--release]
  ```

- Vérification (plus rapide que la compilation pour vérifier les erreurs)

  ```bash
  cargo check
  ```

### `Cargo.toml`

Exemple de fichier `Cargo.toml` :

```toml
[package]
name = "formation_rust"
version = "0.1.0"
edition = "2023"

[dependencies]
# bon là j'en ai aucune mais vous avez compris l'idée
```

Quand on crée un projet avec `cargo`, un fichier `Cargo.toml` (Tom’s Obvious, Minimal Language) est automatiquement ajouté au projet pour définir et suivre les dépendances.

[Plus d'info](https://doc.rust-lang.org/cargo/reference/manifest.html)

## Syntaxe et Structures de base

### Point-virgule ou pas ?

Rust a besoin de point virgule à la fin de chaque ligne pour séparer les instructions, mais il est possible de voir des lignes sans point virgule dans les fonctions, car si une ligne n'a pas de point virgule, alors elle est considéré comme un return.

### Macro ? Késako ?

Une macro est une instruction qui termine par ! (ex : ```println!("hehe boi")```), ce n'est pas une fonction classique, mais pas loin

### Point d’entrée du programme

Un programme Rust commence toujours par la fonction `main`.

### Expression vs instruction

- Expression → renvoie une valeur
- Instruction → ne renvoie rien

### Structures

- Fonction

  ```rust
  fn hehe(x: i32){
    println!(x);
  }
  fn nombre() -> i32 {
    42
  }
  ```

- Assignation

  ```rust
  let x = 42; // constante
  let mut y = 10; // variable
  ```

- Boucle

  ```rust
  loop {
    println!("AAAAAAAAAA");
  }
  // Ne va jamais s'arreter
  ```

  Une boucle peut être une expression

  ```rust
  let mut i = 0;

  let y = loop {
    if i == 10 {
      break i + 5;
    }
    i += 1;
  }
  // y est égal à 15;
  ```

  Par défaut `break` termine la boucle la plus imbriqué, mais grâce au boucle labelisé, on peut terminer n'importe quelle boucle déjà défini. Le label DOIT commencer par `'`

  ```rust
  let mut i = 0

  'ma_boucle loop {
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

- Condition

  ```rust
  if x > 0{
    println!("strict. positif");
  } else if x == 0 {
    println!("Zéro");
  } else {
    println!("strict. négatif");
  }
  ```

  Ou en une ligne :

  ```rust
  bool condition = true;
  let x = if condition { 5 } else { 0 };
  ```

- Boucle conditionelle while

  ```rust
  let mut i = 5;
  while i > 0 {
    i -= 1;
    println!("{i}");
  }
  println!("Décollage");
  ```

- Boucle for

  ```rust
  let phrase = ["Thomas", "aime", "les", "gros", "calins"];
  for mot in phrase {
    print!("{mot} ");
  }
  // affiche "Thomas aime les gros calins "
  ```

  Avec des ranges

  ```rust
  for i in (1..4) {
    println!("i={i}");
  }
  // i=1
  // i=2
  // i=3
  ```

- Scope

  ```rust
  let y = {
    let x = 3;
    x + 1
  };
  // y est égal à 4
  ```

## Ownership

La particularité de Rust, c'est son sytème d'appartenance qui lui permet d'être sécurisé par défaut, ET QUI EMPECHE DE COMPILER QUAND CA DEVRAIT.

Il y a trois règle d'ownership dans Rust :

- Toute valeur à un propriétaire
- Il n'y a qu'un seul propriétaire à la fois
- Quand le propriétaire disparait, la valeur aussi

Cela conduit à des erreurs de compilation, alors que d'autres languages ne posserait pas de problème.
Pour bien comprendre la subtilité de l'ownership, il faut comprendre les différentes mémoires, le Stack et le Heap (cf Annexe 2)

Il y a deux cas possible : Variable sur le Stack ou Variable sur le Heap

```rust
  let x = 42;
  let y = x;
```

Dans ce cas, `x` est une donnée à taille fixe, donc sur le Stack, elle est donc copié automatiquement (car copier des données sur le Stack est très rapide)

```rust
  let x = String::from("hehe");
  let y = x;
```

Mais dans celui là, la variable `x` est stocké sur le Heap, la copie pouvant être couteuse, elle n'est pas effectué. Rust supprime `x`et garde `y`, on dit que l'ownership est transféré

### Cas des fonctions

De la même manière, mettre une variable du Heap dans une fonction lui fait perdre son ownership, mais une variable du Stack est seulement copié.

## Solution à l'Ownership : les Références

- & = référence
- \* = déréférence

Règles des références :

- On peut avoir une référence modifiable ou n références statique à tout moment
- Une référence doit toujours pointer vers une valeur (c'est pas évident)

On préfère passer les références des variables, plutôt que la valeur elle même, c'est un système similaire au pointeur, mais plus simple
Il y a le même système de modification que les variables classiques.
On peut avoir une référence mutable à la fois, et autant de référence classique que l'on veut.

```rust
fn main() {
    let mut x = String::from("hehe");
    trust_me(&mut x);
    println!("{}", x); // affiche hehe ohoho
}

fn trust_me(x: &mut String) {
    x.push_str(" ohoho");
}
```

## Durée de vie

bon là ça part un peu loin, mais chaque variable possède une durée de vie limité, par exemple :

```rust
{
  let x = 5;
  // on fait des choses avec x
} // x se fait tej :(
// On ne peut plus utiliser x
```

Si on applique ça avec les fonctions :

```rust
fn main() {
    let x = dont_trust_me();
    println!("{}", x);
}

fn dont_trust_me() -> &String{
    let x = String::from("oh no");
    &x  // on retourne la référence
} // mais ici la valeur de x est perdu
```

Dans ce cas, la référence pointe vers une valeur inexistante, ce que Rust n'autorise pas -> le code ne compile pas

**Solution : lifetime**
les lifetimes sont des paramètre qu'on ajoute pour spécifé la durée de vie d'une valeur, pour réparer la fonction précédante, il faudrait plutôt retourner une valeur own qu'une référence.

# FAITES CONFIANCE AU COMPILEUR

## Annexe 1 : Type de données en Rust

### Entier

| entier relatif | entier naturel |
| -------------- | -------------- |
| i8             | u8             |
| i16            | u8             |
| i32            | u8             |
| i64            | u8             |
| i128           | u8             |
| isize          | usize          |

size, en fonction de l'architecture du CPU (32bits ou 64bits)

Séparateur virtuel : 1_000 = 1000 (super cool)

### float

- f32
- f64

### bool

1 bit

### char

comme le C#, avec des guillements simple, UTF 4 octets (emoji aussi)

### tuple

comme en python, peut avoir des éléments de taille différente

```rust
let x: (i32, f64, u8) = (500, 6.4, 1);

let five_hundred = x.0;

let six_point_four = x.1;

let one = x.2;
```

### array

Comme en C#, doit avoir des éléments de même taille, de taille fixe

```rust
let a: [i32, 5] = [1, 2, 3, 4, 5];

let first = a[0];
let second = a[1];
```

### string literals

immuable, sur le stack

### String

```rust
let mut s = String::from("hello");

s.push_str(", world!"); // push_str() appends a literal to a String

println!("{}", s); // This will print `hello, world!`
```

## Annexe 2 : Stack vs Heap (aka Les mémoires)

Un programme a accès à deux type de mémoire :

- le Stack, qui consiste à une pile de données contigue (LIFO)
- le Heap, qui consiste en un blob de données éparse (DTFYW :) )

On ne peut mettre de la mémoire dans le Stack seulement si l'on connait à l'avance la taille des données, c'est possible avec des types tels que les int, float, bool, etc, mais impossible avec les String (Cf Annexe 1).

On utilise donc le Heap, et l'allocateur mémoire doit trouver un espace libre ou stocker nos données, ce qui est plus long.

## Ressources

- [The Rust Book](https://doc.rust-lang.org/book/)
- [Pareil mais en vidéo](https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8)
- [Comprendre les mémoires](https://www.youtube.com/watch?v=_8-ht2AKyH4)
- [FreeCodeCamp Full Rust Course](https://www.youtube.com/watch?v=BpPEoZW5IiY)

---

Dernière mise à jour : Février 2024

Auteur : [Urbain Lantrès](https://github.com/UrbsKali)
