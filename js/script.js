$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		autoPlay: false,
		prevEffect	: 'fade',
		nextEffect	: 'fade',
		helpers	: {
			title	: {
				type: 'inside'
			},
			thumbs	: {
				width	: 10,
				height	: 10			}
		}
	});
	$(".iframe").fancybox({
	  'hideOnContentClick' : true,
	  width : '410',
	  type : 'iframe',
	  'padding' : 15,
	  height : 150,
	  'onComplete' : function() {
	    $('#fancybox-frame').load(function() { // wait for frame to load and then gets it's height
	      $('#fancybox-content').height($(this).contents().find('body').height()+10);
	    });
	  }
	});
	$("#calendar2").hover(function() {
  // do fading 3 times
  for(i=0;i<100;i++) {
    $(this).fadeTo('fast', 0.5).fadeTo('fast', 1.0);
  }
	});
	$(".various").fancybox({
		autoPlay    : false,
		fitToView	: true,
		width		: '65%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

$('.fancybox-media').fancybox({
		autoPlay    : false,
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

	$("#instagramhover").hover(
  function () {
    $("#instagram").addClass('opacityhover');
  }, 
  function () {
    $("#instagram").removeClass('opacityhover');
  }
  );
  
	$("#instagram").hover(
  function () {
    $("#instagram").addClass('opacityhover');
  }, 
  function () {
    $("#instagram").removeClass('opacityhover');
  }
  );
  
  	$("#dribblehover").hover(
  function () {
    $("#dribble").addClass('opacityhover');
  }, 
  function () {
    $("#dribble").removeClass('opacityhover');
  }
  );
  
	$("#dribble").hover(
  function () {
    $("#dribble").addClass('opacityhover');
  }, 
  function () {
    $("#dribble").removeClass('opacityhover');
  }
  );
  
  	$("#dribblehover").hover(
  function () {
    $("#dribbble").addClass('opacityhover');
        $("#dribble").addClass('opacityhover');
  }, 
  function () {
    $("#dribbble").removeClass('opacityhover');
        $("#dribble").removeClass('opacityhover');
  }
  );

  
    	$("#dribble").hover(
  function () {
    	$("#dribblehover").addClass('display');
        $("#dribblehover").addClass('opacityhover');
  }, 
  function () {
    	$("#dribblehover").removeClass('display');
        $("#dribblehover").removeClass('opacityhover');

  }
  );
  
});




