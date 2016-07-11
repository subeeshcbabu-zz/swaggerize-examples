'use strict';
var Pet = require('../../models/pet');
/**
 * Operations on /pets/{id}
 */
module.exports = {
    /**
     * Returns a user based on a single ID, if the user does not have access to the pet
     * parameters: id
     * produces: application/json, application/xml, text/xml, text/html
     */
    get: function findPetById(req, res) {
        var model = new Pet({
            name: 'sweetpet',
            id: 12345
        });
        res.status(200).send(model);
    },
    /**
     * deletes a single pet based on the ID supplied
     * parameters: id
     * produces:
     */
    delete: function deletePet(req, res) {
        res.sendStatus(204);
    }
};
