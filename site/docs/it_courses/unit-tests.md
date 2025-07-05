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

Les tests unitaires sont des programmes qui vérifient automatiquement que chaque partie de votre code fonctionne comme prévu.

Ce guide présente les concepts fondamentaux des tests unitaires, illustrés avec MSTest pour C#. Néanmoins les principes restent applicables à tous les langages ([voir en fin de page](#tests-unitaires-dans-dautres-langages)).

## Pourquoi écrire des tests unitaires ?

- **Qualité** : Le taux de couverture correspond au pourcentage de code testé par les tests unitaires et permet de s'assurer que le code fonctionne comme prévu et que les modifications futures ne cassent pas les fonctionnalités existantes.
  Avoir un taux de couverture élevé est un gage de qualité et de robustesse du code.
- **Détection rapide des bugs** : Les tests unitaires permettent de détecter rapidement les erreurs dans le code, ce qui réduit le temps passé à déboguer.
- **Documentation vivante** : Les tests unitaires servent de documentation vivante du code, en montrant comment chaque partie est censée fonctionner.
- **Faciliter la modification du code** : Les tests unitaires vous permettent de modifier le code en toute confiance, car ils peuvent assurer que les modifications n'ont rien cassé.

## Créer et configurer un projet de tests MSTest

Voici comment mettre en place un projet de tests unitaire proprement avec MSTest pour un projet C# .NET :

### Prérequis

Avoir un projet C# existant (par exemple, `MonProjet`). Sinon :

```bash
mkdir MonProjetSolution # Créer un dossier pour le projet si besoin
cd MonProjetSolution # Se placer dans le dossier du projet

dotnet new sln -n MonProjetSolution # Créer un fichier de solution .sln

dotnet new console -o src/MonProjet # Créer un projet console dans le dossier src/MonProjet

dotnet sln add src/MonProjet/MonProjet.csproj # Ajouter le projet à la solution
```

Pour la suite, on va se placer dans cette architecture de projet :

```css
MonProjetSolution/
├── MonProjetSolution.sln
└── src/
    └── MonProjet/
        ├── MonProjet.csproj
        └── Program.cs
```

Adapter les chemins si vous avez une structure différente.

### Configurer le projet de tests

Dans le dossier de votre solution :

```bash
dotnet new mstest -o tests/MonProjet.Tests
dotnet sln add tests/MonProjet.Tests/MonProjet.Tests.csproj
dotnet add tests/MonProjet.Tests reference src/MonProjet/MonProjet.csproj
```

Cela crée un projet de tests nommé `MonProjet.Tests` dans le dossier `tests` puis lie le projet de tests à la solution et au projet principal.

C’est tout ! Tu peux maintenant écrire tes tests dans `tests/MonProjet.Tests`. Organise les fichiers de test en suivant la structure du projet principal (ex : un fichier `MaClasseTests.cs` pour `MaClasse.cs`).

Voici la structure finale :

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

Pour plus de détails : [docs Microsoft - Créer un projet de test MSTest](https://learn.microsoft.com/fr-fr/dotnet/core/testing/unit-testing-with-mstest)

## Structure d’un Test Unitaire (schéma AAA)

- **Arrange** : Préparer les données et objets nécessaires au test de la méthode.
- **Act** : Appeler la méthode à tester.
- **Assert** : Vérifier le résultat obtenu.

### Exemple réaliste avec MSTest

Supposons une méthode qui calcule la TVA :

```csharp
namespace MonNamespace
{
    public static class Calculateur
    {
        public static decimal CalculerTva(decimal montant, decimal taux)
        {
            if (taux < 0)
            {
                throw new ArgumentException("Le taux ne peut pas être négatif.");
            }
            return montant * taux;
        }
    }
}
```

Test unitaire associé :

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MonNamespace.Tests
{
    [TestClass]
    public class CalculateurTests
    {
        [TestMethod]
        public void CalculerTva_AvecMontantEtTauxValides_RetourneResultatAttendu()
        {
            // Arrange
            decimal montant = 100m;
            decimal taux = 0.2m;
            // Act
            decimal resultat = Calculateur.CalculerTva(montant, taux);
            // Assert
            Assert.AreEqual(20m, resultat, "La TVA doit être correcte.");
        }
    }
}
```

## Écriture de Tests Unitaires avec MSTest

### Classe `Assert`

`Assert` est utilisée pour vérifier les résultats attendus dans vos tests.

Voici les méthodes les plus courantes :

- **`Assert.AreEqual(expected, actual, message)`** : Vérifie que deux valeurs sont égales.
- **`Assert.AreNotEqual(expected, actual, message)`** : Vérifie que deux valeurs ne sont pas égales.
- **`Assert.IsTrue(condition, message)`** : Vérifie qu'une condition est vraie.
- **`Assert.IsFalse(condition, message)`** : Vérifie qu'une condition est fausse.
- **`Assert.IsNull(object, message)`** : Vérifie qu'un objet est null.
- **`Assert.IsNotNull(object, message)`** : Vérifie qu'un objet n'est pas null.

Si un test échoue, le message inscrit (optionnel) s'affiche ce qui permet de gagner du temps.

### Tests Paramétrés

Pour tester une méthode avec plusieurs jeux de données, utilisez les attributs `[DataTestMethod]` et `[DataRow]`.

```csharp
[DataTestMethod]
[DataRow(100, 0.2, 20)]
[DataRow(50, 0.1, 5)]
public void CalculerTva_AvecDiversesValeurs_RetourneLeRésultatAttendu(decimal montant, decimal taux, decimal attendu)
{
    Assert.AreEqual(attendu, Calculateur.CalculerTva(montant, taux));
}
```

### Gestion des exceptions

Pour tester qu'une méthode lance une exception attendue, utilisez l'attribut `[ExpectedException]` ou la méthode `Assert.ThrowsException<T>()`.

```csharp
// Avec ExpectedException
[TestMethod]
[ExpectedException(typeof(ArgumentException))]
public void CalculerTva_TauxNegatif_ProvoqueException()
{
    Calculateur.CalculerTva(100, -0.2m);
}

// Avec Assert.ThrowsException
[TestMethod]
public void CalculerTva_TauxNegatif_ProvoqueException()
{
    var exception = Assert.ThrowsException<ArgumentException>(() => Calculateur.CalculerTva(100, -0.2m));
    Assert.AreEqual("Le taux ne peut pas être négatif.", exception.Message);
}
```

## Exécution des tests

L’exécution des tests dépend de votre environnement de développement :

- **Visual Studio** : "Test" > "Explorateur de tests", Ctrl+E, T ou clic droit sur le projet de test.
- **Visual Studio Code** : Onglet "Testing" ou clic droit sur le projet de test.
- **JetBrains Rider** : Onglet "Tests" et "Test Coverage".
- **Terminal** : `dotnet test`

## Bonnes pratiques

- **Segmenter** : Un test = une méthode de test.
- **Nom explicite** : Indique ce qui est testé et le résultat attendu. Deux conventions de nommage sont courantes :
  - `Méthode_Should...`: `Méthode_ShouldRésultatAttendu`
  - `Given..._When..._Then...` : `Méthode_Condition_RésultatAttendu`
- **Isolation** : Les tests ne doivent pas dépendre les uns des autres.
- **Limiter les effets de bord** : Nettoyer les ressources si besoin (`[TestCleanup]`, `[TestInitialize]`, `[AssemblyInitialize]`, `[ClassInitialize]`, …).

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

- Oublier `[TestMethod]` ou `[TestClass]` : le test n’est pas détecté
- Oublier de builder avant de tester (`dotnet build`)
- Tester plusieurs comportements dans un même test
- Dépendance entre tests (ex : modification d’une variable statique)
- Mauvais usage d’`Assert` (ex : inverser expected/actual)
- Ne pas nettoyer les ressources (fichiers, connexions, etc.)
- Ne pas tester les cas limites ou les exceptions
- Laisser du code mort/non utilisé dans les tests
- Ne pas exécuter les tests régulièrement

## Aller plus loin

- **Tests asynchrones**

```csharp
[TestMethod]
public async Task CalculAsync_ShouldRetourneResultat()
{
    var resultat = await CalculateurAsync.CalculerAsync(10, 2);
    Assert.AreEqual(20, resultat);
}
```

- **Mocks** : Pour isoler les dépendances (voir Moq, NSubstitute)
- **Configurer MSTest** : Parallélisation, timeout global, etc. en modifiant le fichier MSTestSettings.cs. Voir la [documentation officielle MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-mstest-configure).

## Tests unitaires dans d'autres langages

Les principes des tests unitaires sont universels. Voici quelques frameworks populaires :

- **Python** : [pytest](https://docs.pytest.org/en/stable/), [unittest](https://docs.python.org/3/library/unittest.html)
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
