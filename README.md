# CV Interactif avec QR Code

Ce script Python génère un CV interactif avec un code QR qui, lorsqu'il est scanné, dirige l'utilisateur vers votre CV en ligne avec des liens vers vos profils GitHub et LinkedIn.

## Installation

1. Installez les dépendances requises :
   \`\`\`
   pip install -r requirements.txt
   \`\`\`

2. Modifiez les informations personnelles dans le fichier `cv_interactif.py` :
   - NOM
   - TITRE
   - EMAIL
   - TELEPHONE
   - GITHUB
   - LINKEDIN
   - COMPETENCES
   - EXPERIENCES
   - FORMATION

## Utilisation

1. Exécutez le script :
   \`\`\`
   python cv_interactif.py
   \`\`\`

2. Un navigateur s'ouvrira automatiquement avec votre CV.
3. Un code QR sera généré dans le dossier `static`.
4. Pour accéder au CV depuis un appareil mobile, scannez le code QR affiché en bas du CV (les deux appareils doivent être sur le même réseau).

## Fonctionnalités

- CV responsive avec design moderne
- Liens directs vers GitHub et LinkedIn
- Code QR pour un accès facile depuis des appareils mobiles
- Possibilité d'imprimer le CV (le code QR ne sera pas imprimé)
