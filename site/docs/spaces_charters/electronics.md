---
title: Charte de l'espace électronique
pagination_label: Charte de l'espace électronique
sidebar_label: Électronique
sidebar_position: 1
description: Charte décrivant les règles, les bonnes pratiques et les contacts pour l'espace électronique du FabLab.
slug: electronic-space-charter
tags: [charter, security, good practices]
last_update:
  date: 2025-07-31
  author: Eliott A. Roussille, Hugo Degioanni
---
import { FileText, TriangleAlert, CheckSquare, Pin, Wrench, Siren, Phone } from 'lucide-react';

# Charte de l'espace électronique

## <FileText size={32} /> Description de l'espace

- L'espace électronique est dédié à la conception, au prototypage et à la réparation de circuits électroniques.
- On y trouve notamment du matériel de soudure, des appareils de mesure (multimètres, oscilloscopes) ainsi que divers composants électroniques.

## <TriangleAlert size={32} /> Règles de sécurité

- **Interdiction de manger ou boire dans l'espace électronique**, pour éviter tout risque d'électrocution ou d'endommagement du matériel.
- **Ne jamais laisser un fer à souder chaud sans surveillance.**
- **Toujours utiliser un ventilateur d'extraction lors des soudures.**
- **Éviter tout contact avec des éléments chauds** (fer à souder, composants récemment soudés, pistolet thermique...).
- Ne pas dépasser **320 °C pour souder** et **350 °C pour dessouder** — ou demander l'aide d'un·e référent·e si besoin.
- **Ne jamais travailler sur un circuit sous tension supérieure à 24 V** sans supervision ou formation adaptée.

## <CheckSquare size={32} /> Bonnes pratiques et recommandations

- Nettoyer la panne du fer à souder avant chaque usage.
- Vérifier les réglages de température avant d'allumer une station de soudage.
- Couper proprement les fils après soudure pour éviter tout court-circuit.
- Tester les montages sur breadboard avant toute soudure définitive.
- Respecter un **code couleur cohérent** pour les câbles (rouge = V+, noir = masse, etc.).
- Manipuler les appareils de mesure (multimètre, oscilloscope…) avec précaution — demander conseil si nécessaire.
- **Utiliser en priorité les composants déjà ouverts** avant d'en entamer de nouveaux.
- Vérifier la polarité des composants avant soudure pour éviter les risques de court-circuit ou d'explosion (ex : condensateurs électrolytiques).
- **Travailler sur une chaise reliée à la masse** (comme la grande chaise noire de l'espace) permet de minimiser les risques liés aux décharges électrostatiques.
- **Garder un espace de travail propre et organisé** pendant toute manipulation électronique.

## <Wrench size={32} /> Matériel à disposition

- Stations de soudage et fers à souder
- Appareils de mesure : multimètres, oscilloscopes, générateurs de signaux
- Alimentations de laboratoire réglables
- Outils divers : pinces coupantes, dénudeurs, tournevis, pinces antistatiques
- Composants électroniques : résistances, condensateurs, diodes, transistors, microcontrôleurs, capteurs
- Matériel de prototypage : breadboards, fils de connexion (jumpers), plaques PCB vierges

## <Pin size={32} /> Rangement et nettoyage

- **Ranger chaque outil à sa place** immédiatement après utilisation.
- **Nettoyer les stations de soudage** (résidus d'étain, brossage de la panne), puis **éteindre et débrancher**.
- **Remettre tous les composants non utilisés** dans leur rangement d'origine.
- **Ne pas mélanger** les composants pour garantir leur bon état.

## <Siren size={32} /> En cas de problème

- Signaler toute **panne, casse ou dysfonctionnement** à un·e responsable ou référent·e technique.
- Ne jamais intervenir seul·e sur un matériel inconnu ou endommagé sans validation préalable.

## <Phone size={32} /> Contacts

| Rôle ou fonction   | Nom            | Moyen de contact |
| ------------------ | -------------- | ---------------- |
| Responsable espace | Robin L'HYVER  | @robinmoon       |
| Référent technique | Hugo DEGIOANNI | @loxa            |
| Référent technique | Urbain LANTRÈS | @urbanosaurus    |

Merci de respecter ces consignes pour que cet espace reste accessible et agréable à utiliser pour tout le monde !

---

Dernière mise à jour : Juillet 2025

Auteurs : [Eliott A. Roussille](https://github.com/aust-1), [Hugo Degioanni](https://www.linkedin.com/in/hdegioanni)
