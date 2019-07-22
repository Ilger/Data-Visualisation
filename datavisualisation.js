



const contentDivH1 = document.getElementById('content').children[2];
const svgElement = document.createElement('svg');
svgElement.id = 'dataVisualization';

// iife to append after h1 the svg element to post in the datachart
(() => {
	contentDivH1.after(svgElement)
})()

const selectSvg = document.getElementById('dataVisualization');

console.log(selectSvg);


// window.onload = function() {
// 	var dataPoints = [];
// 	var chart;	
// 	$.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
// 		$.each(data, function(key, value){
// 			dataPoints.push({x: value[0], y: parseInt(value[1])});
// 		});
// 		chart = new CanvasJS.Chart("chartContainer",{
// 			title:{
// 				text:"Live Chart with dataPoints from External JSON"
// 			},
// 			data: [{
// 				type: "line",
// 				dataPoints : dataPoints,
// 			}]
// 		});

// 		chart.render();
// 		updateChart();
// 	});
// 	function updateChart() {
// 	$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
// 		$.each(data, function(key, value) {
// 			dataPoints.push({
// 			x: parseInt(value[0]),
// 			y: parseInt(value[1])
// 			});
// 		});
// 		chart.render();
// 		setTimeout(function(){updateChart()}, 1000);
// 	});
// 	}
// }
