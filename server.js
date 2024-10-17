const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques
app.use(express.static(__dirname));

// Route par défaut
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
