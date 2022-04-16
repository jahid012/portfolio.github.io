window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.backgroundColor = "black";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
}