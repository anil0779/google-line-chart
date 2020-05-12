const { events } = require('../utilities/pub-sub.js');
// Read the mock json
const data = require('../../report');

document.getElementById('chart-selector').addEventListener('change', function (ev) {
    var selectedValue = ev.target.value;
    var selectedText = ev.target.selectedOptions[0].text;
    // publish the event on user action to update the y-axis
    events.publish('data-loaded', {
        ...data,
        yaxis: selectedValue,
        yaxisDisplay: selectedText
    });
});