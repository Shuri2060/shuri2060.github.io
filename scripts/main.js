function D() {

  this.x = 12345
  this.do = function() {

    document.querySelector("p").textContent = this.x; 
  };
}

function clicked() {

  a.x++;

  a.do;
}

var a = new D()

var b = document.querySelector("button").onclick = clicked()