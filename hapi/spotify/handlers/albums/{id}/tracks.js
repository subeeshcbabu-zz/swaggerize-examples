'use strict';
var dataProvider = require('../../../data/albums/{id}/tracks.js');
/**
 * Operations on /albums/{id}/tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Album&#39;s Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)

     * parameters: id, limit, offset, market
     * produces: 
     * responses: 200
     */
    get: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
