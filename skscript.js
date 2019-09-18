max_score = document.getElementById("max-score").textContent;
score1 = document.getElementById("score1");
score2 = document.getElementById("score2");
s1 = 0;
s2 = 0;

function reset(){
	score1.textContent = 0;
	score2.textContent = 0;
	s1=0;
	s2=0;
	max_score = document.getElementById("max-score").textContent;
	score1.style.color = "black"
	score2.style.color = "black"

}

document.getElementById("player1").addEventListener("click", function(){
	if(s1 < max_score && s2 < max_score){
		s1++;
	}
	score1.textContent = s1;
	if(score1.textContent === max_score){
		score1.style.color = "green"
	}
});

document.getElementById("player2").addEventListener("click", function(){
	if(s2 < max_score && s1 < max_score ){
		s2++;
	}
	score2.textContent = s2;
	if(score2.textContent === max_score){
		score2.style.color = "green"
	}
});

document.getElementById("reset").addEventListener("click", reset);

document.querySelector("input").addEventListener("change", function(){
	document.querySelector("p span").textContent = this.value;
	reset();
});
