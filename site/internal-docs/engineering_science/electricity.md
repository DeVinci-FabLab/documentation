---
title: Electricité
description: Notes de cours sur l'électricité en sciences de l'ingénieur.
slug: electricity
tags: [lecture notes, A1, engineering science, electricity]
last_update:
  date: 2024-01-31
  author: Eliott A. Roussille
---

## Chapitre 1 : Lois fondamentales

- **Loi des mailles** : le long d’une maille, la somme algébrique des tensions est nulle, $U_{AA} = 0\ \text{V}$.
  <img src="/assets/internal_docs/Electricité/Lois des mailles.png" alt="Loi des mailles" width="380" />
- **Loi des nœuds** : en chaque nœud, la somme des intensités arrivant est égale à la somme des intensités partant.
  <img src="/assets/internal_docs/Electricité/Loi des noeuds.png" alt="Loi des nœuds" width="380" />
- **Loi d’Ohm** : $U = R \times I$

:::note

- $i = \dot q$ et $1\ \text{A} = 1\ \text{C} \cdot \text{s}^{-1}$
- $U_{AB} = V_A - V_B$ (flèche $B \rightarrow A$)

:::

## Chapitre 2 : Conventions et mesures

- **Convention récepteur** : flèche de $U$ opposée à $I$.
- **Convention générateur** : flèche de $U$ dans le même sens que $I$.
- **Mesure** : $I$ avec un ampèremètre en série ; $U$ avec un voltmètre en dérivation.

## Chapitre 3 : Circuits résistifs

### Caractéristiques d’un dipôle

- $U = E - rI$ si $U$ et $I$ sont opposés.
- $U = E + rI$ si $U$ et $I$ sont identiques.

### Résistances équivalentes

- Série : $R_\text{eq} = R_1 + R_2 + \dots + R_n$
- Parallèle : $\displaystyle R_\text{eq} = \Big(\frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}\Big)^{-1}$

### Diviseurs

- **Diviseur de tension** (résistances en série) : $\displaystyle U_1 = \frac{R_1}{R_1 + R_\text{eq}} \times E$
- **Diviseur de courant** (résistances en parallèle) : $\displaystyle I_1 = \frac{R_\text{eq}}{R_1 + R_\text{eq}} \times I_0$

## Chapitre 4 : Théorèmes d’équivalence

> **Point de fonctionnement** : couple $(U, I)$ du montage en régime établi.\
> **Montage équivalent** : dipôle unique produisant le même point de fonctionnement.
> <img src="/assets/internal_docs/Electricité/Modèle équivalent Thévenin et Norton.png" alt="Modèle équivalent" width="420" />

### Thévenin (MET)

- $E_\text{th}$ : tension à vide (f.e.m.) entre $A$ et $B$ ($I = 0$).
- $R_\text{th}$ : résistance équivalente en neutralisant les sources indépendantes.

  <img src="/assets/internal_docs/Electricité/Thévenin.png" alt="Théorème de Thévenin" width="420" />

### Norton (MEN)

- $I_n$ : courant de court-circuit entre $A$ et $B$.
- $R_n = R_\text{th}$.

  <img src="/assets/internal_docs/Electricité/Norton.png" alt="Théorème de Norton" width="420" />

### Superposition

Le courant dans une branche est la somme des courants obtenus quand on active un seul générateur à la fois (les autres neutralisés). Il y a donc autant de montages à analyser qu'il y a de générateurs.

<img src="/assets/internal_docs/Electricité/Superposition.png" alt="Théorème de superposition" width="550" />

### Millman

Dans un montage de branches en dérivation, la tension aux bornes de ces branches est égale à la somme des tensions des générateurs respectivement multipliées par la conductance de la branche et divisée par la somme des conductances
$$
U_{AM} = \frac{\displaystyle\sum_{i=1}^n \frac{E_i}{R_i}}{\displaystyle\sum_{i=1}^n \frac{1}{R_i}}
$$
<img src="/assets/internal_docs/Electricité/Millman.png" alt="Théorème de Millman" width="420" />

## Chapitre 5 : Méthodes de résolution

<img src="/assets/internal_docs/Electricité/Equivalence connexion.png" alt="Équivalences de connexion" width="500" />

### Loi des nœuds indépendants (méthode des potentiels de nœuds)

Elle permet de trouver la différence de potentiel entre deux nœuds

1. Choisir un nœud comme référentiel des potentiels (0 V).
2. Appliquer la loi des nœuds.
3. Exprimer chaque courant en fonction des différences de potentiel.
4. Résoudre pour la variable recherchée.

### Loi des mailles indépendantes (méthode des courants de mailles)

1. Assigner un courant à chaque maille.
2. Appliquer la loi des mailles avec $U = RI$ (signe négatif si $U$ et $I$ ont le même sens).
3. Résoudre le système pour les $n$ courants.

:::tip
$\,\text{GND}$ est l’origine des potentiels.
:::

## Chapitre 6 : Régime transitoire

### Composants

- **Condensateur** (capacité $C$, en Farad F)
  - N en série : $\displaystyle \frac{1}{C_T} = \sum_{i=1}^N \frac{1}{C_i}$ ; N en parallèle : $\displaystyle C_T = \sum_{i=1}^N C_i$
  - Courant : $\displaystyle i(t) = C \times \frac{d u_C(t)}{dt}$
- **Bobine** (inductance $L$, en Henry H)
  - Génère un champ magnétique.
  - Empêche les variations brusques de courant.
  - N en série : $L_T = \sum_{i=1}^N L_i$ ; N en parallèle : $\displaystyle \frac{1}{L_T} = \sum_{i=1}^N \frac{1}{L_i}$
  - Tension : $\displaystyle u_L(t) = L \times \frac{d i(t)}{dt}$

### Circuit RC (charge/décharge)

Temps caractéristique $\tau = RC$.

- **Charge** : $u_C(t) = E \big(1 - e^{-t/\tau}\big)$

  <img src="/assets/internal_docs/Electricité/RC en charge.png" alt="RC en charge" width="520" />
- **Décharge** : $u_C(t) = E\, e^{-t/\tau}$

  <img src="/assets/internal_docs/Electricité/RC en décharge.png" alt="RC en décharge" width="520" />
