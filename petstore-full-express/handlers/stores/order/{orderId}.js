'use strict';
/**
 * Operations on /stores/order/{orderId}
 */
module.exports = {
    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * parameters: orderId
     * produces: application/json, application/xml
     */
    get: function getOrderById(req, res) {
        res.sendStatus(501);
    },
    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * parameters: orderId
     * produces: application/json, application/xml
     */
    delete: function deleteOrder(req, res) {
        res.sendStatus(501);
    }
};