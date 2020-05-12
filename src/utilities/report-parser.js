const { events } = require('./pub-sub.js');
const data = require('../../report');

events.publish('data-loaded', data);