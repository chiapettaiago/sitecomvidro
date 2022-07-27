function pag_interface() {
    window.location.href = "/paginas/interface.html";
}

function pag_sistema() {
    window.location.href = "/paginas/sistemas.html";
}

function home() {
    window.location.href - "index.html";
}

function pag_aplicativos() {
    window.location.href = "/paginas/aplicativos.html";
}

function about() {
    window.location.href = "/paginas/sobre.html";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}