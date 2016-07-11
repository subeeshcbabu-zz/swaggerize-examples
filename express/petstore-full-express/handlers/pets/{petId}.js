'use strict';
/**
 * Operations on /pets/{petId}
 */
module.exports = {
    /**
     * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
     * parameters: petId
     * produces: application/json, application/xml
     */
    get: function getPetById(req, res) {
        res.sendStatus(501);
    },
    /**
     * 
     * parameters: petId, name, status
     * produces: application/json, application/xml
     */
    post: function updatePetWithForm(req, res) {
        res.sendStatus(501);
    },
    /**
     * 
     * parameters: api_key, petId
     * produces: application/json, application/xml
     */
    delete: function deletePet(req, res) {
        res.sendStatus(501);
    }
};