declare module '@vultrex/fetch' {
    export default class Request {
        constructor(url?: string, options: Options);
        public fetch(url?: string, options?: Options): Promise<any>;
        public setBearerAuthorization(token: any): void;
        public setAuthorization(token: any): void;
        public setContentType(type: string): void;
        public setBody(body: Object): void;
        public setMethod(method: string): void;
        public setUrl(url: string): void;
        public setHeaders(headers: Object): void;
        public setOptions(options): void;
    }
}

interface Options {
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: any;
    body?: any;
}