function afterSignup() {
  $('footer').fadeOut(1000);
  $('.header').fadeOut(1000, function(){
    $('.afterSignup').fadeIn(1000);
  });
}

$(document).ready(function(){
	$('.moreInfo').hide();
	$('.afterSignup').hide();

	//$('.header').hide();
	$('.btn-info').click(function(){
		$('.header').fadeOut(1000, function(){
			$('.moreInfo').fadeIn(1000);
		});

	});

  $("#mc-embedded-subscribe-form").ajaxChimp({
    url: "http://ubhacking.us8.list-manage.com/subscribe/post?u=8a8ff97ccff01e95b486c9589&amp;id=db15220939",
    callback: function(resp) {
      if (resp.msg.indexOf("is already subscribed") > -1 || resp.msg.indexOf("Too many subscribe attempts") > -1) {
        $(".afterSignup").text("You are already subscribed to our mailing list. We'll reach out once we have more to say!");
      }
      afterSignup();
    }
  });

});
