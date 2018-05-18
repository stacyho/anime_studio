$(document).ready(function() {

	$("#map-tab").click(function(){
		if ($('#model-box').css("display") != 'none') {
			$('#model-box').hide();
		}
		if ($('#video-box').css("display") != 'none') {
			vrViewPlayer.pause();
			$('#video-box').hide();
		}
	   	$('#studio-container').show();
	    $('#map-box').show();

	    $('#anime-container').animate({width: '60%'});
	    $('#studio-container').animate({width: '40%'});
	});

	$("#close-map-button").click(function(e) {
	    $('#anime-container').animate({width: '100%'});
	    $('#studio-container').animate({width: '0%'});

	    $('#studio-container').hide();
	    $('#model-box').hide();
	});

});