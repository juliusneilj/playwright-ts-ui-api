import { test as base, Page } from '@playwright/test';

export type AuthFixtures = {
  /**
   * Provides an authenticated browser page.
   * Handles login automatically before each test.
   * 
   * Configure authentication credentials via environment variables:
   * - AUTH_USERNAME: The username for authentication
   * - AUTH_PASSWORD: The password for authentication
   * - AUTH_LOGIN_URL: The login page URL (default: baseURL + '/login')
   * 
   * @example
   * test('should show user dashboard when authenticated', async ({ authenticatedPage }) => {
   *   await expect(authenticatedPage).toHaveURL('/dashboard');
   * });
   */
  authenticatedPage: Page;
};

/**
 * Authentication fixtures for tests requiring logged-in state.
 * Scope: 'test' (fresh authentication per test)
 */
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    try {
      // Get credentials from environment variables
      const username = process.env.AUTH_USERNAME;
      const password = process.env.AUTH_PASSWORD;
      const loginUrl = process.env.AUTH_LOGIN_URL || `${process.env.BASE_URL || ''}/login`;

      if (!username || !password) {
        throw new Error(
          'Authentication credentials not found. ' +
          'Set AUTH_USERNAME and AUTH_PASSWORD environment variables.'
        );
      }

      // Navigate to login page
      await page.goto(loginUrl);

      // Fill and submit login form
      // Note: Adjust selectors based on your actual login form
      await page.fill('input[name="username"]', username);
      await page.fill('input[name="password"]', password);
      await page.click('button[type="submit"]');

      // Wait for navigation to complete
      await page.waitForURL('**/dashboard');

      console.log('User authenticated successfully');
      await use(page);
    } catch (error) {
      console.error('Authentication fixture setup failed:', error);
      throw error;
    }
  },
});

export { expect } from '@playwright/test';
