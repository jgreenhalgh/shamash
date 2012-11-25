/*
 * jQuery Simple Content Sorting Plugin
 * Version: 1.0
 *
 * Author: Chris Rivers
 * http://chrisriversdesign.com
 *
 *
 * Changelog: 
 * Version: 1.0
 *
 */

jQuery.fn.simpleContentSorting = function ( options ) {
	
	var settings = { // Defaults
		'sortingList' : '.sortingList',
		'effect' : 'show' // show, fadeIn
	};
	
	var thisOb = this;
	
	return this.each(function() {        
		// If options exist, lets merge them with our default settings
		if ( options ) { 
			$.extend( settings, options );
		}
	
		/* Plugin Logic
		--------------------------------------------*/
		
		// Checks if custom selectbox plugin is loaded
		if( $.fn.selectBox ){
			thisOb.selectBox({"autoWidth": false}).focus( function(e) {

					// do something awesome

				}).blur( function(e) {

					// do something awesome

				}).change( function mainmethod(e) {
					
				/* Sorting Logic
				-------------------*/
				
				$(settings.sortingList + " li").hide();
				
				var key1 = $(this).val(); // Stores Select Box Value for Comparison Later
				
				$(settings.sortingList + " li").each(function(index) {
					
					curListItem = $(this);
					temp = $(this).attr("filterA");
					temp = temp.split(",");
					
					for ( var i=0, len=temp.length; i<len; ++i ){
						
						if( temp[i] == key1 ) {
							// Effects Logic
							if( settings.effect == "show" ){
								curListItem.show();
							} else if( settings.effect == "fadeIn" ){
								curListItem.fadeIn(500);
							} else {
								curListItem.show();
							}
						}

					}
					
				});
				
				if( key1 == 'all' ){ // If Default Selected Show All
					// Effects Logic
					if( settings.effect == "show" ){
						$(settings.sortingList + " li").show();
					} else if( settings.effect == "fadeIn" ){
						$(settings.sortingList + " li").fadeIn();
					} else {
						$(settings.sortingList + " li").show();
					}
				}
				
				/* End Sorting Logic */	
			
			});
		} else {
			// use default selectbox
			thisOb.change(function () {
				/* Sorting Logic
				-------------------*/
				
				$(settings.sortingList + " li").hide();
				
				var key1 = $(this).val(); // Stores Select Box Value for Comparison Later
				
				$(settings.sortingList + " li").each(function(index) {
					
					curListItem = $(this);
					temp = $(this).attr("filterA");
					temp = temp.split(",");
					
					for ( var i=0, len=temp.length; i<len; ++i ){
						
						if( temp[i] == key1 ) {
							// Effects Logic
							if( settings.effect == "show" ){
								curListItem.show();
							} else if( settings.effect == "fadeIn" ){
								curListItem.fadeIn(500);
							} else {
								curListItem.show();
							}
						}

					}
					
				});
				
				if( key1 == 'all' ){ // If Default Selected Show All
					// Effects Logic
					if( settings.effect == "show" ){
						$(settings.sortingList + " li").show();
					} else if( settings.effect == "fadeIn" ){
						$(settings.sortingList + " li").fadeIn();
					} else {
						$(settings.sortingList + " li").show();
					}
				}
				
				/* End Sorting Logic */	
			});
		}
		
		return this;
		
	});
}