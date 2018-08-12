'use strict';

import RequestHelper from "./request";

export const SCOPES = {
    OPEN_ID: 'openid',
    PROFILE: 'profile',
    EMAIL: 'email',
    PHONE: 'phone',
    BANK_TRANSFERS_READ: 'bank:transfers:read',
    BANK_TRANSFERS_WRITE: 'bank:transfers:write',
    BANK_RECIPIENTS_READ: 'bank:transfers:recipients:read',
    BANK_RECIPIENTS_WRITE: 'bank:transfers:recipients:write',
    BANK_TRANSACTIONS_READ: 'bank:transactions:read',
    BANK_ACCOUNTS_READ: 'bank:accounts:read',
    USER_COMPANIES_READ: 'user:companies:read',
    USER_PROFILE_READ: 'user:profile:read',
    USER: 'user',
    BANK: 'bank',
};

export default class Shine {

    API_OAUTH_ENDPOINT = 'https://api.shine.fr/v2/authentication/oauth2';
    CLIENT_ID;
    CLIENT_SECRET;
    REDIRECT_URI;
    SCOPE = [];

    /**
     * Create the client for Shine API and get it.
     * (Request a API Access before use this libs)
     *
     * @param CLIENT_ID Your client ID in Shine.
     * @param CLIENT_SECRET Your client secret in Shine.
     * @param REDIRECT_URI An redirect URI if you like to connect a login app to Shine API.
     * @param SCOPE An array of string with your requested scope.
     */
    constructor(CLIENT_ID : String, CLIENT_SECRET : String, REDIRECT_URI : String, SCOPE : Array) {
        /*if(CLIENT_ID instanceof String == false) throw new Error("Please specify a string for the client id.");
        if(CLIENT_SECRET instanceof String == false) throw new Error("Please specify a string for the client secret.");
        if(REDIRECT_URI instanceof String == false) throw new Error("Please specify a string for the redirect url.");*/
        //if(Array.isArray(SCOPE)) throw new Error("Please specify an array for the scope(s).");

        this.CLIENT_ID = CLIENT_ID;
        this.CLIENT_SECRET = CLIENT_SECRET;
        this.REDIRECT_URI = REDIRECT_URI;
        this.SCOPE = SCOPE
    }

    /**
     * Step 1
     * Get an authorization url for ask the user permissions to access to his/her account
     *
     * @returns {string} An url for redirect the user.
     */
    getAuthorizationURL(){
        let scope = "";
        let scopeLength = this.SCOPE.length;
        this.SCOPE.map((entry, index) => {
            if (scopeLength === index + 1) scope += entry;
            else scope += entry + "%20";
        });

        return this.API_OAUTH_ENDPOINT + "/authorize?client_id=" + this.CLIENT_ID + "&scope=" + scope + "&state=" + new Date().getTime() + "&redirect_uri=" + encodeURI(this.REDIRECT_URI);
    }

    /**
     * Step 2
     * Request an access token to access to the Shine API.
     *
     * @returns {Promise<T | never>}
     */
    requestAccessToken(code : String){
        //if(code instanceof String == false) throw new Error("Please specify a string for the returned code.");

        return RequestHelper.url(this.API_OAUTH_ENDPOINT + '/token').headers({
            'Content-Type': 'application/json'
        }).parameters({
            'client_id': this.CLIENT_ID,
            'client_secret': this.CLIENT_SECRET,
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': this.REDIRECT_URI
        }).get().then((user) => {
            return user;
        }).catch(() => {
            throw new Error('Whoops ! An error occured')
        });
    }

    /**
     * Step 2
     * Request an access token to access to the Shine API.
     *
     * @returns {Promise<T | never>}
     */
    refreshToken(refresh_token : String){
        //if(accessToken instanceof String === false) throw new Error("Please specify a string for the access token.");

        return RequestHelper.url(this.API_OAUTH_ENDPOINT + '/token').headers({
            'Content-Type': 'application/json'
        }).parameters({
            'client_id': this.CLIENT_ID,
            'client_secret': this.CLIENT_SECRET,
            'grant_type': 'refresh_token',
            'refresh_token': refresh_token,
            'redirect_uri': this.REDIRECT_URI
        }).get().then((user) => {
            return user;
        }).catch(() => {
            throw new Error('Whoops ! An error occured')
        });
    }



}

