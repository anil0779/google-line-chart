const { events } = require('../utilities/pub-sub.js');
const data = require('../../report');

document.getElementById('chart-selector').addEventListener('change', function (ev) {
    var selectedValue = ev.target.value;
    var selectedText = ev.target.selectedOptions[0].text;
    debugger;
    events.publish('data-loaded', {
        ...data,
        yaxis: selectedValue,
        yaxisDisplay: selectedText
    });
});