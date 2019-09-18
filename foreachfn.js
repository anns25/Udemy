
function foreach_fun(a, func){
	var index;
	var result = [];
	for(index = 0; index < arr.length; index++){
		result[index] = func(arr[index]);
	}
	return result;
}

function add_two(arg){
	return arg + 2;
}

function mult_five(arg){
  return arg * 5;
}

var arr = [];
var i = 0;
var choice = prompt("Enter an array ? : (y/n)");
while(choice === 'y'){
	arr[i] = prompt("Enter the value ");
	i++;
	choice = prompt("Would you like to continue ");
}

console.log(arr);

var answer = prompt("what function to perform on the array (1/2)");
if(answer === 1){
	arr = foreach_fun(arr, add_two);
}
else{
	arr = foreach_fun(arr, mult_five);
}

console.log(arr);