'use strict';
/**
 * Authorize function for securityDefinitions:Oauth2
 * type : oauth2
 * description: Oauth 2.0 authentication
 */
module.exports = function authorize(req, res, next) {
    //The context('this') for authorize will be bound to the 'securityDefinition'
    //this.authorizationUrl - The authorization URL for securityDefinitions:Oauth2
    //this.scopes - The available scopes for the securityDefinitions:Oauth2 security scheme
    //this.flow - The flow used by the securityDefinitions:Oauth2 OAuth2 security scheme

    //req.requiredScopes - list of scope names required for the execution (defined as part of security requirement object).
    

    //Perform auth here

    next();
};
