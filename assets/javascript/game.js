var wins = 0;
var losses = 0;

	document.getElementById("windisplay").innerHTML = wins;
	document.getElementById("lossesdisplay").innerHTML = losses;	

	var aqua = Math.floor(Math.random() *12) + 1;
	var yellow = Math.floor(Math.random() *12) + 1;
	var red = Math.floor(Math.random() *12) + 1;
	var blue = Math.floor(Math.random() *12) + 1;

document.getElementById("valueOfButton").innerHTML = Math.floor(Math.random() *12) + 1;



		document.getElementById("aqua").innerHTML = Math.floor(Math.random() *12) + 1;




function randomNumber() {
    document.getElementById("demo").innerHTML = Math.random();
}