---
title: Unit Testing (Examples in C# with MSTest)
description: A guide to understanding the fundamentals of unit testing, illustrated in C# with MSTest, but applicable to all languages.
slug: unit-testing
tags: [course, info, csharp]
last_update:
  date: 2025-07-03
  author: Eliott A. Roussille
---

## Introduction

Unit tests are programs that automatically verify that each part of your code works as expected.

This guide presents the fundamental concepts of unit testing, illustrated with MSTest, a testing framework for C#. However, the principles remain applicable to all languages ([see end of page](#unit-testing-in-other-languages)).

**Learning objectives:**

- Understand why and how to write unit tests
- Master the AAA (Arrange, Act, Assert) pattern
- Configure an MSTest test project
- Write robust and maintainable tests

**Benefits of unit testing:**

- **Quality**: Code coverage is the percentage of code tested and ensures that the code works as expected and that future changes do not break existing features. Having a high coverage rate is a sign of code quality and robustness.
- **Quick bug detection**: Unit tests allow you to quickly detect errors in the code, reducing debugging time.
- **Living documentation**: Unit tests serve as living documentation for the code, showing how each part is supposed to work.
- **Easier code modification**: Unit tests allow you to modify code with confidence, as they can ensure that changes haven't broken anything.

## Prerequisites & Installation

### Prior knowledge

- Basic knowledge of C# (or another programming language)
- Object-oriented programming concepts

### Required tools

| Tool     | Version | Description                                 |
| -------- | ------- | ------------------------------------------- |
| .NET SDK | 6.0+    | C# development framework                    |
| IDE      | -       | Visual Studio, VS Code or JetBrains Rider   |

## Creating and configuring an MSTest test project

### Prerequisites: have an existing C# project

If you don't have a project yet, create one:

```bash
mkdir MyProjectSolution # Create a folder for the project if needed
cd MyProjectSolution # Go into the project folder

dotnet new sln -n MyProjectSolution # Create a .sln solution file

dotnet new console -o src/MyProject # Create a console project in src/MyProject

dotnet sln add src/MyProject/MyProject.csproj # Add the project to the solution
```

Resulting architecture:

```css
MyProjectSolution/
├── MyProjectSolution.sln
└── src/
    └── MyProject/
        ├── MyProject.csproj
        └── Program.cs
```

### Configure the test project

In your solution folder:

```bash
dotnet new mstest -o tests/MyProject.Tests
dotnet sln add tests/MyProject.Tests/MyProject.Tests.csproj
dotnet add tests/MyProject.Tests reference src/MyProject/MyProject.csproj
```

This creates a test project named `MyProject.Tests` in the `tests` folder, then links the test project to the solution and the main project.

Final structure:

```css
MyProjectSolution/
├── MyProjectSolution.sln
├── src/
│   └── MyProject/
│       ├── MyProject.csproj
│       ├── MyClass.cs
│       └── Program.cs
└── tests/
    └── MyProject.Tests/
        ├── MyProject.Tests.csproj
        ├── MyClassTests.cs
        └── MSTestSettings.cs
```

:::tip
Organize test files following the structure of the main project (e.g., a file `MyClassTests.cs` for `MyClass.cs`).
:::

For more details: [Microsoft docs - Create an MSTest test project](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

## Structure of a unit test (AAA pattern)

All unit tests follow the **AAA** pattern:

- **Arrange**: Prepare the data and objects needed to test the method
- **Act**: Call the method to test
- **Assert**: Verify the result obtained

### Realistic example with MSTest

Suppose a class that contains methods to calculate VAT and the total price (including VAT) for a given amount:

```csharp
namespace MyNamespace
{
    public static class Calculator
    {
        public static decimal CalculateVAT(decimal amount, decimal rate)
        {
            if (rate < 0)
            {
                throw new ArgumentException("The rate cannot be negative.");
            }
            return amount * rate;
        }

        public static decimal CalculateTotalPrice(decimal amount, decimal rate)
        {
            return amount + CalculateVAT(amount, rate);
        }
    }
}
```

Associated unit tests:

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MyNamespace.Tests
{
    [TestClass]
    public class CalculatorTests
    {
        [TestMethod]
        public void CalculateVAT_WithValidAmountAndRate_ReturnsExpectedResult()
        {
            // Arrange
            decimal amount = 100;
            decimal rate = 0.2m;

            // Act
            decimal result = Calculator.CalculateVAT(amount, rate);

            // Assert
            Assert.AreEqual(20, result, "The VAT should be correct.");
        }

        [TestMethod]
        public void CalculateTotalPrice_WithValidAmountAndRate_ReturnsCompletePrice()
        {
            // Arrange
            decimal amount = 100;
            decimal rate = 0.2m;

            // Act
            decimal price = Calculator.CalculateTotalPrice(amount, rate);

            // Assert
            Assert.AreEqual(120, price, "The total price should be the amount plus VAT.");
        }
    }
}
```

## Writing unit tests with MSTest

### The `Assert` class

`Assert` is used to verify expected results in your tests.

Most common methods:

- **`Assert.AreEqual(expected, actual, message)`**: Checks that two values are equal
- **`Assert.AreNotEqual(expected, actual, message)`**: Checks that two values are not equal
- **`Assert.IsTrue(condition, message)`**: Checks that a condition is true
- **`Assert.IsFalse(condition, message)`**: Checks that a condition is false
- **`Assert.IsNull(object, message)`**: Checks that an object is null
- **`Assert.IsNotNull(object, message)`**: Checks that an object is not null

:::tip
If a test fails, the (optional) message is displayed, which saves time.
:::

### Parameterized tests

To test a method with several sets of data, use `[DataTestMethod]` and `[DataRow]`:

```csharp
[DataTestMethod]
[DataRow(100, 0.2, 20)]
[DataRow(50, 0.1, 5)]
[DataRow(200, 0.15, 30)]
public void CalculateVAT_WithVariousValues_ReturnsExpectedResult(
    decimal amount, decimal rate, decimal expected)
{
    Assert.AreEqual(expected, Calculator.CalculateVAT(amount, rate));
}
```

### Exception handling

To test that a method throws an expected exception:

**Option 1: With `[ExpectedException]`**

```csharp
[TestMethod]
[ExpectedException(typeof(ArgumentException))]
public void CalculateVAT_NegativeRate_ThrowsException()
{
    Calculator.CalculateVAT(100, -0.2m);
}
```

**Option 2: With `Assert.ThrowsException` (recommended)**

```csharp
[TestMethod]
public void CalculateVAT_NegativeRate_ThrowsException()
{
    var exception = Assert.ThrowsException<ArgumentException>(
        () => Calculator.CalculateVAT(100, -0.2m)
    );
    Assert.AreEqual("The rate cannot be negative.", exception.Message);
}
```

## Running tests

How you run tests depends on your development environment:

- **Visual Studio**: "Test" > "Test Explorer", `Ctrl+E T`, or right-click on the test project
- **Visual Studio Code**: "Testing" tab or right-click on the test project
- **JetBrains Rider**: "Tests" tab and "Test Coverage"
- **Terminal**: `dotnet test`

## Best practices

- **Segment**: One test = one test method
- **Explicit naming**: Indicate what is being tested and the expected result. Two naming conventions are common:
  - `Method_Should...`: `Method_ShouldReturnExpectedResult`
  - `Given..._When..._Then...`: `Method_Condition_ExpectedResult`
- **Isolation**: Tests should not depend on each other
- **Limit side effects**: Clean up resources if needed (`[TestCleanup]`, `[TestInitialize]`, `[AssemblyInitialize]`, `[ClassInitialize]`, etc.)

**Setup/cleanup example:**

```csharp
private List<string> _list;

[TestInitialize]
public void Setup()
{
    // Common arrange for all tests: initialization
    _list = new List<string> { "A", "B" };
}

[TestCleanup]
public void Cleanup()
{
    // Cleanup after each test
    _list.Clear();
}

[TestMethod]
public void List_ShouldContainA()
{
    // Act
    bool containsA = _list.Contains("A");

    // Assert
    Assert.IsTrue(containsA);
}
```

## Common mistakes

- Forgetting `[TestMethod]` or `[TestClass]`: the test is not detected
- Forgetting to build before testing (`dotnet build`)
- Testing several behaviors in the same test
- Dependency between tests (e.g., modifying a static variable)
- Incorrect use of `Assert` (e.g., swapping expected/actual)
- Not cleaning up resources (files, connections, etc.)
- Not testing edge cases or exceptions
- Leaving dead/unused code in tests
- Not running tests regularly

## Going further

### Async tests

```csharp
[TestMethod]
public async Task CalculAsync_ShouldReturnResult()
{
    var result = await CalculatorAsync.CalculateAsync(10, 2);
    Assert.AreEqual(20, result);
}
```

### Mocks

To isolate dependencies:

- [Moq](https://github.com/devlooped/moq/wiki/Quickstart) - Popular mocking framework
- [NSubstitute](https://nsubstitute.github.io/docs/2010-01-01-getting-started.html) - Simple and elegant alternative

### Configure MSTest

Parallelization, global timeout, etc. by editing the `MSTestSettings.cs` file. See the [official MSTest documentation](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-mstest-configure).

## Unit testing in other languages

The principles of unit testing are universal. Here are some popular frameworks:

| Language                  | Frameworks                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Python**                | [pytest](https://docs.pytest.org/en/stable/), [unittest](https://docs.python.org/3/library/unittest.html) |
| **Java**                  | [JUnit](https://junit.org/junit5/)                                                                        |
| **JavaScript/TypeScript** | [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/)                                                 |
| **Go**                    | [testing](https://pkg.go.dev/testing)                                                                     |
| **Rust**                  | [Built-in tests](https://doc.rust-lang.org/book/ch11-01-writing-tests.html)                               |
| **PHP**                   | [PHPUnit](https://phpunit.de/)                                                                            |
| **Ruby**                  | [RSpec](https://rspec.info/)                                                                              |

Each language has its specifics, but the AAA logic and philosophy remain the same.

## Resources

- [MSTest documentation](https://learn.microsoft.com/dotnet/core/testing/unit-testing-with-mstest) - Official Microsoft guide
- [Unit Testing Best Practices](https://learn.microsoft.com/dotnet/core/testing/unit-testing-best-practices) - Microsoft best practices
- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) - TDD methodology

## Other examples

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LivInParis.Tests
{
    [TestClass]
    public class NodeTests
    {
        [TestMethod]
        public void Constructor_ShouldCreateNodeWithUniqueName()
        {
            // Arrange
            var nodeName = "TestNode";

            // Act
            var node = new Node(nodeName);

            // Assert
            Assert.AreEqual(nodeName, node.Name);
            Assert.AreNotEqual(-1, node.Id);
        }
    }
}
```

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ExampleNamespace.Tests
{
    [TestClass]
    public class ExampleTests
    {
        [TestMethod]
        public void Addition_ShouldReturnCorrectSum()
        {
            // Arrange
            int a = 2;
            int b = 3;

            // Act
            int result = Sum(a, b);

            // Assert
            Assert.AreEqual(5, result, "The sum should be 5");
        }
    }
}
```

```csharp
namespace LivInParis.Tests
{
    [TestClass]
    public class NodeTests
    {
        [TestMethod]
        public void Equals_ShouldReturnTrueForSameId()
        {
            // Arrange
            var node1 = new Node("EqualsNode1");
            var node2 = new Node("EqualsNode2");

            // Act
            bool areEqual = node1 == node1;
            bool areNotEqual = node1 == node2;

            // Assert
            Assert.IsTrue(areEqual);
            Assert.IsFalse(areNotEqual);
        }
    }
}
```

```csharp
namespace Boggle.Tests;

[TestClass]
public class PlayerTests
{
    [TestMethod]
    [DataRow("J2", "en")]
    [DataRow("J3", "fr")]
    public void Name_ShouldReturnCorrectName(string name, string language)
    {
        // Arrange
        Language.Initialize(language);
        Player player = new Player(name);

        // Act
        string playerName = player.Name;

        // Assert
        Assert.AreEqual(name, playerName);
    }
}
```
