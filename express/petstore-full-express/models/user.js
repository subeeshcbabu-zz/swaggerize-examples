'use strict';

function User(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.username = options.username;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.email = options.email;
    this.password = options.password;
    this.phone = options.phone;
    this.userStatus = options.userStatus;
}

module.exports = User;
