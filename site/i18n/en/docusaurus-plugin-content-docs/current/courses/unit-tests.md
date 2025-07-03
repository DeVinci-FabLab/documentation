---
sidebar_position: 6
title: Unit Testing (Examples in C# with MSTest)
author: Eliott A. Roussille
description: A guide to understanding the fundamentals of unit testing, illustrated in C# with MSTest, but applicable to all languages.
tags: [info]
hide_table_of_contents: false
slug: mstest-course
---

# Unit Testing (Examples in C# with MSTest)

Unit tests are programs that automatically verify that each part of your code works as expected. They make maintenance, bug detection, and refactoring easier. Moreover, a high coverage rate (the percentage of code tested by tests) ensures code quality.

This guide aims to present the fundamental concepts of unit testing. Everything will be illustrated with the MSTest framework for C#, but the principles remain applicable to all languages: each ecosystem offers its own tools ([see the end of the page for other languages](#unit-testing-in-other-languages)).

## Why Write Unit Tests?

- Ensure code quality
- Facilitate regression detection
- Document expected behavior
- Build confidence when making changes

## Creating and Configuring an MSTest Project

Here's how to properly set up a unit test project with MSTest for a C# .NET project:

**Prerequisite:**
Have an existing C# project (for example, `MyProject`). Otherwise:

```bash
# Create a folder for the project if needed
mkdir MyProjectSolution
cd MyProjectSolution

# 1. Create a .sln solution file
dotnet new sln -n MyProjectSolution

# 2. Create a console project
dotnet new console -o src/MyProject

# 3. Add the console project to the solution
dotnet sln MyProjectSolution.sln add src/MyProject/MyProject.csproj
```

1. **Create the test project**

   In your solution folder:

    ```bash
    mkdir tests
    dotnet new mstest -o tests/MyProject.Tests
    ```

   This creates a test project named `MyProject.Tests`.

2. **Add the test project to the solution**

   ```bash
   dotnet sln MyProjectSolution.sln add tests/MyProject.Tests/MyProject.Tests.csproj
   ```

3. **Add a reference to the project to be tested**

   ```bash
   cd tests/MyProject.Tests
   dotnet add reference ../../src/MyProject/MyProject.csproj
   ```

4. **Check the structure**

   - Place your tests in the `MyProject.Tests` folder.
   - Organize test files following the main project's structure (e.g., a `MyClassTests.cs` file for `MyClass.cs`).

5. **Example solution structure**

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

6. **Best practices**

   - Suffix your test projects with `.Tests` or `.Test`.
   - Use a consistent namespace, e.g., `MyProject.Tests`.
   - Place tests in a separate folder from business logic.
   - Add an `MSTestSettings.cs` file if advanced configuration is needed ([see below](#going-further)).

For more details: [Microsoft docs - Create an MSTest test project](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

## Structure of a Unit Test

### Theory: The AAA Pattern

**AAA:**

- **Arrange**: Initialize objects and define the data passed to the method under test.
- **Act**: Call the method under test with the initialized parameters.
- **Assert**: Verify that the action of the method under test behaves as expected (we'll see the `Assert` class below).

### Syntax of a Unit Test with MSTest

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting; //Sometimes automatic

namespace MyNamespace.Tests
{
    [TestClass]
    public class MyClassTests
    {
        [TestMethod]
        public void MyMethodToTest_ShouldDoThis() //Or Given..._When..._Then... (two conventions used)
        {
            // Arrange

            // Act

            // Assert
        }
    }
}
```

### Simple Example

```csharp
[TestMethod]
public void Addition_ShouldReturnCorrectSum()
{
    // Arrange
    int a = 2, b = 3;
    // Act
    int result = a + b;
    // Assert
    Assert.AreEqual(5, result);
}
```

## The `Assert` Class

`Assert` is used to verify expected results in your tests.

Here are the most common methods:

- **`Assert.AreEqual(expected, actual, message)`**: Checks that two values are equal.
- **`Assert.AreNotEqual(expected, actual, message)`**: Checks that two values are not equal.
- **`Assert.IsTrue(condition, message)`**: Checks that a condition is true.
- **`Assert.IsFalse(condition, message)`**: Checks that a condition is false.
- **`Assert.IsNull(object, message)`**: Checks that an object is null.
- **`Assert.IsNotNull(object, message)`**: Checks that an object is not null.

If a test fails, the (optional) message is displayed, which saves time.

**Simple example:**

```csharp
[TestMethod]
public void Conditions_ShouldBeOfLength5NotEqualToWorldNotBeginWithWContainsHAndNotNull()
// This is for the example; in reality, you should segment as much as possible. One method = one test.
// As you can see, this is unreadable.
{
    string str = "Hello";
    Assert.AreEqual(5, str.Length, "The string length should be 5.");
    Assert.AreNotEqual("World", str, "The string should not be 'World'.");
    Assert.IsFalse(str.StartsWith("W"), "The string should not start with 'W'.");
    Assert.IsTrue(str.Contains("H"), "The string should contain 'H'.");
    Assert.IsNotNull(str, "The string should not be null.");
}
```

## Parameterized Tests

Run a test with multiple sets of data.

```csharp
[DataTestMethod]
[DataRow(2, 3, 5)]
[DataRow(10, 20, 30)]
[DataRow(-1, 20, 19)]
[DataRow(10, 0, 10)]
public void Addition_ShouldReturnCorrectSum(int a, int b, int expected)
{
    string message = "The sum of " + a + " and " + b + " should be " + expected;
    Assert.AreEqual(expected, a + b, message);
}
```

## Running Tests

How you run tests depends on your development environment:

- **Visual Studio Code**:
  - Use the "Testing" tab in the sidebar to run or monitor your tests.
  - You can also right-click the test project > "Run Tests" or "Run Tests with Coverage" to get code coverage.

- **JetBrains Rider**:
  - Go to the "Tests" tab to run or debug your tests.
  - The "Test Coverage" option lets you see coverage for each file.

- **Other IDEs**:
  - Most modern IDEs offer unit test integration with dedicated buttons or menus.

- **Command line**:

    ```bash
    dotnet test
    ```

    This command runs all tests related to the solution and displays the results in the terminal.

## Best Practices

- **Clearly name your tests**: Indicate what is being tested and the expected result.

    ```csharp
    MyMethodToTest_ShouldDoThis()
    ```

- **Isolation**: Tests should not depend on each other.
- **Segment**: One test = one test method.

    ```csharp
    // Bad
    [TestMethod]
    public void Conditions_ShouldBeNotNullAndContainsH()
    {
        // Arrange
        string str = "Hello";
        // Act & Assert
        Assert.IsNotNull(str, "The string should not be null.");
        Assert.IsTrue(str.Contains("H"), "The string should contain 'H'.");
    }

    // Prefer
    [TestMethod]
    public void Conditions_ShouldBeNotNull()
    {
        // Arrange
        string str = "Hello";
        // Act

        // Assert
        Assert.IsNotNull(str, "The string should not be null.");
    }

    [TestMethod]
    public void Conditions_ShouldContainH()
    {
        // Arrange
        string str = "Hello";
        // Act

        // Assert
        Assert.IsTrue(str.Contains("H"), "The string should contain 'H'.");
    }
    ```

- **Avoid side effects**: Clean up resources if needed (`[TestInitialize]`, `[TestCleanup]`, `[AssemblyInitialize]`, `[ClassInitialize]`, ...).

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

- **Forgetting the `[TestMethod]` attribute**: the test will not be detected.

    ```csharp
    // Bad
    public void Addition_ShouldReturnCorrectSum()
    {
        // Arrange
        int a = 2, b = 3;
        // Act
        int result = a + b;
        // Assert
        Assert.AreEqual(5, result);
    }
    ```

## Going Further

- **Testing exceptions**:

```csharp
[TestMethod]
[ExpectedException(typeof(ArgumentNullException))]
public void MyMethod_ShouldThrowOnNull()
{
    MyClass.MyMethod(null);
}
```

- **Async tests**:

```csharp
[TestMethod]
public async Task MyMethodAsync_ShouldReturnResult()
{
    var result = await MyClass.MyMethodAsync();
    Assert.IsNotNull(result);
}
```

- **Using mocks**: To isolate dependencies, use a framework like Moq or NSubstitute.

- **Configure MSTest with MSTestSettings.cs**:

    To customize the global behavior of MSTest, you can add an `MSTestSettings.cs` file to your test project. This file allows you to configure test parallelization, global timeout, etc.

    **Example**

    ```csharp
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [assembly: Parallelize(Scope = ExecutionScope.MethodLevel, Workers = 4)] // Parallelize tests at the method level with 4 workers
    [assembly: TestSettings(DefaultTestTimeout = 10000)] // Global timeout of 10 seconds per test
    ```

    For more details, see the [official MSTest documentation](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-mstest-configure).

## Unit Testing in Other Languages

The principles of unit testing are universal. Here are some popular frameworks:

- **Python**: [pytest](https://docs.pytest.org/en/stable/) or [unittest](https://docs.python.org/3/library/unittest.html)
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

Last updated: July 2025

Author: [Eliott A. Roussille](https://github.com/Captainbleu)
