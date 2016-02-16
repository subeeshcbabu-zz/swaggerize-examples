'use strict';
/**
 * Operations on /pets
 */
module.exports = {
    /**
     *
     * parameters: body
     * produces: application/json, application/xml
     */
    post: function addPet(req, res) {
        res.sendStatus(405);
    },
    /**
     *
     * parameters: body
     * produces: application/json, application/xml
     */
    put: function updatePet(req, res) {
        res.sendStatus(501);
    }
};
