'use strict';
var dataProvider = require('../../../../data/browse/categories/{category_id}/playlists.js');
/**
 * Operations on /browse/categories/{category_id}/playlists
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a Category&#39;s playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)

     * parameters: category_id, limit, offset, country, Accept
     * produces: 
     * responses: 200, 429
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
