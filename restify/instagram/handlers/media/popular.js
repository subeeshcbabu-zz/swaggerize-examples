'use strict';
var dataProvider = require('../../data/media/popular.js');
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
     */
    get: function (req, res, next) {
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
            res.send(status, data && data.responses);
            next();
        });
    }
};
