let slideIndex = 1;
showDivs(slideIndex);

// const fs = require('fs');

// let rawdata = readFileSync('../assets/pets.json');
// let pets = JSON.parse(rawdata);

fetch('../../../assets/pets.json')
   .then(response => response.json())
   .then(json => console.log(json))

function plusDivs(diffValue) {
  showDivs(slideIndex += diffValue);
}



function showDivs(index) {
    let card = document.getElementsByClassName("card");
    const countElements = card.length;
    if (countElements !== 0) {
        const prevElement = (countElements+((index-1)%countElements))%countElements;
        const currentElement = (countElements+((index)%countElements))%countElements;
        const nextElement = (countElements+((index+1)%countElements))%countElements;
        for (let i = 0; i < countElements; i++) {
            card[i].classList = "card hidden";
        }
        card[prevElement].classList = "card left";
        card[currentElement].classList = "card center";
        card[nextElement].classList = "card right";
    }
}









