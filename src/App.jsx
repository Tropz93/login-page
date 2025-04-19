import React, { useState } from 'react';
import './styles.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Bitte füllen Sie alle Felder aus.');
      return;
    }

    // Hier würde die eigentliche Anmelde-Logik stehen
    if (username === 'test' && password === 'test') {
      setErrorMessage('Anmeldung erfolgreich!');
    } else {
      setErrorMessage('Anmeldung fehlgeschlagen. Falscher Benutzername oder Passwort.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Anmeldung</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Benutzername</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Gib deinen Benutzernamen ein"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passwort</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Gib dein Passwort ein"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Angemeldet bleiben</label>
          </div>
          <button type="submit">Anmelden</button>
          <div className="forgot-password-container">
            <a href="#" className="forgot-password">Passwort vergessen?</a>
          </div>
          <div className="register-container">
            <a href="#" className="register-link">Registrieren</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
