'use strict';

function Product(options) {
    if (!options) {
        options = {};
    }
    
    this.product_id = options.product_id;
    this.description = options.description;
    this.display_name = options.display_name;
    this.capacity = options.capacity;
    this.image = options.image;
}

module.exports = Product;
