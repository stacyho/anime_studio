// startTime, endTime, videoName, fileName
var videoData = [
	[t(0,19,35), t(0,19,55), "Gojo Bridge River", "gojo_bridge_river"],
	[t(0,32,11), t(0,32,25), "Pontocho", "pontocho"]
];

// startTime, endTime, modelName, fileName
var modelData = [
	[t(0,0,0), t(0,0,0), "Stone Lantern Conan", "stone_lantern_conan"],
	[t(0,0,0), t(0,0,0), "Stone Lantern", "stone_lantern"],

	[t(0,18,37), t(0,19,28), "Stand Ball", "stand_ball"],
	[t(0,20,43), t(0,20,55), "Stone Lion Left", "stone_lion_left"],
	[t(0,20,43), t(0,20,55), "Stone Lion Right", "stone_lion_right"],
	[t(0,21,22), t(0,21,50), "Benkei Stone", "benkei_stone"]
];

function t(hours, minutes, seconds) {
	return 3600*hours + 60*minutes + seconds;
}