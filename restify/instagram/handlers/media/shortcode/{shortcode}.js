'use strict';
var dataProvider = require('../../../data/media/shortcode/{shortcode}.js');
/**
 * Operations on /media/shortcode/{shortcode}
 */
module.exports = {
    /**
     * summary: Get information about a media object.
     * description: This endpoint returns the same response as `GET /media/{media-id}`.

A media object&#39;s shortcode can be found in its shortlink URL. An example shortlink is
`http://instagram.com/p/D/`, its corresponding shortcode is `D`.

     * parameters: shortcode
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
