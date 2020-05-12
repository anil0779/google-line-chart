const { events } = require('../utilities/pub-sub.js');

event && event.unsubscribe();
var event = events.subscribe('data-loaded', function (data) {
    google.charts.load('current', { packages: ['corechart', 'line'] });
    google.charts.setOnLoadCallback(function () {

        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('date', 'Date');
        dataTable.addColumn('number', data.yaxisDisplay || 'Click Thru Rate');

        var initialRows = data.records.map(function (item) {
            var [mm, dd, yyyy] = item && item.date && item.date.split('/');
            return [new Date(yyyy, mm - 1, dd), item[data.yaxis || 'clickThruRate']];
        });

        dataTable.addRows(initialRows);

        var options = {
            pointSize: 5,
            legend: { position: 'top', alignment: 'center' },
            hAxis: {
                format: 'M/dd/yyyy'
            }
        };

        var chart = new google.visualization.LineChart(document.getElementById('line-chart'));

        chart.draw(dataTable, options);
    });
});