'use strict';
var dataProvider = require('../../../data/api/random/feeling-words.js');
/**
 * Operations on /api/random/feeling-words
 */
module.exports = {
    /**
     * summary: Get a random set of words which evoke a feeling
     * description: Each word returned is a &#39;feeling word&#39;
     * parameters: count
     * produces: application/json
     * responses: 200
     */
    get: function getFeelingWords(req, res, next) {
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
