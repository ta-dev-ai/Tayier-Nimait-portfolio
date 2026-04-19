# Cahier des Charges : Universal Project Launcher (UPL)

## 1. Vision du Projet

L'**Universal Project Launcher (UPL)** est un outil autonome conçu pour simplifier radicalement le démarrage de projets Open Source (GitHub) pour les utilisateurs finaux et les développeurs. Il élimine la complexité liée à la configuration manuelle des environnements (Node.js, Python, VENV, etc.) via une interface graphique intuitive.

## 2. Objectifs Globaux

- **Autonomie** : Fonctionner sans intervention manuelle dans le terminal.
- **Polyvalence** : Supporter les projets web (React/Vite/Next) et les projets Python.
- **Zéro Configuration** : Détecter et installer automatiquement les dépendances manquantes.
- **Portabilité** : Distribué sous forme d'un exécutable unique (`.exe`).

---

## 3. Algorithme Global de Fonctionnement

### Flux Utilisateur (User Experience)

1. **Ouverture** : L'utilisateur lance `UPL.exe`.
2. **Importation** : L'utilisateur effectue un **Glisser-Déposer (Drag & Drop)** de n'importe quel fichier de la racine du projet cible (ex: `package.json`, `README.md`, `requirements.txt`) dans l'interface.
3. **Analyse** : Le programme identifie le chemin racine du projet à partir du fichier déposé.
4. **Démarrage unique** : Un seul bouton **DÉMARRER** lance la vérification, l'installation des dépendances et le démarrage automatique.

### Logique Interne (Backend Logic)

L'algorithme de détection suit une hiérarchie stricte pour identifier la stack technologique :

#### Étape A : Identification de la Stack

- **SI** présence de `package.json` -> **Stack WEB (Node.js)**.
- **SI** présence de `requirements.txt`, `pyproject.toml` ou `.py` -> **Stack PYTHON**.
- **SI** présence de `go.mod`, `Cargo.toml`, etc. -> **Stacks Futures** (Go, Rust).

#### Étape B : Vérification des Prérequis Système

- Vérifier si les moteurs d'exécution sont installés (`node`, `python`).
- Alerter l'utilisateur avec un lien de téléchargement direct si un moteur est manquant.

#### Étape C : Gestion des Dépendances

- **Pour Node.js** : Vérifier l'existence de `node_modules`. Si absent, exécuter `npm install`, `yarn install` ou `pnpm install` selon le lockfile détecté.
- **Pour Python** :
  1. Créer un environnement virtuel (`venv`) local au projet s'il n'existe pas.
  2. Installer les dépendances via `pip install -r requirements.txt`.

#### Étape D : Lancement du Projet

- Détecter le script de démarrage optimal :
  - `npm run dev` ou `npm start` (Web).
  - `python main.py` ou `python run.py` (Python).
- Lancer automatiquement les processus détectés après la préparation.
- Supporter un scénario mixte front + back si les deux stacks sont présentes dans l'arborescence.

---

## 4. Spécifications Techniques

- **Langage** : Python 3.12+.
- **Interface Graphique (GUI)** : PySide6 (Qt) pour un rendu professionnel et fluide.
- **Gestion de Processus** : Utilisation de `QProcess` pour capturer les flux `stdout/stderr` et les afficher dans un terminal intégré.
- **Packaging** : Utilisation de **PyInstaller** ou **Nuitka** pour la compilation en `.exe`.

---

## 5. Fonctionnalités Avancées (Roadmap)

- **Multi-Projets** : Historique des derniers projets lancés.
- **Sauvegarde d'État** : Possibilité de créer des "Snapshots" Git avant le lancement (pour éviter les cassures dues à l'IA).
- **Auto-Update** : Le launcher se met à jour lui-même.
- **Détection IA** : Utilisation d'un mini-LLM local ou d'une regex avancée pour analyser le `README.md` et déterminer des commandes de lancement non-standard.

---

_Date : 5 Avril 2026_  
_Auteur : Bio-Inspired System Architect_
