// Domain-specific UI fixtures
export { test, expect } from './automation-exercise.fixture';
export type { TestFixtures as AutomationExerciseFixtures } from './automation-exercise.fixture';
export { test as automationExerciseTest } from './automation-exercise.fixture';

export type { TestFixtures as RetailWebsiteFixtures } from './retail-website.fixture';
export { test as retailWebsiteTest } from './retail-website.fixture';

// Specialized fixtures for common use cases
export { test as apiTest, expect as apiExpect } from './api.fixture';
export type { APIFixtures } from './api.fixture';

export { test as authTest, expect as authExpect } from './auth.fixture';
export type { AuthFixtures } from './auth.fixture';

export { test as testDataTest, expect as testDataExpect } from './test-data.fixture';
export type { TestDataFixture } from './test-data.fixture';

// API client fixtures
export { test as apiClientsTest, expect as apiClientsExpect } from './api-clients.fixture';
export type { APIClientsFixtures } from './api-clients.fixture';