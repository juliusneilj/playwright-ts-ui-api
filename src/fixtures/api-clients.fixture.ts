import { test as base } from './base.fixture';
import { AutomationExerciseAPI, PokemonAPI } from '@apis';

export type APIClientsFixtures = {
  /**
   * Provides an initialized AutomationExerciseAPI client.
   * 
   * The API client is automatically initialized before each test and
   * the request context is closed after the test completes.
   * 
   * @example
   * test('should fetch products', async ({ automationExerciseApi }) => {
   *   const response = await automationExerciseApi.getAllProductsList();
   *   expect(response.ok()).toBeTruthy();
   * });
   */
  automationExerciseApi: AutomationExerciseAPI;

  /**
   * Provides an initialized PokemonAPI client.
   * 
   * The API client is automatically initialized before each test and
   * the request context is closed after the test completes.
   * 
   * @example
   * test('should fetch pokemon details', async ({ pokemonApi }) => {
   *   const response = await pokemonApi.getPokemonById(1);
   *   expect(response.ok()).toBeTruthy();
   * });
   */
  pokemonApi: PokemonAPI;
};

/**
 * API Client fixtures providing pre-initialized API instances.
 * 
 * All API clients are automatically initialized and cleaned up per test.
 * Scope: 'test' (fresh instance per test for isolation)
 */
export const test = base.extend<APIClientsFixtures>({
  automationExerciseApi: async ({}, use) => {
    let apiClient: AutomationExerciseAPI | null = null;

    try {
      apiClient = new AutomationExerciseAPI();
      await apiClient.init();
      console.log('[Fixture] AutomationExerciseAPI initialized');
      await use(apiClient);
    } catch (error) {
      console.error('[Fixture] AutomationExerciseAPI initialization failed:', error);
      throw error;
    } finally {
      // Cleanup: close the request context
      if (apiClient) {
        try {
          if (apiClient.requestContext) {
            await apiClient.requestContext.dispose();
            console.log('[Fixture] AutomationExerciseAPI request context closed');
          }
        } catch (error) {
          console.error('[Fixture] Failed to cleanup AutomationExerciseAPI:', error);
        }
      }
    }
  },

  pokemonApi: async ({}, use) => {
    let apiClient: PokemonAPI | null = null;

    try {
      apiClient = new PokemonAPI();
      await apiClient.init();
      console.log('[Fixture] PokemonAPI initialized');
      await use(apiClient);
    } catch (error) {
      console.error('[Fixture] PokemonAPI initialization failed:', error);
      throw error;
    } finally {
      // Cleanup: close the request context
      if (apiClient) {
        try {
          if (apiClient.requestContext) {
            await apiClient.requestContext.dispose();
            console.log('[Fixture] PokemonAPI request context closed');
          }
        } catch (error) {
          console.error('[Fixture] Failed to cleanup PokemonAPI:', error);
        }
      }
    }
  },
});

export { expect } from '@playwright/test';
