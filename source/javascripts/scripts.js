$(document).ready(function(){

////Jquery Datatable setup

	////toggle the filter button
	$('.filter-toggle').click(function() {
		$('.wh-filter-inner').toggleClass('hidden');
	});

	////clear the filter
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
	$('table').footable();


});
