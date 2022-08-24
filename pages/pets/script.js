const div = document.querySelector('div');
const maxScrollTop = document.body.clientHeight;
const nav = document.getElementsByClassName('navigation')

console.log(div)
console.log(window.pageYOffset)
window.addEventListener('scroll', () => {
  let scrolDown = 30 - 0.5*window.pageYOffset
  div.style.padding = `${scrolDown >= 15 ? scrolDown : 15}px calc(50% - 1200px/2) ${scrolDown >= 15 ? scrolDown : 15}px calc(50% - 1200px/2)`
});