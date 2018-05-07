var input1 = document.getElementById("i1");
var input2 = document.getElementById("i2");
var input3 = document.getElementById("i3");
var input4 = document.getElementById("i4");
var input5 = document.getElementById("i5");
var input6 = document.getElementById("i6");
var input7 = document.getElementById("i7");
var input8 = document.getElementById("i8");
var input9 = document.getElementById("i9");
var input10 = document.getElementById("i10");
var input11 = document.getElementById("i11");
var input12 = document.getElementById("i12");
var input13 = document.getElementById("i13");
var input14 = document.getElementById("i14");
var input15 = document.getElementById("i15");
var input16 = document.getElementById("i16");
var input17 = document.getElementById("i17");

console.log(input1);


var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

var x = document.getElementById("jeffsalt"); 

btn.onclick = function() {
    modal.style.display = "block";
	x.play();
	document.getElementById("outputparagraph").innerText = 
			"Whoever came up with this sheer fisting of " + input1.value + " can go " 
			+ " fuck themselves. Do me a favor so I don't waste my guild's time "
			+ " on this kind of jackass shit-fest again, send me an email at " + input2.value + " when you decide to A) Implement " + input3.value
			+ " that wasn't designed by a retarded chimp chained to a cubicle A.)Get a " 
			+ " Quality Assuarance Department C) Actually beta test the fucking thing " 
			+ " and D) Patch it live. And please for god's sake -- do it in the order I " 
			+ " laid out for you. Don't worry, I won't charge you a consulting fee on that one. " 
			+ " And for good luck you might as well E) Pull your heads out of your asses. " 
			+ " While you're at it rename the game to " + input4.value + " since you've used up you're alotted false"   
			+ " advertising karma on the " + input5.value + "and " + input6.value + " scam of " + input7.value + " ."  
			+ " Fix " + input8.value + " . Rethink your " + input9.value + " bullshit. Fix all the buggy motherfucking" + input10.value + 
			+ " (I suggest you let whoever made " + input11.value + "one do this since that dude apparently laid " 
			+ " off the crack the rest of you were smoking). Fix the " + input12.value + "."  
			+ " Fix " + input13.value + "(just guessing it's fucked up considering your track record). " 
			+ " Don't have the resources to fix this stuff? Move the ENTIRE " + input14.value + " team over to " 
			+ " fixing " + input15.value  + " AND DO IT NOW. " 
			+ " If you don't fix " + input16.value + ", you jackassess will be the only ones playing the " + input17.value +"." 
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
} 