import { IHeaders, IParameter } from "@custom-types";
import { APIRequestContext, APIResponse, request } from "playwright/test";

export default abstract class BaseAPI {
    protected baseUrl: string;
    protected timeout: number;
    public requestContext!: APIRequestContext;

    constructor(baseUrl: string, timeout: number = 30000) {
        this.baseUrl = baseUrl;
        this.timeout = timeout;
    }

    /**
     * Initializes the API client by creating a new request context.
     * 
     * @returns This API client instance for chaining.
     */
    public async init(): Promise<this> {
        this.requestContext = await request.newContext({
            baseURL: this.baseUrl,
            timeout: this.timeout,
        });
        console.log(`API client initialized with base URL: ${this.baseUrl}`);
        return this;
    }

    /**
     * Sends a GET request to the specified endpoint with the given headers and parameters.
     * 
     * @param endpoint - The API endpoint to send the request to.
     * @param headers - An object representing the request headers.
     * @param parameters - An object representing the query parameters.
     * @returns A promise that resolves to the API response.
     */
    protected async get(endpoint: string, headers?: IHeaders, parameters?: IParameter): Promise<APIResponse> {
        return this.requestContext.get(endpoint, {
            headers: {
                'Accept': 'application/json',
                ...headers
            },
            params: parameters
        });
    }

    /**
     * Sends a POST request to the specified endpoint with the given headers, parameters, and body.
     * 
     * @param endpoint - The API endpoint to send the request to.
     * @param headers - An object representing the request headers. Includes 'Content-Type' by default.
     * @param parameters - An object representing the query parameters.
     * @param body - The request payload to send in the body of the POST request.
     * @returns A promise that resolves to the API response.
     */

    protected async post(endpoint: string, headers?: IHeaders, parameters?: IParameter, body?: any): Promise<APIResponse> {
        return this.requestContext.post(endpoint, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            params: parameters,
            data: body
        });
    }
}