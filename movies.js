choice = prompt("enter movies (y/n)");
var movie =[];
var i = 0;
while(choice === "y"){
	movie[i] = {};
	movie[i].name = prompt("enter name");
	saw = prompt("have you seen the movie (y/n)");
	if(saw === "y"){
		movie[i].watched = "true";
	}
	else{
		movie[i].watched = "false";
	}
	movie[i].rating = prompt("enter the movie's rating");
	i++;
	choice = prompt("would you like to continue");
}

console.log(movie);

for(i=0; i < movie.length; i++){
	if(movie[i].watched === "true"){
		console.log("You have watched \"" + movie[i].name + "\" - " + movie[i].rating + " stars");
	}
	else{
		console.log("You have not watched \"" + movie[i].name + "\" - " + movie[i].rating + " stars");
	}
}
