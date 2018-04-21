var currVideoName; // file name for current 360 video (without file extension)
var currModelName; // file name for current 3d model (without file extension)
var vrViewPlayer; // player for 360 video

$(document).ready(function(){

    $('[data-toggle="popover"]').popover(); 

    $('#anime-video').click(function(){
    	this.paused ? this.play() : this.pause();
    });

    $('#show-video-button').click(function(e){
    	$('#anime-video').get(0).pause();
    	loadVideo(currVideoName);
    });

    $('#panoramic-video-modal').on('hidden.bs.modal', function () {
    	$('#anime-video').get(0).play();
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

				setInterval(function(){
					if (animeVideo.currentTime < startTime || animeVideo.currentTime > endTime) {
						$('#show-model-button').hide();
						currModelName = "";
					}
				},1000);
				break;
    		}
    	}
    }

    function loadVideoAtTime(currentTime) {
    	for (var i = 0; i < videoData.length; i++) {
    		video = videoData[i];
    		var startTime = video[0];
    		var endTime = video[1];
    		if (currentTime >= startTime && currentTime <= endTime) {
    			if (currVideoName == video[3]) {
    				return;
    			}
    			currVideoName = video[3];
				$('#video-icon-img').attr('data-content', video[2]);

				$('#show-video-button').show();

				setInterval(function(){
					if (animeVideo.currentTime < startTime || animeVideo.currentTime > endTime) {
						$('#show-video-button').hide();
						currVideoName = "";
					}
				},1000);
    		}
    	}
    }

	function loadVideo(videoName) {
		var rootpath = "http://localhost:8081/";

		if (!vrViewPlayer) {
			vrViewPlayer = new VRView.Player('#panoramic-video-viewer', {
		    	video: rootpath + 'video/' + videoName + '.mp4',
		    	height: '100%',
		    	width: '100%'
		  	});
		} else {
			vrViewPlayer.setContentInfo({
			  	video: rootpath + 'video/' + videoName + '.mp4',
		    	height: '100%',
		    	width: '100%'
			});
		}
	}

});