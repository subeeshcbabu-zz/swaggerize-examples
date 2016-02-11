'use strict';

function Order(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.petId = options.petId;
    this.quantity = options.quantity;
    this.shipDate = options.shipDate;
    this.status = options.status;
    this.complete = options.complete;
}

module.exports = Order;
