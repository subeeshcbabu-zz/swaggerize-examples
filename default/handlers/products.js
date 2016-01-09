'use strict';

/**
 * Operations on /products
 */
module.exports = {
    
    /**
     * The Products endpoint returns information about the *Uber* products
offered at a given location. The response includes the display name
and other details about each product, and lists the products in the
proper display order.

     * parameters: latitude, longitude
     * produces: 
     */
    get: function (req, res) {
        res.sendStatus(501);
    }
    
};
