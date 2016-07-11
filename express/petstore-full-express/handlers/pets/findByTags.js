'use strict';
/**
 * Operations on /pets/findByTags
 */
module.exports = {
    /**
     * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
     * parameters: tags
     * produces: application/json, application/xml
     */
    get: function findPetsByTags(req, res) {
        res.sendStatus(501);
    }
};