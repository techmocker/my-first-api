const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Aufgabe3.html'));
});

app.post('/generatePassword', (req, res) => {
  const passwordLength = parseInt(req.body.passwordLength);
  const password = generatePassword(passwordLength);

  // Überprüfe, ob das Passwort nicht leer ist, bevor es gesendet wird
  if (password.trim() !== '') {
    // Senden Sie das Passwort an den Client
    res.send(password);

    // Gib das Passwort auch in der Server-Konsole aus
    console.log('Generiertes Passwort:', password);
  } else {
    // Falls das Passwort leer ist, sende eine Fehlermeldung
    res.status(500).send('Fehler beim Generieren des Passworts.');
  }
});


function generatePassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
