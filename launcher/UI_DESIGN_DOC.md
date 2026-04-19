# Spécifications de l'Interface Graphique (UI/UX) - Universal Project Launcher (UPL)

## 1. Philosophie du Design

L'interface doit être **élégante**, **minimaliste** et **ergonomique**. Elle s'inspire du thème "Luminous Tactility" (bio-inspiré), utilisant des tons sombres, des contrastes néons et des effets de profondeur (glassmorphism).

### Objectif : "Zéro Effort"

L'utilisateur doit pouvoir lancer n'importe quel projet avec **un seul bouton** apres avoir depose le dossier ou un fichier racine.

---

## 2. Structure Visuelle (Layout)

### A. La Zone d'Atterrissage (Drop Zone)

- **Aspect** : Un grand rectangle central avec des bordures en pointillés néons.
- **Micro-animation** : Les bordures "respirent" ou changent de couleur (ex: du bleu au vert) lorsqu'un fichier est survolé.
- **Texte** : "Glissez votre dossier projet ou votre `README.md` ici".

### B. Le Panneau de Détection (Smart Analysis)

Une fois le projet déposé, une barre de progression s'anime et affiche les icônes des technologies détectées :

- **Front-end** : Badges dynamiques (React, Vue, Angular, React Native).
- **Back-end** : Badges dynamiques (Python, Java/Spring, C#/.NET).
- **Indicateur d'État** : Icône de coche verte si les prérequis système (Node.js, JDK, Python) sont installés.

### C. La Console Intégrée (Logs)

- **Style** : Une zone sombre en bas de fenêtre imitant un terminal.
- **Typographie** : Police mono-espace (Consolas ou Fira Code).
- **Feedback** : Affichage en temps réel des commandes `npm install`, `pip install`, `mvn compile`, etc.

### D. Bouton Principal

- **Libellé** : `DÉMARRER LE PROJET`
- **Fonction** : Lancer l'analyse, l'installation des dépendances et le démarrage des stacks détectées.
- **Rôle** : Remplacer les anciens boutons séparés de vérification et de lancement.

---

## 3. Comportement par Stack Technologique

### 🌐 Écosystème FRONT-END (JS/TS)

- **Fichiers cibles** : `package.json`, `yarn.lock`, `pnpm-lock.yaml`.
- **Analyse** : Détecte si c'est du React, Vue (via `vue.js` dans deps) ou Angular.
- **Action** : Gestion intelligente des gestionnaires de packs (NPM vs Yarn).

### ⚙️ Écosystème BACK-END

- **Python** : Détecte `requirements.txt` ou `pyproject.toml`. Crée un `venv` automatique.
- **Java** : Détecte `pom.xml` (Maven) ou `build.gradle` (Gradle). Vérifie la version du JDK.
- **C#** : Détecte `.csproj` ou `.sln`. Vérifie la présence du SDK .NET.

---

## 4. Adaptativité Multi-OS

L'interface doit respecter les codes visuels du système hôte tout en gardant son identité :

- **Windows** : Support du mode sombre natif et barre de titre personnalisée.
- **Mac OS** : Coins très arrondis, effet de transparence "Vibrancy".
- **Linux** : Layout flexible s'adaptant aux thèmes GTK/Qt.

---

## 5. Interactions Ergonomiques

- **Double-clic sur le log** : Ouvre le dossier du projet dans l'explorateur de fichiers.
- **Notifications système** : Une bulle de notification apparaît une fois que le serveur est prêt (ex: "Projet lancé sur http://localhost:5173").

---

_Dernière mise à jour : 5 Avril 2026_  
_Auteur : Bio-Inspired System Architect_
