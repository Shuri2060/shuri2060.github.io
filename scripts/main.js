function D() {

  this.x = 12345
  this.do = function() {

    document.querySelector("p").textContent = this.x; 
  };
}

var clicked = function() {

  a.x++;

  a.do();
};

var a = new D();

document.querySelector("button").onclick = clicked;