'use strict';
/**
 * Operations on /minimal
 */
module.exports = {
    /**
     *
     * parameters:
     * produces:
     */
    get: function (req, reply) {
        reply("Hello").code(200);
    }
};
