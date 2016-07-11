'use strict';
var dataProvider = require('../../../data/api/random/quote.js');
/**
 * Operations on /api/random/quote
 */
module.exports = {
    /**
     * summary: Get a random quote
     * description: 
     * parameters: 
     * produces: application/json
     * responses: 200
     */
    get: function getRandomQuote(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
