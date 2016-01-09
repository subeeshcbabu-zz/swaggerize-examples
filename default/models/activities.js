'use strict';

function Activities(options) {
    if (!options) {
        options = {};
    }
    
    this.offset = options.offset;
    this.limit = options.limit;
    this.count = options.count;
    this.history = options.history;
}

module.exports = Activities;
