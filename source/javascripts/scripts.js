$(document).ready(function(){

////Jquery Datatable setup

	////toggle the filter button on tables not in popovers
	$('.filter-toggle').click(function() {
		$('.wh-filter-inner').toggleClass('hidden');
		return false; 
	});


	////clear the filter on tables not in popovers
	$("#clear-filter").click(function() {
		$('.yadcf-filter-reset-button').click();
	});

	////Set Table defaults
	$.extend( $.fn.dataTable.defaults, {
		"bLengthChange": false,
		//we use footables plugin here
		"bPaginate": true
	} );

	///responsive tables!!!
	$('table').footable({
		breakpoints: {
				lg: 1200,
				md: 992,
        sm: 768,
        xs: 480
    }
  });

  //popovers
  $('.click-popover-link').popover({
  	trigger: "click",
  	html: true
  });


});
