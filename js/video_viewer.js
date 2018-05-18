$(document).ready(function() {

	function loadVideo(videoName) {
		var rootpath = "http://localhost:8080/";
		if (!vrViewPlayer) {
			vrViewPlayer = new VRView.Player('#panoramic-video-viewer', {
		    	video: rootpath + 'video/' + videoName + '.mp4',
		    	height: '100%',
		    	width: '100%'
		  	});
		} else {
			vrViewPlayer.setContent({
			  	video: rootpath + 'video/' + videoName + '.mp4'
			});
		}
		$("#play-pause-icon").addClass("fa-pause-circle");
        $("#play-pause-icon").removeClass("fa-play-circle");
	}

    $('#show-video-button').click(function(e){
    	if ($('#model-box').css("display") != 'none') {
    		$('#model-box').hide();
    	}
    	if ($('#map-box').css("display") != 'none') {
	    	$('#map-box').hide();
	    }
    	$('#studio-container').show();
        $('#video-box').show();

        $('#anime-container').animate({width: '60%'});
        $('#studio-container').animate({width: '40%'});

        $('#video-name').text(currVideoName);
    	loadVideo(currVideoFileName);
    });

    $("#close-video-button").click(function() {
    	vrViewPlayer.pause();

        $('#anime-container').animate({width: '100%'});
        $('#studio-container').animate({width: '0%'});

        $('#studio-container').hide();
        $('#video-box').hide();
    });

	$("#play-pause-button").click(function() {
        if (vrViewPlayer.isPaused) {
            vrViewPlayer.play();
            $("#play-pause-icon").addClass("fa-pause-circle");
            $("#play-pause-icon").removeClass("fa-play-circle");
        } else {
            vrViewPlayer.pause();
            $("#play-pause-icon").addClass("fa-play-circle");
            $("#play-pause-icon").removeClass("fa-pause-circle");
        } 
    });

    $("#volume-on-button").click(function() {
        vrViewPlayer.setVolume(1);
    });

    $("#volume-off-button").click(function() {
        vrViewPlayer.setVolume(0);
    });

    $('#anime-video').click(function(){
    	this.paused ? this.play() : this.pause();
    });

    var dropdownVideos = $("#dropdown-videos");
	videoData.forEach(function(data) {
		var item = $("<a class='dropdown-item' href='#'/>").text(data[2]);
		$(item).click(function(){
			if ($('#model-box').css("display") != 'none') {
	    		$('#model-box').hide();
	    	}
	    	if ($('#map-box').css("display") != 'none') {
	    		$('#map-box').hide();
	    	}
		   	$('#studio-container').show();
	        $('#video-box').show();

	        $('#anime-container').animate({width: '60%'});
	        $('#studio-container').animate({width: '40%'});

	        $('#video-name').text(data[2]);
	    	loadVideo(data[3]);

    		$('#anime-video').get(0).currentTime = data[0];
    		$('#anime-video').get(0).play();
	    });
	    dropdownVideos.append(item);
	});

});