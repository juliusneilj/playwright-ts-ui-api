import { test as baseTest, expect, type TestInfo } from '@playwright/test';

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
