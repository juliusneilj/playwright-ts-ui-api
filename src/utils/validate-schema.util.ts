import { z } from "zod";
import { APIResponse, expect } from "playwright/test";

/**
 * Parses and validates a Playwright APIResponse body against a Zod schema.
 * Throws a Playwright assertion failure with a readable diff if validation fails.
 */
export async function validateResponse<T extends z.ZodTypeAny>(response: APIResponse, schema: T): Promise<z.infer<T>> {
    const body = await response.json();
    return validateSchema(schema, body);
}

/**
 * Validates a parsed object/array against a Zod schema.
 */
export function validateSchema<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
    let error = null;
    const result = schema.safeParse(data);

    if (!result.success) {
        error = JSON.stringify(result.error, null, 2);
        console.error("Schema validation failed:\n", error);
        expect(result.success, `Schema validation failed:\n${error}`).toBeTruthy();
        throw result.error;
    }
    return result.data;
}