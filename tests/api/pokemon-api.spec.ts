import { expect } from '@playwright/test';
import { test } from '@fixtures/api-clients.fixture';

/**
 * Pokémon API Test Suite
 * Tests the Pokémon lookup endpoints from PokéAPI.
 * 
 * Fixture: pokemonApi - Automatically initialized and cleaned up per test
 */
test.describe('Poke API - Pokémon lookup', () => {

    /**
     * Should return a valid Pokémon payload for a valid ID
     * Validates:
     * - Response status is 200
     * - Response is successful (ok())
     * - Pokémon has correct name and ID
     * - Abilities array is present and is an array
     */
    test('@smoke should return a valid Pokémon payload for a valid ID', async ({ pokemonApi }) => {
        try {
            const response = await pokemonApi.getPokemonById(36);
            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const payload = await response.json();

            expect(payload.name).toBe('clefable');
            expect(payload.id).toBe(36);
            expect(Array.isArray(payload.abilities)).toBeTruthy();
            expect(payload.abilities.length).toBeGreaterThan(0);
        } catch (error) {
            console.error('Test failed to fetch Pokémon details:', error);
            throw error;
        }
    });
});
