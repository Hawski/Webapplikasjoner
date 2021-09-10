// Oppgave 1
const remText = document.getElementById("remove");
const btnRemText = document.getElementById('remove-btn'); //begge funker
// const btn = document.querySelector('#remove-btn');

btnRemText.addEventListener('click', () => {
    console.log("Oppgave 1");
    remText.remove();
});


// Oppgave 2
const btnPChange = document.getElementById("change-btn");

btnPChange.addEventListener('click', () => {
    console.log("Oppgave 2");
    document.getElementById("change").innerHTML = "123ABC";
});

// Oppgave 3
const inputBox = document.getElementById('input');
const inputText = document.getElementById('input-text');

inputBox.addEventListener('keyup', () => {
    console.log("Oppgave 3");
    inputText.innerHTML = inputBox.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ulList = document.getElementById('ul');
const btnWriteList = document.getElementById('write-list');

btnWriteList.addEventListener('click', () => {
    console.log("Oppgave 4");
    myList.forEach((element)=> {
        console.log(element);
        let getFromList = document.createTextNode(element);
        let addLi = document.createElement('li');

        //putter Array.Texten i en li-tag
        addLi.appendChild(getFromList);
        ulList.appendChild(addLi);
    });
});


// Oppgave 5
const makeHTMLTag = document.getElementById('placeholder');

// for å hente value fra select
const getSelect = document.getElementById('select'); //Hvorfor kan jeg ikke ha .value her (det blir kun en h2-tag)

const inputTextToTag = document.getElementById('text');
const btnCreate = document.getElementById('create');

btnCreate.addEventListener('click', () => {
    console.log("Oppgave 5");
    let createTag = document.createElement(getSelect.value); //men må ha den her???
    createTag.innerHTML = inputTextToTag.value; //og her
    makeHTMLTag.appendChild(createTag);
});

// Oppgave 6
const removeList = document.getElementById('list');
const btnRemoveLi = document.getElementById('remove-li');

btnRemoveLi.addEventListener('click', () => {
    console.log('Oppgave 6');
    removeList.removeChild(removeList.childNodes[0]); //hvis ikke jeg har den to ganger
    removeList.removeChild(removeList.childNodes[0]); // så må må man trykke to gang for å slette....?
});

// Oppgave 7
const lisenToText = document.getElementById('name');
const btnLisen = document.getElementById('order');

lisenToText.addEventListener('keydown', () => {
    console.log('Oppgave 7');
    let textLength = lisenToText.value;
    if(textLength.length >= 4){
        btnLisen.style.borderColor = "Red";
    } else if (textLength.length < 4) {
        btnLisen.style.borderColor = "Black"; // Den blir mørkere når du går tilbake
    }
});


// Oppgave 8

// Dette er den eneste oppgaven som jeg har henta fra løsnings oppgaven... etter ca. 3timer kun på denne
const ulParent = document.querySelector('.children');
const ulChildren = ulParent.querySelectorAll('li');  // Jeg trodde jeg kunne bruke en SelcAll og med det så kunne jeg hente ut alle li..
// så når jeg så denne så fant jeg ut hvor feilen var

const btnColor = document.getElementById('color');

btnColor.addEventListener('click', () => {
    console.log('Oppgave 8');
    ulChildren.forEach((li, index) => {
        if (index % 2 != 0) {
            li.style = "border: 1px solid pink; margin-bottom: 10px; padding: 5px;"; // hentet 
        } else {
            li.style = "border: 1px solid green; margin-bottom: 10px; padding: 5px;"; // hentet 
        }
    });
});


//Kode som ikke fungerte

//      ulChildren.style.listStyle = 'ul li:nth-child(2n) {color: Green;}';
// ulLength.forEach(element => {
//     if (element % 2 != 0) {
//         console.log("yo");
//     } else if (element % 2 == 0){
//         console.log("yoyoyoyoyo");
//     }
// });       


// Ville prøve å denne til å funke li::nth-child(1) {font-weight: bold;} <- test

/* 
Kilder til oppgave 8:
https://xn--fullstkk-o0a.no/courses/css/03-pseudo-selectors/
https://xn--fullstkk-o0a.no/courses/intro-javascript/06-metoder-og-events/

https://1bestcsharp.blogspot.com/2017/11/javascript-get-selected-li-index.html
https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
    - så ikke denne koden før etter alt sammen... 
    const parentElement = document.querySelector('#parent');
    let allChildren = parentElement.querySelectorAll(":scope > span");
    allChildren.forEach(item => item.classList.add("red"));


*/