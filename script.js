// var firstName = "Bartek";
// var theWord = " Jedno przykładowe zdanie   ";

// console.log(firstName);

// console.log(firstName.toLowerCase()); //zwraca nowy string
// console.log(firstName.toLocaleUpperCase());
// console.log(firstName.slice(0,6));
// console.log(firstName.split(' ')); //zwraca tablice
// console.log(firstName.split('jest'));

// console.log(firstName.length);
// console.log(theWord.trim().length); //bez bialych znaków
// console.log(theWord.startsWith(' '))//zwraca boolean


// var age = 23;
// var age = 66;
// console.log(age.toString());

// console.log(firstName[23]); 

//operacje na stringach powyżej

//Poniżej instrukcje warunkowe if

// if(age >= 18){
//     console.log("wynik to " + age + ' i jest pełnoletni')
// } else if (age>65) {
//     console.log(age, 'jest emerytem')

// } else {

//     console.log("ma znizke na tramwaj")
// }





// firstName === 'Bartek'  && console.log('Hej Bartek')


// var first = 9;
// var second = 1;
// var third = undefined;
// var fourth = null; 


// if(first % 2 === 0) {
//     console.log(first + ' jest liczbą parzysta')
// } else  {
//     console.log(first + ' jest liczbą nie parzystą')
// } 

// do porawienia if (nie działają)

// if (second % 2 === 0) {
//     console.log(second + ' jest liczbą parzysta')
// } if else {
//     console.log(second + ' jest liczbą nie parzystą')
    
// } else {
//     console.log(second + " to nie jest w ogole liczba")
// }


// if (third % 2 === 0) {
//     console.log(third + ' jest liczbą parzysta')
// } if else {
//     console.log(third + ' jest liczbą nie parzystą')
// }
//     else { 
//         console.log(third + " to nie jest w ogole liczba")
// }
  


// if (fourth % 2 === 0) {
//     console.log(fourth + ' jest liczbą parzysta')
// } if else {
//     console.log(fourth + ' jest liczbą nie parzystą')
// } else {
//     console.log(fourth + " to nie jest w ogole liczba")
// }

// Drzewko z gwiazdek


// var char = "*";
// for (let i = 0 ; i < 6; i++){
//     console.log(char);
//     char = char + "*";
    
// }

// function mojaFunkcjaMnozaca(a,b,c){
//     return a*b*c

// }
// console.log(mojaFunkcjaMnozaca(3,4,5,6,7));


// let a = " Koniec transmisji ";
// let string = "Tekst numer"
// for (let i = 1; i <=10; i++){
// console.log (string + i);
//     if(i === 10) {
    
//         console.log(a + a + a + a + a);

//     }
// }

// var zdanie = "Wlazł kotek na płotek i mruga";

// function howManyWords(a) {

//     console.log(a.split(' '));

// }

// howManyWords(zdanie);
/* Przed przystąpieniem do rozwiązywania zadań, pamietaj o dodaniu
    <script src="zadania.js"></script>
    w pliku index.html
*/

// Zadanie 1
/* Napisz funcję, która przyjmuje jeden parametr (string) i zwraca ten string napisany na wspak
*/
    // var tablica = [kot];
    //     tablica.reverse();
    //     console.log(tablica);
  


// Zadanie 2

/* Napisz funcję, która przyjmuje dwa parametry: tablicę imion i płeć. Funkcja ta 
przefiltruje tablicę imion i w zależności od parametru płeć zwróci tablicę samych 
męskich imion lub żeńskich imion
*/
// var imiona = ["Jan", "Anna", "Damian", "Klementyna", "Józef", "Marianna", "Róża", "Piotr"]

   
// function rodzajImion(a) {
//         if (a === 1) {
//           var imionaZenskie = imiona.filter(name => name.endsWith("a"));
//             console.log(imionaZenskie);
//         } else if (a === 2)  {
//            var imionaMeskie =   imiona.filter(name => name.endsWith("r"));
//                                 imiona.filter(name => name.endsWith("f"));
//                                 imiona.filter(name => name.endsWith("n"));
//             console.log(imionaMeskie);
//         }
// }

// rodzajImion("woman");
// rodzajImion(2);


    


// Zadanie 3
/* Napisz funcję, która przetworzy tablicę cen netto na tablicę cen brutto, uwzględniając 23 % podatku VAT a jako ostatni, dodatkowy element tej tablicy zwróci obiekt uwzględniający sumę kosztów netto i kosztów brutto:
{ sumaNetto: number, sumaBrutto: number }
*/

// var netto = [22.33, 128.99, 33.50, 192,10, 1200.99, 89.90, 10.10, 11.50, 90];


//        function nettoBrutto(a) {

//           brutto = a.map(el => el * 1.23);
//           console.log(brutto);
//           var suma = 0;
//           for (var i = 0; i<brutto.length-1; i++) {
//             suma = suma + brutto[i];

//           }
//           console.log(suma);
//           var obiekt = brutto.concat(suma);
//           console.log(obiekt);
           
//              }
 
         
       
       
// nettoBrutto(netto);



// Zadanie 4
/* Z poniższej tablicy zwierząt zwróć liczbę elementów zawierających literę 'a'.
W kolejnym kroku (osobna funkcja bądź metoda) zwróć wartość logiczną 'true' jeżeli jakikolwiek z elementów tej tablicy zawiera literę 'a' dwukrotnie.
*/

// var zwierzęta = ['wąż', 'mangusta', 'pies', 'zebra', 'żyrafa', 'koń', 'pawian', 'kret']

// var zwierzetaZA = zwierzęta.filter(name => name.includes("a"));
// console.log(zwierzetaZA);

// var czyZwieraDwaA = zwierzęta.some(name => name.contains("a"&"a"));
// console.log(czyZwieraDwaA);

// function czyZwieraDwaA() {
//     var zwierzęta = ['wąż', 'mangusta', 'pies', 'zebra', 'żyrafa', 'koń', 'pawian', 'kret']
//     if (zwierzęta.includes("a") && zwierzęta.endsWith("a")) {
//         console.log(true);
//     } else {

//         console.log(false);
//     }
// }
// czyZwieraDwaA(zwierzęta);




// Zadanie 5
/* Z poniższej tablicy obiektów zwróć tablicę tych, które zawierają pole 'wiek'
*/

// var obiekty = [
//     {nazwa: 'Kot', imię: 'Mruczek'},
//     {nazwa: 'Pies', imię: 'Burek'},
//     {nazwa: 'Koń', imię: 'Kasztanka', wiek: 6},
//     {nazwa: 'Kruk', imię: 'Edgar', wiek: 3},
//     {nazwa: 'Żółw', imię: 'Gerwazy', wiek: 120},
//     {nazwa: 'Kura', imię: 'Kokosza', wiek: 2},
//     {nazwa: 'Wąż', imię: 'Nagini'}
// ]
// var elemWithAge = obiekty.filter(el => el.wiek);

// console.log(elemWithAge);
// Zadanie 6
/* Napisz funkcję, która posortuje dowolną tablicę, a w zależności od parametru 'isNumber' posortuje ją numerycznie lub alfabetycznie
*/

// const tablica2 = [1, 2, 21, 26, 32, 39];

// function sortowanie(a,b) {

//     if (a == 'isNumber') {
//         b.sort
        
//     } else {
        
//     }
// }

// Zadanie 7
/* Napisz funkcję, która dla każdego elementu z dowolnej tablicy zwróci w konsoli jego typ. W przypadku, gdy obiektem jest string, ma również zwracać jego długość (po przecinku)
*/



// var tablica1 = ["Marcin", "Ania", "Piotrek", "Grześ",1,2,true,56,79,false];


 

//    for (var i=0; i<tablica1.length; i++) {
           
//             console.log(typeof tablica1[i]);

         
//    }


// OBIEKTY WYKŁAD


var person = {

   name: 'jan',
   sayName: function (){ console.log('Jestem' +  " " + this.name)},
   showThis: () => console.log(this)
}
   
   
var person2 = new Object()

person2.name = 'Krzysztof'

console.log(person);
console.log(person2);
person.sayName();

var obj = {
    name: 'Mruszek',
    kind: 'Kot',
    makeSound: () => console.log('Miau')


}
obj.makeSound();

console.log(this);

// KONSTRUKTOR 
function Animal(name,voice) {
    this.name = name;
    this.getVoice = function() {
        console.log(name +  "robi"  + voice)
    };
}

var dog = new Animal(" reksio "," hau-hau ");

console.log(Animal);
console.log(dog);
dog.getVoice();

var cat = {name: 'Mruczek'};
console.log(cat);

console.log(cat.hasOwnProperty("name"));

Animal.prototype.sayName = function () {
    console.log(this.name);
}

dog.sayName();

console.log(Animal);

var horse = new Animal('Kasztanka ', 'ihhha');
console.log()
console.log(horse);
console.log(horse.sayName());

const obj2 = {
name: 'Adam',
age: 23,


}


function Human(name,level) {
    this.name = name;
    this.level = level;
}

function SuperHero(name,level) {
    Human.call(this, name,level);
    this.fly = function() {
        console.log(this.name, "I can fly");
    };
}

// Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

const ClarkKent = new Human('Klark Kent',0);
const superman = new SuperHero('Superman',9000);

superman.fly()

// !!! dodawanie wlasciwosci do obiektu za pomoca prototype !!!
Human.prototype.fly = function() {
    console.log(this.name, "I can fly");
}
ClarkKent.fly();
// console.log(ClarkKent);
console.log(superman);


// KLASY !!!

class Human1 {
    constructor(name, level){
            this.name = name;
            this.level = level;

    }
}
class SuperHero1 extends Human1 {
    fly() {
        console.log(this.name, 'I can fly')
    }

}

const bruceWayne = new Human1("Bruce Wayne",1);
const batman = new SuperHero1('Batman', 5000);

console.log(bruceWayne.name);
batman.fly();

class Osoba {
    constructor(imie,nazwisko,adres,telefon)
    {
this.imie = imie;
this.nazwisko = nazwisko;
this.adres = adres;
this.telefon = telefon;


}
imieINazwisko(){
    return this.imie.toLowerCase() + ' ' + this.nazwisko.toLowerCase();
}
formatujTelefon() {

    return [this.telefon.slice(0,3), this.telefon.slice(3,6), this.telefon.slice(6,9)];
}
}
const Król = new Osoba('jan','baranski','wawel','792003021');

console.log(Król.imieINazwisko());
console.log(Król.formatujTelefon());

