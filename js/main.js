$( function() {
	'use strict';

	$(window).scroll(function(){
		// console.log($(window).scrollTop())
		// console.log($(".navbar").height())

		// Deal With Tabs


		$(".tabs ul li").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			$('.tabs .tab-content div').hide();
			$('.' + $(this).data('class')).show();
		})

	})

})