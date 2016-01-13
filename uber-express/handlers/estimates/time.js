'use strict';

/**
 * Operations on /estimates/time
 */
module.exports = {
    
    /**
     * The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.
     * parameters: start_latitude, start_longitude, customer_uuid, product_id
     * produces: 
     */
    get: function (req, res) {
        res.sendStatus(501);
    }
    
};
