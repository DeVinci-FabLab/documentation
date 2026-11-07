---
pagination_label: Découpeuse laser
sidebar_label: Découpeuse laser
sidebar_position: 4
description: "Formation de base du DeVinci Fablab sur la découpeuse laser Arketype Jade L1290 : préparation du fichier DXF, réglages dans LaserCut, lancement de la découpe et règles de sécurité."
slug: laser-cutting
tags: [course, fabrication, safety]
last_update:
  date: 2026-11-07
  author: Association DeVinci Fablab
toc_max_heading_level: 4
---

# Formation Découpeuse Laser : Guide d'utilisation de la découpeuse du Fablab

import { Info, FileText, Monitor, Zap, AlertTriangle, Lightbulb } from 'lucide-react';

> Bienvenue dans la formation **Découpeuse Laser**, qui présente pas à pas comment préparer un fichier, le charger sur la machine et lancer une découpe en sécurité.

:::danger Disclaimer
La découpeuse laser est une machine qui peut s'avérer **dangereuse en cas de mauvaise utilisation**. De plus, en cas de détérioration de cette machine, de nombreux acteurs et projets peuvent être défavorablement impactés.
:::

## <Info /> Objectifs de cette formation

- Préparer un fichier vectoriel (DXF) adapté à la découpe laser.
- Utiliser le logiciel **LaserCut** pour souder, organiser et envoyer une découpe vers la machine.
- Lancer une découpe en respectant les règles de sécurité du Fablab.

## <Info /> Présentation de la découpeuse laser

La découpeuse laser du pôle est l'**Arketype Jade L1290**.

![Découpeuse laser Arketype Jade L1290 du Fablab](/assets/docs/laser-cutting/arketype-jade-l1290.jpg)

## <FileText /> Point de départ : le fichier vectoriel

Avant de lancer toute découpe, il faut vous fournir un fichier vectoriel au format `.DXF`, `.SVG` ou `.PDF`. Il est tout de même très préférable d'utiliser des fichiers **DXF** : c'est pourquoi seul ce format est abordé dans cette formation.

- Vous pouvez créer votre fichier DXF avec un logiciel de CAO (conception assistée par ordinateur) de type SolidWorks, CATIA… : il suffit de l'enregistrer au format DXF.
- Il existe aussi de grandes banques de fichiers DXF sur Internet : il suffit d'en chercher.
- Gardez bien en mémoire que la zone de découpe de la machine fait **70 cm × 120 cm** lors de la conception de votre pièce.

Une fois votre fichier DXF prêt, enregistrez-le sur une clé USB. Vous allez maintenant faire un petit tour (euphémisme) à l'atelier, au **-1 (sous-sol)**.

:::warning Très important
Les cotes de votre DXF doivent être **en millimètres**, car le logiciel considérera qu'elles le sont.
:::

## <Monitor /> L'épopée du -1

### Avant de commencer

Une fois au -1, vous allez devoir rencontrer Kévin ou Mr Bidault. Renseignez-vous d'abord auprès d'eux pour savoir s'ils ont un **permis feu** vous permettant de découper, et si vous pouvez utiliser la machine.

### Ouvrir LaserCut

Rendez-vous dans la pièce où se situe la découpeuse laser. Elle s'y trouve avec un PC qui lui est connecté : ce PC transmet automatiquement votre G-code à la découpeuse.

Lancez le logiciel de la découpeuse (**LaserCut**). Vous vous retrouvez devant cet écran :

![Interface du logiciel LaserCut au démarrage](/assets/docs/laser-cutting/lasercut-interface.png)

### Importer le fichier DXF

Connectez votre clé USB au PC de la salle, puis ouvrez votre fichier DXF dans le logiciel : **Fichier → Importer**.

Dans la fenêtre qui s'ouvre, déplacez-vous dans votre disque et sélectionnez votre fichier DXF : une prévisualisation s'affiche.

![Fenêtre d'ouverture de fichier avec prévisualisation](/assets/docs/laser-cutting/lasercut-ouvrir-fichier.png)

Une fois le fichier importé, le logiciel propose des outils pour préparer votre découpe.

### Souder la pièce

Sélectionnez toute votre pièce (qui est composée de plusieurs vecteurs, d'où les flèches) puis soudez-la : **Outils → Souder**.

![Pièce importée, composée de plusieurs vecteurs](/assets/docs/laser-cutting/lasercut-piece-importee.png)

Dans la fenêtre « Options Souder », cliquez sur **OK**.

![Fenêtre « Options Souder » avec un jeu maxi de soudure de 0.010](/assets/docs/laser-cutting/lasercut-options-souder.png)

Votre pièce est maintenant composée d'un seul et même morceau. Pour la déplacer, sélectionnez-la puis cliquez sur la **croix au milieu**.

![Pièce soudée et déplacée](/assets/docs/laser-cutting/lasercut-piece-deplacee.png)

### Les outils de dessin

Le logiciel propose plusieurs outils (si les icônes sont trop petites, survolez-les avec la souris pour afficher leur nom).

Les outils entourés en jaune permettent de créer des formes au cas où vous auriez oublié un morceau de pièce : un segment, un rectangle, un cercle, ou encore du texte à écrire sur la pièce.

![Barre d'outils de dessin, entourée en jaune](/assets/docs/laser-cutting/lasercut-outils-dessin.png)

Pour illustrer les réglages spécifiques qui suivent, deux formes circulaires sont ajoutées à la pièce :

![Pièce avec deux cercles ajoutés](/assets/docs/laser-cutting/lasercut-formes-ajoutees.png)

### Redimensionner la pièce

Un outil permet de redimensionner votre pièce (entouré en jaune ci-dessous).

![Outil « Redimensionner » et sa fenêtre](/assets/docs/laser-cutting/lasercut-redimensionner.png)

:::tip
Il est toujours préférable de **bien dimensionner sa pièce dès la conception**.
:::

### Multiplier la pièce

Vous pouvez multiplier le nombre d'exemplaires de votre pièce, soit avec la méthode du copier-coller, soit avec l'outil intégré de répétition (entouré en jaune ci-dessous). Il suffit d'y indiquer le nombre de colonnes et de lignes, ainsi que l'espace qui les sépare.

![Outil de répétition de découpe](/assets/docs/laser-cutting/lasercut-repetition.png)

### Définir l'ordre de découpe

Votre pièce est prête. Il faut maintenant analyser comment elle est composée. Dans l'exemple, la pièce est composée d'une découpe de forme extérieure et de 2 formes circulaires à l'intérieur.

:::warning Toujours découper l'intérieur avant l'extérieur
Lorsque la pièce comporte des trous à l'intérieur de celle-ci (comme les deux cercles de l'exemple), il faut **toujours les découper avant la découpe extérieure**.
:::

Pour cela :

1. Sélectionnez les trous qu'il faut découper en priorité.
2. Donnez-leur une couleur de la palette en bas de l'écran (**évitez le rouge**).
3. Dans le panneau de droite, vous voyez les différentes couleurs que vous avez données. Sélectionnez les couleurs que vous voulez découper en priorité, puis cliquez sur le bouton **Haut**. La couleur placée en première dans la liste est celle découpée en priorité.

Dans l'exemple, les deux ronds et la bordure extérieure ont chacun une couleur différente.

![Bouton « Haut » du panneau de droite, entouré en jaune](/assets/docs/laser-cutting/lasercut-couleurs-priorite.png)

### Régler la puissance et la vitesse

Vous devez aussi régler la puissance et la vitesse pour chaque couleur.

:::warning Validation obligatoire
Pour cela, il faut se référer à **Kevin Gallais** ou **Mr Bidault**, qui vérifieront votre travail avant de vous donner leur accord.
:::

### Charger le fichier sur la découpeuse

Après cette vérification, cliquez sur le bouton **Charger** (entouré en jaune ci-dessous).

![Bouton « Charger », entouré en jaune](/assets/docs/laser-cutting/lasercut-charger.png)

Une fenêtre s'ouvre :

![Fenêtre « Transferts fichiers »](/assets/docs/laser-cutting/lasercut-transfert-fichiers.png)

1. Cliquez sur **Effacer tous** (**très important**).
2. Cliquez sur **Charger le fichier actif**.
3. Attendez la fin du chargement : votre fichier est alors chargé sur la découpeuse.

## <Zap /> Lancer la découpe

Une fois votre fichier chargé sur la découpeuse laser, il reste peu d'étapes à faire.

### Positionner le matériau

Placez le matériau à découper sur la surface de découpe, de préférence au niveau d'un des **coins de gauche**. Faites bien attention à **ne pas taper la tête de découpe** lorsque vous placez votre plaque. Si besoin, appuyez sur **Esc** sur la découpeuse et utilisez les flèches directionnelles pour déplacer la tête.

![Panneau de commande de la découpeuse](/assets/docs/laser-cutting/panneau-commande.jpg)

### Régler la distance focale

Une fois votre plaque placée, positionnez la tête de découpe **au-dessus du matériau**. Faites ensuite :

1. **Esc** ;
2. le bouton au centre des flèches directionnelles, qui représente l'axe **Z** ;
3. **Datum**, ce qui permet à la découpeuse de régler la distance focale.

### Tester puis démarrer

- Vous pouvez appuyer sur **Test** : la tête de la découpeuse délimite alors les dimensions maximales de votre découpe. Cela permet de vérifier si votre matériau est trop petit ou si votre fichier (avec votre pièce) est mal fait.
- Si tout est bon, appuyez sur **Start** : la découpe devrait commencer.

## <AlertTriangle /> Les règles de sécurité

- **Restez à proximité** de la découpeuse lors de l'opération.
- Faites attention à **ne pas toucher la tête de découpe** lors des différentes manipulations de la machine.
- **Connaissez la position de l'extincteur** en cas de dysfonctionnement.
- Placez le **tuyau d'aération** de la découpeuse laser **dehors, à travers la fenêtre gauche** de la salle.

## <Lightbulb /> En résumé

- **Fichier DXF, cotes en millimètres.**
- **Souder la pièce**, puis découper les trous intérieurs avant la forme extérieure (une couleur par opération).
- **Faire valider** la puissance et la vitesse avant de charger.
- **« Effacer tous »** avant « Charger le fichier actif ».
- **Datum**, puis **Test**, avant **Start**, et rester près de la machine.

Pour les règles générales du Fablab, retrouvez la formation [Sécurité, Rangement et Gaspillage (SRG)](srg.md).
