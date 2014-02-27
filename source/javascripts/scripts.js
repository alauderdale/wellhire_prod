$(document).ready(function(){

////Jquery Datatable setup

	////toggle the filter button
	$('.filter-toggle').click(function() {
		$('.wh-filter-inner').toggleClass('hidden');
	});

	////clear the filter
	$("#clear-filter").click(function(e) {
		
	});

	////Set Table defaults
	$.extend( $.fn.dataTable.defaults, {
		"bLengthChange": false,
		//we use footables plugin here
		"bPaginate": false,
		"bFilter": false
	} );

	///responsive tables!!!
	$('.footable').footable();


});
