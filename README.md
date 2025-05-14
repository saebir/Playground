# Playground app (design)
 Det er en eksperimentel React Native-app bygget med Expo, som samler forskellige UI-komponenter og funktionelle elementer ét sted. Appen fungerer som en legeplads til design, struktur og komponentudvikling. Den er ideel til læring og fremvisning af små funktioner.

## Hvad indeholder Playground?

Playground-appen består af små skærme og komponenter, der viser fx:

-  Knapper og interaktion
-  Tekstfelter og inputhåndtering
-  Adgangskode-validering med feedback
-  Datoformatering og inputkontrol
-  Dropdown-menuer
-  Visning af billeder med styling
-  Fælles design via `sharedStyles.js`

  
## Teknologier brugt
- React Native  
- Expo  
- JavaScript (ES6+)  
- Visual Studio Code  
- Metro bundler 

## Sådan kører du projektet på din egen computer
### 1. Installer Node.js
   
Download og installer Node.js fra https://nodejs.org
(Node.js indeholder også npm, som vi skal bruge)

### 2. Installer Expo CLI (kun første gang)
   
Åbn terminalen/kommandoprompt og skriv:

```bash
npm install -g expo-cli
```

### 3. Klon projektet fra Github

```bash
https://github.com/saebir/Playground.git
cd ToDo-liste
```

### 4. Installer projektets afhængigheder

```bash
npm install
```

### 5. Start appen med Expo

```bash
npx expo start
```

Når Metro bundler åbner kan man vælge at scanne QR-koden for at se appen på telefonen, eller åbne en simulator der er sat op.

### 6. Afhængiheder
- "@react-navigation/native": "^7.1.8",
- "@react-navigation/native-stack": "^7.3.12",
- "expo": "~53.0.8",
- "expo-status-bar": "~2.2.3",
- "react": "19.0.0",
- "react-native": "0.79.2",
- "react-native-paper": "^5.14.1",
- "react-native-safe-area-context": "5.4.0",
- "react-native-screens": "~4.10.0",
- "react-native-vector-icons": "^10.2.0"
