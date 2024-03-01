const change_color = document.getElementById("button1");
const color = ['red', 'black', 'green', 'yellow', 'aqua', 'pink', 'orange', 'purple', 'grey', 'blue'];

const getRandomNumber = (max) =>{
     return Math.floor(Math.random() * 10) %max;
};
change_color.addEventListener( "click", ()=>{
    const index = getRandomNumber(color.length)
    document.getElementById("circle").style.backgroundColor=color[index]
});

var index = 0;
var isTriangle = false;

const change_shape = document.getElementById("button2");
change_shape.addEventListener("click", changeShape)
function changeShape() {
    if (!isTriangle) {
      var i = document.getElementsByClassName("box1")[0];
      i.className = "right-triangle";
      isTriangle = true;
    }else{
      var i = document.getElementsByClassName("right-triangle")[0];
      i.className = "box1";
      isTriangle = false;
    }
  }