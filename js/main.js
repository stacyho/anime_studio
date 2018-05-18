var currVideoFileName; // file name for current 360 video (without file extension)
var currVideoName;

var currModelFileName; // file name for current 3d model (without file extension)
var currModelName;

var currLocationIndex = -1; // index into mapData, for the latest location to be included on the map

var vrViewPlayer; // player for 360 video

$(document).ready(function(){

	var animeVideo = $('#anime-video').get(0);
    setInterval(function(){
    	findModelAtTime(animeVideo.currentTime);
    	findVideoAtTime(animeVideo.currentTime);
    	findLocationsBeforeTime(animeVideo.currentTime);
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

    function findLocationsBeforeTime(currentTime) {
    	currLocationIndex = -1;
    	for (var i = 0; i < mapData.length; i++) {
    		var startTime = mapData[i][0];
    		if (currentTime >= startTime) {
    			currLocationIndex = i;
    		}
    	}
    }

});