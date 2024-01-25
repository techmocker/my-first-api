const { faker } = require('@faker-js/faker');

// Erzeuge einen zufälligen Benutzer
const randomUser = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  country: faker.location.country()
};

// Gib die generierten Informationen aus
console.log('Zufälliger Benutzer:');
console.log('Name:', randomUser.name);
console.log('E-Mail:', randomUser.email);
console.log('Adresse:', randomUser.address);
console.log('Stadt:', randomUser.city);
console.log('Land:', randomUser.country);


//Random Strings
random(12); // 'qCCm2Yoyycjm' or others

var random = require('random-string-generator');
var result = random(100000, 'scoped:ABCDE');
var stat = [0, 0, 0, 0, 0];
for (var i in result) {
    var s = result[i];
    switch (s) {
        case 'A': stat[0]++; break;
        case 'B': stat[1]++; break;
        case 'C': stat[2]++; break;
        case 'D': stat[3]++; break;
        case 'E': stat[4]++; break;
        default: break;
    }
}

function output(char, num) {
    return char + ': ' + stat[num] / 1000 + '%';
}

console.log(output('A', 0));
console.log(output('B', 1));
console.log(output('C', 2));
console.log(output('D', 3));
console.log(output('E', 4));