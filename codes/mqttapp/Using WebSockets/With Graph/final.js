window.onload = function () {

var dataPoints1 = [];
var dataPoints2 = [];
var dataPoints3 = [];

var chart = new CanvasJS.Chart("chartContainer", {
	zoomEnabled: true,
	title: {
		text: "Live Gyro Demo"
	},
	axisX: {
		title: "chart updates every second"
	},
	axisY:{
		includeZero: false
	},
	toolTip: {
		shared: true
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

var updateInterval = 1000;
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
	chart.options.data[0].legendText = " X :" + yValue1;
	chart.options.data[1].legendText = " Y :" + yValue2;
	chart.options.data[2].legendText = " Z :" + yValue3;
	chart.render();
  xVal++;
}
// generates first set of dataPoints
updateChart(100);
setInterval(function(){updateChart()}, updateInterval);

}