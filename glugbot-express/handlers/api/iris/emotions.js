'use strict';
var dataProvider = require('../../../data/api/iris/emotions.js');
/**
 * Operations on /api/iris/emotions
 */
module.exports = {
    /**
     * summary: Get emotional index for passed text
     * description: Gets a 20 point emotional index
     * parameters: textInput
     * produces: application/json
     * responses: 200
     */
    post: function getIris(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
