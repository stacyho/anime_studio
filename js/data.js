// startTime, endTime, videoName, fileName
var videoData = [
	[t(0,9,32), t(0,9,35), "Kyoto Station Platform", "kyoto_station_platform"],
	[t(0,9,35), t(0,9,45), "Kyoto Station Entrance", "kyoto_station_entrance"],
	[t(0,18,34), t(0,18,37), "Benkei and Yoshitsune", "benkei_and_yoshitsune"],
	[t(0,19,35), t(0,19,50), "Gojo Bridge", "gojo_bridge"],
	[t(0,20,34), t(0,20,42), "Gojoten Shrine Entrance", "gojoten_shrine_entrance"],
	[t(0,20,44), t(0,20,55), "Gojoten Shrine Lions", "gojoten_shrine_lions"],
	[t(0,21,24), t(0,21,40), "Benkei Stone", "benkei_stone"],
	[t(0,32,7), t(0,32,12), "Kamo River", "kamo_river"],
	[t(0,32,12), t(0,32,19), "Pontocho Alley", "pontocho"],
	[t(1,11,58), t(1,12,30), "Rokkakudo Temple", "rokkakudo_temple"],
	[t(1,14,20), t(1,14,23), "Karasuma Street Sign", "karasuma_sign"],
	[t(1,14,33), t(1,14,48), "Bukkoji Temple", "bukkoji_temple"]
];

// startTime, endTime, modelName, fileName
var modelData = [
	[t(0,18,37), t(0,19,28), "Bridge Ornament", "stand_ball"],
	[t(0,20,44), t(0,20,55), "Stone Lion Left", "stone_lion_left"],
	[t(0,20,44), t(0,20,55), "Stone Lion Right", "stone_lion_right"],
	[t(0,21,23), t(0,21,44), "Benkei Stone", "benkei_stone"],
	[t(1,11,59), t(1,12,4), "Stone Lantern Day", "stone_lantern_conan"],
	[t(1,21,40), t(1,21,48), "Stone Lantern Night", "stone_lantern"]
];

// startTime, locationName, coordinates
var mapData = [
	[t(0,9,36), "Kyoto Station", {lat: 34.9858, lng: 135.7588}],
	[t(0,19,35), "Gojo Bridge", {lat: 34.9959, lng: 135.7675}],
	[t(0,21,24), "Benkei Stone", {lat: 35.0098, lng: 135.7658}],
	[t(0,22,20), "Kiyomizudera Temple", {lat: 34.9949, lng: 135.7850}],
	[t(0,32,7), "Kamo River", {lat: 35.0203, lng: 135.7714}],
	[t(0,32,12), "Pontocho", {lat: 35.0050, lng: 135.7711}],
	[t(1,11,59), "Rokkakudo Temple", {lat: 35.0077, lng: 135.7603}],
	[t(1,14,21), "Karasuma Street Sign", {lat: 35.0036, lng: 135.7599}],
	[t(1,14,34), "Bukkoji Temple", {lat: 35.0009, lng: 135.7623}]
];

function t(hours, minutes, seconds) {
	return 3600*hours + 60*minutes + seconds;
}