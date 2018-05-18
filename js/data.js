// startTime, endTime, videoName, fileName
var videoData = [
	[t(0,19,35), t(0,19,50), "Gojo Bridge River", "gojo_bridge_river"],
	[t(0,32,12), t(0,32,19), "Pontocho", "pontocho"]
];

// startTime, endTime, modelName, fileName
var modelData = [
	[t(0,0,0), t(0,0,0), "Stone Lantern Conan", "stone_lantern_conan"],
	[t(0,0,0), t(0,0,0), "Stone Lantern", "stone_lantern"],

	[t(0,18,37), t(0,19,28), "Stand Ball", "stand_ball"],
	[t(0,20,44), t(0,20,55), "Stone Lion Left", "stone_lion_left"],
	[t(0,20,44), t(0,20,55), "Stone Lion Right", "stone_lion_right"],
	[t(0,21,23), t(0,21,44), "Benkei Stone", "benkei_stone"]
];

// startTime, locationName, coordinates
var mapData = [
	[t(0,9,36), "Kyoto Station", {lat: 34.9858, lng: 135.7588}],
	[t(0,32,12), "Pontocho", {lat: 35.0050, lng: 135.7711}]
];

function t(hours, minutes, seconds) {
	return 3600*hours + 60*minutes + seconds;
}