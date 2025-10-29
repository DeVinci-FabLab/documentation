---
title: Rust – the basics
description: A guide to discover the fundamentals of Rust.
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

Rust is a language that aims to replace low-level languages like C. It focuses on performance, concurrency, but above all, safety.

Indeed, one of the biggest problems with C/C++ is that it's difficult to have code that robustly manages memory without leaks. In Rust, code is secure by default, thanks to its borrowing system, which can be challenging to grasp.

Rust can be used for the same purposes as C/C++; it can be found in the Linux kernel, in Discord's backend, and in microcontrollers.

**Learning objectives:**

- Understand the fundamental concepts of Rust (ownership, borrowing, lifetime)
- Master the syntax and basic structures
- Be able to use Cargo to manage projects
- Create a functional CLI application

:::info
**Level**: Beginner • **Estimated duration**: 3-4 hours • **Practical project**: YouTube video downloader CLI application
:::

## Prerequisites & Installation

### Prior knowledge

- Basic programming logic
- Familiarity with a development environment (IDE)

### Required tools

| Tool | Version | Link | Description |
|------|---------|------|-------------|
| Rust (rustup + cargo) | Latest stable | [rustup.rs](https://www.rust-lang.org/learn/get-started) | Complete Rust toolchain |
| IDE | - | [VS Code](https://code.visualstudio.com/) or [RustRover](https://www.jetbrains.com/rust/) | Development environment |

### Installation

The installer will put `rustup` and `cargo` on your computer:

- `rustup` manages everything related to Rust on your machine, including component updates with `rustup update`
- `cargo` allows you to create projects, run them, and publish them

### Installation verification

```bash
rustc --version  # Should display the Rust compiler version
cargo --version  # Should display the Cargo version
```

## Using Cargo

Cargo is Rust's project and dependency management tool.

### Essential commands

```bash
# Create a project
cargo new <project-name>

# Run a project
cargo run

# Compile a project
cargo build [--release]

# Check (faster than compiling to check for errors)
cargo check
```

### The `Cargo.toml` file

Example `Cargo.toml` file:

```toml
[package]
name = "formation_rust"
version = "0.1.0"
edition = "2023"

[dependencies]
# Add your dependencies here with: cargo add <package-name>
```

When you create a project with `cargo`, a `Cargo.toml` (Tom's Obvious, Minimal Language) file is automatically added to the project to define and track dependencies.

[More info on Cargo.toml](https://doc.rust-lang.org/cargo/reference/manifest.html)

## Syntax and basic structures

### Semicolons or not?

Rust needs semicolons at the end of each line to separate statements, but you can see lines without semicolons in functions because if a line doesn't have a semicolon, it's considered a return.

### Macro? What's that?

A macro is an instruction that ends with `!` (e.g., `println!("hehe boi")`), it's not a classic function, but close.

### Program entry point

A Rust program always starts with the `main` function.

### Expression vs statement

- **Expression** → returns a value
- **Statement** → returns nothing

### Data types

#### Integers

| Signed integer | Unsigned integer |
| -------------- | ---------------- |
| i8             | u8               |
| i16            | u16              |
| i32            | u32              |
| i64            | u64              |
| i128           | u128             |
| isize          | usize            |

`size` is determined based on the CPU architecture (32 bits or 64 bits).

:::tip
Virtual separator: `1_000` represents 1000, which makes numbers easier to read and understand.
:::

#### Other types

- **float**: `f32`, `f64`
- **bool**: 1 bit
- **char**: Like in C#, with single quotes, UTF 4 bytes (emojis too)
- **tuple**: Like in Python, can have elements of different types

```rust
let x: (i32, f64, u8) = (500, 6.4, 1);
let five_hundred = x.0;
let six_point_four = x.1;
let one = x.2;
```

- **array**: Like in C#, must have elements of the same type, fixed size

```rust
let a: [i32; 5] = [1, 2, 3, 4, 5];
let first = a[0];
let second = a[1];
```

- **string literals**: Immutable, on the stack
- **String**: Mutable, on the heap

```rust
let mut s = String::from("hello");
s.push_str(", world!"); // push_str() appends a literal to a String
println!("{}", s); // Displays `hello, world!`
```

### Control structures

#### Functions

```rust
fn hehe(x: i32) {
  println!("{}", x);
}

fn number() -> i32 {
  42  // No semicolon = return
}
```

#### Assignment

```rust
let x = 42;       // Constant
let mut y = 10;   // Mutable variable
```

#### Conditions

```rust
if x > 0 {
  println!("strictly positive");
} else if x == 0 {
  println!("Zero");
} else {
  println!("strictly negative");
}
```

Or in one line:

```rust
let condition = true;
let x = if condition { 5 } else { 0 };
```

#### Loops

**Infinite loop:**

```rust
loop {
  println!("AAAAAAAAAA");
}
// Never stops
```

A loop can be an expression:

```rust
let mut i = 0;

let y = loop {
  if i == 10 {
    break i + 5;
  }
  i += 1;
};
// y equals 15
```

**Labeled loops:**

By default, `break` terminates the innermost loop, but with labeled loops, you can terminate any already defined loop. The label MUST start with `'`.

```rust
let mut i = 0;

'my_loop: loop {
  loop {
    if i % 5 == 0 {
      break 'my_loop;
    } else {
      break;
    }
  }
  i += 1;
}
// i is 5
```

**While loop:**

```rust
let mut i = 5;
while i > 0 {
  i -= 1;
  println!("{i}");
}
println!("Liftoff");
```

**For loop:**

```rust
let phrase = ["Thomas", "likes", "big", "hugs"];
for word in phrase {
  print!("{word} ");
}
// Displays "Thomas likes big hugs "
```

With ranges:

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
// y equals 4
```

## Ownership (Ownership system)

Rust's distinctive feature is its ownership system that allows it to be secure by default, AND PREVENTS COMPILATION WHEN IT SHOULD.

### The three ownership rules

1. Every value has an owner
2. There can only be one owner at a time
3. When the owner disappears, so does the value

This leads to compilation errors, whereas other languages wouldn't pose a problem. To understand the subtlety of ownership, you need to understand the different memories, the Stack and the Heap.

### Stack vs Heap

A program has access to two types of memory:

- **The Stack**: contiguous data stack (LIFO - Last In First Out)
- **The Heap**: sparse data blob (DTFYW - Do The F*** You Want)

You can only put memory on the Stack if you know the data size in advance; this is possible with types such as int, float, bool, etc., but impossible with Strings.

We therefore use the Heap, and the memory allocator must find free space to store our data, which takes longer.

### Practical cases

**Variables on the Stack:**

```rust
let x = 42;
let y = x;
```

In this case, `x` is fixed-size data, so on the Stack, it's therefore automatically copied (because copying data on the Stack is very fast).

**Variables on the Heap:**

```rust
let x = String::from("hehe");
let y = x;
```

But in this one, the variable `x` is stored on the Heap; since copying can be expensive, it's not done. Rust removes `x` and keeps `y`; we say ownership is transferred.

### Function cases

Similarly, putting a Heap variable into a function makes it lose ownership, but a Stack variable is only copied.

## Solution to Ownership: References

- `&` = reference
- `*` = dereference

### Reference rules

1. You can have one mutable reference OR n static references at any time
2. A reference must always point to a value (it's not obvious)

We prefer to pass variable references rather than the value itself; it's a system similar to pointers but simpler. There's the same modification system as classic variables. You can have one mutable reference at a time and as many classic references as you want.

```rust
fn main() {
    let mut x = String::from("hehe");
    trust_me(&mut x);
    println!("{}", x); // Displays "hehe ohoho"
}

fn trust_me(x: &mut String) {
    x.push_str(" ohoho");
}
```

## Lifetime (Lifetimes)

Each variable has a limited lifetime, for example:

```rust
{
  let x = 5;
  // Do things with x
} // x gets dropped :(
// Can't use x anymore
```

If we apply this with functions:

```rust
fn main() {
    let x = dont_trust_me();
    println!("{}", x);
}

fn dont_trust_me() -> &String {
    let x = String::from("oh no");
    &x  // Return the reference
} // But here x's value is lost
```

In this case, the reference points to a non-existent value, which Rust doesn't allow → the code doesn't compile.

**Solution: lifetimes**, these are parameters we add to specify a value's lifetime. To fix the previous function, you should return an owned value rather than a reference.

:::warning
**TRUST THE COMPILER**
:::

## Practical exercises

| # | Task | Learning objective |
|---|------|-------------------|
| 1 | Create a CLI application to download YouTube videos | Master Cargo, dependencies, and basic syntax |

### Project: YouTube Downloader CLI Application

During this training, we'll create a CLI application to download YouTube videos. ([code link](https://gist.github.com/UrbsKali/67e09af49d42791a27a58e896677bcad))

**Major steps:**

1. Project generation

   ```shell
   cargo new rust_course
   ```

2. Adding libraries

   ```shell
   cargo add rustube
   ```

3. Beep Boop code in Rust
4. TADA it's done

## Resources

- [The Rust Book](https://doc.rust-lang.org/book/) - Complete official documentation
- [Rust Book in video](https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8) - Video version of the official book
- [Understanding memories](https://www.youtube.com/watch?v=_8-ht2AKyH4) - Stack vs Heap explanation
- [FreeCodeCamp Full Rust Course](https://www.youtube.com/watch?v=BpPEoZW5IiY) - Complete free course
