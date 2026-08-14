import { BaseAPI } from "@core";
import { APIResponse } from "playwright/test";

export default class AutomationExerciseAPI extends BaseAPI {
    constructor() {
        const baseUrl = process.env.AUTOMATION_EXERCISE_BASE_URL || 'https://automationexercise.com/';
        const timeout = 10000;
        super(baseUrl, timeout);
    }

    

    public async getAllProductsList(): Promise<APIResponse> {
        return this.get('api/productsList');
    }
}
