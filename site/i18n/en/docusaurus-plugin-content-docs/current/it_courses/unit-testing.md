---
title: Unit Testing (Examples in C# with MSTest)
sidebar_position: 6
description: A guide to understanding the fundamentals of unit testing, illustrated in C# with MSTest, but applicable to all languages.
slug: unit-testing
tags: [course, info, csharp]
last_update:
  date: 2025-07-03
  author: Eliott A. Roussille
---

# Unit Testing (Examples in C# with MSTest)

Unit tests are programs that automatically verify that each part of your code works as expected.

This guide presents the fundamental concepts of unit testing, illustrated with MSTest, a testing framework for C#. However, the principles remain applicable to all languages ([see end of page](#unit-testing-in-other-languages)).

## Why Write Unit Tests?

- **Quality**: Code coverage is the percentage of code tested by unit tests and ensures that the code works as expected and that future changes do not break existing features.
  Having a high coverage rate is a sign of code quality and robustness.
- **Quick bug detection**: Unit tests allow you to quickly detect errors in the code, reducing debugging time.
- **Living documentation**: Unit tests serve as living documentation for the code, showing how each part is supposed to work.
- **Easier code modification**: Unit tests allow you to modify code with confidence, as they can ensure that changes haven't broken anything.

## Creating and Configuring an MSTest Project

Here's how to properly set up a unit test project with MSTest for a C# .NET project:

### Prerequisites

Have an existing C# project (for example, `MonProjet`). Otherwise:

```bash
mkdir MyProjectSolution # Create a folder for the project if needed
cd MyProjectSolution # Go into the project folder

dotnet new sln -n MyProjectSolution # Create a .sln solution file

dotnet new console -o src/MyProject # Create a console project in src/MyProject

dotnet sln add src/MyProject/MyProject.csproj # Add the project to the solution
```

For the following, we will use this project structure:

```css
MyProjectSolution/
├── MyProjectSolution.sln
└── src/
    └── MyProject/
        ├── MyProject.csproj
        └── Program.cs
```

Adapt the paths if you have a different structure.

### Configure the test project

In your solution folder:

```bash
dotnet new mstest -o tests/MyProject.Tests
dotnet sln add tests/MyProject.Tests/MyProject.Tests.csproj
dotnet add tests/MyProject.Tests reference src/MyProject/MyProject.csproj
```

This creates a test project named `MyProject.Tests` in the `tests` folder, then links the test project to the solution and the main project.

That's it! You can now write your tests in `tests/MyProject.Tests`. Organize the test files following the structure of the main project (e.g., a file `MaClasseTests.cs` for `MaClasse.cs`).

Here is the final structure:

```css
MyProjectSolution/
├── MyProjectSolution.sln
├── src/
│   └── MyProject/
│       ├── MyClass.cs
│       ├── MyProject.csproj
│       └── Program.cs
└── tests/
    └── MyProject.Tests/
        ├── MyClassTests.cs
        ├── MyProject.Tests.csproj
        └── MSTestSettings.cs
```

For more details: [Microsoft docs - Create an MSTest test project](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

## Structure of a Unit Test (AAA pattern)

- **Arrange**: Prepare the data and objects needed to test the method.
- **Act**: Call the method to test.
- **Assert**: Verify the result obtained.

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
            decimal rate = 0.2;
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
            decimal rate = 0.2;
            // Act
            decimal result = Calculator.CalculateTotalPrice(amount, rate);
            // Assert
            Assert.AreEqual(120, result, "The total price should be the amount plus VAT.");
        }
    }
}
```

## Writing Unit Tests with MSTest

### The `Assert` Class

`Assert` is used to verify expected results in your tests.

Here are the most common methods:

- **`Assert.AreEqual(expected, actual, message)`**: Checks that two values are equal.
- **`Assert.AreNotEqual(expected, actual, message)`**: Checks that two values are not equal.
- **`Assert.IsTrue(condition, message)`**: Checks that a condition is true.
- **`Assert.IsFalse(condition, message)`**: Checks that a condition is false.
- **`Assert.IsNull(object, message)`**: Checks that an object is null.
- **`Assert.IsNotNull(object, message)`**: Checks that an object is not null.

If a test fails, the (optional) message is displayed, which saves time.

### Parameterized Tests

To test a method with several sets of data, use the `[DataTestMethod]` and `[DataRow]` attributes.

```csharp
[DataTestMethod]
[DataRow(100, 0.2, 20)]
[DataRow(50, 0.1, 5)]
public void CalculateVAT_WithVariousValues_ReturnsExpectedResult(decimal amount, decimal rate, decimal expected)
{
    Assert.AreEqual(expected, Calculator.CalculateVAT(amount, rate));
}
```

### Exception Handling

To test that a method throws an expected exception, use the `[ExpectedException]` attribute or the `Assert.ThrowsException<T>()` method.

```csharp
// With ExpectedException
[TestMethod]
[ExpectedException(typeof(ArgumentException))]
public void CalculateVAT_NegativeRate_ThrowsException()
{
    Calculator.CalculateVAT(100, -0.2);
}

// With Assert.ThrowsException
[TestMethod]
public void CalculateVAT_NegativeRate_ThrowsException()
{
    var exception = Assert.ThrowsException<ArgumentException>(() => Calculator.CalculateVAT(100, -0.2));
    Assert.AreEqual("The rate cannot be negative.", exception.Message);
}
```

## Running Tests

How you run tests depends on your development environment:

- **Visual Studio**: "Test" > "Test Explorer", Ctrl+E, T or right-click on the test project.
- **Visual Studio Code**: "Testing" tab or right-click on the test project.
- **JetBrains Rider**: "Tests" tab and "Test Coverage".
- **Terminal**: `dotnet test`

## Best Practices

- **Segment**: One test = one test method.
- **Explicit naming**: Indicate what is being tested and the expected result. Two naming conventions are common:
  - `Method_Should...`: `Method_ShouldReturnExpectedResult`
  - `Given..._When..._Then...`: `Method_Condition_ExpectedResult`
- **Isolation**: Tests should not depend on each other.
- **Limit side effects**: Clean up resources if needed (`[TestCleanup]`, `[TestInitialize]`, `[AssemblyInitialize]`, `[ClassInitialize]`, …).

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

## Common Mistakes

- Forgetting `[TestMethod]` or `[TestClass]`: the test is not detected
- Forgetting to build before testing (`dotnet build`)
- Testing several behaviors in the same test
- Dependency between tests (e.g., modifying a static variable)
- Incorrect use of `Assert` (e.g., swapping expected/actual)
- Not cleaning up resources (files, connections, etc.)
- Not testing edge cases or exceptions
- Leaving dead/unused code in tests
- Not running tests regularly

## Going Further

- **Async tests**:

```csharp
[TestMethod]
public async Task CalculAsync_ShouldReturnResult()
{
    var result = await CalculateurAsync.CalculAsync(10, 2);
    Assert.AreEqual(20, result);
}
```

- **Mocks**: To isolate dependencies (see [Moq](https://github.com/devlooped/moq/wiki/Quickstart), [NSubstitute](https://nsubstitute.github.io/docs/2010-01-01-getting-started.html))
- **Configure MSTest**: Parallelization, global timeout, etc. by editing MSTestSettings.cs file. See the [official MSTest documentation](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-mstest-configure).

## Unit Testing in Other Languages

The principles of unit testing are universal. Here are some popular frameworks:

- **Python**: [pytest](https://docs.pytest.org/en/stable/), [unittest](https://docs.python.org/3/library/unittest.html)
- **Java**: [JUnit](https://junit.org/junit5/)
- **JavaScript/TypeScript**: [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/)
- **Go**: [testing](https://pkg.go.dev/testing)
- **Rust**: [Built-in tests](https://doc.rust-lang.org/book/ch11-01-writing-tests.html)
- **PHP**: [PHPUnit](https://phpunit.de/)
- **Ruby**: [RSpec](https://rspec.info/)

Each language has its specifics, but the AAA logic and philosophy remain the same.

## Other Examples

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

---

Author: [Eliott A. Roussille](https://github.com/aust-1)
