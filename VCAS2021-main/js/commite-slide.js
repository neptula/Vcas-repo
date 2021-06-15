// let slideItems = document.querySelectorAll('.slide-content')
// let length = slideItems.length

// let oc = document.querySelector('#section-organizing_committee')
// let ac = document.querySelector('#section-advisory_committe')
// let tc = document.querySelector('#section-track_chairs')
// let tpc = document.querySelector('#section-technical_program_committee')

// function initTabs()
// 	{
        if($('.tab').length)
		{
			$('.tab').on('click', function()
			{
				$('.tab').removeClass('active-panel');
				$(this).addClass('active-panel');
				var clickedIndex = $('.tab').index(this);
              
				// var panels = $('.tab_panel');
				var panels = $('.slide-content');
				panels.removeClass('active-panel');
				$(panels[clickedIndex]).addClass('active-panel');

				setTimeout(function()
				{
					$(window).trigger('resize.px.parallax');
				}, 375);
			});
		}
	// }