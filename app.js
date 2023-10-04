//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");


console.log(
  "Opgave 1.2 - Lav et program, som skriver “Hello” og på næste linje skriver “World” i konsollen"
);
//Lav jeres svar her
console.log("Hello \nWorld");


console.log(
  "Opgave 1.3 - Lav et program, som skriver følgende i konsollen. → (se html-dokumentet)"
);
//Lav jeres svar her
console.log("* \n** \n*** \n** \n*");


console.log(
  "Opgave 1.4 - Lav et program, hvor i definere en konstant eller variabel og programmet skriver hvilken type det er, i konsollen. (Altså om det er en int, string, bool osv."
);
//Lav jeres svar her
let definition = 3 < 5;
console.log(typeof definition);


console.log(
  "Opgave 1.5 - Print svarene på følgende matematiske operationer (se html-dokukentet) ved at skrive det direkte ind i Console.log();"
);
//Lav jeres svar her
console.log(10 - 5);
console.log(25 / 3);
console.log(25 % 3);
console.log(25 % 2);
console.log(3 ** 2);


console.log(
  "Opgave 1.6 - Skriv i konsollen kombinationen af de her 2 strings (se html-dokumentet) ved brug af deres navn"
);
//Lav jeres svar her
let tekst1 = "Hello ";
let tekst2 = "World!";
console.log(tekst1 + tekst2);


console.log(
  "Opgave 1.7 - Udskriv længden af den string `GF2 Online` - altså antal tegn"
);
//Lav jeres svar her
let eksempelTekst = "GF2 Online";
let length = eksempelTekst.length;
console.log(length);

console.log(
  "Opgave 1.8 - Lav et program som skriver et tilfældig tal i konsollen"
);
//Lav jeres svar her
console.log(Math.random());


console.log(
  "Opgave 1.9 - Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor lige præcis det bliver skrevet"
);
//Lav jeres svar her
let number = 23;

console.log(number = "23")
console.log("Den printer den nuværende variabel som en string i stedet for en integer")

console.log(number == "23")
console.log("Den sammenligner variablen '23' med '23'")

console.log(number === "23")
console.log("variablet er den samme værdi og type, altså 23 og en string")

console.log(number -= 23)
console.log("Den sætter variablen: number(altså '23') = number(altså '23') - 23, hvilket er 0")

console.log(number += 23)
console.log("Den sætter vores ny defineret variabel 0, til at være number(altså 0) = number(altså 0) + 23, hvilket er 23")

console.log(number += "23")
console.log("Den lægger vores variabel 23, som en string sammen med en anden string på '23', så vi for '2323'")

console.log(number -= "46")
console.log("Den trækker '46' fra vores ny defineret variabel på '2323', hvilket bliver 2277")

console.log(number != "23")
console.log("Eftersom number er ny defineret til at være 2277 er det ikke ligmed '23' og != betyder ikke ligmed er resultatet True")

console.log(number **= 2)
console.log("Eftersom number er ligmed 2277 bliver number(altså 2277) * 2277 = 5184729, fordi ** er det samme som number opløftet i 2")

console.log(
  "Opgave 2.1 - I skal skrive et stykke kode som fortæller om et tal (int) er lige eller ulige"
);
//Lav jeres svar her

let tal = 20;

if (tal % 2 == 0) {
  console.log("tallet er lige")
} else {
  console.log("Tallet er ikke lige")
}


console.log(
  "Opgave 2.2 - I skal skrive et stykke kode som fortæller om 5 går op i det tal som i vælger (int). Hvis den går op i det skal i skrive: 5 går op i (det tal i har valgt"
);
//Lav jeres svar her

let valgtTal = 55;

if (valgtTal % 5 == 0) {
  console.log("5 går op i det valgte tal")
} else {
  console.log("5 går ikke op i det valgte tal")
}


console.log(
  "Opgave 2.3 - Lav opgaven↑ igen, men i stedet for selv at vælge et tal skal i lave sådan at den selv vælger et tal mellem 0 og 100"
);
//Lav jeres svar her

let randomTal = Math.floor(Math.random() * 100);

if (randomTal % 5 == 0) {
  console.log("5 går op i det random tal: " + randomTal)
} else {
  console.log("5 går ikke op det random tal: " + randomTal)
}


console.log(
  "Opgave 2.4 - Lav et program som fortæller jer hvilke af de her 3 tal der er størst: a=25, b=33, c=12"
);
//Lav jeres svar her

a = 25
b = 33
c = 12

if (a > b) {
    if (a > c ) {
    console.log("a er det største tal")
  }
} else if (b > c) {
  console.log("b er det største tal")
} else {
  console.log("c er det største tal")
}


console.log(
  "Opgave 2.5 - Lav et program der fortæller hvor varmt det er ud fra en temperatur. Kategorierne er i html-dokumentet"
);
//Lav jeres svar her

let udeTemp = 17

if (udeTemp <= 0) {
  console.log("Det er frostvejr")
} else if (udeTemp <= 10) {
  console.log("Det er meget koldt")
} else if (udeTemp <= 20) {
  console.log("Det er koldt") 
} else if (udeTemp <= 30) {
  console.log("Det er normalt vejr")
} else if (udeTemp <= 40) {
  console.log("Det er varmt")
} else {
  console.log("Det er meget varmt")
}


console.log(
  "Opgave 2.6 - Lav et program som omformer tal til ugedage ved brug af conditionals, som eksemplerne i html-dokumentet"
);
//Lav jeres svar her

let ugeDag = 3

if (ugeDag == 1) {
  console.log("Det er mandag")
} else if (ugeDag == 2) {
  console.log("Det er tirsdag")
} else if (ugeDag == 3) {
  console.log("Det er onsdag") 
} else if (ugeDag == 4) {
  console.log("Det er torsdag")
} else if (ugeDag == 5) {
  console.log("Det er fredag")
} else if (ugeDag == 6) {
  console.log("Det er lørdag")
} else if (ugeDag == 7) {
  console.log("Det er søndag")
} else {
  console.log("Der er 7 dage på en uge. Intast et tal mellem 1-7 for at finde ugedagen")
}














