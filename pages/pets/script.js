const div = document.querySelector('div');
let screenWidth;
let maxScrollTop;


start();

function start(){
  let screenWidth = window.screen.width;
  console.log(screenWidth)
  if (screenWidth > 1279) {
    div.style.display = "block";
    size1280();
    document.getElementById("modile-header").style.display = "none"
    window.addEventListener('scroll', size1280);
    window.addEventListener('resize', function(){
      location.reload();
    });
  } else if (screenWidth > 767 && screenWidth < 1280){
    div.style.display = "block";
    size768();
    document.getElementById("modile-header").style.display = "none"
    window.addEventListener('scroll', size768);
    window.addEventListener('resize', function(){
      location.reload();
    });
  } else {
    div.style.display = "none";
    size320();
    document.getElementById("modile-header").style.display = "flex"
    window.addEventListener('scroll', size320);
    window.addEventListener('resize', function(){
      location.reload();
    });
  }
}


function size1280(){
  let maxScrollTop = window.innerHeight;
  let opacity = 0 + window.pageYOffset/maxScrollTop
  let scrolDown = 30 - 0.5*window.pageYOffset
  div.style.padding = `${scrolDown >= 5 ? scrolDown : 5}px calc(50% - 1200px/2) ${scrolDown >= 10 ? scrolDown : 10}px calc(50% - 1200px/2)`
}
function size768(){
  let maxScrollTop = window.innerHeight;
  let opacity = 0 + window.pageYOffset/maxScrollTop
  let scrolDown = 30 - 0.5*window.pageYOffset
  div.style.padding = `${scrolDown >= 5 ? scrolDown : 5}px calc(50% - 708px/2) ${scrolDown >= 10 ? scrolDown : 10}px calc(50% - 708px/2)`
}
function size320(){
  let maxScrollTop = window.innerHeight;
  let opacity = 0 + window.pageYOffset/maxScrollTop
  let scrolDown = 30 - 0.5*window.pageYOffset
  div.style.background = "#292929";
  document.getElementById("modile-header").style.padding = `${scrolDown >= 5 ? scrolDown : 5}px calc(50% - 260px/2 + 20px) ${scrolDown >= 10 ? scrolDown : 10}px calc(50% - 260px/2 - 20px)`
}



function openNav() {
  document.getElementById("nav").style.display = "flex";
  document.getElementById("modile-header").style.display = "none";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("modile-header").style.display = "flex";
}