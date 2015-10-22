$('#imageTwo').hover(
	function() {
		$('#descriptionTwo').addClass('fadeIn');
	}, function() {
		$('#descriptionTwo').removeClass('fadeIn');
	}
);
$('#header').on('click',
	function() {
		$(this).addClass('jello');
	}
);
