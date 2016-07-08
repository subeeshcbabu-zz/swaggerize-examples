'use strict';
var dataProvider = require('../../../data/api/iris/akin-poem-snippets.js');
/**
 * Operations on /api/iris/akin-poem-snippets
 */
module.exports = {
    /**
     * summary: Gets snippets from poems which evoke similar emotions
     * description: Count cannot be more than 20
     * parameters: count, textInput
     * produces: application/json
     * responses: 200
     */
    post: function getAkinPoemSnippets(req, res, next) {
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
