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
    element = $(element);
    element.click(
    function() {
      element.addClass(' animate ');
      window.setTimeout( function(){
          element.removeClass(' animate ');
		  document.body.classList.add("outyellow"); 
	      		$('#circle1,#circle2,#circle3,#circle4,#circle5,#circle6')
	      		.addClass('animateopacity')
			.delay(1000)
			.hide();
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
		c1.style.display='block';
		c1.classList.add("animateback");
		$('#circle1,#circle2,#circle3,#circle4,#circle5,#circle6')
	      		.addClass('animateback');
		bhome.style.display="none";
		window.setTimeout(function(){
			c1.style.display='block';
		}, 1500);
		window.setTimeout(function(){
			document.body.classList.remove("outyellow"); 
			$('#circle2,#circle3,#circle4,#circle5,#circle6')
	      		.addClass('animateback')
			.delay(1000)
			.show();
			
		}

		, 3000);
		}
	);
}
$('#circle').click(function(){ 
            $('#circle1').toggleClass("animated zoomIn",function(){
               $(this).remove();
            });
        });   
