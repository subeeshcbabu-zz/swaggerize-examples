'use strict';
/**
 * Operations on /pets/findByStatus
 */
module.exports = {
    /**
     * Multiple status values can be provided with comma seperated strings
     * parameters: status
     * produces: application/json, application/xml
     */
    get: function findPetsByStatus(req, res) {
        res.sendStatus(501);
    }
};