'use strict';
/**
 * Authorize function for securityDefinitions:instagram_auth
 * type : oauth2
 * description: 
 */
module.exports = function authorize(req, res, next) {
    //The context('this') for authorize will be bound to the 'securityDefinition'
    //this.authorizationUrl - The authorization URL for securityDefinitions:instagram_auth
    //this.scopes - The available scopes for the securityDefinitions:instagram_auth security scheme
    //this.flow - The flow used by the securityDefinitions:instagram_auth OAuth2 security scheme

    //req.requiredScopes - list of scope names required for the execution (defined as part of security requirement object).
    

    //Perform auth here

    next();
};
