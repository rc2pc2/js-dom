
// const elementoPre = document.getElementById('output');

// console.log(elementoPre);
// console.log(elementoPre.innerHTML);
// console.log(elementoPre.outerHTML);

// const element = document.querySelector('div.box');

// console.log(element);
// console.log(element.classList);
// console.log(element.className);
// element.className = 'gino';
// element.style.color = 'red';

// console.log(element.className);


// const firstDiv = document.querySelector('div');
// console.log(firstDiv);

// // firstDiv.className += ' titolo';

// console.log(firstDiv.classList);
// firstDiv.classList.add('red', 'yellow', 'blue');

// firstDiv.append('<p>Append</p>');
// firstDiv.prepend('<p>Prepend</p>');

// firstDiv.innerHTML += "<p>Ciao gina</p>";

// // console.log(firstDiv.classList);
// // firstDiv.classList.remove('red');

// // console.log(firstDiv.classList);

// firstDiv.addEventListener('click', function(){
//         // questo
//         // codice
//         // qua
//         alert(Math.random());
//     }
// );


/**
 *
 * - **LiveCoding#3:**
Il software deve chiedere all’utente il suo nome e l'età con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere giallo o verde a seconda della maggiore età di chi ha  inserito il proprio nome
 */


const inputName = document.getElementById('user-name');
const inputAge = document.getElementById('user-age');

const button = document.querySelector('button.button');

button.addEventListener('click', function() {
    //  ? - prendo l'elemento nel quale devo scrivere
    //  ? aggiungo la scritta che voglio mostrare
    //  ? aggiungo una classe che decori come voglio l'elemento da mostrare

    const outputElement = document.querySelector('p');
    outputElement.innerHTML = "Ciao, " + inputName.value;


    if (inputAge.value > 18){
        outputElement.classList.add('green');
        outputElement.classList.remove('yellow');
    } else {
        outputElement.classList.add('yellow');
        outputElement.classList.remove('green');

    }
});
