---
pagination_label: Blender
sidebar_label: Blender
description: Méthodologie de modélisation 3D avec Blender — navigation, primitives, outils de modification, modificateurs et règles de topologie pour créer les objets que vous souhaitez.
slug: blender
tags: [course, 3d-printing]
last_update:
  date: 2026-10-24
  author: Hugo Antaki
---

> Documentation rédigée par Hugo Antaki (FabLab DeVinci).

## Introduction

### Qu'est-ce que Blender ?

Blender est un logiciel de création 3D open source et gratuit qui permet de modéliser, animer, sculpter, rendre et composer des scènes en trois dimensions. Il est distribué sous licence GNU GPL par la Blender Foundation.

Fondée aux Pays-Bas par Ton Roosendaal, la Blender Foundation a rendu le logiciel open source en 2003, après une campagne de financement communautaire. Depuis, le projet connaît une croissance continue, portée par des développeurs bénévoles et salariés répartis dans le monde entier.

Référence : [rotek.fr — guide Blender](https://rotek.fr/blender-logiciel-3d-open-source-guide/)

### Que peut-on faire avec Blender ?

Blender regroupe dans un seul outil la modélisation, la sculpture, l'animation, le rendu, la composition et le montage vidéo. Cette intégration native réduit le nombre de logiciels nécessaires pour mener un projet de bout en bout.

### Pourquoi Blender ?

Blender couvre un périmètre fonctionnel très large pour un coût nul. Là où une licence annuelle Autodesk Maya dépasse facilement 2 000 € par poste, Blender offre des capacités comparables, sans abonnement ni frais cachés, même à des fins commerciales. C'est un avantage considérable pour les studios indépendants, les freelances et les étudiants.

La gratuité seule ne suffit pas à expliquer son adoption croissante. La qualité des outils intégrés, la fréquence des mises à jour et la taille de la communauté jouent un rôle tout aussi déterminant. Des milliers de tutoriels, d'extensions gratuites et de ressources pédagogiques sont disponibles, ce qui facilite la montée en compétences à tous les niveaux.

### Ce que couvre cette documentation

Cette documentation n'aborde pas les contrôles de Blender : il en existe une centaine, et la [documentation officielle de Blender](https://docs.blender.org/manual/en/latest/) est bien meilleure que celle-ci sur ce point.

Ici, on s'intéresse à **comment créer les objets que vous voulez** : on présente une méthodologie pour aborder la conceptualisation de ce que vous souhaitez créer.

**Objectifs d'apprentissage :**

- Comprendre ce qu'est un maillage (sommets, arêtes, faces)
- Naviguer dans une scène, sélectionner et manipuler des objets
- Créer des objets à partir de primitives et les modifier (modifications destructives et non destructives)
- Appliquer les règles de topologie pour obtenir un modèle propre

### Prérequis

- Blender, gratuit, à télécharger sur [blender.org](https://www.blender.org/download/)
- Une souris à molette : il est possible de s'en passer, mais ce n'est pas recommandé

:::tip Conseils importants
Il existe littéralement des dizaines de façons de créer les mêmes objets : cette documentation propose quelques méthodes, mais vous pouvez en trouver d'autres qui vous conviennent mieux. Pour bien l'aborder, lisez-la **en parallèle d'un projet** (créer un objet de votre choix) : vous consulterez les parties qui vous intéressent quand vous êtes bloqué, et elles s'ancreront mieux dans votre manière de travailler. Retrouvez plus de conseils en fin de page.
:::

## Les maillages

Dans Blender, un maillage (_mesh_) est la façon dont on représente la forme d'un objet 3D. Il est construit à partir de trois éléments de base :

- **les sommets** (_vertices_) : un sommet est un simple point dans l'espace 3D, repéré par ses coordonnées (X, Y, Z) ;
- **les arêtes** (_edges_) : une arête relie deux sommets par un segment droit ; c'est le « fil » que vous voyez en mode _wireframe_ (voir [Les différents modes d'affichage](#les-différents-modes-daffichage)) ;
- **les faces** : une face est une surface délimitée par au moins trois arêtes (triangle, quadrilatère ou plus) ; c'est elle qui est réellement visible au rendu.

En mode Édition, vous déplacez ces sommets, arêtes et faces pour sculpter la forme. Imaginez un filet 3D : les nœuds sont les sommets, les fils sont les arêtes, et les surfaces tendues entre les fils sont les faces.

Plus vous ajoutez de sommets et de faces, plus votre maillage peut être détaillé, mais plus il devient lourd à calculer. Pour un débutant, l'intuition à retenir est : **les sommets sont vos points de contrôle, les arêtes structurent la forme, et les faces créent la peau visible de l'objet.**

## Naviguer dans Blender

### Se déplacer sur le plan

On dispose de trois mouvements de base pour naviguer dans la scène : la **translation**, la **rotation** et le **zoom**.

:::warning
Il est possible de faire tous ces gestes sans souris, mais ce n'est pas recommandé : vous allez beaucoup galérer. Utilisez une souris avec molette.
:::

| Mouvement   | Souris                                                          | Trackpad                                    |
| ----------- | --------------------------------------------------------------- | ------------------------------------------- |
| Translation | `Shift` + clic MMB (_Middle Mouse Button_, la molette enfoncée) | glisser deux doigts (_swipe_)               |
| Rotation    | clic MMB                                                        | `Shift` + glisser deux doigts (_swipe_)     |
| Zoom        | scroll MMB (molette)                                            | pincer / écarter deux doigts (_pinch_)      |

Il est aussi possible de se déplacer par pas discrets pour obtenir des positions exactes :

| Action                      | Raccourci       |
| --------------------------- | --------------- |
| Zoom + / −                  | `Numpad +` / `Numpad -` |
| Rotation vers le haut       | `Numpad 8`      |
| Rotation vers le bas        | `Numpad 2`      |
| Rotation vers la droite     | `Numpad 6`      |
| Rotation vers la gauche     | `Numpad 4`      |

Vous pouvez aussi manipuler la scène avec le **Navigation Gizmo**, en haut à droite de la vue, qui ressemble à ceci :

![Navigation Gizmo avec les axes X, Y et Z](/assets/docs/blender/blender-01.png)

Cliquez sur l'axe avec lequel vous voulez vous aligner, ou faites un clic droit dessus pour tourner la scène dans n'importe quel sens.

La rotation et le zoom se font par rapport à un point : le **curseur 3D**. La rotation se fait autour de ce point, et le zoom s'en rapproche ou s'en éloigne. Le curseur 3D est détaillé [plus bas](#le-curseur-3d-et-lorigine-monde).

### Les modes

![Menu de sélection du mode, avec Object Mode et Edit Mode encadrés](/assets/docs/blender/blender-02.jpg)

Dans notre cas, seuls deux modes nous intéressent : le mode Objet et le mode Édition.

#### Mode Objet (_Object Mode_)

Ce mode permet de manipuler les objets comme un tout. On peut l'utiliser pour modifier l'objet dans son entièreté (le déplacer, le tourner ou le mettre à l'échelle), pour le dupliquer ou pour modifier ses propriétés globales.

#### Mode Édition (_Edit Mode_)

Ce mode permet de manipuler le maillage de l'objet. On peut donc l'utiliser pour modifier sa géométrie et appliquer des modifications sur des parties sélectionnées de l'objet.

Pour passer de l'un à l'autre :

| Action                            | Raccourci |
| --------------------------------- | --------- |
| Basculer entre Object et Edit Mode | `Tab`     |

### La sélection d'objet

Il est utile de savoir comment sélectionner et désélectionner les objets.

| Action                                  | Raccourci             |
| --------------------------------------- | --------------------- |
| Sélectionner un objet (Object Mode)     | `Clic gauche`         |
| Ajouter un objet à la sélection         | `Shift + Clic gauche` |
| Désélectionner un objet                 | `Clic gauche` (voir ci-dessous) |
| Tout sélectionner                       | `A`                   |

Quand un objet est sélectionné, il devient orange clair et, dans le menu en haut à droite (l'_Outliner_), il est surligné en bleu.

![Cube sélectionné, contour orange clair](/assets/docs/blender/blender-03.jpg)

![Outliner avec le cube surligné en bleu](/assets/docs/blender/blender-04.png)

Lorsque vous ajoutez un objet à la sélection, le nouvel objet devient orange clair et l'ancien devient orange foncé :

![Deux objets sélectionnés : le nouveau en orange clair, l'ancien en orange foncé](/assets/docs/blender/blender-05.jpg)

Pour désélectionner un objet, il faut déjà qu'il soit actif (orange clair). Si ce n'est pas le cas, recliquez dessus. Ensuite, il suffit de presser de nouveau le bouton utilisé pour le sélectionner : `Clic gauche`.

En **Edit Mode**, les commandes sont assez similaires, mais ce que l'on sélectionne n'est plus l'objet : ce sont les **sommets, arêtes et faces**. Ce menu permet de choisir ce que vous souhaitez sélectionner :

![Boutons de sélection des sommets, arêtes et faces en Edit Mode](/assets/docs/blender/blender-06.png)

| Sommet                                  | Arête                                  | Face                                  |
| --------------------------------------- | -------------------------------------- | ------------------------------------- |
| ![Sommet sélectionné](/assets/docs/blender/blender-09.png)         | ![Arête sélectionnée](/assets/docs/blender/blender-07.png)        | ![Face sélectionnée](/assets/docs/blender/blender-08.png)        |

### Le curseur 3D et l'origine monde

Sur l'image, on voit dans la scène un curseur avec des tirets noirs et un cercle rouge et blanc :

![Le curseur 3D dans la scène (cercle rouge et blanc)](/assets/docs/blender/blender-10.jpg)

Ceci s'appelle le **curseur 3D**. Il peut être déplacé avec les raccourcis suivants :

| Action                                                                            | Raccourci            |
| --------------------------------------------------------------------------------- | -------------------- |
| Placer le curseur 3D à la position de la souris                                   | `Shift + clic droit` (RMB) |
| Ouvrir le Snap Menu (accrocher le curseur au centre d'un objet, à la grille ou à l'origine monde) | `Shift + S`          |
| Remettre le curseur à l'origine monde                                             | `Shift + C`          |
| Voir les coordonnées du curseur 3D                                                | `N` → onglet View    |

Plus d'informations : [le curseur 3D dans la documentation Blender](https://docs.blender.org/manual/en/latest/editors/3dview/3d_cursor.html).

L'**origine monde** est tout simplement la coordonnée (0 ; 0 ; 0) de la scène, là où repose le curseur 3D au tout début.

## Visuel

### Les différents modes d'affichage

On s'intéresse aux quatre icônes en haut à droite, qui montrent les différentes manières de voir les objets. Elles sont nommées ainsi, en commençant par la plus à gauche : **Wireframe**, **Solid**, **Material Preview**, **Rendered**.

![Les quatre boutons d'affichage en haut à droite de la 3D Viewport](/assets/docs/blender/blender-11.jpg)

#### Wireframe

Le mode Wireframe (fil de fer) affiche uniquement les arêtes et les sommets de vos objets, comme un squelette de lignes. Dans ce mode, vous ne voyez ni surfaces pleines, ni matériaux, ni éclairage de scène : c'est juste la structure géométrique du maillage. Il est idéal pour vérifier la topologie, repérer des faces mal placées, ou travailler sur des modèles très denses sans être gêné par l'affichage des surfaces.

Vous pouvez l'activer avec l'icône « grille » en haut à droite de la 3D Viewport ou avec le raccourci : `Z` → Wireframe.

#### Solid

Le mode Solid (solide) montre les objets comme des volumes pleins, avec un ombrage simple et des couleurs de base, mais sans les matériaux ni l'éclairage complet de la scène. Il utilise le moteur Workbench, conçu pour être rapide et lisible pendant la modélisation. C'est le mode par défaut de Blender : il permet de voir clairement les formes, les proportions et les détails géométriques, tout en restant très fluide, même sur des scènes complexes. Vous pouvez y ajuster l'éclairage, l'affichage des normales, des arêtes, etc., via les options du mode Solid.

#### Material Preview (EEVEE)

Le mode Material Preview (souvent associé à EEVEE) affiche une prévisualisation en temps réel des matériaux, textures et couleurs, avec un éclairage HDRI simplifié. Il utilise le moteur EEVEE pour donner un aperçu rapide de l'apparence finale sans lancer un rendu complet. C'est le mode à privilégier quand vous créez ou ajustez des shaders, des textures ou des peintures UV : vous voyez immédiatement l'effet de vos réglages, avec différentes conditions d'éclairage prédéfinies, tout en gardant une bonne réactivité.

#### Rendered

Le mode Rendered (rendu) affiche la vue 3D avec le moteur de rendu choisi pour la scène (EEVEE ou Cycles), en incluant lumières, ombres, réflexions, réfractions et autres effets de rendu. C'est la prévisualisation la plus proche du résultat final, mais aussi la plus coûteuse en calcul.

- Avec **EEVEE**, le rendu dans le viewport est rapide et interactif, adapté à l'animation et aux scènes temps réel.
- Avec **Cycles**, il est plus réaliste (lancer de rayons, éclairage physique), mais plus lent.

Ce mode est indispensable pour régler précisément l'éclairage et les matériaux, et pour vérifier l'aspect final avant de lancer le rendu d'une image ou d'une animation.

### La lumière

Dans Blender, la lumière est un objet comme les autres, mais son rôle est d'éclairer la scène et de créer des ombres. Il existe quatre types principaux de lumières :

- **Point** : émet dans toutes les directions depuis un point (comme une ampoule) ;
- **Soleil** : simule le soleil avec des rayons parallèles (seule sa direction compte) ;
- **Spot** : projette un cône de lumière (comme un projecteur) ;
- **Aire** : émet depuis une surface plane pour un éclairage doux (comme un softbox ou une fenêtre).

Pour manipuler une lumière, utilisez les mêmes raccourcis que pour tout objet (voir [Modification destructive](#modification-destructive)).

:::note
Les effets de la lumière ne sont pas visibles en mode Wireframe ou Solid. Pour les visualiser, passez en mode **Material Preview** ou **Rendered**.
:::

**Intuition à retenir :**

- Un **point** se place près de l'objet à éclairer (lampe, bougie).
- Un **soleil** se règle surtout en rotation : sa position importe peu, c'est son angle qui définit la direction du « soleil ».
- Un **spot** se pointe vers la zone à mettre en valeur ; ajustez l'ouverture du cône (_Spot Size_) et la douceur des bords (_Blend_).
- Une **aire** s'oriente comme un panneau lumineux : sa face éclairante doit regarder la scène, et plus elle est grande, plus les ombres sont douces.

### La caméra

![Caméras dans la scène](/assets/docs/blender/blender-12.jpg)

Dans Blender, la caméra est un objet spécial qui définit ce qui sera visible sur vos images et animations au rendu. Contrairement à la vue libre (où vous naviguez avec la molette), la caméra a une position, une orientation et des réglages optiques fixes (focale, profondeur de champ, etc.). Par défaut, une scène contient une caméra ; vous pouvez en ajouter d'autres avec `Shift + A` → Camera.

Pour voir à travers la caméra, appuyez sur `Numpad 0`, ou cliquez sur l'icône de caméra en haut à droite de la viewport :

![Icône de caméra encerclée dans la barre latérale de la viewport](/assets/docs/blender/blender-13.jpg)

La 3D Viewport bascule en « Camera View » et vous voyez exactement ce qui sera rendu. Vous pouvez revenir à la vue libre en appuyant à nouveau sur le même bouton. Pour déplacer la caméra, ce sont les mêmes commandes que pour les objets (voir [Modification destructive](#modification-destructive)). Vous pouvez aussi utiliser les gizmos (flèches, cercles) comme pour n'importe quel objet.

Il existe plusieurs façons pratiques de placer la caméra :

- **Aligner la caméra sur votre vue actuelle** : naviguez librement jusqu'à avoir un bon angle, puis faites `Ctrl + Alt + Numpad 0`. La caméra saute exactement à cette position et orientation.
- **Verrouiller la caméra à la vue** : en Camera View, ouvrez le panneau latéral avec `N`, allez dans l'onglet _View_ et cochez **Lock Camera to View**. Ensuite, quand vous naviguez (molette, `Shift` + molette, etc.), vous déplacez réellement la caméra.
- **Mode Fly/Walk** : appuyez sur `Shift + F` pour entrer dans un mode de navigation type jeu (ZQSD + souris) et placer la caméra comme si vous étiez dedans.

Réglages importants, dans l'onglet **Object Data Properties** (icône caméra verte) :

- **Focal Length / Field of View** : contrôle le « zoom ». Une petite focale (ex. 24 mm) donne un champ large (plus de scène visible), une grande focale (ex. 85–135 mm) zoome et « écrase » les perspectives.
- **Depth of Field** (profondeur de champ) : permet de flouter l'arrière-plan ou l'avant-plan. Vous définissez une **Focus Distance** (distance de mise au point) ou un **Focus Object** (objet sur lequel faire le point). Plus l'ouverture (_f-stop_) est petite, plus le flou est marqué.

## Comment créer un objet

Dans Blender, tout est construit à partir des sommets et de la façon dont ils sont reliés les uns aux autres. Mais placer chaque sommet individuellement serait long et redondant : on utilise donc des formes de base, les **primitives**, pour créer ce que l'on veut.

### Les primitives

Dans Blender, on ne travaille presque jamais point par point. On utilise des **primitives** : des formes géométriques de base que l'on manipule pour créer les objets que l'on souhaite. Les voici toutes :

![Les primitives de Blender : plan, cube, sphère UV, icosphère, cercle, grille, tête de singe, torus, cône et cylindre](/assets/docs/blender/blender-14.jpg)

On a : le plan, le cube, le cercle, la grille, la sphère UV, l'icosphère, le cylindre, le cône, le torus et, enfin, la tête de singe, qui est l'icône de Blender.

Pour y accéder : `Add → Mesh` ou `Shift + A`.

Quand vous faites apparaître un objet, il est introduit de façon que son centre de gravité coïncide avec le curseur 3D. Il n'est pas intéressant de bouger le curseur 3D : gardez-le au centre, c'est important pour quand vous voudrez modifier votre objet. Si vous ajoutez un objet, vous pourrez toujours le déplacer en mode Objet.

Maintenant que l'on sait comment obtenir de la matière, voyons comment la manipuler pour créer notre objet.

## Comment modifier un objet

Maintenant que l'on sait comment placer des objets dans la scène, il faut les modifier pour obtenir l'objet que l'on cherche. Cette section présente plusieurs procédures, mais la liste n'est pas exhaustive : si vous êtes bloqué, regardez s'il existe d'autres procédés que vous pourriez utiliser.

Les modifications se séparent en deux catégories : **destructives** et **non destructives**.

## Modification destructive

Une modification destructive est une opération qui change directement et définitivement la géométrie de l'objet (sommets, arêtes, faces). Une fois appliquée, et l'historique d'annulation perdu, vous ne pouvez plus revenir en arrière ni modifier les paramètres de cette opération sans recommencer depuis avant.

La plupart de ces modifications se font en **Edit Mode**. Quand elles peuvent aussi se faire en Object Mode, c'est mentionné. Toutes les images de cette section sont réalisées à partir du cube.

:::tip 
Pour la plupart des opérations interactives (`G`, `R`, `S`, `E`, `I`, `Ctrl + B`…) :

- **confirmer** : `Clic gauche` ou `Entrée` ;
- **annuler** : `Clic droit` ou `Échap`.

Les exceptions (Loop Cut, Knife, menus Merge / Delete / Dissolve) sont indiquées dans leur section.
:::

### Déplacer (G)

Commande : `G` (pour _Grab_). Fonctionne en Object Mode **et** en Edit Mode.

- En **Object Mode**, l'objet entier se déplace librement selon la souris.
- En **Edit Mode**, on déplace les éléments sélectionnés (sommets, arêtes, faces) sans bouger l'origine de l'objet : c'est la géométrie interne qui change, pas la position globale de l'objet.

| Avant                              | Après                              |
| ---------------------------------- | ---------------------------------- |
| ![Cube avant déplacement](/assets/docs/blender/blender-15.jpg) | ![Cube après déplacement](/assets/docs/blender/blender-16.jpg) |

Pour plus de précision, vous pouvez contraindre le déplacement à un axe avec `G + X / Y / Z` (par rapport à l'axe désiré). Par exemple, `G` puis `Z` pour monter ou descendre. Vous pouvez aussi taper une valeur chiffrée après avoir lancé le déplacement, pour déplacer l'objet d'une certaine unité sur l'axe désiré.

![Déplacement contraint sur l'axe Z (ligne bleue)](/assets/docs/blender/blender-17.jpg)

Exemples de déplacement en Edit Mode :

![Déplacement en Edit Mode, exemple 1](/assets/docs/blender/blender-20.jpg)
![Déplacement en Edit Mode, exemple 2](/assets/docs/blender/blender-18.jpg)
![Déplacement en Edit Mode, exemple 3](/assets/docs/blender/blender-19.jpg)

### Rotation (R)

Commande : `R` (pour _Rotate_). Fonctionne en Object Mode comme en Edit Mode.

- En **Object Mode**, l'objet entier tourne autour de son point de pivot (par défaut son origine).
- En **Edit Mode**, seuls les éléments sélectionnés (sommets, arêtes, faces) tournent autour du pivot choisi, sans modifier la position globale de l'objet.

![Rotation de l'objet entier en Object Mode](/assets/docs/blender/blender-21.png)
![Rotation d'une sélection en Edit Mode](/assets/docs/blender/blender-22.jpg)

Vous pouvez contraindre la rotation à un axe avec `R + X / Y / Z`.

![Rotation d'une face en Edit Mode, exemple 1](/assets/docs/blender/blender-23.jpg)
![Rotation d'une face en Edit Mode, exemple 2](/assets/docs/blender/blender-24.jpg)

#### Le point de pivot

Le curseur 3D peut être utilisé pour choisir un point de rotation personnalisé. Par défaut, Blender utilise le point médian (centre de la sélection) ou l'origine de l'objet comme pivot. Si vous changez le point de pivot (menu en haut de la 3D Viewport) pour **Curseur 3D**, toutes les rotations (et mises à l'échelle) se font autour du curseur 3D, et non plus autour de l'origine de l'objet. Cela permet par exemple de faire tourner un objet autour d'un point précis de la scène, d'un autre objet, ou d'un axe de symétrie que vous avez placé avec le curseur.

![Rotation autour du curseur 3D](/assets/docs/blender/blender-25.jpg)

### Changer l'échelle (S)

Commande : `S` (pour _Scale_). Fonctionne en Object Mode comme en Edit Mode.

- En **Object Mode**, cela change la taille globale de l'objet (ses proportions dans l'espace).
- En **Edit Mode**, cela agit uniquement sur les éléments sélectionnés (sommets, arêtes, faces), ce qui permet de déformer localement une partie du maillage sans toucher au reste.

Par défaut, la mise à l'échelle est uniforme : l'objet grandit ou rétrécit de la même façon sur les trois axes (X, Y, Z), en s'éloignant ou se rapprochant du point de pivot.

![Mise à l'échelle uniforme d'une face](/assets/docs/blender/blender-26.jpg)

Vous pouvez aussi taper une valeur chiffrée : par exemple `S 0.5 Entrée` réduit l'objet à 50 % de sa taille, `S 2 Entrée` le double.

| Action                                              | Raccourci                |
| --------------------------------------------------- | ------------------------ |
| Contraindre la mise à l'échelle à un axe            | `S + X / Y / Z`          |
| Exclure un axe de la mise à l'échelle               | `S + Shift + X / Y / Z`  |

![Mise à l'échelle contrainte à un axe](/assets/docs/blender/blender-27.jpg)
![Mise à l'échelle avec un axe exclu](/assets/docs/blender/blender-28.jpg)

Le point de pivot joue ici aussi un rôle important : c'est autour de ce point que l'objet ou la sélection se dilate ou se contracte. Si vous choisissez **Curseur 3D** comme pivot, la mise à l'échelle se fait par rapport au curseur, ce qui permet par exemple d'agrandir un objet « vers » ou « autour » d'un point précis de la scène.

![Mise à l'échelle par rapport au curseur 3D](/assets/docs/blender/blender-29.jpg)

### Extrude (E)

Commande : `E`. Fonctionne **uniquement en Edit Mode**.

L'extrusion (faire sortir de la matière) crée de nouveaux sommets, arêtes ou faces à partir d'une sélection existante, en les tirant dans l'espace. C'est l'une des méthodes de base pour construire un maillage complexe à partir d'une forme simple.

Par défaut, elle crée une copie de la sélection reliée à l'original, et déplace cette copie selon la normale de la surface (c'est-à-dire perpendiculairement à la face sélectionnée), un peu comme si vous tiriez sur de la pâte à modeler.

![Extrusion d'une arête](/assets/docs/blender/blender-32.jpg)
![Extrusion d'une face](/assets/docs/blender/blender-30.jpg)
![Extrusion d'un sommet](/assets/docs/blender/blender-31.jpg)

Vous pouvez aussi taper une valeur chiffrée : par exemple `E 1 Entrée` extrude la sélection d'exactement 1 unité le long de la normale.

Pour contraindre l'extrusion à un axe précis (au lieu de suivre la normale), utilisez `E + X / Y / Z`.

![Extrusion contrainte sur un axe](/assets/docs/blender/blender-33.jpg)

Si vous voulez extruder sans déplacer automatiquement (dupliquer la géométrie sur place, pour la déplacer vous-même ensuite), faites `E` puis `Échap`, ou `E` puis `Clic droit`. La nouvelle géométrie est créée, mais reste à la même position, prête à être manipulée avec `G`, `R`, `S`.

:::tip 
Pour repérer si vous avez toujours la géométrie, regardez les arêtes qui vont vers le sommet sélectionné : si elles sont aussi orange, vous avez supprimé complètement la géométrie. Dans ce cas, appuyez de nouveau sur `Échap` pour retrouver la géométrie d'origine.
:::

| Géométrie conservée                           | Géométrie supprimée                        |
| --------------------------------------------- | ------------------------------------------ |
| ![Géométrie non supprimée](/assets/docs/blender/blender-35.jpg)          | ![Géométrie supprimée](/assets/docs/blender/blender-34.jpg)           |

Il existe aussi des variantes utiles, dans un menu proposant d'autres types d'extrusion (par région, individuellement par face, le long des normales, etc.). On l'ouvre avec `Alt + E`. Le menu change selon ce qui est sélectionné :

![Menu d'extrusion pour une face](/assets/docs/blender/blender-36.png)
![Menu d'extrusion pour une arête](/assets/docs/blender/blender-37.png)
![Menu d'extrusion pour un sommet](/assets/docs/blender/blender-38.png)

### Inset (I)

Commande : `I`. Fonctionne **uniquement en Edit Mode**, sur des faces.

L'inset insère une nouvelle face à l'intérieur d'une face déjà sélectionnée. Il crée une sorte de « cadre » autour de la face d'origine, en générant une nouvelle face plus petite (ou plus grande) à l'intérieur, reliée à l'ancienne par de nouvelles arêtes. C'est un outil très utilisé pour préparer une extrusion, créer des bords biseautés ou ajouter des détails sur une surface plane.

Par défaut, la nouvelle face est réduite uniformément vers le centre de la face sélectionnée, en gardant la même orientation.

![Résultat d'un inset sur la face du dessus](/assets/docs/blender/blender-39.png)

Vous pouvez aussi taper une valeur chiffrée : par exemple `I 0.1 Entrée` insère une face à 0,1 unité du bord, `I 0.5 Entrée` l'insère plus profondément.

Si plusieurs faces sont sélectionnées, `I + I` permet de basculer entre un inset **global** sur toute la sélection et un inset **individuel** sur chaque face séparément (utile si les faces sélectionnées ne sont pas voisines).

| Inset global                      | Inset individuel                  |
| --------------------------------- | --------------------------------- |
| ![Inset global](/assets/docs/blender/blender-41.jpg)         | ![Inset individuel](/assets/docs/blender/blender-40.jpg)     |

Vous pouvez aussi combiner l'inset avec une extrusion vers l'intérieur ou l'extérieur, qui déplace en même temps la nouvelle face le long de la normale, en faisant `I + Ctrl`.

![Inset combiné à une extrusion](/assets/docs/blender/blender-42.jpg)

### Loop Cut (Ctrl + R)

Commande : `Ctrl + R`. Fonctionne **uniquement en Edit Mode**.

Le Loop Cut ajoute une boucle d'arêtes sur un maillage : il découpe une nouvelle ligne d'arêtes qui fait le tour d'une forme (comme une bande autour d'un cylindre ou d'un cube), en suivant la topologie existante. C'est essentiel pour ajouter de la définition à un maillage sans casser sa structure.

Par défaut, en passant la souris sur une face du maillage, une ligne jaune de prévisualisation apparaît pour montrer où la boucle sera créée, et elle se place automatiquement au milieu.

![Prévisualisation du Loop Cut (ligne jaune)](/assets/docs/blender/blender-43.jpg)

1. `Clic gauche` : valide le nombre et l'emplacement de la coupe, puis passe en mode **glissement**.
2. Faites glisser la boucle le long du maillage et confirmez sa position finale avec `Clic gauche` ou `Entrée`.
3. Ou remettez la boucle au centre (glissement annulé) avec `Clic droit` ou `Échap` : la boucle reste créée, mais centrée entre les deux arêtes d'origine.

![Boucle en cours de glissement entre deux arêtes](/assets/docs/blender/blender-44.jpg)

Avant le premier clic, vous pouvez aussi utiliser `MMB (scroll)` pour ajouter plusieurs boucles en même temps, réparties uniformément sur la face. Le menu en bas à gauche de la viewport permet aussi de définir un nombre exact de boucles.

![Plusieurs boucles ajoutées en même temps](/assets/docs/blender/blender-45.jpg)

Vous pouvez aussi taper une valeur chiffrée pendant le glissement : par exemple, après avoir cliqué une fois, taper `0.25 Entrée` place la boucle précisément à 25 % entre les deux arêtes.

### Knife (K)

Commande : `K`. Fonctionne **uniquement en Edit Mode**.

Le Knife découpe librement le maillage : il trace une ligne de coupe à main levée sur une ou plusieurs faces, en créant de nouveaux sommets et arêtes exactement là où vous cliquez. Il donne donc un contrôle total sur la découpe, contrairement au Loop Cut qui suit la topologie existante.

Par défaut, chaque clic gauche ajoute un point de coupe, et une ligne de prévisualisation blanche montre le tracé en cours entre le dernier point posé et la position actuelle de la souris.

| Action                                  | Raccourci                 |
| --------------------------------------- | ------------------------- |
| Ajouter un point de coupe               | `Clic gauche`             |
| Terminer et valider toute la découpe    | `Entrée` ou `Espace`      |
| Annuler l'opération en cours            | `Clic droit` ou `Échap`   |

![Premier point de coupe posé](/assets/docs/blender/blender-46.png)

![Découpe validée](/assets/docs/blender/blender-47.jpg)

![Tracé de coupe avec plusieurs points, exemple 1](/assets/docs/blender/blender-48.jpg)
![Tracé de coupe avec plusieurs points, exemple 2](/assets/docs/blender/blender-49.jpg)

Si des points ont déjà été validés dans la même session de coupe, `Échap` peut annuler seulement le dernier point ; un `Échap` supplémentaire annule tout.

Pour fermer une boucle de coupe (relier le tracé à son point de départ), il suffit de cliquer à nouveau sur le premier point posé.

Quelques options utiles pendant la coupe :

- **Forcer le point à s'accrocher** au milieu des arêtes ou au centre des faces (_snapping_) : `Ctrl + K`.
- **Ignorer le snapping** et permettre une coupe totalement libre : `K + Shift`.
- **Activer / désactiver la contrainte d'angle** (la coupe s'aligne alors par pas de 45°) : `K + C`.

![Coupe libre sans snapping](/assets/docs/blender/blender-50.png)
![Coupe avec contrainte d'angle, exemple 1](/assets/docs/blender/blender-51.png)
![Coupe avec contrainte d'angle, exemple 2](/assets/docs/blender/blender-52.png)

### Bevel (Ctrl + B)

Commande : `Ctrl + B`. Fonctionne en Edit Mode, sur des arêtes, des sommets ou des faces sélectionnés.

Le Bevel arrondit ou chanfreine un bord, un sommet ou une face. Il remplace l'élément sélectionné par une surface intermédiaire plus douce, en créant de nouvelles arêtes et faces autour : on adoucit ainsi des angles trop vifs ou on imite l'usure naturelle des bords dans la vraie vie.

Par défaut, un bevel uniforme est appliqué sur toute la sélection, en éloignant progressivement les nouvelles arêtes de l'arête ou du sommet d'origine, dans les deux directions à la fois.

![Bevel à un segment (chanfrein plat)](/assets/docs/blender/blender-53.jpg)

Vous pouvez aussi taper une valeur chiffrée : par exemple `Ctrl B 0.05 Entrée` applique un bevel de 0,05 unité sur les arêtes sélectionnées.

Pour ajuster le nombre de segments (le nombre de nouvelles arêtes créées, pour un arrondi plus ou moins lisse), utilisez `MMB (scroll)` pendant que vous déplacez la souris. Plus il y a de segments, plus le résultat se rapproche d'un arrondi courbe plutôt que d'un simple chanfrein plat.

![Bevel avec plusieurs segments (arrondi lisse)](/assets/docs/blender/blender-54.jpg)

Quelques options utiles pendant l'opération :

- **Ajuster la « forme » du profil** du bevel (concave, convexe ou linéaire) : `P`.
- **Faire s'accrocher la valeur** à des incréments réguliers : `Ctrl + B + Ctrl` (maintenu).
- **Affiner le contrôle** pour des ajustements plus précis : `Ctrl + B + Shift` (maintenu).
- **Activer le mode « vertex only »** quand des sommets sont sélectionnés, pour biseauter uniquement les sommets sans toucher les arêtes qui les relient : `Ctrl + B + V`.

| Profil concave                        | Profil linéaire                       |
| ------------------------------------- | ------------------------------------- |
| ![Bevel au profil concave](/assets/docs/blender/blender-55.jpg)  | ![Bevel au profil linéaire](/assets/docs/blender/blender-56.jpg) |

| Bevel sur les arêtes                  | Bevel « vertex only »                 |
| ------------------------------------- | ------------------------------------- |
| ![Bevel sur les arêtes](/assets/docs/blender/blender-57.jpg)     | ![Bevel en mode vertex only](/assets/docs/blender/blender-58.jpg) |

Il y a encore beaucoup d'autres paramètres avec lesquels vous pouvez jouer. Pour ne pas avoir à retenir tous les raccourcis, un menu apparaît en bas à gauche une fois que vous avez cliqué : vous y trouvez tous les paramètres. Pour confirmer, recliquez.

![Panneau des paramètres du Bevel, en bas à gauche](/assets/docs/blender/blender-59.png)

### Merge (M)

Commande : `M`. Fonctionne **uniquement en Edit Mode**, sur des sommets sélectionnés.

Le Merge fusionne plusieurs sommets en un seul. Il permet de réunir deux ou plusieurs sommets proches (ou même éloignés) en un point unique, ce qui est très utile pour nettoyer un maillage, souder deux parties séparées ou supprimer des doublons créés par erreur.

Par défaut, cette commande ouvre un menu proposant plusieurs façons de fusionner la sélection plutôt que d'appliquer directement une action : c'est vous qui choisissez où le point final doit se retrouver.

![Menu Merge](/assets/docs/blender/blender-60.png)

Dans ce menu, les options principales sont :

- **At First** : fusionne tous les sommets sélectionnés à la position du premier sommet sélectionné (celui en surbrillance plus claire) ;
- **At Last** : fusionne à la position du dernier sommet sélectionné (l'actif) ;
- **At Center** : fusionne au centre géométrique de tous les sommets sélectionnés ;
- **At Cursor** : fusionne à la position actuelle du curseur 3D ;
- **Collapse** : fusionne chaque groupe de sommets connectés (par arête ou face) en un seul point, utile pour effondrer une face entière en un point.

Validez votre choix avec `Clic gauche`, directement dans le menu (il n'y a pas de confirmation supplémentaire à faire). Pour annuler avant de choisir : `Clic droit` ou `Échap`.

Il existe aussi une fonction proche mais automatique, **Merge by Distance** (accessible dans le même menu `M`), qui fusionne tous les sommets se trouvant à moins d'une certaine distance les uns des autres : très utile pour nettoyer les doublons invisibles.

Pour savoir si des sommets ont bien été supprimés, vous verrez ce message apparaître en bas de l'écran :

![Message « Removed 4 vertices » en bas de l'écran](/assets/docs/blender/blender-61.png)

### Delete (X ou Suppr)

Commande : `X` ou `Suppr`. Fonctionne **uniquement en Edit Mode**, sur des sommets, arêtes ou faces sélectionnés.

Contrairement à un simple effacement, la commande ouvre un menu qui demande précisément ce que vous voulez faire disparaître, car supprimer un sommet, une arête ou une face n'a pas du tout le même effet sur le reste du maillage. Les options principales sont :

- **Vertices** : supprime les sommets sélectionnés, ainsi que toutes les arêtes et faces qui en dépendaient (c'est l'option la plus « destructrice »).

  | Avant                                      | Après                                      |
  | ------------------------------------------ | ------------------------------------------ |
  | ![Sommet sélectionné avant suppression](/assets/docs/blender/blender-62.jpg) | ![Résultat de la suppression du sommet](/assets/docs/blender/blender-63.jpg) |

- **Edges** : supprime les arêtes sélectionnées, ainsi que les faces qui en dépendaient (les sommets isolés restants sont conservés).

  | Avant                                      | Après                                      |
  | ------------------------------------------ | ------------------------------------------ |
  | ![Arête sélectionnée avant suppression](/assets/docs/blender/blender-62.jpg) | ![Résultat de la suppression de l'arête](/assets/docs/blender/blender-64.jpg) |

- **Faces** : supprime uniquement les faces sélectionnées, en gardant leurs sommets et arêtes en place (utile pour ouvrir un trou tout en gardant les contours).

  | Avant                                      | Après                                      |
  | ------------------------------------------ | ------------------------------------------ |
  | ![Face sélectionnée avant suppression](/assets/docs/blender/blender-65.jpg) | ![Face supprimée : un trou apparaît](/assets/docs/blender/blender-66.jpg) |

- **Only Edges & Faces** : supprime les arêtes et faces mais conserve tous les sommets, même ceux qui deviennent isolés.
- **Only Faces** : supprime uniquement les faces, en gardant toutes les arêtes intactes.
- **Limited Dissolve** : essaie de supprimer intelligemment tout en recalculant une topologie propre, en fusionnant les faces coplanaires environnantes.
- **Edge Loop / Vertex Path** : selon le contexte de sélection.

Validez votre choix avec `Clic gauche`, directement dans le menu. Pour annuler avant de choisir : `Clic droit` ou `Échap`.

### Dissolve (Ctrl + X)

Commande : `Ctrl + X`. Fonctionne **uniquement en Edit Mode**, sur des sommets, arêtes ou faces sélectionnés.

Dans le menu, les options principales sont :

- **Dissolve Vertices** : supprime les sommets sélectionnés et fusionne automatiquement les arêtes et faces qui les entouraient en une surface continue.

  | Avant                                      | Après                                      |
  | ------------------------------------------ | ------------------------------------------ |
  | ![Sommet sélectionné avant dissolution](/assets/docs/blender/blender-62.jpg) | ![Résultat de la dissolution du sommet](/assets/docs/blender/blender-67.jpg) |

- **Dissolve Edges** : supprime les arêtes sélectionnées et fusionne les faces adjacentes en une seule, à condition qu'elles soient coplanaires (sinon le résultat peut créer une face non plane).

  | Avant                                      | Après                                      |
  | ------------------------------------------ | ------------------------------------------ |
  | ![Arête sélectionnée avant dissolution](/assets/docs/blender/blender-62.jpg) | ![Résultat de la dissolution de l'arête](/assets/docs/blender/blender-68.jpg) |

- **Dissolve Faces** : supprime les faces sélectionnées tout en gardant leurs bords extérieurs comme contour, sans laisser de trou ouvert.
- **Dissolve Edges & Faces (Limited)** : une version plus intelligente qui recalcule automatiquement quelles arêtes garder ou fusionner selon un angle limite. Utile après un Boolean ou une fusion d'objets pour nettoyer une topologie complexe.

Validez votre choix avec `Clic gauche`, directement dans le menu. Pour annuler avant de choisir : `Clic droit` ou `Échap`.

Une option très utile, disponible dans le panneau en bas à gauche après l'action, est **Face Split** : elle évite que les faces fusionnées ne se déforment de façon inattendue, en garantissant une meilleure répartition de la nouvelle géométrie.

:::info 
Contrairement au Delete classique, le Dissolve ne crée jamais de trou : il garde toujours le maillage fermé et cohérent. C'est l'outil de référence pour réduire le nombre de polygones (optimisation), nettoyer une topologie après un modificateur, ou simplifier une zone trop dense sans abîmer la silhouette générale de l'objet.
:::

## Modification non destructive

Une modification non destructive, au contraire, ne touche pas la géométrie de base : elle ajoute une couche de calcul (modificateur, paramètre, nœud) qui modifie l'apparence ou la topologie « à la volée ». Vous pouvez à tout moment ajuster, désactiver, réordonner ou supprimer cette opération, et le maillage original reste intact. Une modification non destructive peut d'ailleurs être **appliquée**, auquel cas elle devient destructive.

Tous les modificateurs se trouvent à cet endroit, à droite de l'écran :

![Onglet Modifier Properties (clé à molette) et bouton Add Modifier](/assets/docs/blender/blender-69.png)

### Subdivision Surface

Ce modificateur lisse et arrondit un maillage. Par défaut, il divise chaque face du maillage en plusieurs faces plus petites, puis lisse l'ensemble en faisant la moyenne des positions des sommets environnants. Une forme anguleuse (comme un cube) devient ainsi une surface arrondie et organique (comme une sphère), tout en gardant le maillage d'origine intact et modifiable en dessous.

| Sans Subdivision Surface                   | Avec Subdivision Surface                   |
| ------------------------------------------ | ------------------------------------------ |
| ![Tête de singe sans subdivision](/assets/docs/blender/blender-70.jpg) | ![Tête de singe avec Subdivision Surface](/assets/docs/blender/blender-71.jpg) |

**Ajout :** `Properties Panel > Modifier Properties (icône clé à molette) > Add Modifier > Generate > Subdivision Surface`

Le raccourci rapide pour l'ajouter directement sur l'objet sélectionné est `Ctrl + 1, 2, 3, 4…` (le chiffre correspond directement au niveau de subdivision appliqué dans le viewport).

Une fois ajouté, deux valeurs principales sont à régler :

- **Levels Viewport** : le nombre de subdivisions affichées dans la fenêtre 3D (à garder bas, 1 ou 2, pour ne pas ralentir Blender) ;
- **Levels Render** : le nombre de subdivisions utilisées uniquement au moment du rendu final (peut être plus élevé, car il n'affecte pas la fluidité du travail en cours).

Quelques options utiles :

- **On Cage** : active le lissage visible directement pendant l'édition du maillage en Edit Mode, pratique pour voir le résultat en temps réel pendant que vous modélisez.
- **Optimal Display** : simplifie l'affichage du wireframe pour ne montrer que les arêtes du maillage d'origine, plus lisible.
- **Adaptive Subdivision** (en Cycles uniquement) : ajuste automatiquement le niveau de subdivision selon la distance à la caméra.

:::tip 
Ce modificateur suit le maillage de base. Si vous voulez qu'un cube garde des angles nets à certains endroits tout en devenant arrondi ailleurs, ajoutez des **Edge Loops** supplémentaires proches des arêtes à préserver (via Loop Cut). Cela « verrouille » localement la forme contre le lissage : c'est une technique essentielle, appelée _edge support_ ou _edge loop support_.
:::

| Cube sans Loop Cut                          | Après Subdivision Surface                  |
| ------------------------------------------- | ------------------------------------------ |
| ![Cube sans Loop Cut](/assets/docs/blender/blender-73.jpg)             | ![Le cube devient une sphère](/assets/docs/blender/blender-72.jpg)    |

| Cube avec Loop Cut                          | Après Subdivision Surface                  |
| ------------------------------------------- | ------------------------------------------ |
| ![Cube avec des Loop Cuts près des arêtes](/assets/docs/blender/blender-74.jpg) | ![Le cube garde ses angles nets](/assets/docs/blender/blender-75.jpg) |

### Bevel Modifier

Ce modificateur arrondit ou chanfreine automatiquement tous les bords d'un objet. Comme le Subdivision Surface, il fonctionne de façon non destructive : il s'applique par-dessus le maillage d'origine, sans le modifier directement, ce qui permet d'ajuster ou de désactiver l'effet à tout moment. Contrairement au Bevel manuel (`Ctrl + B`), qui se fait arête par arête en Edit Mode, ce modificateur applique le bevel sur tout l'objet en une seule fois, et se met à jour automatiquement si le maillage change.

| Sans modificateur                           | Avec Bevel Modifier                        |
| ------------------------------------------- | ------------------------------------------ |
| ![Cube sans bevel](/assets/docs/blender/blender-77.jpg)                | ![Cube avec Bevel Modifier](/assets/docs/blender/blender-76.jpg)      |

**Ajout :** `Properties Panel > Modifier Properties (icône clé à molette) > Add Modifier > Generate > Bevel`

Les valeurs principales à régler sont :

- **Amount** : la taille du chanfrein, c'est-à-dire à quelle distance de l'arête d'origine le bevel va s'étendre ;
- **Segments** : le nombre de subdivisions du bevel (1 segment donne un chanfrein plat classique, plusieurs segments donnent un arrondi lisse proche d'une courbe).

Le réglage le plus important à comprendre est le champ **Limit Method**, qui détermine quelles arêtes sont concernées par le bevel :

- **Angle** : applique le bevel uniquement sur les arêtes dont l'angle dépasse un certain seuil (par défaut 30°), ce qui évite de biseauter les faces presque plates entre elles et ne cible que les angles vifs ;
- **Weight** : applique le bevel uniquement sur les arêtes ayant un « Bevel Weight » assigné manuellement en Edit Mode (via `Ctrl + Shift` + clic molette, ou le panneau `N`), pour un contrôle précis arête par arête ;
- **Vertex Group** : applique le bevel uniquement sur les sommets appartenant à un groupe de sommets défini ;
- **Sharp Edges / Seam / etc.** : applique le bevel selon d'autres marquages déjà présents sur le maillage.

Quelques options utiles supplémentaires :

- **Clamp Overlap** : évite que les bevels de deux arêtes proches ne se chevauchent et ne déforment le maillage.
- **Miter Outer / Miter Inner** : règle la façon dont les coins (intersections de plusieurs bevels) sont gérés, pour des angles plus nets ou plus arrondis.
- **Harden Normals** : recalcule les normales pour un rendu plus propre en shading, en évitant les artefacts de lumière sur les faces du bevel.

:::tip 
Ce modificateur se combine très souvent avec le **Subdivision Surface**, placé juste après dans la pile de modificateurs : un léger bevel avec Angle Limit permet de garder des arêtes nettes après un lissage global, sans avoir besoin d'ajouter manuellement des Edge Loops de support.
:::

### Mirror

Ce modificateur duplique et symétrise un maillage automatiquement : vous ne travaillez que sur une moitié de l'objet pendant que l'autre moitié se génère et se met à jour toute seule en miroir.

![Modificateur Mirror appliqué à une tête de singe](/assets/docs/blender/blender-78.jpg)

**Ajout :** `Properties Panel > Modifier Properties (icône clé à molette) > Add Modifier > Generate > Mirror`

Le réglage principal est l'**axe de symétrie**, disponible sous forme de trois boutons : **X**, **Y**, **Z**.

:::warning
La symétrie se calcule par rapport à l'**Object Origin** (le point orange au centre de l'objet). Pour que le Mirror fonctionne correctement, il faut donc que votre maillage de départ soit bien positionné d'un seul côté de cette origine, sinon le résultat sera décalé ou décentré.
:::

Quelques options utiles :

- **Clipping** : empêche les sommets proches du plan de symétrie de traverser accidentellement de l'autre côté pendant l'édition, en les « collant » automatiquement sur l'axe, ce qui évite les trous ou décalages disgracieux au centre.
- **Merge** : fusionne automatiquement les sommets qui se retrouvent proches du plan de symétrie entre les deux moitiés, pour éviter d'avoir des doublons invisibles à la couture centrale.
- **Bisect / Flip** : coupe le maillage existant en deux pour ne garder qu'une moitié. Utile si vous commencez avec un objet déjà symétrique mais que vous voulez repartir d'une seule moitié modifiable.
- **Mirror Object** : permet de choisir un autre objet comme référence pour le plan de symétrie, au lieu de l'origine de l'objet lui-même. Pratique pour symétriser par rapport à un point précis de la scène.

### Array

Ce modificateur duplique un maillage plusieurs fois selon un motif répétitif. Comme les autres modificateurs, il fonctionne de façon non destructive : il s'applique par-dessus le maillage d'origine, sans le modifier directement. Il permet de générer rapidement des rangées d'objets identiques (comme des marches d'escalier, des clous ou une clôture) sans avoir à copier-coller manuellement.

![Modificateur Array : cinq copies d'une tête de singe alignées](/assets/docs/blender/blender-79.jpg)

**Ajout :** `Properties Panel > Modifier Properties (icône clé à molette) > Add Modifier > Generate > Array`

La valeur principale à régler est **Count**, qui définit le nombre total de copies générées (l'objet d'origine inclus).

Le décalage entre chaque copie est ensuite contrôlé par trois méthodes, qui peuvent se combiner :

- **Relative Offset** : décale chaque copie en fonction de la taille de l'objet lui-même (par exemple, 1.0 sur X colle chaque copie bord à bord avec la précédente, sans espace ni chevauchement) ;
- **Constant Offset** : décale chaque copie d'une distance fixe en unités Blender, indépendamment de la taille de l'objet : utile pour un espacement précis et régulier ;
- **Object Offset** : utilise la position, la rotation et l'échelle d'un autre objet vide (_Empty_) comme référence de décalage entre chaque copie, ce qui permet des motifs plus complexes, comme une spirale ou un cercle, en combinant avec une rotation.

Quelques options utiles supplémentaires :

- **Merge** : fusionne automatiquement les sommets qui se touchent entre deux copies consécutives, pour éviter des doublons invisibles aux jonctions.
- **Fit Length / Fit Curve** : peuvent remplacer **Count** ; ils calculent automatiquement le nombre de copies nécessaires pour remplir une longueur donnée ou suivre une courbe précise.
- **UV** : définit comment les coordonnées de texture sont réparties sur les copies, pour éviter que le texturing ne se répète bizarrement.

:::tip 
Ce modificateur se combine très souvent avec un **Empty** et l'option **Object Offset** pour créer des motifs circulaires (comme les dents d'un engrenage) : il suffit de faire tourner l'Empty d'un certain angle, et l'Array répartira automatiquement les copies en cercle autour de ce point.
:::

### Boolean

Ce modificateur combine deux objets grâce à des opérations logiques (union, soustraction, intersection). Comme les autres modificateurs, il fonctionne de façon non destructive : il s'applique par-dessus le maillage d'origine, sans le modifier directement. Il permet de découper, fusionner ou intersecter des objets sans avoir à modéliser manuellement le résultat.

| Objet et cutter                             | Résultat                                   |
| ------------------------------------------- | ------------------------------------------ |
| ![Un cube qui traverse une tête de singe](/assets/docs/blender/blender-80.jpg) | ![Résultat du Boolean](/assets/docs/blender/blender-81.jpg)   |

**Ajout :** `Properties Panel > Modifier Properties (icône clé à molette) > Add Modifier > Generate > Boolean`

Une fois ajouté, il faut d'abord choisir dans le champ **Object** un second objet qui servira d'outil de découpe (souvent appelé « cutter »), généralement un objet simple (cube, sphère, cylindre) que vous positionnez pour qu'il traverse ou touche votre objet principal.

Le type d'opération se règle ensuite via trois options principales :

- **Difference** : soustrait le second objet du premier, en creusant un trou là où les deux se chevauchent (l'opération la plus utilisée, pour percer, découper, graver) ;
- **Union** : fusionne les deux objets en un seul volume continu, en supprimant les faces internes qui se chevauchaient ;
- **Intersect** : ne garde que la partie commune aux deux objets, en supprimant tout le reste.

:::info
L'objet utilisé comme outil de découpe (le « cutter ») reste visible dans la scène par défaut, ce qui rend le résultat difficile à lire. Il faut donc généralement cacher son rendu et son affichage viewport avec l'icône en forme d'œil ou d'appareil photo dans l'_Outliner_, tout en le gardant présent dans la scène pour que le modificateur continue de fonctionner.
:::

Quelques options utiles supplémentaires :

- **Solver** : définit l'algorithme de calcul utilisé (_Exact_ est plus précis et gère mieux les cas complexes ; _Fast_ est plus rapide mais moins fiable sur des géométries compliquées ou qui se touchent à peine).
- **Self Intersection** (en mode Exact) : permet de gérer les objets dont le maillage se croise lui-même, ce qui peut faire planter le solver Fast.
- **Hole Tolerance** : aide à corriger les erreurs sur les maillages qui ne sont pas parfaitement fermés (non-manifold).

:::warning 
Un problème fréquent chez les débutants : si les faces des deux objets sont exactement superposées ou coplanaires, le résultat du Boolean peut devenir imprévisible ou générer des faces en trop (artefacts, _z-fighting_). Il est donc conseillé de légèrement décaler l'objet outil, ou de le faire dépasser au-delà de la surface concernée.
:::

Contrairement au Mirror ou à l'Array, qui dupliquent une géométrie existante, ce modificateur combine deux maillages différents selon une logique booléenne. C'est l'outil de référence pour créer des trous précis, graver du texte dans une surface, ou fusionner des formes complexes sans avoir à retopologiser manuellement l'intersection.

### Decimate

Ce modificateur réduit le nombre de polygones d'un maillage. Comme les autres modificateurs, il fonctionne de façon non destructive : il s'applique par-dessus le maillage d'origine, sans le modifier directement. Il permet d'alléger un objet trop dense (souvent issu d'un scan 3D, d'un sculpt ou d'un import) pour améliorer les performances, sans avoir à retopologiser à la main.

**Ajout :** `Properties Panel > Modifier Properties (icône clé à molette) > Add Modifier > Generate > Decimate`

Trois modes sont disponibles selon le type de simplification recherché :

- **Collapse** : fusionne progressivement les sommets proches les uns des autres pour réduire le nombre total de polygones, en se basant sur un pourcentage (**Ratio**). Un ratio de 0.5 réduit le maillage à environ 50 % de sa densité d'origine. C'est le mode le plus utilisé, mais il peut déformer légèrement la silhouette si on pousse trop loin.
- **Un-Subdivide** : fait l'inverse d'une subdivision, en essayant de retrouver la topologie plus simple d'origine (utile surtout si le maillage a été subdivisé de façon régulière au préalable, sinon le résultat est souvent moins propre).
- **Planar** : supprime les arêtes et fusionne les faces qui sont presque coplanaires (presque plates entre elles), ce qui simplifie sans perdre les angles importants, un peu comme un Limited Dissolve automatique et progressif.

Quelques options utiles selon le mode :

- **Symmetry** (en mode Collapse) : préserve la symétrie du maillage le long d'un axe choisi pendant la réduction, pour éviter un résultat asymétrique et disgracieux.
- **Vertex Group** : permet de limiter la décimation à une zone précise du maillage (via des poids assignés en Edit Mode), pour réduire fortement une zone peu visible tout en gardant les détails ailleurs.
- **Delimit** (en mode Planar) : empêche la fusion de traverser certaines limites, comme les UV Seams ou les Sharp Edges, pour ne pas abîmer le texturing ou les angles marqués.

Le modificateur donne un aperçu en temps réel du nombre de faces restantes (**Face Count**) directement dans le panneau, ce qui permet d'ajuster le Ratio jusqu'à atteindre un objectif précis (par exemple, réduire un scan de 2 millions de faces à 50 000 pour un usage en jeu vidéo).

Contrairement au Subdivision Surface, qui ajoute des détails, le Decimate en retire. C'est l'outil de référence pour optimiser un maillage trop lourd avant export, pour du temps réel (jeux vidéo, VR), ou simplement pour alléger la scène et accélérer le travail dans le viewport.

### Remesh

Ce modificateur reconstruit entièrement la topologie d'un maillage. Comme les autres modificateurs, il fonctionne de façon non destructive : il s'applique par-dessus le maillage d'origine, sans le modifier directement. Il permet de transformer un maillage sale, non-manifold, ou issu d'un sculpt ou d'un scan en une nouvelle topologie propre et régulière, souvent basée sur des quads ou des voxels.

**Ajout :** `Properties Panel > Modifier Properties (icône clé à molette) > Add Modifier > Generate > Remesh`

Quatre modes sont disponibles selon le résultat recherché :

- **Blocks** : reconstruit le maillage sous forme de blocs cubiques façon Minecraft, en approximant la forme d'origine avec des volumes carrés ;
- **Smooth** : reconstruit une version lissée et arrondie de la forme, en supprimant tous les détails anguleux (utile pour obtenir rapidement une forme organique générale) ;
- **Sharp** : similaire à Smooth, mais essaie de préserver davantage les angles et détails nets de la forme d'origine ;
- **Voxel** : le mode le plus utilisé aujourd'hui. Il reconstruit le maillage en le remplissant d'abord d'un volume (comme de la pâte à modeler numérique), puis en générant une nouvelle surface régulière à partir de ce volume, avec un excellent équilibre entre précision et propreté du résultat.

Pour le mode Voxel, la valeur principale à régler est **Voxel Size**, qui définit la taille des « cellules » utilisées pour reconstruire la forme : plus la valeur est petite, plus le résultat est détaillé et dense (mais plus lourd) ; plus elle est grande, plus le résultat est simplifié.

Quelques options utiles supplémentaires (mode Voxel) :

- **Adaptivity** : simplifie automatiquement les zones plates du résultat pour réduire le nombre de faces inutiles tout en gardant les détails importants.
- **Fix Poles** : tente de réduire le nombre de pôles (points où plus de 4 arêtes se rejoignent) pour un maillage plus propre à sculpter ou subdiviser ensuite.

:::warning
Ce modificateur ignore complètement la topologie d'origine : les UV, groupes de vertex et matériaux assignés par face peuvent être perdus ou nécessiter d'être refaits après, puisqu'il génère un tout nouveau maillage à partir du volume de l'ancien. Contrairement au Decimate, qui simplifie la topologie existante sans la reconstruire entièrement, le Remesh repart de zéro pour générer une géométrie totalement nouvelle et régulière.
:::

C'est l'outil de référence après un sculpt en Dyntopo, un scan 3D désordonné, ou tout maillage devenu trop chaotique pour être édité proprement.

## Règles de la topologie

Maintenant que l'on sait comment modifier notre objet, il nous faut quelques règles pour garder une **topologie propre**. Pourquoi est-ce important ?

- Pour appliquer de futures modifications : si le maillage est mal organisé, certaines modifications ne s'appliqueront pas correctement, et donneront des résultats bizarres et compliqués à réparer.
- Pour le rendu : cela peut affecter les ombres et les côtés clairs de l'objet, la lumière pouvant interagir bizarrement avec lui et donner un résultat insatisfaisant.
- Pour la vente ou l'animation : si vous voulez vendre votre modèle ou l'animer, une certaine qualité est demandée pour que le modèle soit utilisable.

:::info
Ces règles sont assez importantes à garder en tête, même si vous ne les utiliserez pas tout le temps : sinon votre objet peut ne pas se comporter comme vous le voulez quand vous appliquerez des modifications ou une lumière, et les reflets et la géométrie peuvent ne pas être beaux à voir. Il peut tout de même arriver de les enfreindre et d'obtenir un très bon modèle : ce sont juste des choses à éviter si possible.
:::

### 1. Privilégiez les quads (faces à 4 côtés)

C'est la règle n°1. Les quads se déforment proprement, se subdivisent bien, et fonctionnent parfaitement avec un Subdivision Surface Modifier. Les triangles et les n-gones (faces à 5 côtés ou plus) sont à éviter autant que possible, sauf dans des zones plates qui ne seront jamais déformées ou lissées.

![Triangle, quad et n-gone](/assets/docs/blender/blender-82.jpg)

### 2. Évitez les triangles sur les zones qui se déforment

Un triangle sur une surface plate et statique n'est pas grave. Mais sur un personnage qui va être animé (coude, genou, visage) ou sur une forme qui passera par un Subdivision Surface, un triangle crée souvent un pincement ou une déformation bizarre visible.

### 3. Évitez les n-gones sur les surfaces courbes

Une face à 5 côtés ou plus, sur une zone qui doit rester lisse ou se déformer, crée presque toujours un artefact (ombre bizarre, pli inattendu). Sur une face plate et invisible, c'est tolérable.

### 4. Gardez une densité de maillage régulière

Évitez d'avoir une zone ultra-détaillée collée directement à une zone très simple, sans transition. Ce contraste brutal crée des problèmes de shading (ombres qui pincent) et complique l'animation. Utilisez des Loop Cuts progressifs pour faire une transition douce entre une zone dense et une zone simple.

![Comparaison de densité de maillage, exemple 1 : maillage rouge régulier](/assets/docs/blender/blender-84.jpg)
![Comparaison de densité de maillage, exemple 2 : maillage rouge plus dense, avec des os](/assets/docs/blender/blender-83.jpg)

### 5. Suivez le flux des formes (Edge Flow)

Les boucles d'arêtes (_edge loops_) doivent suivre la logique naturelle de la forme : autour d'un œil, elles tournent en cercles concentriques ; sur un bras, elles font le tour du membre comme des anneaux. Un bon edge flow facilite énormément l'animation et le lissage.

![Edge flow sur un personnage : les boucles suivent les membres et les articulations](/assets/docs/blender/blender-85.jpg)

### 6. Ajoutez des boucles de support avant un Subdivision Surface

Si vous voulez garder un angle net après un Subdivision Surface, ajoutez des Edge Loops proches de cette arête (avec Loop Cut) pour « verrouiller » localement le lissage. Sans cela, tous les angles deviennent flous et arrondis. Un bon exemple est l'application du Subdivision Surface avec et sans Loop Cut (voir [Subdivision Surface](#subdivision-surface)).

### 7. Évitez les faces qui se chevauchent (Overlapping Faces)

Deux faces exactement superposées créent du _z-fighting_ (scintillement) et des bugs de rendu ou de Boolean. Vérifiez toujours qu'il n'y a pas de doublons après un Mirror, un import ou un Boolean.

:::tip
Pour s'en débarrasser, utilisez l'outil [Merge](#merge-m), qui permet de se débarrasser rapidement des sommets, arêtes ou faces superposés.
:::

### 8. Gardez un maillage « manifold » (fermé et cohérent)

Chaque arête ne devrait normalement toucher que 2 faces (pas 1, pas 3 ou plus). Un maillage non-manifold pose problème pour l'impression 3D, pour certains modificateurs (comme le Boolean en mode Fast) et pour le calcul de volume. Blender propose `Select > Select All by Trait > Non-Manifold` pour les repérer facilement.

![Maillage manifold et non-manifold](/assets/docs/blender/blender-86.png)

### 9. Pensez aux pôles

Un pôle est un sommet où plus ou moins de 4 arêtes se rejoignent. Ils sont inévitables (surtout sur des formes organiques), mais il faut les placer dans des zones peu visibles ou peu déformées (pas au milieu d'une joue ou d'une articulation), car ils créent des distorsions de shading autour d'eux.

Voici ce qui se passe au niveau du pôle quand on applique un modificateur Subdivision Surface à une sphère UV :

| Sphère UV : le pôle (flèche rouge)         | Après Subdivision Surface                  |
| ------------------------------------------ | ------------------------------------------ |
| ![Sphère UV avec son pôle indiqué](/assets/docs/blender/blender-87.jpg) | ![Sphère UV après Subdivision Surface](/assets/docs/blender/blender-88.jpg) |

### 10. Ne compliquez pas inutilement

Beaucoup de débutants ajoutent trop de détails trop tôt. Mieux vaut garder une base simple et propre, avec peu de polygones bien organisés, plutôt qu'un maillage dense et chaotique. Les détails fins peuvent souvent être faits en normal map, ou avec un Subdivision Surface plus tard.

## Conseils importants

- Il y a littéralement des dizaines de façons de créer les mêmes objets. Cette documentation propose quelques façons de procéder, mais vous pouvez très bien en trouver d'autres qui vous conviennent mieux.
- Cette documentation se concentre sur l'aspect **modélisation** de Blender. Vous pouvez aussi créer des objets en les sculptant, en utilisant des nœuds, ou même du code pur, mais c'est tout un autre domaine, qui demande de nouvelles compétences pour chaque section. Tous les objets que vous voulez conceptualiser peuvent être réalisés purement avec la modélisation : l'utilité des autres approches est une question de préférence plus qu'une question de l'objet à créer.
- On aborde aussi les règles de topologie (les propriétés des objets géométriques). Voici des exemples de bonne topologie, même avec quelques imperfections :

![Modèle de robot : bonne topologie malgré quelques imperfections](/assets/docs/blender/blender-89.jpg)
![Main : bonne topologie malgré quelques imperfections](/assets/docs/blender/blender-90.jpg)

:::warning 
Il est important de prendre son temps et de commencer par des choses simples. Blender est un outil incroyable grâce à tous ses outils, mais pour un débutant, cela fait beaucoup de choses à apprendre et à comprendre, et l'on peut vite être frustré de ne pas obtenir exactement ce que l'on veut. **Même si vous êtes bon en CAO, Blender n'est pas du tout ce genre de logiciel et la manière de procéder est complètement différente.**
:::

### Augmenter le nombre d'annulations (Undo)

Dans Blender, on est limité à un certain nombre d'annulations (_undo_). Vous pouvez l'augmenter jusqu'à un maximum de **256**. Pour cela, allez dans : `Preferences → System → Memory & Limits`, puis modifiez le nombre d'**Undo Steps** :

![Preferences > System > Memory & Limits : le champ Undo Steps est encadré](/assets/docs/blender/blender-91.jpg)

## Ressources

Cette section regroupe des vidéos et des documents pour obtenir plus d'informations ou vous exercer à créer vos premiers objets.

- [Documentation officielle de Blender](https://docs.blender.org/manual/en/latest/)
- [Le curseur 3D — documentation Blender](https://docs.blender.org/manual/en/latest/editors/3dview/3d_cursor.html)
- [rotek.fr — guide Blender](https://rotek.fr/blender-logiciel-3d-open-source-guide/)

### Vidéos en français

- [Vidéo 1](https://www.youtube.com/watch?v=hq_VvjKDIS4)
- [Vidéo 2](https://www.youtube.com/watch?v=BEA5PdlwESM)
- [Playlist](https://www.youtube.com/watch?v=k-fXfdnZH00&list=PLHXhc_VViHlfE3dwRlkAisARHM5hc7EDv)

### Vidéos en anglais

- [Vidéo 1](https://www.youtube.com/watch?v=peSv5IT5Ve4)
- [Vidéo 2](https://www.youtube.com/watch?v=z-Xl9tGqH14)
- [Vidéo 3](https://www.youtube.com/watch?v=p5N5oikFWE8)
- [Vidéo 4](https://www.youtube.com/watch?v=HUjpeqpd53A)
- [Vidéo 5](https://www.youtube.com/watch?v=zSLELihVi6I&t=28s)


Merci de faire du DeVinci Fablab un endroit sûr, durable et collaboratif !