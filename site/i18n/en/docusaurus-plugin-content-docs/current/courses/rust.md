---
sidebar_position: 1
title: Rust - Basics
description: A guide to discover the basics of the FabLab and digital fabrication.
authors: [urbain_l]
tags: [info]
hide_table_of_contents: false
slug: rust_course
---

# Rust - Basics

> The goal of this training is to make you self-sufficient in Rust

|      | Prerequisites                 | Skills                  |
| ---- | ----------------------------- | ----------------------- |
| Rust | Programming logic, IDE        | Cargo, syntax, memory   |

## Introduction

Rust is a language aiming to replace low-level languages like C. It focuses on performance, concurrency, and above all, safety.

Indeed, one of the biggest issues in C/C++ is that it’s hard to manage memory robustly without leaks.

In Rust, code is safe by default thanks to its ownership and borrowing system, which can be tricky to grasp.

Rust can be used for the same scenarios as C/C++; you’ll find it in the Linux kernel, in Discord’s backend, and in microcontrollers.

## Setup

Recommended IDE: RustRover or VS Code: [Installer link](https://www.rust-lang.org/learn/get-started)

The installer will add `rustup` and `cargo` to your machine:

- `rustup` manages everything related to Rust on your system, including updates via `rustup update`
- `cargo` generates projects, runs them, and publishes crates

### Course outline

In this training, we will build a CLI application to download YouTube videos. ([source code](https://gist.github.com/UrbsKali/67e09af49d42791a27a58e896677bcad))

Major steps:

- Generate the project

  ```shell
  cargo new rust_course
  ```

- Add dependencies

  ```shell
  cargo add rustube
  ```

- Write Rust code
- Voilà!

### Using `cargo`

- Create a project

  ```bash
  cargo new <project-name>
  ```

- Run a project

  ```bash
  cargo run
  ```

- Build a project

  ```bash
  cargo build [--release]
  ```

- Check for errors (faster than full build)

  ```bash
  cargo check
  ```

### `Cargo.toml`

Example `Cargo.toml`:

```toml
[package]
name = "rust_course"
version = "0.1.0"
edition = "2023"

[dependencies]
# none yet, but you get the idea
```

When you create a project with `cargo`, a `Cargo.toml` ([Tom’s Obvious, Minimal Language](https://toml.io/fr/)) is automatically added to manage dependencies.

[More info](https://doc.rust-lang.org/cargo/reference/manifest.html)

## Syntax and Basic Constructs

### Semicolon or Not?

Rust requires semicolons to separate statements, but inside functions you may see lines without semicolons—those are treated as return expressions.

### Macro? What’s That?

A macro ends with `!` (e.g., `println!("hello")`). It’s not a regular function, but similar.

### Program Entry Point

Every Rust program starts with a `main` function.

### Expression vs Statement

- Expression → returns a value
- Statement → does not return a value

### Structures

- Function

  ```rust
  fn greet(x: i32) {
      println!("{}", x);
  }
  fn get_number() -> i32 {
      42
  }
  ```

- Variable binding

  ```rust
  let x = 42;       // immutable
  let mut y = 10;   // mutable
  ```

- Infinite loop

  ```rust
  loop {
      println!("Looping forever");
  }
  // Won't stop unless interrupted 
  ```

  A loop can be an expression:

  ```rust
  let mut i = 0;

  let result = loop {
      if i == 10 {
          break i + 5;
      }
      i += 1;
  };
  // result == 15
  ```

  By default, `break` exits the innermost loop. With labels (starting with `'`), you can break out of specific loops:

  ```rust
  let mut i = 0;

  'outer: loop {
      loop {
          if i % 5 == 0 {
              break 'outer;
          } else {
              break;
          }
      }
      i += 1;
  }
  // i == 5
  ```

- Conditional

  ```rust
  if x > 0 {
      println!("positive");
  } else if x == 0 {
      println!("zero");
  } else {
      println!("negative");
  }
  ```

  Or in one line:

  ```rust
  bool condition = true;
  let x = if condition { 5 } else { 0 };
  ```

- While loop

  ```rust
  let mut i = 5;
  while i > 0 {
      i -= 1;
      println!("{}", i);
  }
  println!("Lift off!");
  ```

- For loop

  ```rust
  let words = ["Rust", "is", "awesome"];
  for word in words {
      print!("{} ", word);
  }
  ```

  With ranges:

  ```rust
  for i in 1..4 {
      println!("i={}", i);
  }
  // i=1, i=2, i=3
  ```

- Scope

  ```rust
  let y = {
      let x = 3;
      x + 1
  };
  // y == 4
  ```

## Ownership

Rust’s key feature is its ownership system, which guarantees safety at compile time and prevents common bugs.

Three ownership rules:

- Every value has an owner.
- Only one owner at a time.
- When the owner goes out of scope, the value is dropped.

This often leads to compile-time errors that other languages would only catch at runtime. To understand the subtleties of ownership, you need to understand the different memories, the Stack and the Heap (see Appendix 2).

Stack vs Heap examples:

```rust
let x = 42;
let y = x; // i32 is Copy, so x is still valid

let s1 = String::from("hello");
let s2 = s1; // moves ownership; s1 is no longer valid
```

### Functions and Ownership

Passing a heap value into a function moves ownership, but stack values are copied.

## Borrowing and References

- `&` = reference
- `*` = dereference

Borrowing rules:

- Either one mutable reference or any number of immutable references at a time.
- References must always be valid.

Prefer borrowing rather than moving large data:

```rust
fn main() {
    let mut s = String::from("hello");
    append_world(&mut s);
    println!("{}", s); // prints "hello, world"
}

fn append_world(s: &mut String) {
    s.push_str(", world");
}
```

## Lifetimes

Every reference has a scope called a lifetime. In example :

```rust
{
  let x = 5;
  // we can use x here
} // x is no longer valid here
// we cannot use x here
```

Example of invalid code with functions:

```rust
fn main() {
    let r = borrow_string();
    println!("{}", r);
}

fn borrow_string() -> &String {
    let s = String::from("oops");
    &s // error: returns reference to local variable
} // The value of `s` is dropped here, so `&s` is invalid
```

Rust disallows returning references to values that go out of scope. Use owned return types or explicit lifetimes.

**Solution : lifetime**
The lifetimes are parameters added to specify the duration of a value's validity. To fix the previous function, you should return an owned value instead of a reference.

# Trust the Compiler

## Appendix 1: Rust Data Types

### Integers

| Signed | Unsigned |
| ------ | -------- |
| i8     | u8       |
| i16    | u16      |
| i32    | u32      |
| i64    | u64      |
| i128   | u128     |
| isize  | usize    |

### Floats

- f32
- f64

### bool

A 1-bit boolean.

### char

4-byte Unicode scalar value (e.g., emoji).

### Tuples

Heterogeneous fixed-size group:

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);

let five_hundred = tup.0;

let (x, y, z) = tup;
```

### Arrays

Homogeneous fixed-size:

```rust
let arr: [i32; 5] = [1, 2, 3, 4, 5];
println!("{}", arr[0]);
```

### String Literals

Immutable, stored on the stack.

### String

Heap-allocated, growable:

```rust
let mut s = String::from("hello");
s.push_str(", world!");
println!("{}", s); // prints "hello, world!"
```

## Appendix 2: Stack vs Heap

A program has access to two memory regions:

- Stack: contiguous LIFO memory for fixed-size data.
- Heap: dynamic, for data whose size isn’t known at compile time.

Use the heap for types like `String`, vectors, etc., since stack allocations require compile-time known sizes.

## Resources

- [The Rust Book](https://doc.rust-lang.org/book/)
- [Video version](https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8)
- [Understanding memory](https://www.youtube.com/watch?v=_8-ht2AKyH4)
- [FreeCodeCamp Full Rust Course](https://www.youtube.com/watch?v=BpPEoZW5IiY)

---

Last update: 02/16/2024

Author: [Urbain Lantrès](https://github.com/UrbsKali)
