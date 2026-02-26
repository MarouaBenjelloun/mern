import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Un état pour stocker les données de ton futur Backend
  const [message, setMessage] = useState("En attente du backend...");

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