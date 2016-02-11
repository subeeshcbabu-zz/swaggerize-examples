'use strict';

function Pet(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.category = options.category;
    this.name = options.name;
    this.photoUrls = options.photoUrls;
    this.tags = options.tags;
    this.status = options.status;
}

module.exports = Pet;
