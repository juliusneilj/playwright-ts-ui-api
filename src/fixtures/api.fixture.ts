import { test as base, APIRequestContext } from '@playwright/test';

export type APIFixtures = {
  /**
   * Provides an APIRequestContext for making HTTP requests in tests.
   * Useful for API testing, backend setup, or data seeding.
   * 
   * The context is automatically closed after each test.
   * 
   * @example
   * test('should create user via API', async ({ apiClient }) => {
   *   const response = await apiClient.post('/users', { data: { name: 'John' } });
   *   expect(response.ok()).toBeTruthy();
   * });
   */
  apiClient: APIRequestContext;
};

/**
 * API test fixtures for backend testing and data management.
 * Scope: 'test' (fresh context per test for isolation)
 */
export const test = base.extend<APIFixtures>({
  apiClient: async ({ request }, use) => {
    try {
      // Use the request context provided by Playwright
      await use(request);
    } catch (error) {
      console.error('API client fixture setup failed:', error);
      throw error;
    }
  },
});

export { expect } from '@playwright/test';
