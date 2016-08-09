'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /media/popular
 */
module.exports = {
    /**
     * summary: Get a list of currently popular media.
     * description: Get a list of what media is most popular at the moment. Can return mix of `image` and `video` types.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015

     * parameters: 
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/media/popular',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
