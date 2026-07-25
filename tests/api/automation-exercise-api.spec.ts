import { APIResponse, expect, test } from "@playwright/test";
import { AutomationExerciseAPI } from "@apis";

test.describe('Automation Exercise API Tests', () => {
    let automationExerciseAPI: AutomationExerciseAPI;

    test.beforeEach(async () => {
        automationExerciseAPI = await new AutomationExerciseAPI().init();
    })

    test('Get all products list', async () => {
        const response: APIResponse = await automationExerciseAPI.getAllProductsList();
        console.log(await response.json());
        expect(response.status()).toEqual(200);
    })
})