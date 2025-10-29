# Guidelines pour la rédaction de formations IT

Ce document explique comment utiliser le template standardisé pour créer des formations cohérentes et de qualité.

## Philosophie

Les formations DVFL doivent être :

- **Accessibles** : Langage clair, progression pédagogique logique
- **Pratiques** : Exemples concrets, exercices applicables
- **Complètes** : Prérequis → Installation → Concepts → Pratique → Ressources
- **Cohérentes** : Structure similaire d'une formation à l'autre

## Utilisation du template

### 1. Démarrer une nouvelle formation

```bash
# Depuis site/docs/it_courses/
cp _template.md nom-de-la-formation.md
```

Puis ouvrez le fichier et remplacez tous les placeholders `[...]` par le contenu approprié.

### 2. Sections obligatoires vs optionnelles

#### ✅ OBLIGATOIRES

- **Frontmatter** : Métadonnées du document
- **Introduction** : Présentation et objectifs
- **Prérequis & Installation** : Ce qui est nécessaire pour commencer
- **Contenu principal** : Sections thématiques (nommez-les selon votre sujet)
- **Ressources** : Liens utiles pour aller plus loin

#### ⚙️ OPTIONNELLES (mais recommandées)

- **Exercices pratiques** : Fortement recommandé pour consolider l'apprentissage
- **Bonnes pratiques** : Important pour les formations techniques
- **Erreurs courantes** : Très utile pour éviter les pièges
- **Aller plus loin** : Pour les apprenants avancés

> **Règle d'or** : Si une section optionnelle n'apporte rien, supprimez-la. Ne gardez pas de sections vides.

### 3. Remplir le frontmatter

```yaml
---
title: Titre affiché en haut de page (ex: "Python – les bases")
description: Résumé en 1-2 phrases pour le SEO et l'aperçu
slug: url-de-la-page (ex: "python-basics")
tags: [course, info, python]
last_update:
  date: 2025-10-28  # Format YYYY-MM-DD
  author: Prénom Nom
additional_contributors:  # Optionnel, pour les co-auteurs
  - username: Prénom Nom
    html_url: https://github.com/username
    avatar_url: https://github.com/username.png
---
```

#### Tags recommandés

Toujours inclure `course` puis ajouter selon le sujet :

- **Types** : `info`, `textile`, `electronique`, `3d-printing`, etc.
- **Langages** : `python`, `csharp`, `rust`, `javascript`, `java`, etc.
- **Technologies** : `docker`, `git`, `latex`, `postgres`, etc.
- **Domaines** : `web`, `data`, `security`, `devops`, `couture`, etc.

### 4. Rédiger l'introduction

L'introduction doit répondre à 3 questions :

1. **Quoi ?** De quoi parle cette formation ?
2. **Pourquoi ?** Pourquoi c'est utile/important ?
3. **Objectifs ?** Que saura faire l'apprenant à la fin ?

**Exemple** :

```markdown
## Introduction

Python est un langage de programmation polyvalent, apprécié pour sa syntaxe claire et sa vaste bibliothèque standard. Il est utilisé dans le web, la data science, l'automatisation, et bien plus.

**Objectifs d'apprentissage :**

- Comprendre la syntaxe de base de Python
- Maîtriser les structures de données (listes, dictionnaires)
- Être capable d'écrire des scripts simples pour automatiser des tâches
```

### 5. Organiser le contenu principal

#### Principe de progression

1. **Du simple au complexe** : Commencez par les bases
2. **Théorie puis pratique** : Concept → Exemple → Exercice
3. **Sections logiques** : Regroupez par thème cohérent

#### Exemples de structures

**Pour un cours de langage :**

1. Syntaxe de base
2. Types de données
3. Structures de contrôle
4. Fonctions
5. [Concepts avancés spécifiques au langage]

**Pour un cours d'outil :**

1. Concepts et terminologie
2. Installation et configuration
3. Utilisation de base
4. Fonctionnalités avancées
5. Intégration avec d'autres outils

### 6. Écrire du bon code d'exemple

#### ✅ Bonnes pratiques

```python
# Exemple : Calculer la moyenne d'une liste
def calculer_moyenne(nombres):
    """
    Calcule la moyenne arithmétique d'une liste de nombres.

    Args:
        nombres (list): Liste de nombres

    Returns:
        float: Moyenne des nombres
    """
    if not nombres:
        return 0
    return sum(nombres) / len(nombres)

# Utilisation
notes = [15, 12, 18, 14]
moyenne = calculer_moyenne(notes)
print(f"Moyenne : {moyenne}")  # Affiche : Moyenne : 14.75
```

#### ❌ À éviter

```python
# Code sans contexte ni explication
def f(x):
    return sum(x)/len(x)

y = [15,12,18,14]
print(f(y))
```

**Points clés :**

- Noms de variables explicites
- Commentaires utiles (pas redondants)
- Exemples autonomes et exécutables
- Output attendu en commentaire si pertinent

### 7. Utiliser les admonitions (notes, warnings, tips)

Docusaurus supporte les admonitions pour mettre en évidence des informations :

```markdown
:::note
Utilisé pour des informations contextuelles ou des clarifications.
:::

:::tip
Utilisé pour des astuces et conseils pratiques.
:::

:::warning
Utilisé pour des avertissements ou précautions importantes.
:::

:::caution
Utilisé pour des points critiques nécessitant une attention particulière.
:::

:::info
Utilisé pour des informations générales.
:::
```

**Quand les utiliser ?**

- `:::note` → Précision, clarification, information complémentaire
- `:::tip` → Astuce pour gagner du temps ou améliorer sa pratique
- `:::warning` → Risque d'erreur ou comportement inattendu
- `:::caution` → Point critique, risque de sécurité
- `:::info` → Information générale pas essentielle mais utile

### 8. Créer des exercices pertinents

#### Format tableau (recommandé)

```markdown
| #   | Énoncé                                                  | Objectif pédagogique                |
| --- | ------------------------------------------------------- | ----------------------------------- |
| 1   | Créer une fonction qui inverse une chaîne de caractères | Maîtriser les slices Python         |
| 2   | Lire un fichier CSV et calculer des statistiques        | Manipulation de fichiers et calculs |
```

#### Format détaillé (pour exercices complexes)

```markdown
1. **Gestionnaire de tâches simple**
   - Énoncé : Créer un programme qui permet d'ajouter, lister et supprimer des tâches
   - Objectif : Utiliser les listes et les boucles
   - Difficulté : ⭐⭐☆☆☆
   - Bonus : Sauvegarder les tâches dans un fichier JSON
```

### 9. Référencer les ressources

#### Hiérarchie des sources

1. **Documentation officielle** (toujours en premier)
2. **Tutoriels de référence** (sites établis, cours universitaires)
3. **Cheat sheets / Quick references**
4. **Vidéos éducatives** (si pertinent)
5. **Outils et extensions** (si applicable)

#### Format

```markdown
## Ressources

- [Documentation officielle Python](https://docs.python.org/) - Documentation complète
- [Python pour les débutants](https://www.python.org/about/gettingstarted/) - Guide officiel
- [Real Python Tutorials](https://realpython.com/) - Tutoriels approfondis
- [Python Cheat Sheet](https://www.pythoncheatsheet.org/) - Référence rapide
```

## Checklist de publication

Avant de publier votre formation, vérifiez :

### Contenu

- [ ] Tous les placeholders `[...]` sont remplacés
- [ ] Les sections optionnelles non utilisées sont supprimées
- [ ] Les commentaires `<!-- -->` du template sont supprimés
- [ ] L'introduction présente clairement le sujet et les objectifs
- [ ] La progression pédagogique est logique
- [ ] Les exemples de code sont testés et fonctionnels
- [ ] Les commandes sont correctes et à jour

### Métadonnées

- [ ] Le frontmatter est complet
- [ ] Les tags sont pertinents
- [ ] La date de dernière mise à jour est correcte
- [ ] Les contributeurs sont listés

### Qualité

- [ ] L'orthographe et la grammaire sont vérifiées
- [ ] Les liens sont valides (pas de 404)

### Intégration

- [ ] Le document est ajouté à `site/sidebars.ts`
- [ ] La traduction anglaise est prévue/créée
- [ ] La commande `pnpm build` réussit sans erreur

## Conseils de rédaction

### Style

- **Tutoiement** : Utilisez "vous" de manière cohérente
- **Voix active** : "Créez un fichier" plutôt que "Un fichier doit être créé"
- **Phrases courtes** : Évitez les phrases trop longues
- **Jargon** : Expliquez les termes techniques lors de leur première utilisation

### Pédagogie

- **Montrez, puis faites faire** : Exemple → Exercice
- **Répétition espacée** : Réutilisez les concepts précédents
- **Feedback** : Indiquez le résultat attendu pour que l'apprenant puisse vérifier

### Accessibilité

- **Texte alternatif** : Décrivez les images/diagrammes
- **Contraste** : N'utilisez pas uniquement la couleur pour transmettre l'information
- **Hiérarchie claire** : Titres bien structurés (H2 → H3 → H4)

## Maintenance

Les formations doivent être maintenues à jour :

- **Mises à jour mineures** : Corriger les typos, mettre à jour les versions
  - Modifier directement et mettre à jour `last_update.date`
- **Mises à jour majeures** : Refonte de sections, nouveaux exemples
  - Ajouter dans `additional_contributors` si un autre auteur contribue significativement

---

**Questions ?** Contactez l'équipe documentation ou ouvrez une issue sur GitHub.
