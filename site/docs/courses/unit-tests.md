---
sidebar_position: 6
title: Tests unitaires (exemples en C# avec MSTest)
author: Eliott A. Roussille
description: Un guide pour comprendre les fondamentaux des tests unitaires, illustré en C# avec MSTest, mais applicable à tous les langages.
tags: [info]
hide_table_of_contents: false
slug: mstest-course
---

# Tests unitaires (exemples en C# avec MSTest)

Les tests unitaires sont des programmes qui vérifient automatiquement que chaque partie de votre code fonctionne comme prévu. Ils facilitent la maintenance, la détection des bugs et la refactorisation. De plus, un haut taux de couverture (le pourcentage de code testé par les tests) garantit la qualité du code.

Ce guide a pour but de présenter les concepts fondamentaux des tests unitaires. Tout sera illustré avec le framework MSTest pour C#. mais les principes restent applicables à tous les langages : chaque écosystème propose ses propres outils ([voir en fin de page pour d'autres langages](#tests-unitaires-dans-dautres-langages)).

## Pourquoi écrire des tests unitaires ?

- Garantir la qualité du code
- Faciliter la détection des régressions
- Documenter le comportement attendu
- Favoriser la confiance lors des modifications

## Créer et configurer un projet de tests MSTest

Voici comment mettre en place un projet de tests unitaire proprement avec MSTest pour un projet C# .NET :

**Prérequis** :
Avoir un projet C# existant (par exemple, `MonProjet`). Sinon :

```bash
# Créer un dossier pour le projet si besoin
mkdir MonProjetSolution
cd MonProjetSolution

# 1. Créer un fichier de solution .sln
dotnet new sln -n MonProjetSolution

# 2. Créer un projet console
dotnet new console -o src/MonProjet

# 3. Ajouter le projet console à la solution
dotnet sln MonProjetSolution.sln add src/MonProjet/MonProjet.csproj
```

1. **Créer le projet de tests**

   Dans le dossier de votre solution :

    ```bash
    mkdir tests
    dotnet new mstest -o tests/MonProjet.Tests
    ```

   Cela crée un projet de tests nommé `MonProjet.Tests`.

2. **Ajouter le projet de tests à la solution**

   ```bash
   dotnet sln MonProjetSolution.sln add tests/MonProjet.Tests/MonProjet.Tests.csproj
   ```

3. **Ajouter une référence au projet à tester**

   ```bash
   cd tests/MonProjet.Tests
   dotnet add reference ../../src/MonProjet/MonProjet.csproj
   ```

4. **Vérifier la structure**

   - Placez vos tests dans le dossier `MonProjet.Tests`.
   - Organisez les fichiers de test en suivant la structure du projet principal (ex : un fichier `MaClasseTests.cs` pour `MaClasse.cs`).

5. **Exemple de structure de solution**

    ```css
    MonProjetSolution/
    ├── MonProjetSolution.sln
    ├── src/
    │   └── MonProjet/
    │       ├── MonProjet.csproj
    │       ├── MaClasse.cs
    │       └── Program.cs
    └── tests/
        └── MonProjet.Tests/
            ├── MonProjet.Tests.csproj
            ├── MaClasseTests.cs
            └── MSTestSettings.cs
    ```

6. **Bonnes pratiques**

   - Suffixez vos projets de test par `.Tests` ou `.Test`.
   - Utilisez un namespace cohérent, par exemple `MonProjet.Tests`.
   - Placez les tests dans un dossier séparé de la logique métier.
   - Ajoutez un fichier `MSTestSettings.cs` si besoin de configuration avancée ([voir plus bas](#aller-plus-loin)).

Pour plus de détails : [docs Microsoft - Créer un projet de test MSTest](https://learn.microsoft.com/fr-fr/dotnet/core/testing/unit-testing-with-mstest)

## Structure d’un Test Unitaire

### Théorie : le schéma AAA

**AAA** :

- **Arrange** : Initialisation des objets et définition des données transmises à la méthode testée.
- **Act** : Appel de la méthode testée avec les paramètres initialisés.
- **Assert** : Vérification que l’action de la méthode testée se comporte comme prévu (on verra la classe `Assert` plus bas).

### Syntaxe d'un Test Unitaire avec MSTest

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting; //Parfois automatique

namespace MonNamespace.Tests
{
    [TestClass]
    public class MaClasseTests
    {
        [TestMethod]
        public void MaMethodeATester_ShouldFaireCa() //Ou Given..._When..._Then... (deux conventions utilisées )
        {
            // Arrange

            // Act

            // Assert
        }
    }
}
```

### Exemple simple

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

## Classe `Assert`

`Assert` est utilisée pour vérifier les résultats attendus dans vos tests.

Voici les méthodes les plus courantes :

- **`Assert.AreEqual(expected, actual, message)`** : Vérifie que deux valeurs sont égales.
- **`Assert.AreNotEqual(expected, actual, message)`** : Vérifie que deux valeurs ne sont pas égales.
- **`Assert.IsTrue(condition, message)`** : Vérifie qu'une condition est vraie.
- **`Assert.IsFalse(condition, message)`** : Vérifie qu'une condition est fausse.
- **`Assert.IsNull(object, message)`** : Vérifie qu'un objet est null.
- **`Assert.IsNotNull(object, message)`** : Vérifie qu'un objet n'est pas null.

Si un test échoue, le message inscrit (optionnel) s'affiche ce qui permet de gagner du temps.

**Exemple simple** :

```csharp
[TestMethod]
public void Conditions_ShouldBeOfLength5NotEqualToWorldNotBeginWithWContainsHAndNotNull()
//C'est pour l'exemple en réalité, il faut segmenter le plus possible. Une méthode => Un test.
//La preuve, ici, c'est illisible.
{
    string str = "Hello";
    Assert.AreEqual(5, str.Length, "La longueur de la chaîne doit être 5.");
    Assert.AreNotEqual("World", str, "La chaîne ne doit pas être 'World'.");
    Assert.IsFalse(str.StartsWith("W"), "La chaîne ne doit pas commencer par 'W'.");
    Assert.IsTrue(str.Contains("H"), "La chaîne doit contenir 'H'.");
    Assert.IsNotNull(str, "La chaîne ne doit pas être null.");
}
```

## Tests Paramétrés

Exécutent un test avec plusieurs jeux de données.

```csharp
[DataTestMethod]
[DataRow(2, 3, 5)]
[DataRow(10, 20, 30)]
[DataRow(-1, 20, 19)]
[DataRow(10, 0, 10)]
public void Addition_ShouldReturnCorrectSum(int a, int b, int expected)
{
    string message = "La somme de " + a + " et " + b + "devrait être " + expected;
    Assert.AreEqual(expected, a + b, message);
}
```

## Exécution des tests

L’exécution des tests dépend de votre environnement de développement :

- **Visual Studio Code** :
  - Utilisez l’onglet "Testing" dans la barre latérale pour lancer ou surveiller vos tests.
  - Vous pouvez aussi faire un clic droit sur le projet de test > "Run Tests" ou "Run Tests with Coverage" pour obtenir le taux de couverture de code.

- **JetBrains Rider** :
  - Accédez à l’onglet "Tests" pour exécuter ou déboguer vos tests.
  - L’option "Test Coverage" permet de visualiser la couverture de chaque fichier.

- **Autres IDE** :
  - La plupart des IDE modernes proposent une intégration des tests unitaires avec des boutons ou menus dédiés.

- **En ligne de commande** :

    ```bash
    dotnet test
    ```

    Cette commande exécute tous les tests reliés à la solution et affiche les résultats dans le terminal.

## Bonnes Pratiques

- **Nommer clairement les tests** : Indique ce qui est testé et le résultat attendu.

    ```csharp
    MaMethodeATester_ShouldFaireCa()
    ```

- **Isolation** : Les tests ne doivent pas dépendre les uns des autres.
- **Segmenter** : Un test = une méthode de test.

    ```csharp
    // Mauvais
    [TestMethod]
    public void Conditions_ShouldBeNotNullAndContainsH()
    {
        // Arrange
        string str = "Hello";
        // Act & Assert
        Assert.IsNotNull(str, "La chaîne ne doit pas être null.");
        Assert.IsTrue(str.Contains("H"), "La chaîne doit contenir 'H'.");
    }

    // Préférez
    [TestMethod]
    public void Conditions_ShouldBeNotNull()
    {
        // Arrange
        string str = "Hello";
        // Act

        // Assert
        Assert.IsNotNull(str, "La chaîne ne doit pas être null.");
    }

    [TestMethod]
    public void Conditions_ShouldContainH()
    {
        // Arrange
        string str = "Hello";
        // Act

        // Assert
        Assert.IsTrue(str.Contains("H"), "La chaîne doit contenir 'H'.");
    }
    ```

- **Éviter les effets de bord** : Nettoyer les ressources si besoin (méthodes `[TestInitialize]`, `[TestCleanup]`, `[AssemblyInitialize]`, `[ClassInitialize]`, …).

    ```csharp
    private List<string> _list;

    [TestInitialize]
    public void Setup()
    {
        // Arrange commun à tous les tests : initialisation
        _list = new List<string> { "A", "B" };
    }

    [TestCleanup]
    public void Cleanup()
    {
        // Nettoyage après chaque test
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

## Erreurs courantes

- **Oublier l’attribut `[TestMethod]`** : le test ne sera pas détecté.

    ```csharp
    // Mauvais
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

## Aller plus loin

- **Tester les exceptions** :

```csharp
[TestMethod]
[ExpectedException(typeof(ArgumentNullException))]
public void MaMethode_ShouldThrowOnNull()
{
    MaClasse.MaMethode(null);
}
```

- **Tests asynchrones** :

```csharp
[TestMethod]
public async Task MaMethodeAsync_ShouldReturnResult()
{
    var result = await MaClasse.MaMethodeAsync();
    Assert.IsNotNull(result);
}
```

- **Utiliser des mocks** : Pour isoler les dépendances, utilisez un framework comme Moq ou NSubstitute.

- **Configurer MSTest avec MSTestSettings.cs** :

    Pour personnaliser le comportement global de MSTest, vous pouvez ajouter un fichier `MSTestSettings.cs` dans votre projet de tests. Ce fichier permet par exemple de configurer la parallélisation des tests, le timeout global, etc.

    **Exemple**

    ```csharp
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [assembly: Parallelize(Scope = ExecutionScope.MethodLevel, Workers = 4)] // Parallélise les tests au niveau des méthodes avec 4 workers
    [assembly: TestSettings(DefaultTestTimeout = 10000)] // Timeout global de 10 secondes pour chaque test
    ```

    Pour plus de détails, voir la [documentation officielle MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-mstest-configure).

## Tests unitaires dans d'autres langages

Les principes des tests unitaires sont universels. Voici quelques frameworks populaires :

- **Python** : [pytest](https://docs.pytest.org/en/stable/) ou [unittest](https://docs.python.org/3/library/unittest.html)
- **Java** : [JUnit](https://junit.org/junit5/)
- **JavaScript/TypeScript** : [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/)
- **Go** : [testing](https://pkg.go.dev/testing)
- **Rust** : [Tests intégrés](https://doc.rust-lang.org/book/ch11-01-writing-tests.html)
- **PHP** : [PHPUnit](https://phpunit.de/)
- **Ruby** : [RSpec](https://rspec.info/)

Chaque langage a ses particularités, mais la logique AAA et la philosophie restent les mêmes.

## Autres exemples

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

namespace ExempleNamespace.Tests
{
    [TestClass]
    public class ExempleTests
    {
        [TestMethod]
        public void Addition_ShouldReturnCorrectSum()
        {
            // Arrange
            int a = 2;
            int b = 3;

            // Act
            int result = Somme(a, b);

            // Assert
            Assert.AreEqual(5, result, "La somme doit être 5");
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

Dernière mise à jour : Juillet 2025

Auteur : [Eliott A. Roussille](https://github.com/Captainbleu)
