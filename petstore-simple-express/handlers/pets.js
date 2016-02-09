'use strict';
var Pet = require('../models/pet');
/**
 * Operations on /pets
 */
module.exports = {
    /**
     * Returns all pets from the system that the user has access to
     * parameters: tags, limit
     * produces: application/json, application/xml, text/xml, text/html
     */
    get: function findPets(req, res) {
        var model = new Pet({
            name: 'sweetpet',
            id: 12345
        });
        res.status(200).send(model);
    },
    /**
     * Creates a new pet in the store.  Duplicates are allowed
     * parameters: pet
     * produces: application/json
     */
    post: function addPet(req, res) {
        var model = new Pet({
            name: 'sweetpet',
            id: 12345
        });
        res.status(200).send(model);
    }
};
