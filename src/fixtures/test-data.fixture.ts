import { test as base, APIRequestContext } from '@playwright/test';

export type TestDataFixture = {
  /**
   * Provides utilities for managing test data.
   * Automatically cleans up created data after each test.
   * 
   * Use this fixture to:
   * - Create test data via API before tests run
   * - Track created data for cleanup
   * - Ensure data isolation between tests
   * 
   * @example
   * test('should display created product', async ({ testData, apiClient }) => {
   *   const product = await testData.createProduct({ name: 'Test Product' });
   *   // Test code
   *   // Cleanup happens automatically after test
   * });
   */
  testData: {
    createdIds: string[];
    createProduct: (data: any) => Promise<any>;
    cleanup: () => Promise<void>;
  };
};

/**
 * Test data management fixtures.
 * Scope: 'test' (fresh data tracking per test)
 */
export const test = base.extend<TestDataFixture>({
  testData: async ({ request }, use) => {
    const createdIds: string[] = [];

    try {
      const testDataHelper = {
        createdIds,

        /**
         * Creates a product via API and tracks it for cleanup
         */
        async createProduct(data: any) {
          try {
            const response = await request.post('/api/products', { data });
            
            if (!response.ok()) {
              throw new Error(`Failed to create product: ${response.status()}`);
            }

            const product = await response.json();
            if (product.id) {
              createdIds.push(product.id);
            }

            console.log(`Created product with ID: ${product.id}`);
            return product;
          } catch (error) {
            console.error('Failed to create product:', error);
            throw error;
          }
        },

        /**
         * Cleans up all created test data
         */
        async cleanup() {
          if (createdIds.length === 0) {
            return;
          }

          try {
            for (const id of createdIds) {
              await request.delete(`/api/products/${id}`);
            }
            console.log(`Cleaned up ${createdIds.length} test data records`);
          } catch (error) {
            console.error('Failed to cleanup test data:', error);
            // Don't throw during cleanup to avoid masking test failures
          }
        },
      };

      await use(testDataHelper);

      // Cleanup after test completes
      await testDataHelper.cleanup();
    } catch (error) {
      console.error('Test data fixture setup failed:', error);
      throw error;
    }
  },
});

export { expect } from '@playwright/test';
