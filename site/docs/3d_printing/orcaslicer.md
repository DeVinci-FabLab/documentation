---
sidebar_position: 3
tags: [course, 3d-printing]
---

# OrcaSlicer Découpage

> Ce guide vous apprendra à utiliser OrcaSlicer pour préparer vos modèles 3D à l’impression.

![Logiciel](/assets/docs/orca/orcaslicer-1.png)

## Introduction

Un logiciel de découpe convertit votre modèle 3D en une série de fines couches, générant un fichier G-code contenant toutes les instructions d’impression pour votre imprimante. Cette étape inclut le réglage des paramètres tels que la température de la buse et du plateau, la vitesse d’impression et les réglages du ventilateur.

Les logiciels de découpe populaires incluent BambuStudio, PrusaSlicer, Cura et IdeaMaker. Bien qu’ils soient souvent associés à des marques spécifiques d’imprimantes 3D, ils supportent généralement une large gamme d’imprimantes, bien que certaines fonctionnalités puissent être limitées.

Dans ce guide, nous utiliserons OrcaSlicer, un logiciel de découpe avancé basé sur BambuStudio, offrant de nombreux réglages et options de calibration, et compatible avec la plupart des imprimantes 3D.

## Importation de votre modèle 3D

Pour commencer, importez votre modèle 3D dans OrcaSlicer. Le logiciel supporte divers formats de fichiers comme STL, OBJ et 3MF.

Vous pouvez trouver des modèles 3D sur diverses plateformes avec des niveaux gratuits et payants :

- [MakerWorld](https://makerworld.com/)
- [Printables](https://www.printables.com/)
- [Thingeverse](https://www.thingiverse.com/)
- [Cults](https://cults3d.com/)
- [MyMinifactory](https://www.myminifactory.com/)

1. Une fois votre modèle téléchargé, vous pouvez l’importer dans OrcaSlicer en cliquant sur le bouton "Importer".

![Importation](/assets/docs/orca/orcaslicer-2.png)

## Création du contexte d’impression

![Contexte](/assets/docs/orca/orcaslicer-3.png)

1. Vérifiez que l’imprimante est correctement configurée dans le logiciel (Bambulab X1 Carbon). Choisissez le modèle de l’imprimante, le diamètre de la buse, la taille du plateau et le matériau utilisé. Cela permettra au logiciel de découpe de calculer le temps d’impression et la quantité de matériau nécessaire.
2. Choisissez le type de plateau parmi : plateau froid lisse, plateau PEI texturé ou plateau technique. Cela impactera l’adhérence de la pièce au plateau. Choisissez judicieusement en fonction du matériau utilisé.
3. Sélectionnez le filament parmi la liste. Dans l’onglet **Objet** à côté de **Global**, vous pouvez sélectionner le filament utilisé pour chaque fichier individuel.
4. Si un filament que vous avez chargé n’est pas affiché, vous pouvez ajouter le profil ou en supprimer un et définir vos préréglages.
5. Enfin, vous pouvez choisir la hauteur de chaque couche. Ce paramètre spécifique définira la qualité de votre impression, la rendant ainsi plus ou moins longue.

## Positionnement de l’objet sur le plateau

Nous choisissons son orientation, pour des raisons techniques mais aussi esthétiques, surtout avec l’impression par dépôt de filament. En effet, avec la technologie FDM, le dépôt couche par couche est visible, donc nous devrons choisir si nous voulons que la pièce imprimée ait un dépôt horizontal ou vertical, par exemple. Cela impactera également la solidité de l’impression. Si nous imprimons sans relief, nous pouvons aussi choisir d’imprimer la face de l’objet sur le plateau pour bénéficier de la brillance de cette face.

![Couches](/assets/docs/orca/orcaslicer-4.png)

## Définition du remplissage de la pièce

![Remplissage](/assets/docs/orca/orcaslicer-5.png)

1. La densité de remplissage détermine la quantité de matériau utilisée à l’intérieur de l’impression. Une densité plus élevée résulte en une pièce plus solide et plus lourde, tandis qu’une densité plus faible rend la pièce plus légère et plus rapide à imprimer.

2. Vous pouvez choisir parmi divers motifs de remplissage tels que des nids d’abeille, des gyroïdes ou des grilles. Chaque motif a ses propres avantages en termes de solidité, de flexibilité et de temps d’impression.

3. La combinaison de la densité de remplissage et du type de géométrie affectera la solidité globale, la rigidité et le poids de la pièce imprimée. Par exemple, un remplissage en nid d’abeille à haute densité produira une pièce très solide et rigide, tandis qu’un remplissage gyroïde à faible densité résultera en une pièce plus légère et plus flexible.

## Création de supports

L’extrusion ne peut pas s’accrocher au vide ; des supports sont nécessaires pour donner au filament extrudé chaud le temps de durcir. Différents modèles de supports existent selon les besoins, tels que des grilles ou des supports organiques. Il est également possible de choisir où placer les supports et même de définir des zones sans support dans la plupart des logiciels de découpe.

![Supports](/assets/docs/orca/orcaslicer-6.png)

1. Cliquez sur la section Supports.
2. Assurez-vous que l’option **Activer les supports** est activée.
3. Sélectionnez le type de supports entre **normal** (géométrique) et **arborescent** (organique).
4. Les zones en surplomb couvertes par les supports sont marquées en bleu.

## Paramètres avancés

OrcaSlicer offre une gamme de paramètres avancés pour affiner votre impression :

- **Vitesse d’impression** : Contrôlez la vitesse à laquelle l’extrudeuse se déplace.
- **Réglages de température** : Définissez les températures de la buse et du plateau pour une adhérence et une extrusion optimales.
- **Vitesse du ventilateur** : Ajustez la vitesse du ventilateur de refroidissement pour contrôler la vitesse de refroidissement du filament extrudé.
- **Réglages de rétraction** : Gérez la rétraction du filament pour éviter les fils et les bavures.

## Sauvegarde et exportation des fichiers découpés

Maintenant que tout est prêt, nous pouvons sauvegarder le fichier et l’exporter vers l’imprimante.

![Exportation](/assets/docs/orca/orcaslicer-7.png)

1. Activez le bouton d’actions supplémentaires.
2. Sélectionnez l’option **Exporter le fichier découpé du plateau**.
3. Éjectez la carte SD de l’ordinateur et insérez-la dans l’imprimante.

## Dépannage des problèmes courants

- **Problèmes d’adhérence des couches** : Assurez-vous que le plateau est bien nivelé et que la hauteur de la première couche est correctement réglée.
- **Filaments** : Ajustez les réglages de rétraction et la vitesse d’impression.
- **Déformation** : Utilisez un plateau chauffant et assurez-vous d’une bonne adhérence au plateau.
- **Sous-extrusion** : Vérifiez les bouchons dans la buse et assurez-vous que le filament s’alimente correctement.
