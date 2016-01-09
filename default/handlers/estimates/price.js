'use strict';

/**
 * Operations on /estimates/price
 */
module.exports = {
    
    /**
     * The Price Estimates endpoint returns an estimated price range
for each product offered at a given location. The price estimate is
provided as a formatted string with the full price range and the localized
currency symbol.<br><br>The response also includes low and high estimates,
and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for
situations requiring currency conversion. When surge is active for a particular
product, its surge_multiplier will be greater than 1, but the price estimate
already factors in this multiplier.

     * parameters: start_latitude, start_longitude, end_latitude, end_longitude
     * produces: 
     */
    get: function (req, res) {
        res.sendStatus(501);
    }
    
};
