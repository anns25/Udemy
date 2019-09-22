var colors = [];
var pickedColor;
var heading = document.querySelector("h1");
var gameMessage = document.querySelector("#game-status");
var squares = document.querySelectorAll(".square");
var grid_size = 6;
var newColors = document.querySelector("#color-change");
var mode = document.querySelectorAll(".mode");

reset();

newColors.addEventListener("click", function(){
	reset();
});


/* click action for each square in the grid */

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			/* change h1 background , put game-status as success and change the complete grid color */
			heading.style.backgroundColor = pickedColor;
			gameMessage.textContent = "success";
			changeColor(pickedColor);
			newColors.textContent = "play again"
		}
		else{
			/* make that square disappear and put game-status as try again */
			this.style.backgroundColor = "#232323";
			gameMessage.textContent = "Try Again"
		}
	});
}

/* click action for hard and easy mode */

for(var i = 0; i < mode.length; i++){
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "hard" ? grid_size = 6: grid_size = 3;
		reset();
	});
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColors(num){
	var rgb = [];
	for(var i = 0; i < num; i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		rgb[i] = "rgb(" + r + ", " + g + ", " + b + ")";
	}
	return rgb;
}

/* assigning new colors to the grid */

function newGrid(grid_size){
	colors = pickRandomColors(grid_size);
	/* picking a color from the grid */

	pickedColor = colors[Math.floor(Math.random()*colors.length)];
	document.querySelector("#color-title").textContent = pickedColor; 

	for(var i =  0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
}

/* assigning random colors to the array */

function reset(){
	newGrid(grid_size);
	gameMessage.textContent = "";
	heading.style.backgroundColor = "steelblue";
	newColors.textContent = "new colors"
}