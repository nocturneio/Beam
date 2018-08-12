'use strict';

import axios from 'axios';

export default class RequestHelper {

    _url;
    _headers;
    _parameters;

    /**
     * Create an request easily to the Shine API (helpers)
     *
     * @param url API Endpoint
     */
    constructor(url) {
        if (url === "") throw new Error("Please specify an url to api endpoint.");
        this._url = url;
    }

    /**
     * Create a Request staticly.
     *
     * @param url API endpoint
     * @returns {RequestHelper}
     */
    static url(url){
        return new RequestHelper(url);
    }

    /**
     * Add headers to the request.
     *
     * @param object Request headers in object format.
     */
    headers(object) {
        this._headers = object;
        return this;
    }

    /**
     * Add parameters to the request.
     *
     * @param object Request headers in object format.
     */
    parameters(object) {
        this._parameters = object;
        return this;
    }

    /**
     * Execute post request.
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    post(){
        return axios.post(this._url, this._parameters, this._headers);
    }

    /**
     * Execute get request.
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    get(){
        const params = this._parameters;
        const headers = this._headers;

        let request = {params, headers};
        return axios.get(this._url, request);
    }
}