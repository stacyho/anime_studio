// startTime, endTime, popoverName, fileName
var modelData = [
	[t(0,21,22), t(0,21,50), "Benkei Stone", "benkei_stone"]
];

// startTime, endTime, popoverName, videoId
var videoData = [
	[t(0,0,3), t(3,0,0), "Kyoto", "v2FCRaXXeaQ"]
];

function t(hours, minutes, seconds) {
	return 3600*hours + 60*minutes + seconds;
}