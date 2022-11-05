const div = document.querySelector('div');
let screenWidth;
let maxScrollTop;

start();


function start(){
  let screenWidth = window.outerWidth;
  console.log(screenWidth)
  if (screenWidth > 1279) {
    div.classList.toggle("visible");
    size1280();

    window.addEventListener('scroll', size1280);
    window.addEventListener('resize', function(){
      location.reload();
    });
  } else if (screenWidth > 767 && screenWidth < 1280){
    div.classList.toggle("visible");
    size768();
    window.addEventListener('scroll', size768);
    window.addEventListener('resize', function(){
      location.reload();
    });
  } else {
    div.classList.toggle("hide");
    document.getElementById("modile-header").classList.toggle("flex")
    document.getElementById("modile-header").classList.remove("hide")
    size320();
    window.addEventListener('scroll', size320);
    window.addEventListener('resize', function(){
      location.reload();
    });
  }
}

function size1280(){
  let maxScrollTop = window.innerHeight;
  let opacity = 0 + window.pageYOffset/maxScrollTop
  let scrolDown = 60 - 0.5*window.pageYOffset
  div.style.background = `radial-gradient(100% 215.42% at 0% 0%, rgba(91, 72, 58, ${opacity}) 0%, rgba(38, 36, 37, ${opacity}) 100%)`
  div.style.padding = `${scrolDown >= 5 ? scrolDown : 5}px calc(50% - 1200px/2) ${scrolDown >= 10 ? scrolDown : 10}px calc(50% - 1200px/2)`
}

function size768(){
  let maxScrollTop = window.innerHeight;
  let opacity = 0 + window.pageYOffset/maxScrollTop
  let scrolDown = 30 - 0.5*window.pageYOffset
  div.style.background = `radial-gradient(100% 215.42% at 0% 0%, rgba(91, 72, 58, ${opacity}) 0%, rgba(38, 36, 37, ${opacity}) 100%)`
  div.style.padding = `${scrolDown >= 5 ? scrolDown : 5}px calc(50% - 708px/2) ${scrolDown >= 10 ? scrolDown : 10}px calc(50% - 708px/2)`
}

function size320(){
  let maxScrollTop = window.innerHeight;
  let opacity = 0 + window.pageYOffset/maxScrollTop
  let scrolDown = 30 - 0.5*window.pageYOffset
  div.style.background = "#292929";
  document.getElementById("modile-header").style.background = `radial-gradient(100% 215.42% at 0% 0%, rgba(91, 72, 58, ${opacity}) 0%, rgba(38, 36, 37, ${opacity}) 100%)`
  document.getElementById("modile-header").style.padding = `${scrolDown >= 5 ? scrolDown : 5}px calc(50% - 260px/2 + 20px) ${scrolDown >= 10 ? scrolDown : 10}px calc(50% - 260px/2 - 20px)`
}