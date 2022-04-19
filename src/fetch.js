const fetch = require('cross-fetch')

module.exports = class Request {
    constructor(url, options = {
        method: '',
        headers: {},
        body: null,
        type: ''
    }) {
        this.url = url;
        this.options = options;
        this.method = options.method || 'GET';
        this.headers = options.headers || null;
        this.body = options.body || null;
        this.type = options.type || 'application/json';
    }

    async fetch(url = {
        url: this.url,
    },
        options = {
        method: this.method,
        headers: this.headers,
        body: this.body
    }) {
        const data = (options.body) ? await fetch(this.url, options) : await fetch(this.url);
        if (options.method !== 'GET') {
            if (options.method !== 'DELETE') {
                options.body = JSON.stringify(options.body);
            };
        };

        return new Promise(async (resolve, reject) => {
            return await fetch(this.url, options).then((x) => {
                x.json().then((y) => {
                    return resolve(y);
            }).catch(() => {
                resolve(null);
                console.log(x)
            });
            })
        });
    };

    setBearerAuthorization(token) {
        if (!token) {
            throw new Error('Bearer token is required');
        };
        this.headers.Authorization = `Bearer ${token}`;
    };
    
    setAuthorization(token) {
        if (!token) {
            throw new Error('Authorization token is required');
        }
        this.headers.Authorization = `${token}`;
    };

    setContentType(type) {
        this.headers['Content-Type'] = type;
    };

    setBody(body) {
        this.body = body;
    };

    setMethod(method) {
        if (!method) {
            throw new Error('Method is required');
        }
        this.method = method;
    };

    setUrl(url) {
        this.url = url;
    };

    setHeaders(headers) {
        this.headers = headers;
    };

    setOptions(options) {
        this.options = options;
    };
}