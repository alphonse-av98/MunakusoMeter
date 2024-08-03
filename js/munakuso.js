google.charts.load('current', { packages: ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

var meter_data, chart;
const meter_options = {
    width: 400, height: 200,
    redFrom: 90, redTo: 100,
    yellowFrom: 75, yellowTo: 90,
    minorTicks: 5,
    min: 0
};

function drawChart() {
    meter_data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['😐', 0],
    ]);
    chart = new google.visualization.Gauge(document.getElementById('meter'));
    chart.draw(meter_data, meter_options);
}

function modMunakuso(value) {
    let next_value = meter_data.getValue(0, 1) + value;
    meter_data.setValue(0, 1, next_value < 100 ? next_value > 0 ? next_value : 0 : 100);
    if (next_value > 0 && next_value < 25) {
        meter_data.setValue(0, 0, '😐');
    } else if (next_value >= 25 && next_value < 50) {
        meter_data.setValue(0, 0, '🙁');
    } else if (next_value >= 50 && next_value < 75) {
        meter_data.setValue(0, 0, '😠');
    } else if (next_value >= 75 && next_value < 90) {
        meter_data.setValue(0, 0, '😡');
    } else if (next_value >= 90 && next_value < 100) {
        meter_data.setValue(0, 0, '🤬');
    } else if (next_value >= 100) {
        meter_data.setValue(0, 0, '💥');
    } else {
        meter_data.setValue(0, 0, '😐');
    }
    chart.draw(meter_data, meter_options);
}

function resetMunakuso() {
    meter_data.setValue(0, 0, '😐');
    meter_data.setValue(0, 1, 0);
    chart.draw(meter_data, meter_options);

}
