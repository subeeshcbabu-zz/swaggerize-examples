'use strict';

function Profile(options) {
    if (!options) {
        options = {};
    }
    
    this.first_name = options.first_name;
    this.last_name = options.last_name;
    this.email = options.email;
    this.picture = options.picture;
    this.promo_code = options.promo_code;
}

module.exports = Profile;
