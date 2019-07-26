


window.onload = function() {

const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')

console.log(table1);
console.log(table2);

// parse table
var table = document.querySelector("table");
var data  = parseTable(table);
console.log(data);

var tbl = $('table#students tr').map(function() {
	return $(this).find('td').map(function() {
	  return $(this).text();
	}).get();
}).get();

// // make chart
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });













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