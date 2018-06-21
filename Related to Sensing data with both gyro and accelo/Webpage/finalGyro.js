window.onload = function () {
var counter = 0;
var dataPoints1 = [];
var dataPoints2 = [];
var dataPoints3 = [];

var chart2 = new CanvasJS.Chart("chartContainer", {
	title: {
		text: "Live Gyro Demo"
	},
	axisY:{
		includeZero: false
	},
	legend: {
    cursor:"pointer",
		verticalAlign: "top",
		fontSize: 22,
		fontColor: "dimGrey",
		itemclick : toggleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "X Values",
		dataPoints: dataPoints1
		},
		{
      type: "line",
  		showInLegend: true,
  		name: "Y Values",
  		dataPoints: dataPoints2
	},
  {
    type: "line",
		showInLegend: true,
		name: "Z Values",
		dataPoints: dataPoints3
  }]
});

function toggleDataSeries(e) {
	chart.render();
}

var updateInterval = 250;
var xVal = 0;

function updateChart(count) {
	count = count || 1;
	for (var i = 0; i < count; i++) {

	// adding random value and rounding it to two digits.
	yValue1 = Math.round(document.querySelector('#xID').textContent);
	yValue2 = Math.round(document.querySelector('#yID').textContent);
	yValue3 = Math.round(document.querySelector('#zID').textContent);

	// pushing the new values
	dataPoints1.push({
		x: xVal,
		y: yValue1
	});
	dataPoints2.push({
		x: xVal,
		y: yValue2
	});
  dataPoints3.push({
		x: xVal,
		y: yValue3
	});
	}
	// updating legend text with  updated with y Value
	chart.options.data[0].legendText = " Yaw :" + yValue1;
	chart.options.data[1].legendText = " Pitch :" + yValue2;
	chart.options.data[2].legendText = " Roll :" + yValue3;
	xVal++;
	if (dataPoints1.length > 1) {
		dataPoints1.shift();
	}
	if(dataPoints2.length > 1){
		dataPoints2.shift();
	}
	if(dataPoints3.length > 1){
		dataPoints3.shift();
	}
	chart.render();
}
// generates first set of dataPoints
updateChart(1);
setInterval(function(){updateChart()}, updateInterval);
}