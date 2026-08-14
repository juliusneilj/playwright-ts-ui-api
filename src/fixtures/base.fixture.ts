import { test as baseTest, expect, type TestInfo } from '@playwright/test';

/**
 * Base fixture configuration shared by all domain-specific fixtures.
 * 
 * Provides automatic failure handling with screenshots for better debugging.
 * All other fixtures should extend this base fixture.
 * 
 * Features:
 * - Automatic full-page screenshot capture on test failure
 * - Attached to Allure report for visual debugging
 * - Non-blocking: screenshot failures don't mask original test failures
 */

/**
 * Afterhook: Captures a full-page screenshot on test failure
 * for easier debugging and better test reports.
 * 
 * Only captures if the test failed (status !== expectedStatus).
 * Silently ignores screenshot failures to avoid obscuring the real error.
 */
baseTest.afterEach(async ({ page }, testInfo: TestInfo) => {
  if (!page || testInfo.status === testInfo.expectedStatus) {
    return;
  }

  try {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('failure-screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  } catch (error) {
    // Ignore screenshot capture failures so the actual test failure remains visible.
  }
});

export { baseTest as test, expect };
