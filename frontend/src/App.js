import React, { useState } from 'react';
import './App.css';

function App() {
  // On garde uniquement la variable 'message' pour l'affichage
  const [message] = useState("En attente du backend...");

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Mon Projet MERN</h1>
      </nav>

      <header className="App-header">
        <div className="card">
          <h2>Bienvenue sur le Frontend</h2>
          <p>Statut de la connexion :</p>
          <div className="status-badge">
            {message}
          </div>
        </div>

        <div className="next-steps">
          <h3>Prochaines étapes :</h3>
          <ul>
            <li>Créer le dossier <code>backend/</code></li>
            <li>Connecter MongoDB</li>
            <li>Remplacer ce message par un <code>fetch()</code></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
