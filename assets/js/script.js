

/* Given Function */


/* function pintar() {
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
} 

ele = document.getElementById("ele1")
ele.addEventListener("click", pintar); */



/* 3.2 Modified Function */

/* function pintar(elemento) {
    elemento.style.backgroundColor = 'yellow';
  }
  
  let ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele);
  });
 */


/* 3.3 Modified Function */


function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

let ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
    pintar(ele, 'yellow');
});