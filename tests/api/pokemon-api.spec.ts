import test, { APIResponse, expect } from "@playwright/test";
import { PokemonAPI } from "@apis";

test.describe('Poke API Tests', () => {
    let pokemonAPI: PokemonAPI;

    test.beforeEach(async () => {
        pokemonAPI = await new PokemonAPI().init();
    })

    test('Get Pokemon by id', async () => {
        const response: APIResponse = await pokemonAPI.getPokemonById(36);
        console.log(await response.json());
        expect(response.status()).toEqual(200);
    })
})
