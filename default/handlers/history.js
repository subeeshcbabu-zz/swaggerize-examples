'use strict';

/**
 * Operations on /history
 */
module.exports = {
    
    /**
     * The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.
     * parameters: offset, limit
     * produces: 
     */
    get: function (req, res) {
        res.sendStatus(501);
    }
    
};
