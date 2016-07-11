'use strict';
/**
 * Operations on /users
 */
module.exports = {
    /**
     * This can only be done by the logged in user.
     * parameters: body
     * produces: application/json, application/xml
     */
    post: function createUser(req, res) {
        res.sendStatus(501);
    }
};