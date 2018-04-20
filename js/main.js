var currVideoId; // youtube video id for current 360 video
var currModelName; // file name for current 3d model (without file extension)

$(document).ready(function(){

    $('[data-toggle="popover"]').popover(); 

    $('#anime-video').click(function(){
    	this.paused ? this.play() : this.pause();
    });

    $('#show-video-button').click(function(e){
    	if (!currVideoId) {
    		e.stopPropagation();
    		return;
    	}
    	$('#anime-video').get(0).pause();
    	$("#panoramic-video-iframe").get(0).src += "https://www.youtube.com/embed/" + currVideoId + 
    		"?controls=1" + "&autoplay=1";
    });

    $('#panoramic-video-modal').on('hidden.bs.modal', function () {
    	$('#anime-video').get(0).play();
    	$('#panoramic-video-iframe').removeAttr('src');
	});

    var animeVideo = $('#anime-video').get(0);
    setInterval(function(){
    	loadModelAtTime(animeVideo.currentTime);
    	loadVideoAtTime(animeVideo.currentTime);
    }, 1000);

    function loadModelAtTime(currentTime) {
    	for (var i = 0; i < modelData.length; i++) {
    		model = modelData[i];
    		var startTime = model[0];
    		var endTime = model[1];
    		if (currentTime >= startTime && currentTime <= endTime) {
    			if (currModelName == model[3]) {
    				return;
    			}
    			currModelName = model[3];
				$('#model-icon-img').attr('data-content', model[2]);

    			$('#show-model-button').show();
    			blinkImage('#model-icon-img');

				setInterval(function(){
					if (animeVideo.currentTime < startTime || animeVideo.currentTime > endTime) {
						$('#show-model-button').hide();
						currModelName = "";
					}
				},1000);
    		}
    	}
    }

    function loadVideoAtTime(currentTime) {
    	for (var i = 0; i < videoData.length; i++) {
    		video = videoData[i];
    		var startTime = video[0];
    		var endTime = video[1];
    		if (currentTime >= startTime && currentTime <= endTime) {
    			if (currVideoId == video[3]) {
    				return;
    			}
    			currVideoId = video[3];
				$('#video-icon-img').attr('data-content', video[2]);

				$('#show-video-button').show();
    			blinkImage('#video-icon-img');

				setInterval(function(){
					if (animeVideo.currentTime < startTime || animeVideo.currentTime > endTime) {
						$('#show-video-button').hide();
						currVideoId = "";
					}
				},1000);
    		}
    	}
    }

    function blinkImage(selector){
	    var timer = setInterval(function(){
	        $(selector).css("opacity", "0.1");
	        setTimeout(function(){
	            $(selector).css("opacity", "1");
	        }, 250);
	    }, 400);
	    setTimeout(function(){
	    	clearInterval(timer);
	    }, 2000);
	}

});