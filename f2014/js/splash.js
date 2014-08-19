$(document).ready(function(){
	$('.moreInfo').hide();
	$('.afterSignup').hide();

	//$('.header').hide();
	$('.btn-info').click(function(){
		$('.header').fadeOut(1000, function(){
			$('.moreInfo').fadeIn(1000);
		});

	});

	$(document).keypress(function(e){
		if(e.which == 13){
			$('footer').fadeOut(1000);
			$('.header').fadeOut(1000, function(){
				$('.afterSignup').fadeIn(1000);
			});

		}
	});

});
