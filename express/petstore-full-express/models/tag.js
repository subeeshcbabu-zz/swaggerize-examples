'use strict';

function Tag(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.name = options.name;
}

module.exports = Tag;
