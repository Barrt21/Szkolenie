var firstName = "Bartek";
var theWord = " Jedno przykładowe zdanie   ";

// console.log(firstName);

// console.log(firstName.toLowerCase()); //zwraca nowy string
// console.log(firstName.toLocaleUpperCase());
// console.log(firstName.slice(0,6));
// console.log(firstName.split(' ')); //zwraca tablice
// console.log(firstName.split('jest'));

// console.log(firstName.length);
// console.log(theWord.trim().length); //bez bialych znaków
// console.log(theWord.startsWith(' '))//zwraca boolean


var age = 23;
var age = 66;
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





firstName === 'Bartek'  && console.log('Hej Bartek')


var first = 9;
var second = 1;
var third = undefined;
var fourth = null; 


if(first % 2 === 0) {
    console.log(first + ' jest liczbą parzysta')
} else  {
    console.log(first + ' jest liczbą nie parzystą')
} 

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

var zdanie = "Wlazł kotek na płotek i mruga";

function howManyWords(a) {

    console.log(a.split(' '));

}

howManyWords(zdanie);