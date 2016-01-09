'use strict';

function errorModel(options) {
    if (!options) {
        options = {};
    }
    
    this.code = options.code;
    this.message = options.message;
}

module.exports = errorModel;
