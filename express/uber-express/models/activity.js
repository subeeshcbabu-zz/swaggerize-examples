'use strict';

function Activity(options) {
    if (!options) {
        options = {};
    }
    
    this.uuid = options.uuid;
}

module.exports = Activity;
