$(function() {
$('#secondarywrapper').hide();
$('#detailswrapper').hide();
$('.detailsBtn').hide();
});

$(function() {
    $('#splashScreen').one("click", (function() {
        $('#splashScreen').fadeOut("slow");
		$("body").css("background-color","white");
		$("#secondarywrapper").fadeIn("slow");
    }));
}); 

$(function(){
	$('.frame').click(function(){	
		if($(this).hasClass('zoom'))
		{
			$(this).removeClass('zoom');
			$('.detailsBtn').fadeOut("fast","linear");
		}
		else
		{
			$(this).addClass('zoom');
			$('.detailsBtn').fadeIn("fast","linear");
		}
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
        node: document.getElementById('btn1'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "700px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": true,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false,
      "button": true,
	  "price": false,
	  "title": false,
	  "img": false
    },
    "text": {
      "button": "View Details"
    },
    "styles": {
      "product": {
        "@media (min-width: 700px)": {
          "max-width": "100%",
          "margin-left": "0",
        }
      },
	  "button":{
		  "background-color": "black",
		  ":hover": {
			  "background-color": "grey"
		  },
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
        node: document.getElementById('btn2'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "700px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": true,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false,
      "button": true,
	  "price": false,
	  "title": false,
	  "img": false
    },
    "text": {
      "button": "View Details"
    },
    "styles": {
      "product": {
        "@media (min-width: 700px)": {
          "max-width": "100%",
          "margin-left": "0",
        },
		"button":{
		  "background-color": "black",
		  ":hover": {
			  "background-color": "grey"
		  },
	  },
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
        node: document.getElementById('btn3'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "700px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": true,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false,
      "button": true,
	  "price": false,
	  "title": false,
	  "img": false
    },
    "text": {
      "button": "View Details"
    },
    "styles": {
      "product": {
        "@media (min-width: 700px)": {
          "max-width": "100%",
          "margin-left": "0",
        },
		"button":{
		  "background-color": "black",
		  ":hover": {
			  "background-color": "grey"
		  },
	  },
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
        node: document.getElementById('btn4'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "700px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": true,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false,
      "button": true,
	  "price": false,
	  "title": false,
	  "img": false
    },
    "text": {
      "button": "View Details"
    },
    "styles": {
      "product": {
        "@media (min-width: 700px)": {
          "max-width": "100%",
          "margin-left": "0",
        },
		"button":{
		  "background-color": "black",
		  ":hover": {
			  "background-color": "grey"
		  },
	  },
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
        node: document.getElementById('btn5'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "700px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": true,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false,
      "button": true,
	  "price": false,
	  "title": false,
	  "img": false
    },
    "text": {
      "button": "View Details"
    },
    "styles": {
      "product": {
        "@media (min-width: 700px)": {
          "max-width": "100%",
          "margin-left": "0",
        },
		"button":{
		  "background-color": "black",
		  ":hover": {
			  "background-color": "grey"
		  },
	  },
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
        node: document.getElementById('btn6'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "700px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": true,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false,
      "button": true,
	  "price": false,
	  "title": false,
	  "img": false
    },
    "text": {
      "button": "View Details"
    },
    "styles": {
      "product": {
        "@media (min-width: 700px)": {
          "max-width": "100%",
          "margin-left": "0",
        },
		"button":{
		  "background-color": "black",
		  ":hover": {
			  "background-color": "grey"
		  },
	  },
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
