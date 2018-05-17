var currVideoFileName; // file name for current 360 video (without file extension)
var currVideoName;
var currModelFileName; // file name for current 3d model (without file extension)
var currModelName;
var vrViewPlayer; // player for 360 video

$(document).ready(function(){

	var dropdownVideos = $("#dropdown-videos");
	videoData.forEach(function(data) {
		var item = $("<a class='dropdown-item' href='#'/>").text(data[2]);
		$(item).click(function(){
			if ($('#model-box').css("display") != 'none') {
	    		$('#model-box').hide();
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

    $('#anime-video').click(function(){
    	this.paused ? this.play() : this.pause();
    });

    $('#show-video-button').click(function(e){
    	if ($('#model-box').css("display") != 'none') {
    		$('#model-box').hide();
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

    var animeVideo = $('#anime-video').get(0);
    setInterval(function(){
    	findModelAtTime(animeVideo.currentTime);
    	findVideoAtTime(animeVideo.currentTime);
    }, 1000);

    function findModelAtTime(currentTime) {
    	for (var i = 0; i < modelData.length; i++) {
    		model = modelData[i];
    		var startTime = model[0];
    		var endTime = model[1];
    		if (currentTime >= startTime && currentTime <= endTime) {
    			if (currModelFileName == model[3]) {
    				return;
    			}
    			currModelFileName = model[3];
    			currModelName = model[2];

    			$('#show-model-button').show();

				var timer = setInterval(function(){
					if (animeVideo.currentTime < startTime || animeVideo.currentTime > endTime) {
						$('#show-model-button').hide();
						currModelFileName = "";
						clearInterval(timer);
					}
				},1000);
				break;
    		}
    	}
    }

    function findVideoAtTime(currentTime) {
    	for (var i = 0; i < videoData.length; i++) {
    		video = videoData[i];
    		var startTime = video[0];
    		var endTime = video[1];
    		if (currentTime >= startTime && currentTime <= endTime) {
    			if (currVideoFileName == video[3]) {
    				return;
    			}
    			currVideoFileName = video[3];
    			currVideoName = video[2];

				$('#show-video-button').show();

				var timer = setInterval(function(){
					if (animeVideo.currentTime < startTime || animeVideo.currentTime > endTime) {
						$('#show-video-button').hide();
						currVideoFileName = "";
						clearInterval(timer);
					}
				},1000);
				break;
    		}
    	}
    }

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

});