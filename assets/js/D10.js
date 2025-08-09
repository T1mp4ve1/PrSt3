/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Esercizio_A");

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("");
console.log("Esercizio_B");

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("");
console.log("Esercizio_C");

let me = [
  {
    name: "Pavel",
    surname: "Timofeev",
    age: "35",
  },
];
console.log(me[0]);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("");
console.log("Esercizio_D");

let A_new = structuredClone(me);
for (let i = 0; i < A_new.length; i++) {
  delete A_new[i].age;
}
console.log(A_new[0]);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("");
console.log("Esercizio_E");

let B_new = structuredClone(me);
for (let i = 0; i < B_new.length; i++) {
  B_new[i].skills = ["Java Scrip", "Nothing++"];
}
console.log(B_new[0]);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("");
console.log("Esercizio_F");

let F_new = structuredClone(B_new);
for (let i = 0; i < F_new.length; i++) {
  F_new[i].skills.push("Nothing#");
}
console.log(F_new[0]);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("");
console.log("Esercizio_G");

let G_me = structuredClone(F_new);
for (let i = 0; i < G_me.length; i++) {
  console.log(G_me[i].skills);
  G_me[i].skills.pop();
  console.log(G_me[i].skills);
}

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("");
console.log("Esercizio_1");

const dice = function () {
  const result = Math.floor(Math.random() * 6 + 1);
  return result;
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("");
console.log("Esercizio_2");

const whoIsBigger = function (a, b) {
  let result = "";
  if (a < b) {
    result = b;
  } else if (a > b) {
    result = a;
  } else {
    result = "Numeri sono uguali.";
  }
  return result;
};
console.log(whoIsBigger(5, 8));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("");
console.log("Esercizio_3");

const splitMe = function (str) {
  return str.split(" ");
};
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("");
console.log("Esercizio_5");

const deleteOne = function (str, boo) {
  str = str.toString();
  result = "";
  if (boo === true) {
    result = str.slice(1);
  } else if (boo === false) {
    result = str.slice(0, -1);
  }
  return result;
};
console.log(deleteOne("epicode", 2 === 2));
console.log(deleteOne("epicode", 1 === 2));
console.log(deleteOne(123456, 1 === 2));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("");
console.log("Esercizio_5");

function onlyLetters(str) {
  return str
    .split(" ")
    .filter((e) => e < "0" || e > "9")
    .join(" ");
}
console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("");
console.log("Esercizio_6");

const isThisAnEmail = function (email) {
  const IndexA = email.indexOf("@");
  const IndexP = email.lastIndexOf(".");

  if (typeof email !== "string") {
  } else if (IndexA <= 1 || IndexP < IndexA + 2) {
    return "email non valido";
  }
  return true;
};
console.log(isThisAnEmail("pavel@gmail.com"));
console.log(isThisAnEmail("a.jsh@@@.fkdj.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("");
console.log("Esercizio_7");

function whatDayIsIt() {
  const giorni = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const oggi = new Date();
  // console.log(oggi);
  return giorni[oggi.getDay()];
}
console.log("Oggi è:", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("");
console.log("Esercizio_8");

const rollTheDices = function (n) {
  let somm = 0;
  let array = [];
  for (let i = 0; i < n; i++) {
    let ranNum = dice();
    array.push(ranNum);
    somm += ranNum;
  }

  return {
    sum: somm,
    values: array,
  };
};
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("");
console.log("Esercizio_9");

const howManyDays = function (data) {
  const oggi = new Date();
  // console.log(oggi);
  const partenza = new Date(data);
  // console.log(partenza);
  const result = oggi - partenza;
  // console.log(result);
  giorni = Math.floor(result / 1000 / 60 / 1440);
  // console.log(giorni);
  return giorni;
};
console.log("Giorni trascorsi:", howManyDays("2025-01-01"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("");
console.log("Esercizio_10");

const isTodayMyBirthday = function (d, m) {
  let compleannoG = d;
  let compleannoM = m - 1;

  const oggi = new Date();
  const mese = oggi.getMonth();
  const giorno = oggi.getDate();
  return compleannoG === giorno && compleannoM === mese;
};
console.log(isTodayMyBirthday(8, 8));

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("");
console.log("Esercizio_11");

let ArrayObj = structuredClone(me);
console.log("Prima:", me);
const deleteProp = function (obj, str) {
  for (let i = 0; i < obj.length; i++) {
    delete obj[i].age;
  }
  return obj;
};
console.log("Dopo:", deleteProp(ArrayObj, "age"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

console.log("");
console.log("Esercizio_12");

const newestMovie = function (array) {
  let newest = movies[0];
  for (let i = 0; i < array.length; i++) {
    let y = array[i];
    if (parseInt(y.Year) > parseInt(newest.Year)) {
      newest = movies[i];
    }
  }
  return newest;
};
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("");
console.log("Esercizio_13");

const countMovies = function (array) {
  return array.length;
};
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("");
console.log("Esercizio_14");

const onlyTheYears = function (array) {
  return array.map((e) => e.Year);
};
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("");
console.log("Esercizio_15");

const onlyInLastMillennium = (array) =>
  array.filter((e) => parseInt(e.Year) < 2000);
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("");
console.log("Esercizio_16");

const sumAllTheYears = (array) => {
  let somm = 0;
  for (let i = 0; i < array.length; i++) {
    let y = array[i];
    somm += parseInt(y.Year);
  }
  return somm;
};
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("");
console.log("Esercizio_17");

const searchByTitle = (str) => {
  return movies.filter((e) =>
    e.Title.toLowerCase().includes(str.toLowerCase())
  );
};
console.log(searchByTitle("lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("");
console.log("Esercizio_18");

const searchAndDivide = (str, array) => {
  let container = {
    match: [],
    unmatch: [],
  };

  for (e of array) {
    if (e.Title.toLowerCase().includes(str.toLowerCase())) {
      container.match.push(e);
    } else {
      container.unmatch.push(e);
    }
  }
  return container;
};
console.log(searchAndDivide("lord", movies));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("");
console.log("Esercizio_19");

const removeIndex = (n, array) => {
  const moviesNew = structuredClone(array);
  moviesNewRemove = moviesNew.splice(n, 1);
  return moviesNew;
};
console.log(removeIndex(5, movies));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("");
console.log("Esercizio_20");

const container = document.getElementById("container");

const containerSelect = () => {
  const container = document.getElementById("container");
  const table = document.createElement("table");
  table.className = "table_class";
  container.appendChild(table);
  const tr = document.createElement("tr");
  tr.className = "tr_class";
  table.appendChild(tr);
  for (let i = 0; i < 4; i++) {
    const td = document.createElement("td");
    td.innerText = "Prova" + " " + [i];
    td.className = "td_class";
    tr.appendChild(td);
  }
  return console.log("Lo faccio per eseguire le prove!");
};
containerSelect();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("");
console.log("Esercizio_21");

const tdSelectFunc = () => {
  const td = document.querySelectorAll("td");
  // td.forEach((td) => {
  //   td.style.color = "rgba(243, 0, 0, 1)";
  // });
  return console.log("Funzia!");
};
tdSelectFunc();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("");
console.log("Esercizio_22");

const tdText = () => {
  const td = document.querySelectorAll("td");

  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }

  // td.forEach((td) => {
  //   console.log(td.innerText);
  // });
};
tdText();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("");
console.log("Esercizio_23");

const linkColor = () => {
  const table = document.createElement("table");
  table.className = "table_class";
  container.appendChild(table);
  const tr = document.createElement("tr");
  tr.className = "tr_class";
  table.appendChild(tr);
  for (let i = 0; i < 4; i++) {
    const td = document.createElement("td");
    td.innerText = "";
    td.className = "td_class";
    tr.appendChild(td);

    const a = document.createElement("a");
    a.className = "a_class";
    a.href = "www.google.it";
    a.innerText = "Prova" + " " + [i];
    a.target = "_blank";
    td.appendChild(a);
  }

  const a = document.querySelectorAll("a");
  a.forEach((a) => {
    a.style.backgroundColor = "red";
  });
  return console.log("Ecco!"); // serve return o no?
};
linkColor();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("");
console.log("Esercizio_24");

const ul = document.createElement("ul");
ul.id = "myList";
container.appendChild(ul);
const li = document.createElement("li");
li.className = "List";
li.innerText = "prima";
ul.appendChild(li);

const addList = (text) => {
  const li = document.createElement("li");
  li.className = "List";
  li.innerText = text;
  ul.appendChild(li);
  return console.log(text);
};
addList("seconda");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("");
console.log("Esercizio_25");

const cancelText = () => {
  const li = document.getElementById("myList");
  li.innerText = "";
};
// cancelText();
console.log("Qui ci potrebbe essere del testo, ma non c'è.");

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("");
console.log("Esercizio_26");

const addClassTr = () => {
  const tr = document.querySelectorAll("tr");
  tr.forEach((e) => {
    e.className = "test";
  });
  console.log("Voilà");

  //   tr.forEach((e) => {
  //   e.classList.add("test");
  // });
};
addClassTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("");
console.log("Esercizio_27");

const halfTree = (n) => {
  somm = "";
  for (let i = 0; i < n; i++) {
    let y = "*";
    somm += y;
    console.log(somm);
  }
};
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
*/

console.log("");
console.log("Esercizio_28");

const Tree = (n) => {
  for (let i = 1; i <= n; i++) {
    let x = n - i;
    let asterisco = "*";
    let hole = " ";
    let i2 = i - 1;

    let mult = asterisco.repeat(i);
    let mult2 = asterisco.repeat(i2);
    let spaces = hole.repeat(x);
    let result = spaces + mult + mult2;

    console.log(result);
  }
};
Tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
// console.log('');
// console.log('Esercizio_29');
