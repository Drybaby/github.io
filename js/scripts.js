animationClick('#circle1', 'zoomIn');
animationClick('#circle2', 'zoomIn');
animationClick('#circle3', 'zoomIn');
animationClick('#circle4', 'zoomIn');
animationClick('#circle5', 'zoomIn');
animationClick('#circle6', 'zoomIn');
animationRevClick('#backbutton');

var bhome = document.getElementById("backbutton");
bhome.style.display='none';
var outyellow=document.getElementById("outyellow");
var outcyan=document.getElementById("outcyan");
var outpink=document.getElementById("outpink");

outyellow.style.display="none";
outcyan.style.display="none";
outpink.style.display="none";

function animationClick(element, animation){
	var c1 = document.getElementById("circle1");
	var c2 = document.getElementById("circle2");
	var c3 = document.getElementById("circle3");
	var c4 = document.getElementById("circle4");
	var c5 = document.getElementById("circle5");
	var c6 = document.getElementById("circle6");

    element = $(element);
    element.click(
    function() {
      element.addClass(' animate ');
      window.setTimeout( function(){
          element.removeClass(' animate ');
		  document.body.classList.add("outyellow"); 
		  c1.style.display='none';
		  c2.style.display='none';
		  c3.style.display='none';
		  c4.style.display='none';
		  c5.style.display='none';
		  c6.style.display='none';
	          bhome.style.display='block';
      }, 1000);
    }
  );
};

function animationRevClick(element){
	element = $(element);
	var butt = document.getElementById("backbutton");
	element.click(
	function(){
		backbutton.classList.add("animateback");
		}
	);
}
$('#circle').click(function(){ 
            $('#circle1').toggleClass("animated zoomIn",function(){
               $(this).remove();
            });
        });   
