


window.onload = function() {

const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')

console.log(table1);
console.log(table2);

var table = document.querySelector("table");
var data  = parseTable(table);
console.log(data);


// const ankerLiveDataContainer = document.getElementById('content').children[2];
// const containerData = document.createElement('div').innerHTML = "<canvas id="myChart" width="400" height="400"></canvas>";
// containerElement.id = 'container';

// // iife => append container element after h1
// (() => {
// 	contentDivH1.after(svgElement)
// })()

// console.log(document.getElementById('container'));


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
}