import { APIResponse, expect, test } from '@playwright/test';
import { AutomationExerciseAPI } from '@apis';

test.describe('Automation Exercise API - Products', () => {
    let automationExerciseAPI: AutomationExerciseAPI;

    test.beforeEach(async () => {
        automationExerciseAPI = await new AutomationExerciseAPI().init();
    });

    test('should return the products list with a successful status', async () => {
        const response: APIResponse = await automationExerciseAPI.getAllProductsList();
        const data = await response.json();

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(data).toHaveProperty('products');
        expect(Array.isArray(data.products)).toBeTruthy();
        expect(data.products.length).toBeGreaterThan(0);
    });

    test('should return product metadata in a valid response payload', async () => {
        const response: APIResponse = await automationExerciseAPI.getAllProductsList();
        const data = await response.json();

        const firstProduct = data.products[0];
        const normalizedPrice = String(firstProduct.price).replace(/[^\d.]/g, '');

        expect(firstProduct).toHaveProperty('id');
        expect(firstProduct).toHaveProperty('name');
        expect(firstProduct).toHaveProperty('price');
        expect(typeof firstProduct.name).toBe('string');
        expect(normalizedPrice.length).toBeGreaterThan(0);
        expect(Number(normalizedPrice)).toBeGreaterThan(0);
    });
});