function hideVideo(){
	$('#splash').hide();
};

function hideVideoM(){
	$('#splash2').hide();
};

$('#alertmodal').hide();

var check = localStorage.getItem("agree");
if(check == "true"){
	console.log(check);
	$(function(){$('#myModal').hide();});
}
function closeModal(){
	$('#myModal').hide();
};

$(function(){$("#restrictor").addClass("hide");});

$(function(){$("#agree").click(function(){
$("#restrictor").toggleClass("disabled");
});});

$(function(){$("#restrictor").click(function(){
	localStorage.setItem("agree", "true");
});
});


var pass = document.getElementById('passfield');

function closePass(){
	if(pass.value == "letmein"){
		$('#passcheck').hide();
	}
	else {
		$('#passtext').html("Wrong Password");
	}
}