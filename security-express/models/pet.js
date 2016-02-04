'use strict';

function Pet(options) {
    if (!options) {
        options = {};
    }
    
    this.name = options.name;
    this.tag = options.tag;
}

module.exports = Pet;
