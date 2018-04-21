// startTime, endTime, popoverName, fileName
var modelData = [
	[t(0,0,0), t(2,0,0), "Benkei Stone", "benkei_stone"],
	[t(0,0,0), t(2,0,0), "Stand Ball", "stand_ball"],
	[t(0,0,0), t(2,0,0), "Stone Lantern Conan", "stone_lantern_conan"],
	[t(0,0,0), t(2,0,0), "Stone Lantern", "stone_lantern"],
	[t(0,0,0), t(2,0,0), "Stone Lion Left", "stone_lion_left"],
	[t(0,0,0), t(2,0,0), "Stone Lion Right", "stone_lion_right"]
];

// startTime, endTime, popoverName, fileName
var videoData = [
	[t(0,0,0), t(0,0,10), "Benkei Stone", "benkei_stone"]
];

function t(hours, minutes, seconds) {
	return 3600*hours + 60*minutes + seconds;
}