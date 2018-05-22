$(function() {
$('#secondarywrapper').hide();
$('#detailswrapper').hide();
});

$(function() {
    $(document).click(function() {
        $('#splash').fadeOut("slow");
		$("body").css("background-color","white");
		$("#secondarywrapper").fadeIn("slow");
    });
}); 

$(function() {
    $("#img1").click(function() {
		$('#img1').transition({x: '-150px'}, '200' ,'snap');
        $('#img1').transition({scale: 6}, '500' ,'ease');
		$('#img1').transition({opacity: 0}, '100' ,'snap');
		$('#img2').transition({opacity: 0}, '100' ,'snap');
		$('#img3').transition({opacity: 0}, '100' ,'snap');
		$('#img4').transition({opacity: 0}, '100' ,'snap');
	    	$('#detailswrapper').fadeIn("slow");
		
		
    });
}); 

$(function() {
    $("#img2").click(function() {
		$('#img2').transition({x: '150px'}, '200' ,'snap');
        $('#img2').transition({scale: 6}, '500' ,'ease');
		$('#img1').transition({opacity: 0}, '100' ,'snap');
		$('#img2').transition({opacity: 0}, '100' ,'snap');
		$('#img3').transition({opacity: 0}, '100' ,'snap');
		$('#img4').transition({opacity: 0}, '100' ,'snap');
		$('#detailswrapper').fadeIn("slow");
		
    });
}); 
$(function() {
    $("#img3").click(function() {
		$('#img3').transition({x: '200px'}, '200' ,'snap');
        $('#img3').transition({scale: 6}, '500' ,'ease');
		$('#img1').transition({opacity: 0}, '100' ,'snap');
		$('#img2').transition({opacity: 0}, '100' ,'snap');
		$('#img3').transition({opacity: 0}, '100' ,'snap');
		$('#img4').transition({opacity: 0}, '100' ,'snap');
		$('#detailswrapper').fadeIn("slow");
		
    });
}); 
$(function() {
    $("#img4").click(function() {
		$('#img4').transition({x: '-200px'}, '200' ,'snap');
        $('#img4').transition({scale: 6}, '500' ,'ease');
		$('#img1').transition({opacity: 0}, '100' ,'snap');
		$('#img2').transition({opacity: 0}, '100' ,'snap');
		$('#img3').transition({opacity: 0}, '100' ,'snap');
		$('#img4').transition({opacity: 0}, '100' ,'snap');
	    	$("body").css("background-color":"black","opacity":"0.6");
		$('#detailswrapper').fadeIn("slow");
		
    });
}); 
