const express = require('express');
const app = express();
const port = 3000;

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Route par défaut pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Variable pour stocker la position du modèle
let modelPosition = { x: 0, y: 0, z: -5 }; // Position par défaut

// Route pour enregistrer la position du modèle
app.post('/save-position', (req, res) => {
    modelPosition = req.body;
    res.json({ success: true });
});

// Route pour obtenir la position du modèle
app.get('/get-position', (req, res) => {
    res.json({ position: modelPosition });
});

// Route pour réinitialiser la position du modèle
app.post('/reset-position', (req, res) => {
    modelPosition = { x: 0, y: 0, z: -5 }; // Réinitialiser à la position par défaut
    res.json({ success: true });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
