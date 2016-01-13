'use strict';

function PriceEstimate(options) {
    if (!options) {
        options = {};
    }
    
    this.product_id = options.product_id;
    this.currency_code = options.currency_code;
    this.display_name = options.display_name;
    this.estimate = options.estimate;
    this.low_estimate = options.low_estimate;
    this.high_estimate = options.high_estimate;
    this.surge_multiplier = options.surge_multiplier;
}

module.exports = PriceEstimate;
