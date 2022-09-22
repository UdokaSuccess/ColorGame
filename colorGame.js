var numSquares = 9
var colors = chooseRandom(numSquares);
var squares = document.getElementsByClassName("square");
var tryAgain = document.getElementById("tryAgain");
var colorDisplay = document.getElementById("colorDisplay");
var card = document.getElementById("card");
var content = document.getElementById("container");
var pickedColor = randomPick();
var easy = document.getElementById("easyBtn");
var hard = document.getElementById("hardBtn");

var newColors = document.getElementById("new")

colorDisplay.textContent = pickedColor;
 
 easy.addEventListener("click", function(){
        easyBtn.style.background = "rgb(15, 26, 21 )";
        hard.style.background = ""
        numSquares = 6
        colors = chooseRandom(numSquares);
        pickedColor = randomPick();
        colorDisplay.textContent = pickedColor;
         card.style.background = "rgb(15, 36, 21 )";
         tryAgain.textContent = "";
        for (var i = 0; i < squares.length; i++) {
        	squares[i].style.background = colors[i]
          if (colors[i]){
          	squares[i].style.background = colors[i]
       }
       else{
         squares[i].style.display = "none"
       }
}
 
 }) 
  hard.addEventListener("click", function(){
        // easyBtn.classList.remove("pool"); 
        hardBtn.style.background = "rgb(15, 36, 21)";
        easyBtn.style.background = ""
       numSquares = 9
        colors = chooseRandom(numSquares);
        pickedColor = randomPick();
        colorDisplay.textContent = pickedColor;
         card.style.background = "rgb(15, 36, 21)";
         tryAgain.textContent = "";
        for (var i = 0; i < squares.length; i++) {
        	squares[i].style.background = colors[i]
          	squares[i].style.background = colors[i]
            squares[i].style.display = "block" }
          }) 


for(var i = 0; i < squares.length; i++){

 squares[i].style.background = colors[i];

 squares[i].addEventListener("click", function() {
      	//alert(this.style.background)
      	var clickedColor = this.style.background

         	 if (clickedColor === pickedColor) {
         	 	tryAgain.textContent = "Correct!"
         	 	changeColors(clickedColor);
         	 	 card.style.background = clickedColor;
         	 	 // newColors.style.background = clickedColor
         	 	 // newColors.textContent = "New Game"
         	 	 // newColors.classList.add("newColor")

         	}
         	else{
         		this.style.background = "black"
         		tryAgain.textContent = "Try Again!"
         	}

	 })

}

function changeColors(color) {
	// body...

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = color
}
}
function randomPick() {
	// body...
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}


 function chooseRandom(num) {
	var arr = []

for (var i = 0; i < num; i++) {
     arr.push(randomColor())
}

	return arr;
}

function randomColor() {
	// body...
	 var r = Math.floor(Math.random()*256);
	 var g = Math.floor(Math.random()*256);
	 var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

newColors.addEventListener("click", function() {
	// body...
	 colors = chooseRandom(numSquares)

	 pickedColor = randomPick()

	colorDisplay.textContent = pickedColor

	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.background = colors[i]}
     card.style.background = "navy";
    tryAgain.textContent = "";
     if (colors[9].style.display = "none") {
     	easyBtn.style.background = "rgb(15, 36, 21)"
     }
     else{
     hardBtn.style.background = "rgb(15, 36, 21)"	
     }
    
  })


















	











