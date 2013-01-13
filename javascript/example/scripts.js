var Site = {
	init : function() {
		this.tabs();	
	},
	
	tabs : function() {
		var tabs = $('#secondary > .tabs'),
			uls = tabs.find('> ul'),
			tabHeadings = tabs.prev('#tabHeadings');
			
		// listen for heading clicks
		tabHeadings
			.delegate('li', 'click', function(e) {
				var li = $(this),
					hash;
			
				// change the selected class to the selected one
				li
					.siblings()
						.removeClass('selected')
					.end()
					.addClass('selected');
					
				// grab the hash of the anchor
				hash = li.children('a').attr('href');
				
				// show corresponding section
				uls
					.hide()
					.filter(hash)
						.fadeIn(500);
						
				e.preventDefault();
			});
		
	}
}

// Let's roll!
Site.init();