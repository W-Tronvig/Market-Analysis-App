

//on load will add the button
window.addEventListener("load", function() {
  document.getElementById("show-chart-button").addEventListener("click", showChart);
})

function showChart() {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Data Analysis Chart"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: productsArray
		}
		]
	});
	document.getElementById("chartContainer").style.visibility = "visible";
	chart.render();
}
