window.onload = function () {
var counter = 0;
var dataPoints1 = [];
var dataPoints2 = [];
var dataPoints3 = [];

var counter = 0;
var dataPoints4 = [];
var dataPoints5 = [];
var dataPoints6 = [];
var chart1 = new CanvasJS.Chart("chartContainer1", {
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
		name: "Yaw",
		dataPoints: dataPoints1
		},
		{
      type: "line",
  		showInLegend: true,
  		name: "Pitch",
  		dataPoints: dataPoints2
	},
  {
    type: "line",
		showInLegend: true,
		name: "Roll",
		dataPoints: dataPoints3
  }]
});

var chart2 = new CanvasJS.Chart("chartContainer2", {
	title: {
		text: "Live Accel Demo"
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
		name: "Acc X ",
		dataPoints: dataPoints4
		},
		{
      type: "line",
  		showInLegend: true,
  		name: "Acc Y",
  		dataPoints: dataPoints5
	},
  {
    type: "line",
		showInLegend: true,
		name: "Acc Z",
		dataPoints: dataPoints6
  }]
});

function toggleDataSeries(e) {
	chart1.render();
	chart2.render();
}

var updateInterval = 100;
var xVal = 0;

function updateChart(count) {
	count = count || 1;
	for (var i = 0; i < count; i++) {

	// adding random value and rounding it to two digits.
	yValue1 = Math.round(document.querySelector('#xID').textContent);
	yValue2 = Math.round(document.querySelector('#yID').textContent);
	yValue3 = Math.round(document.querySelector('#zID').textContent);

	yValue4 = Math.round(document.querySelector('#axID').textContent);
	yValue5 = Math.round(document.querySelector('#ayID').textContent);
	yValue6 = Math.round(document.querySelector('#azID').textContent);


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

	dataPoints4.push({
		x: xVal,
		y: yValue4
	});
	dataPoints5.push({
		x: xVal,
		y: yValue5
	});
	dataPoints6.push({
		x: xVal,
		y: yValue6
	});


	}
	// updating legend text with  updated with y Value
	chart1.options.data[0].legendText = " Yaw :" + yValue1;
	chart1.options.data[1].legendText = " Pitch :" + yValue2;
	chart1.options.data[2].legendText = " Roll :" + yValue3;

	chart2.options.data[0].legendText = " Acc X :" + yValue4;
	chart2.options.data[1].legendText = " Acc Y :" + yValue5;
	chart2.options.data[2].legendText = " Acc Z :" + yValue6;

	xVal++;
	if (dataPoints1.length > 10) {
		dataPoints1.shift();
	}
	if(dataPoints2.length > 10){
		dataPoints2.shift();
	}
	if(dataPoints3.length > 10){
		dataPoints3.shift();
	}

	if (dataPoints4.length > 10) {
		dataPoints4.shift();
	}
	if(dataPoints5.length > 10){
		dataPoints5.shift();
	}
	if(dataPoints6.length > 10){
		dataPoints6.shift();
	}
	chart1.render();
	chart2.render();
}
// generates first set of dataPoints
updateChart(10);
setInterval(function(){updateChart()}, updateInterval);
}