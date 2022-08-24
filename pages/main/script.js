let slideIndex = 1;
showDivs(slideIndex);

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


var cc = myform.cardcode;
for (var i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,20);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}


const div = document.querySelector('div');
const maxScrollTop = window.innerHeight;
const nav = document.getElementsByClassName('navigation')

console.log(window.innerHeight)
console.log(window.pageYOffset)
window.addEventListener('scroll', () => {
  let opacity = 0 + window.pageYOffset/maxScrollTop
  let scrolDown = 60 - 0.5*window.pageYOffset
  div.style.background = `radial-gradient(100% 215.42% at 0% 0%, rgba(91, 72, 58, ${opacity}) 0%, rgba(38, 36, 37, ${opacity}) 100%)`
  div.style.padding = `${scrolDown >= 5 ? scrolDown : 5}px calc(50% - 1200px/2) ${scrolDown >= 10 ? scrolDown : 10}px calc(50% - 1200px/2)`
});