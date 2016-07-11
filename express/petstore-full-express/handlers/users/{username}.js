'use strict';
/**
 * Operations on /users/{username}
 */
module.exports = {
    /**
     * 
     * parameters: username
     * produces: application/json, application/xml
     */
    get: function getUserByName(req, res) {
        res.sendStatus(501);
    },
    /**
     * This can only be done by the logged in user.
     * parameters: username, body
     * produces: application/json, application/xml
     */
    put: function updateUser(req, res) {
        res.sendStatus(501);
    },
    /**
     * This can only be done by the logged in user.
     * parameters: username
     * produces: application/json, application/xml
     */
    delete: function deleteUser(req, res) {
        res.sendStatus(501);
    }
};