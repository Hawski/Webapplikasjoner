
// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
    // TODO: Gjør om text til array eks. ['Baby', 'cliche']
    let wordsFromText = text.split(" ");
    console.log(wordsFromText);


    // TODO: Velg første ord så du har noe å sammenlikne med
    let curentWord = wordsFromText[0];
    console.log(curentWord);

    // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
    wordsFromText.forEach((element, index) => {
        //console.log(index + ". " + element + " + " + element.length);
        if (curentWord.length < element.length){
            curentWord = element;
        }
    });
    return curentWord;
};

console.log(longestWord());

/*
Kilder:
https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/


numbers.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
});
*/