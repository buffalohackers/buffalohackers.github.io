$(document).ready(function() {
	$('.register-form').submit(function() {
		var goodToSubmit = true;
		$(this).find('input').each(function() {
			if ($(this).val() == "") {
				goodToSubmit = false;
				$(this).addClass('not-filled-field');
			} else {
				$(this).removeClass('not-filled-field');
			}
		});
/*		if ($('.password').val() != $('.passcheck').val()) {
			goodToSubmit = false;
			$('.passcheck').addClass('diff-pass');
			$('h1').append("<h1>YOUR PASSWORDS DON'T MATCH</h1>");
		}
		else {
			goodToSubmit = true
		}
		return goodToSubmit;
*/		

	});

	$('#menu-icon').click(function(){
		$('.m-navigation').toggle();
	});

	$('.loginmodal').submit(function(e) {
		e.preventDefault();
		$('.loginmodal .error').html('');
		$.post('/login', $(this).serialize(), function(data) {
			if ('error' in data) {
				$('.loginmodal .error').html(data['error']);
			} else {
				$.cookie('session_id', data['session_id']);
				window.location.reload();
			}
		});
	});

	$('#logdrop').click(function(){
		$('.dropdown-menu').toggle("fast");

	});
	
	$('.register-form').submit(function(e) {
		e.preventDefault();
		$('.register-form .error').html('');

		can_submit = true;
		$('.form-error-message').remove();
		$('.register-form input').each(function() {
			if ($(this).val() == "") {
				$(this).addClass('failed-form');
				$(this).after('<div class="form-error-message">' + $(this).attr('placeholder') + ' is required</div>');
				can_submit = false;
			} else {
				$(this).css('box-shadow', 'none');
			}
		});

		if (can_submit) {
			$.post('/register', $(this).serialize(), function(data) {
				if ('error' in data) {
					$('[name=' + data['form_input_name'] + ']').css('box-shadow', '0px 0px 1px 1px rgb(255, 0, 0)');
					$('[name=' + data['form_input_name'] + ']').after('<div class="form-error-message">' + data['error'] + '</div>');
				} else {
					$.cookie('session_id', data['session_id']);
					window.location = '/';
				}
			});
		}
	});

	$(".down").hover(
  function () {
     $('ul.dropdown').slideDown('medium');
  }, 
  function () {
     $('ul.dropdown').slideUp('medium');
  }
);

	$(window).scroll(function(){
		console.log("Yellow");
		s = $(window).scrollTop();
		console.log(s);
		$('.headtext').css("-webkit-transform", "translateY(" + (s/1.5) + "px)");
/*		$('.masthead').css("-webkit-transform", "translateY(-" + (s/2) + "px)");
*/	});


});
