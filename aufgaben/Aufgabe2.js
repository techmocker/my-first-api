const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Gib die Temperatur in Celsius ein: ', (celsius) => {
  // Konvertiere die Eingabe von String zu Zahl
  const celsiusValue = parseFloat(celsius);

  // Überprüfe, ob die Eingabe eine gültige Zahl ist
  if (!isNaN(celsiusValue)) {
    // Berechne die Temperatur in Fahrenheit
    const fahrenheit = (celsiusValue * 9/5) + 32;

    // Gib das Ergebnis aus
    console.log(`${celsiusValue} Grad Celsius entsprechen ${fahrenheit.toFixed(2)} Grad Fahrenheit.`);
  } else {
    // Falls die Eingabe keine gültige Zahl ist, gib eine Fehlermeldung aus
    console.log('Ungültige Eingabe. Bitte gib eine Zahl für die Temperatur in Celsius ein.');
  }

  // Schließe die Benutzereingabe
  rl.close();
});
