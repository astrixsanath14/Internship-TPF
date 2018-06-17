
window.onload = function () {

var dps = []; // dataPoints
var chart = new CanvasJS.Chart("zchartContainer", {
	title :{
		text: "Z Value"
	},
	axisY: {
		includeZero: false
	},
	data: [{
		type: "line",
		dataPoints: dps
	}]
});

var xVal = 0;
var yVal = 100;
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;
  for (var j = 0; j < count; j++) {
		//yVal = 100;
    yVal = Math.round(document.querySelector('#zID').textContent);
    dps.push({
			x: xVal,
			y: yVal
		});
		xVal++;
	}

	if (dps.length > dataLength) {
		dps.shift();
	}

	chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}