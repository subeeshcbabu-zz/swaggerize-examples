'use strict';

function ErrorModel(options) {
    if (!options) {
        options = {};
    }
    
    this.code = options.code;
    this.message = options.message;
}

module.exports = ErrorModel;
