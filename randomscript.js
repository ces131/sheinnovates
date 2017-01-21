var cat1Random = Math.floor(Math.random()*6+1);
var cat2Random = Math.floor(Math.random()*6+1);
var cat3Random = Math.floor(Math.random()*6+1);
var cat4Random = Math.floor(Math.random()*6+1);
var cat5Random = Math.floor(Math.random()*6+1);
var cat6Random = Math.floor(Math.random()*6+1);

window.onload = function(){
	questionPicker(cat1Random, "cat1q1", "cat1q2", "cat1q3", "cat1q4", "cat1q5", "cat1q6");
	questionPicker(cat2Random, "cat2q1", "cat2q2", "cat2q3", "cat2q4", "cat2q5", "cat2q6");
	questionPicker(cat3Random, "cat3q1", "cat3q2", "cat3q3", "cat3q4", "cat3q5", "cat3q6");
	questionPicker(cat4Random, "cat4q1", "cat4q2", "cat4q3", "cat4q4", "cat4q5", "cat4q6");
	questionPicker(cat5Random, "cat5q1", "cat5q2", "cat5q3", "cat5q4", "cat5q5", "cat5q6");
	questionPicker(cat6Random, "cat6q1", "cat6q2", "cat6q3", "cat6q4", "cat6q5", "cat6q6");


}

function questionPicker(var rand, var q1, var q2, var q3, var q4, var q5, var q6)
{
	if(rand == 1) {
		document.getElementById(q1).style.display = "inline";
		document.getElementById(q2).style.display = "none";
		document.getElementById(q3).style.display = "none";
		document.getElementById(q4).style.display = "none";
		document.getElementById(q5).style.display = "none";
		document.getElementById(q6).style.display = "none";
	}
	if(rand == 2) {
		document.getElementById(q1).style.display = "none";
		document.getElementById(q2).style.display = "inline";
		document.getElementById(q3).style.display = "none";
		document.getElementById(q4).style.display = "none";
		document.getElementById(q5).style.display = "none";
		document.getElementById(q6).style.display = "none";
	}
	if(rand == 3) {
		document.getElementById(q1).style.display = "none";
		document.getElementById(q2).style.display = "none";
		document.getElementById(q3).style.display = "inline";
		document.getElementById(q4).style.display = "none";
		document.getElementById(q5).style.display = "none";
		document.getElementById(q6).style.display = "none";
	}
	if(rand == 4) {
		document.getElementById(q1).style.display = "none";
		document.getElementById(q2).style.display = "none";
		document.getElementById(q3).style.display = "none";
		document.getElementById(q4).style.display = "inline";
		document.getElementById(q5).style.display = "none";
		document.getElementById(q6).style.display = "none";
	}
	if(rand == 5) {
		document.getElementById(q1).style.display = "none";
		document.getElementById(q2).style.display = "none";
		document.getElementById(q3).style.display = "none";
		document.getElementById(q4).style.display = "none";
		document.getElementById(q5).style.display = "inline";
		document.getElementById(q6).style.display = "none";
	}

	if(rand == 6) {
		document.getElementById(q1).style.display = "none";
		document.getElementById(q2).style.display = "none";
		document.getElementById(q3).style.display = "none";
		document.getElementById(q4).style.display = "none";
		document.getElementById(q5).style.display = "none";
		document.getElementById(q6).style.display = "inline";
	}
}





 
