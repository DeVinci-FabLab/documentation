---
title: Architecture
description: Notes de cours sur l'architecture des ordinateurs et microcontrôleurs.
slug: architecture
tags: [lecture notes, A1, it, architecture]
last_update:
  date: 2024-01-31
  author: Eliott A. Roussille
---

## Chapitre 1 : Bases du binaire

### Notions clés

- Un mot binaire est un groupe de bits, unité de base manipulée par un calculateur ou un microprocesseur.
- Physiquement, l'information circule par alternance de tension ou de photons (fibre optique).
- Chaque élément binaire est représenté par un état physique (signal électrique).
<img src="/assets/internal_docs/Architecture/Octet visuel.png" alt="Représentation graphique d'un octet" width="520" />

:::note Codage de l'information

- Représenter la grandeur physique par une suite de nombres (numérisation).
- Coder chaque nombre en binaire.
- Faire correspondre chaque bit à un état physique.
:::

L'écriture polynomiale d'un nombre en base $x$ est :

$$
\overline{abcde, fg}_x = g \times x^{-2} + f \times x^{-1} + e \times x^{0} + d \times x^{1} + c \times x^{2} + b \times x^{3} + a \times x^{4}
$$

#### Conversion entre bases

| Base             | Préfixe | Chiffres utilisés | Exemple    | Schéma de conversion détaillé                                                                                      |
| ---------------- | ------- | ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| Binaire (2)      | `0b`    | 0, 1              | `0b101101` | <img src="/assets/internal_docs/Architecture/B10-B.png" alt="Conversion binaire" width="300" />                    |
| Octal (8)        | `0o`    | 0à7               | `0o55`     | <img src="/assets/internal_docs/Architecture/Binaire-Octale.png" alt="Conversion octale" width="300" />            |
| Hexadécimal (16) | `0x`    | 0à9, AàF          | `0x2D`     | <img src="/assets/internal_docs/Architecture/Binaire-Hexadécimal.png" alt="Conversion hexadécimale" width="300" /> |

#### Représentation et unités

- Sur $n$ bits, on peut coder $2^n$ valeurs dans l'intervalle $[0, 2^n - 1]$.
- En C :
  - Décimal : écriture classique
  - Hexadécimal : préfixe `0x`
  - Binaire : préfixe `0b`
- Unités :
  - Bit (0 ou 1)
  - Octet : 8 bits
  - Ko/Mo/Go/To : multiples par 1024

> Si $x$ occupe $n$ bits et $y$ occupe $p$ bits alors :
>
> - Somme $x + y$ : au plus $\max(n, p) + 1$ bits
> - Produit $x \times y$ : au plus $n + p$ bits

## Chapitre 2 : Opérations logiques

<img src="/assets/internal_docs/Architecture/Notions fondamentales.png" alt="Notions fondamentales de logique" width="520" />

### Tables et diagrammes

- Table de vérité : $2^{\text{nombre de variables}}$ lignes, construite en binaire naturel.
- Logigramme : représentation graphique des combinaisons logiques.

  <img src="/assets/internal_docs/Architecture/Logigramme.png" alt="Exemple de logigramme" width="400" />
- Chronogramme : évolution temporelle des variables logiques.

  <img src="/assets/internal_docs/Architecture/Chronogramme.png" alt="Exemple de chronogramme" width="400" />

### Opérateurs logiques de base

| Porte     | Illustration                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------- |
| NON (NOT) | <img src="/assets/internal_docs/Architecture/NON ou NOT.png" alt="Porte NON" width="520" />               |
| ET (AND)  | <img src="/assets/internal_docs/Architecture/ET ou AND.png" alt="Porte ET" width="520" />                 |
| OU (OR)   | <img src="/assets/internal_docs/Architecture/OU ou OR.png" alt="Porte OU" width="520" />                  |
| NAND      | <img src="/assets/internal_docs/Architecture/NON-ET ou NAND.png" alt="Porte NAND" width="520" />          |
| NOR       | <img src="/assets/internal_docs/Architecture/NON-OU ou NOR.png" alt="Porte NOR" width="520" />            |
| XOR       | <img src="/assets/internal_docs/Architecture/OU exclusif ou XOR.png" alt="Porte XOR" width="520" />       |
| XNOR      | <img src="/assets/internal_docs/Architecture/NON-OU exclusif ou EXOR.png" alt="Porte XNOR" width="520" /> |

#### Théorèmes de De Morgan

- Complément d'un produit : somme des compléments.

  <img src="/assets/internal_docs/Architecture/Morgan1.png" alt="Théorème de De Morgan 1" width="180" />
- Complément d'une somme : produit des compléments.

  <img src="/assets/internal_docs/Architecture/Morgan2.png" alt="Théorème de De Morgan 2" width="180" />

#### Opérateurs logiques en C

- `x & y` : ET bit à bit
- `x | y` : OU bit à bit
- `~x` : NON bit à bit
- `x ^ y` : XOR bit à bit
- `x << y` : décalage de $x$ de $y$ bits vers la gauche ($x \times base^y$)
- `x >> y` : décalage de $x$ de $y$ bits vers la droite ($x // base^y$)

<img src="/assets/internal_docs/Architecture/Opérations bit à bit.png" alt="Exemple d'opérations bit à bit" width="520" />

:::tip
Pour mettre le bit 3 à 1 : `xxxx xxxx | 0000 1000 = xxxx 1xxx`

Pour forcer le bit 3 à 0 : `xxxx xxxx & 1111 0111 = xxxx 0xxx`
:::

## Chapitre 3 : Montage physique

### Portes

Chaque porte possède ses performances propres (temps de montée/descente, temps de propagation) consultables sur une datasheet. Ces paramètres servent à :

- Déterminer la vitesse maximale d'une fonction logique.
- Estimer le temps de calcul d'une fonction arithmétique.
- Garantir que les entrées restent stables pendant la propagation (sortie non valide durant ce laps de temps).

### Breadboard

- Deux blocs horizontaux relient des lignes de 5 points au même potentiel.
- Deux colonnes sont dédiées à l'alimentation.
- Les portes se placent entre les blocs, au-dessus du ravin.
- Les LED ont une borne + (patte longue) et nécessitent une résistance $< 1 k\Omega$ côté cathode.

<img src="/assets/internal_docs/Architecture/Code couleur résistances.png" alt="Code couleur des résistances" width="360" />

## Chapitre 4 : Logique séquentielle

En logique séquentielle, l'état précédent est mémorisé via des bascules : la sortie dépend donc de l'état précédent et/ou de l'horloge.

<img src="/assets/internal_docs/Architecture/Logique séquentielle.png" alt="Principe de la logique séquentielle" width="520" />

### Horloge

- Cadence les éléments pour définir le passage de $t$ à $t+1$.
- Signal périodique alternant entre 0 et 1.
- Horloge commune : système synchrone ; horloges distinctes : système asynchrone.

### Bascules

- Deux sorties complémentaires ; l'état $n+1$ dépend de l'état $n$.
- Assemblées, elles permettent de construire des mémoires d'un bit.
- Types :
  - Asynchrone : sortie dépend uniquement des entrées.
  - Synchrone : sortie mise à jour sur autorisation de l'horloge, avec entrées prioritaires de forçage asynchrone :
    - `SD/Pr` (preset à 1)
    - `RD/Clr` (clear/reset à 0).

#### Bascule RS avec des NOR

- Entr�es `S` (Set) et `R` (Reset).
- Si `S=1` et `R=0` alors $Q=1$.
- Si `S=0` et `R=1` alors $Q=0$.
- Si `S=0` et `R=0` alors $Q$ conserve son état.
- Si `S=1` et `R=1` alors état interdit.

$$
Q = \overline {R + \overline Q} \quad ; \quad \overline Q = \overline {S + Q}
$$

<img src="/assets/internal_docs/Architecture/Bascule RS nor.png" alt="Bascule RS avec des NOR" width="520" />

#### Bascule RS avec des NAND

- Même fonctionnement que la bascule RS avec des NOR, mais les entrées sont inversées.
- Si `S=0` et `R=1` alors $Q=1$.
- Si `S=1` et `R=0` alors $Q=0$.
- Si `S=1` et `R=1` alors $Q$ conserve son état.
- Si `S=0` et `R=0` alors état interdit.

$$
Q = \overline {\overline R \cdot \overline Q} \quad ; \quad \overline Q = \overline {\overline S \cdot Q}
$$

<img src="/assets/internal_docs/Architecture/Bascule RS nand.png" alt="Bascule RS avec des NAND" width="520" />

#### Bascule D (Data ou Delay)

- Une seule entrée `D` (Data) copiée sur $Q$ lors du front actif de l'horloge.
- Si `D=1` alors $Q=1$ ; si `D=0` alors $Q=0$.

<img src="/assets/internal_docs/Architecture/Bascule D.png" alt="Bascule D" width="520" />

### Registres

- Ensemble de $n$ bascules synchronisées par la même horloge.
- Mémorisent $n$ bits ; permettent décalages, rotations, translations.

#### Registre de mémorisation

- Stocke une valeur binaire sur $n$ bits.
- Les données d'entrée `D0` à `Dn-1` sont transférées aux sorties `Q0` à `Qn-1` lors du front actif de l'horloge.

<img src="/assets/internal_docs/Architecture/registre de mémorisation.png" alt="Registre de mémorisation" width="520" />

#### Registre de décalage

- Permet de décaler les bits vers la droite ou la gauche.
- Les données sont transférées d'une bascule à la suivante à chaque front actif de l'horloge.
- Entrée `SI` (Serial In) pour le bit entrant et sortie `SO` (Serial Out) pour le bit sortant.

Exemple de décalage à droite :
<img src="/assets/internal_docs/Architecture/registre de décalage.png" alt="Registre de décalage" width="520" />

### Compteurs / Décompteurs

- Diviseur de fréquence : relier $\overline{Q}$ à $C$ pour un compteur (signal commençant par 0), $Q$ à $C$ pour un décompteur (signal commençant par 1).
- On peut cumuler plusieurs diviseur de fréquence pour diviser par 4, 8, 16 etc. Pour cela on relie la sortie $Q$ du premier diviseur à l'horloge du second, et ainsi de suite.

Exemple : diviseur de fréquence par 2
<img src="/assets/internal_docs/Architecture/diviseur de fréquence 2.png" alt="Diviseur de fréquence par 2" width="520" />

## Chapitre 5 : Microcontrôleur AVR

### Ordinateur et carte électronique

- Un ordinateur exécute des programmes composés d'opérations arithmétiques et logiques.
- Une carte à microcontrôleur exécute des traitements plus simples, avec beaucoup de registres et une faible consommation.

### Langages de programmation

- Haut niveau : proche de la logique humaine mais gourmand en mémoire (Java, Python, C#).
- Bas niveau : proche de la machine, optimisé (assembleur, johnny). Le compilateur traduit vers un langage intermédiaire puis assemble en langage machine (0 et 1).

### Microprocesseur (µp) vs microcontrôleur (µc)

- µp : circuit intégré dédié au calcul, connecté à des périphériques, grande puissance de calcul, consommation élevée (PC).
- µc : circuit autonome, nombreux registres, faible puissance et consommation (machine à laver).

### Carte Arduino

- Microcontrôleur ATMega328 : solution simple et économique.

### Types d'architecture

- µc Harvard : données et programme séparés, plus rapide mais consomme davantage (MCU, DSP).
- µp Von Neumann : registres partagés, consommation plus faible (PC).

> RAM : Random Access Memory (volatile)
> ROM : Read Only Memory

### Registre SREG

| Bit | Nom            | R�le                              |
| --- | -------------- | --------------------------------- |
| b5  | H (Half Carry) | Retenue intermédiaire             |
| b4  | S              | `N xor V`                         |
| b3  | V (Overflow)   | Dépassement                       |
| b2  | N (Negative)   | Résultat négatif                  |
| b1  | Z (Zero)       | Résultat nul                      |
| b0  | C (Carry)      | Retenue sur la dernière opération |

## Chapitre 7 : Aspects logiciels du microcontrôleur AVR

### Instructions en assembleur

#### UAL : opérations arithmétiques et logiques (`+`, `-`, `AND`, `OR`, `>` , `>=`, ...)
