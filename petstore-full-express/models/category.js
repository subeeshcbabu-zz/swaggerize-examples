'use strict';

function Category(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.name = options.name;
}

module.exports = Category;
