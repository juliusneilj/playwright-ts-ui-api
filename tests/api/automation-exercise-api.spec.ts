import { expect } from '@playwright/test';
import { test } from '@fixtures/api-clients.fixture';
import { validateResponse } from '@utils';
import { ProductsResponseSchema } from '@schema';

/**
 * Automation Exercise API Test Suite
 * Tests the Products endpoints for the Automation Exercise API.
 * 
 * Fixture: automationExerciseApi - Automatically initialized and cleaned up per test
 */
test.describe('Automation Exercise API - Products', () => {

    /**
     * Should return the products list with a successful HTTP status
     * Validates:
     * - Response status is 200
     * - Response is successful (ok())
     * - Response contains products array
     * - Products array is not empty
     */
    test.skip('should return the products list with a successful status', async ({ automationExerciseApi }) => {
        try {
            const response = await automationExerciseApi.getAllProductsList();
            const data = await response.json();

            expect(response.status()).toBe(200);
            expect(response.ok()).toBeTruthy();
            expect(data).toHaveProperty('products');
            expect(Array.isArray(data.products)).toBeTruthy();
            expect(data.products.length).toBeGreaterThan(0);
        } catch (error) {
            console.error('Test failed to fetch products list:', error);
            throw error;
        }
    });

    /**
     * Should return valid product metadata in the response payload
     * Validates:
     * - Each product has required properties (id, name, price)
     * - Product name is a string
     * - Price is a valid positive number
     */
    test.skip('should return product metadata in a valid response payload', async ({ automationExerciseApi }) => {
        try {
            const response = await automationExerciseApi.getAllProductsList();
            expect(response.status()).toBe(200);
            validateResponse(response, ProductsResponseSchema);
        } catch (error) {
            console.error('Test failed to validate product metadata:', error);
            throw error;
        }
    });
});