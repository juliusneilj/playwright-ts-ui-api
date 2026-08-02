import { APIResponse, expect, test } from '@playwright/test';
import { PokemonAPI } from '@apis';

test.describe('Poke API - Pokémon lookup', () => {
    let pokemonAPI: PokemonAPI;

    test.beforeEach(async () => {
        pokemonAPI = await new PokemonAPI().init();
    });

    test('@smoke should return a valid Pokémon payload for a valid ID', async () => {
        const response: APIResponse = await pokemonAPI.getPokemonById(36);
        const payload = await response.json();

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(payload.name).toBe('clefable');
        expect(payload.id).toBe(36);
        expect(Array.isArray(payload.abilities)).toBeTruthy();
    });
});
