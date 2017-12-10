// This is the octopus part
var ViewModel = function() {
	var self = this;

	this.lineList = lineList;
	this.selectedLine = ko.observable('Hudson Line'); 
	this.displayTrainStationList = ko.computed(()=>{
		if(this.selectedLine()){
			console.log('gethere');
			return allTrainStations.filter(station => station.line == this.selectedLine()); 
		}		
	}),this;
};
// This is the data part
var lineList = ['Harlem Line', 'Hudson Line'];
var allTrainStations = [
	{
		name : 'White Plains',
		line : 'Harlem Line',
		address : {lat: 41.035453, lng: -73.774714}
	},
	{
		name: 'North White Plains',
		line : 'Harlem Line',
		address: {lat: 41.051315, lng: -73.772475}
	},
	{
		name: 'Cold Spring',
		line: 'Hudson Line',
		address: {lat: 41.415259, lng: -73.958101}
	}
];

// This is the model part
var trainStation = function(data) {
	// var lineFlag = 
};


ko.applyBindings(new ViewModel())