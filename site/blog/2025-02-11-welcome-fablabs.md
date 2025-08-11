---
title: Initiation au Fablab
description: Un guide pour découvrir les bases du Fablab et de la fabrication numérique.
authors: [yann_v]
tags: [fablab, ai, 3d-printing, robotics]
hide_table_of_contents: false
slug: welcome-fablabs
---

# Workshop : Découverte des Fablabs, de l'Impression 3D et de l'IA Embarquée

Bienvenue dans ce workshop immersif où vous allez explorer les Fablabs, l'impression 3D et l'IA embarquée. Préparez-vous à plonger dans un univers de créativité, d'innovation et d'intelligence artificielle !

## Introduction aux Fablabs et à l'Impression 3D

### Qu'est-ce qu'un Fablab ?

Un **Fablab**, ou "Fabrication Laboratory", est un espace collaboratif où chacun peut venir créer, apprendre et partager. Initié par le **MIT** dans les années 2000, ce concept permet d'accéder à des outils de fabrication numérique comme des imprimantes 3D, des découpeuses laser, et bien plus encore. Les Fablabs sont des lieux où les idées prennent vie grâce à la technologie et à l'innovation.

<!-- truncate -->

### Les machines du Fablab

Notre Fablab est équipé de diverses machines pour répondre à tous vos besoins créatifs :

- **Imprimantes 3D** : Pour fabriquer des prototypes et des pièces en plastique.
- **Découpeuse laser** : Pour découper et graver du bois, du plastique et du tissu.
- **Fraiseuse numérique** : Pour usiner des pièces en bois, métal ou plastique avec précision.
- **Espace électronique** : Équipé pour créer des circuits et des projets électroniques.

### Les réalisations du Fablab

Découvrez quelques projets réalisés dans notre Fablab :

- **Tests de résistance** : Impression de divers objets pour tester la qualité des matériaux.
- **Amélioration de l'espace** : Création de solutions de rangement et d'organisateurs de tiroirs.
- **Trophées personnalisés** : Fabrication de trophées pour une compétition.
- **Cartes électroniques** : Développement et assemblage de cartes électroniques pour des projets internes.

## Plongeons dans l'Impression 3D

### Les filaments pour l'impression 3D

![Filaments](/assets/docs/filaments/filament-1.png)

Voici un tableau récapitulatif des différents types de filaments utilisés en impression 3D :

| Matériau             | Type      | Facile à Imprimer | Résistant | Durable | Nécessite Enceinte | Flexible | Résistant aux UV |
| -------------------- | --------- | :---------------: | :-------: | :-----: | :----------------: | :------: | :--------------: |
| **PLA**              | Standard  |        ✔️         |    ✔️     |   ✔️    |         ❌         |    ❌    |        ❌        |
| **PETG**             | Standard  |        ✔️         |    ✔️     |   ✔️    |         ✔️         |    ❌    |        ❌        |
| **ABS**              | Standard  |        ✔️         |    ✔️     |   ✔️    |         ✔️         |    ❌    |        ❌        |
| **Flex**             | Technique |        ✔️         |    ✔️     |   ✔️    |         ❌         |    ✔️    |        ❌        |
| **Nylon**            | Technique |        ✔️         |    ✔️     |   ✔️    |         ✔️         |    ❌    |        ❌        |
| **ASA**              | Technique |        ✔️         |    ✔️     |   ✔️    |         ✔️         |    ❌    |        ✔️        |
| **Polycarbonate**    | Technique |        ✔️         |    ✔️     |   ✔️    |         ✔️         |    ❌    |        ❌        |
| **Fibre de Carbone** | Composite |        ✔️         |    ✔️     |   ❌    |         ❌         |    ❌    |        ❌        |
| **Métal**            | Composite |        ✔️         |    ✔️     |   ❌    |         ❌         |    ❌    |        ❌        |
| **Bois**             | Composite |        ✔️         |    ❌     |   ❌    |         ❌         |    ❌    |        ❌        |

### Le système AMS de Bambulab

Le système **AMS** de Bambulab permet l'impression 3D avec jusqu'à quatre filaments différents sans changement manuel des bobines. Il utilise la reconnaissance automatique des filaments (**RFID**) et le changement automatique des bobines (**ABC**). L'AMS est également équipé d'un système de séchage des filaments pour améliorer la qualité d'impression.

![AMS](/assets/docs/bambulab/bambulab-2.png)

### L'extrudeur

L'**extrudeur** tire le filament et le fait avancer dans le corps chauffant. L'extrudeur de l'imprimante Bambulab X1 Carbon est un extrudeur direct, situé au-dessus de la plaque d'impression, offrant un meilleur contrôle de la température et de la pression du filament.

![Extrudeur](/assets/docs/bambulab/bambulab-3.png)

### Le corps chauffant

Le filament entre dans le corps chauffant, où il est fondu et extrudé à travers la buse. Le corps chauffant est équipé d'une cartouche chauffante et d'un capteur de température pour contrôler la température du filament.

![Corps chauffant](/assets/docs/bambulab/bambulab-4.png)

### La plaque

La **plaque** est la surface sur laquelle l'impression est réalisée. Elle est chauffée pour améliorer l'adhérence du filament et peut être texturée ou équipée de surfaces amovibles pour faciliter le retrait de l'impression.

![Plaque](/assets/docs/bambulab/bambulab-5.png)

### Le logiciel de découpe

Un **slicer** convertit votre modèle 3D en instructions d'impression. Dans ce guide, nous utiliserons **OrcaSlicer**, un slicer avancé compatible avec la plupart des imprimantes 3D.

![Logiciel](/assets/docs/orca/orcaslicer-1.png)

#### Importation de votre modèle 3D

1. Téléchargez un modèle 3D depuis des plateformes comme [MakerWorld](https://makerworld.com/), [Printables](https://www.printables.com/), [Thingiverse](https://www.thingiverse.com/), [Cults](https://cults3d.com/), ou [MyMiniFactory](https://www.myminifactory.com/).
2. Importez le modèle dans OrcaSlicer en cliquant sur "Importer".

![Importation](/assets/docs/orca/orcaslicer-2.png)

#### Création du contexte d'impression

1. Configurez l'imprimante dans le logiciel (modèle, diamètre de la buse, taille du plateau, matériau).
2. Choisissez le type de plateau (lisse, texturé, technique).
3. Sélectionnez le filament pour chaque fichier.
4. Définissez la hauteur des couches pour ajuster la qualité de l'impression.

![Contexte](/assets/docs/orca/orcaslicer-3.png)

#### Positionnement de l'objet sur le plateau

Choisissez l'orientation de l'objet pour des raisons techniques et esthétiques. L'impression par dépôt de filament (FDM) laisse des traces visibles, alors choisissez judicieusement l'orientation.

![Couches](/assets/docs/orca/orcaslicer-4.png)

#### Définition du remplissage de la pièce

1. Ajustez la densité de remplissage pour contrôler la solidité et le poids de l'impression.
2. Choisissez parmi différents motifs de remplissage (nids d'abeille, gyroïdes, grilles).

![Remplissage](/assets/docs/orca/orcaslicer-5.png)

#### Création de supports

Les supports sont nécessaires pour imprimer des parties en surplomb. Activez les supports et choisissez entre les types géométriques et organiques.

![Supports](/assets/docs/orca/orcaslicer-6.png)

#### Paramètres avancés

OrcaSlicer offre des paramètres avancés pour affiner votre impression :

- **Vitesse d'impression** : Contrôlez la vitesse de l'extrudeuse.
- **Réglages de température** : Définissez les températures de la buse et du plateau.
- **Vitesse du ventilateur** : Ajustez la vitesse de refroidissement du filament.
- **Réglages de rétraction** : Gérez la rétraction du filament pour éviter les bavures.

#### Sauvegarde et exportation des fichiers découpés

1. Sauvegardez le fichier découpé.
2. Exportez-le vers l'imprimante en insérant la carte SD.

![Exportation](/assets/docs/orca/orcaslicer-7.png)

#### Préparation de l'imprimante

1. Vérifiez que le filament est correctement chargé.
2. Assurez-vous qu'il y a suffisamment de filament pour l'impression.
3. Nettoyez et nivelez la plaque.
4. Lancez l'impression.

## Introduction à l'IA Embarquée

### Qu'est-ce que l'embarqué ?

L'embarqué désigne les **systèmes informatiques intégrés** à des objets du quotidien, comme les montres connectées ou les robots autonomes. Ces systèmes sont optimisés pour exécuter des tâches spécifiques avec des ressources limitées.

### Pourquoi l'embarqué est-il crucial aujourd'hui ?

- **Efficacité énergétique** : Fonctionne avec une faible consommation d'énergie.
- **Indépendance et autonomie** : Fonctionne 100% offline.
- **Temps réel** : Réponses ultra-rapides pour des applications critiques.

### Différence entre un microcontrôleur et un micro-ordinateur

| Caractéristique              | Microcontrôleur ⚙️                                                               | Micro-ordinateur 💻                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Définition**               | Un circuit intégré avec processeur, mémoire et périphériques sur une seule puce. | Un petit ordinateur avec processeur, mémoire, système d'exploitation et ports d'extension. |
| **Système d'exploitation**   | Aucun (exécute directement un programme en boucle)                               | Oui (ex. Linux sur Raspberry Pi)                                                           |
| **Puissance de calcul**      | Faible, optimisé pour des tâches simples et répétitives                          | Plus puissant, capable d'exécuter des applications complexes                               |
| **Mémoire (RAM & Stockage)** | Très limitée (quelques Ko à Mo)                                                  | Plus importante (512 Mo à plusieurs Go)                                                    |
| **Consommation d'énergie**   | Très basse (fonctionne sur batterie longtemps)                                   | Plus élevée (nécessite souvent une alimentation)                                           |
| **Programmation**            | Code souvent écrit en C ou en assembleur, avec un temps d'exécution précis       | Peut exécuter des langages variés (Python, Java, C++) et plusieurs processus en parallèle  |
| **Exemples d'utilisation**   | Commande d'un moteur, gestion de capteurs, robotique basique                     | Vision par ordinateur, IA embarquée, serveurs légers, stations météo connectées            |

### Perspectives futures

Avec l'évolution des microcontrôleurs, on voit apparaître des applications de plus en plus intelligentes :

- Voitures autonomes
- Monitoring médical en temps réel
- Surveillance assistée par IA

## Quels types d'appareils pour l'embarqué ?

### Les plateformes les plus connues

| Type de Carte     | Caractéristiques                                   | Exemples                      |
| ----------------- | -------------------------------------------------- | ----------------------------- |
| **CPU Only**      | Peu gourmand en énergie, adapté aux tâches légères | Raspberry Pi, Arduino         |
| **CPU + GPU/TPU** | Accélération du calcul pour l'IA et la vision      | NVIDIA Jetson, Coral Edge TPU |
| **FPGA**          | Ultra spécialisé, faible consommation              | Xilinx, Lattice               |

### Comparatif entre Raspberry Pi et Jetson

| Critère     | Raspberry Pi 5            | NVIDIA Jetson Nano        |
| ----------- | ------------------------- | ------------------------- |
| CPU         | Quad-core 64-bit          | Quad-core ARM Cortex-A57  |
| GPU         | Aucun dédié               | 128 cœurs CUDA            |
| Mémoire     | 8GB LPDDR4X               | 4GB LPDDR4                |
| Usage idéal | IoT, automates, domotique | Vision par ordinateur, IA |

**Conclusion** : La Raspberry Pi est idéale pour des solutions simples et efficaces, tandis que le Jetson Nano est plus adapté pour des besoins IA avancés.

### Focus sur la Raspberry Pi

![multiproc architecture](/assets/blog/welcome/rpi_schema.png)

La Raspberry Pi est un micro-ordinateur monocarte basé sur une architecture ARM, développé par la fondation Raspberry Pi. Conçue pour l'éducation, elle est devenue une référence dans le domaine du DIY, de l'embarqué et de l'IA.

- **Système d'exploitation** : Raspberry Pi OS, basé sur Debian.
- **Langages de programmation** : Python, C, Java, et plus.
- **Applications** : Domotique, robotique, serveurs web, stations météo, IA embarquée.

L'installation d'une Raspberry Pi est simple :

1. Une carte micro SD.
2. [RPI Imager](https://www.raspberrypi.com/software/) pour flasher la carte micro SD avec une image de votre choix.

## Le Computer Vision

![alt text](/assets/blog/welcome/computer_vision.png)

La Computer Vision est un domaine de l'IA qui permet aux machines de comprendre et d'analyser des images ou des vidéos.

### You Only Look Once (YOLO)

![alt text](/assets/blog/welcome/yolo_map.png)

YOLO est un algorithme de détection d'objets en temps réel qui traite l'image en une seule passe, rendant le processus extrêmement rapide et efficace.

![alt text](/assets/blog/welcome/yolo_grid.png)

## L'IA embarquée et le Computer Vision en temps réel

### Pourquoi embarquer l'IA sur des petits appareils ?

- **Confidentialité** : Pas besoin d'envoyer des données sensibles dans le cloud.
- **Autonomie** : Fonctionne sans connexion internet.
- **Réduction des coûts** : Moins de dépendance à une infrastructure serveur.

### Le défi du Computer Vision en temps réel

Détecter un objet en quelques millisecondes avec des ressources limitées est un véritable défi. Voici les obstacles à surmonter :

- Puissance de calcul limitée.
- Temps de traitement critique.
- Gestion des flux vidéo en continu.
- Latence minimale pour une réponse instantanée.

## Multiprocessing et IA Embarquée

### Introduction

Bienvenue dans cette partie du workshop où nous allons parler d'optimisation et de **temps réel**. Dans notre cas, nous devons traiter un **flux vidéo en continu**, exécuter une **inférence rapide**, et **envoyer une alerte** le plus vite possible.

Pour cela, nous allons exploiter **le multiprocessing** pour paralléliser les tâches et éviter les goulets d'étranglement !

### Matériel & Préparation

Nous allons utiliser :

- **Raspberry Pi 5** (8 Go de RAM)
- **PiCamera Module 3** : MAX 30 FPS / 12Mpx
- **Batterie ou adaptateur secteur**

Maintenant que nous connaissons la Raspberry Pi, nous pouvons découvrir tout son écosystème, avec notamment, sa gamme de caméras :

![camera](/assets/blog/welcome/camera.png)

L'un des sites principaux où trouver du matériel :

![alt text](/assets/blog/welcome/kubii.png)

#### Challenges & Contraintes

Nous sommes dans un contexte **100% offline**, il faut donc **maximiser les performances** de notre système embarqué en jouant sur :

- **L'optimisation CPU & RAM**
- **Le multiprocessing** pour exécuter plusieurs tâches en parallèle
- **Le choix d'une bonne résolution vidéo** pour ne pas surcharger le traitement
- **La réduction de latence** pour un temps de réponse optimal

### Déroulement du TP

Nous allons concevoir un programme **divisé en plusieurs modules**, chacun fonctionnant en **parallèle** grâce au multiprocessing.

#### Étape 1 : Création des Modules

1. **Acquisition de la vidéo**: Capturer le flux de la caméra en continu.
2. **Inférence avec YOLO**: Détecter une **intrusion humaine** en utilisant un modèle [**YOLO**](https://docs.ultralytics.com/fr).
3. **Alerte en cas d'intrusion**: Si une personne est détectée, afficher un message.
4. **Affichage en temps réel**: Montrer la vidéo avec les **bounding boxes** des intrus.

#### Étape 2 : Installation de l'environnement de travail

- **Création d'un environnement virtuel** afin d'isoler les dépendances :

Dans votre terminal :

```bash
python -m venv ENV_NAME
```

- **Installer les librairies** requises (`opencv`, `ultralytics`, `picamera2`)

Dans votre venv :

```bash
pip install -r requirements.txt
```

Voici le contenu du fichier `requirements.txt` :

```plaintext
ultralytics
opencv-python
websockets
picamera2
fastapi
uvicorn
streamlit
```

#### Étape 3 : Multiprocessing en Action

Nous allons exécuter chaque module dans un **processus séparé** afin d'optimiser le traitement du flux vidéo en **temps réel** !

![multiproc architecture](/assets/blog/welcome/multiproc.png)

Voici une structure de code possible :

```python
import multiprocessing
import cv2
from ultralytics import YOLO
from picamera2 import Picamera2
from multiprocessing import Queue
import numpy as np

def acquisition(queue: Queue) -> None:
    """
    Capture des images depuis la caméra Raspberry Pi et les place dans une file d'attente.

    Args:
        queue (Queue): File d'attente pour stocker les images capturées.
    """
    picam2 = Picamera2()
    picam2.configure(picam2.create_preview_configuration(main={"size": (640, 640)}))
    picam2.start()

    while True:
        frame = picam2.capture_array()
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        queue.put(frame)

def inference(frame_queue: Queue, alert_queue: Queue, display_queue: Queue) -> None:
    """
    Effectue l'inférence avec YOLOv8 pour détecter les objets et envoie les résultats.

    Args:
        frame_queue (Queue): File d'attente contenant les images à traiter.
        alert_queue (Queue): File d'attente pour envoyer des alertes si une personne est détectée.
        display_queue (Queue): File d'attente pour afficher les résultats avec annotations.
    """
    model = YOLO("yolov8n.pt")  # Charge le modèle YOLOv8
    while True:
        frame = frame_queue.get()  # Récupère une image de la file d'attente
        results = model(frame)  # Détecte les objets

        # Créer une copie de l'image pour ne montrer que les personnes
        frame_persons = frame.copy()

        for result in results:
            for box in result.boxes:
                cls = int(box.cls[0])  # Classe de l'objet détecté
                if cls == 0:  # Classe 0 = humain
                    alert_queue.put("Personne détectée !")
                    # Dessiner seulement les bounding boxes des personnes
                    x1, y1, x2, y2 = map(int, box.xyxy[0])  # Coordonnées de la boîte
                    cv2.rectangle(frame_persons, (x1, y1), (x2, y2), (0, 255, 0), 2)
                    cv2.putText(frame_persons, "Personne", (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        display_queue.put(frame_persons)

def display_results(display_queue: Queue) -> None:
    """
    Affiche les résultats de la détection en temps réel.

    Args:
        display_queue (Queue): File d'attente contenant les images annotées à afficher.
    """
    cv2.namedWindow("Détection de personnes", cv2.WINDOW_NORMAL)

    while True:
        frame = display_queue.get()
        cv2.imshow("Détection de personnes", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cv2.destroyAllWindows()

def alert_system(alert_queue: Queue) -> None:
    """
    Gère les alertes lorsqu'une personne est détectée.

    Args:
        alert_queue (Queue): File d'attente contenant les messages d'alerte.
    """
    while True:
        message = alert_queue.get()
        print(f"WARNING {message}")

if __name__ == "__main__":
    frame_queue: Queue = multiprocessing.Queue()
    alert_queue: Queue = multiprocessing.Queue()
    display_queue: Queue = multiprocessing.Queue()

    p1 = multiprocessing.Process(target=acquisition, args=(frame_queue,))
    p2 = multiprocessing.Process(target=inference, args=(frame_queue, alert_queue, display_queue))
    p3 = multiprocessing.Process(target=alert_system, args=(alert_queue,))
    p4 = multiprocessing.Process(target=display_results, args=(display_queue,))

    p1.start()
    p2.start()
    p3.start()
    p4.start()

    p1.join()
    p2.join()
    p3.join()
    p4.join()
```

### Résultats Attendus

- La caméra capture un flux vidéo **en continu**
- L'inférence YOLO détecte une **présence humaine**
- Une alerte est envoyée dès qu'une **intrusion** est détectée
- Le tout fonctionne **en parallèle et en temps réel**

### Conclusion & Améliorations

Bravo ! Vous avez mis en place un système de **surveillance en temps réel** sur un **appareil embarqué** !

**Améliorations possibles :**

- **Optimiser la gestion de la mémoire** pour éviter les fuites.
- **Redimensionner les images** pour réduire la charge de traitement.
- **Appliquer la quantization** pour accélérer l'inférence.
- **Ajouter un mode serveur** pour envoyer les alertes sur un réseau local.

### BONUS : Qu'est-ce que la Quantization en IA ?

La quantization est une technique utilisée en intelligence artificielle, notamment pour optimiser les modèles de deep learning afin qu'ils fonctionnent plus efficacement sur des appareils à ressources limitées.

Un modèle de deep learning utilise :

- poids
- des activations

Tous représentés en float32 (32 bits).

La quantization réduit la précision de ces valeurs en les convertissant en int8 (entiers sur 8 bits), ce qui diminue la taille du modèle et accélère son exécution, tout en conservant (souvent/parfois) des performances acceptables.

Finalement, nous obtenons un modèle plus léger à la fois à charger dans la RAM mais aussi à inférer.

Puisque nous utilisons YOLO depuis la [bibliothèque ultralytics](https://docs.ultralytics.com/fr/integrations/ncnn/#installation), allons voir comment cela s'applique à notre cas :

```python
from ultralytics import YOLO

# Load the YOLO11 model
model = YOLO("yolo11n.pt")

# Export the model to NCNN format
model.export(format="ncnn")  # creates '/yolo11n_ncnn_model'

# Load the exported NCNN model
ncnn_model = YOLO("./yolo11n_ncnn_model")

# Run inference
results = ncnn_model("https://ultralytics.com/images/bus.jpg")
```

Tentez de nouveau d'éxécuter ce programme en chargeant notre nouveau réseau !

## Conclusion

Vous avez maintenant toutes les bases pour déployer de l'IA embarquée sur Raspberry Pi et d'autres appareils !
