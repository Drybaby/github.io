$(function() {
$('#secondarywrapper').hide();
$('#detailswrapper').hide();
});

$(function() {
    $('#splash').click(function() {
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
	    	$('#img1').fadeOut();
	    	$('#img2').fadeOut();
	    	$('#img3').fadeOut();
	    	$('#img4').fadeOut();
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
	    	$('#img1').fadeOut();
	    	$('#img2').fadeOut();
	    	$('#img3').fadeOut();
	    	$('#img4').fadeOut();
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
	    	$('#img1').fadeOut();
	    	$('#img2').fadeOut();
	    	$('#img3').fadeOut();
	    	$('#img4').fadeOut();
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
	    	$('#img1').fadeOut();
	    	$('#img2').fadeOut();
	    	$('#img3').fadeOut();
	    	$('#img4').fadeOut();
		$('#detailswrapper').fadeIn("slow");
		
    });
}); 

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'entangledwebtest.myshopify.com',
      apiKey: 'a76569b930080aa443ad5efb93c237e4',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [1374109237306],
        node: document.getElementById('product-component-f5ef53def70'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
