
var colors = [ "rgb(255, 0, 0)", 
			   "rgb(0, 255, 0)",
			   "rgb(255, 255, 0)",
			   "rgb(0, 0, 255)",
			   "rgb(0, 255, 255)",
			   "rgb(255, 0, 255)"
			 ];

var pickedColor = colors[Math.floor(Math.random()*colors.length)];
var gameMessage = document.querySelector("#game-status");

var squares = document.querySelectorAll(".square");

for(var i =  0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}

document.querySelector("#color-title").textContent = pickedColor; 

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			/* change h1 background , put game-status as success and change the complete grid color */
			document.querySelector("h1").style.backgroundColor = pickedColor;
			gameMessage.textContent = "success";
			changeColor(pickedColor);
		}
		else{
			/* make that square disappear and put game-status as try again */
			this.style.backgroundColor = "#232323";
			gameMessage.textContent = "Try Again"
		}
	});
}


function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}