import { BaseAPI } from "@core";
import { APIResponse } from "playwright/test";

export default class PokemonAPI extends BaseAPI {
/**
 * Constructs a new instance of the PokemonAPI class.
 * Sets the base URL for the API requests and the timeout for the requests.
 * If the POKEMON_API_BASE_URL environment variable is set, it uses that as the base URL; 
 * otherwise, it defaults to 'https://pokeapi.co/api/v2'.
 */

    constructor() {
        const baseUrl = process.env.POKEMON_API_BASE_URL || 'https://pokeapi.co/api/v2/';
        const timeout = 10000;
        super(baseUrl, timeout);
    }

    

    public async getPokemonById(id: number): Promise<APIResponse> {
        return this.get(`pokemon/${id}`);
    }
}
