import { Page } from "playwright/test";

export default abstract class BasePage {
   protected page: Page;
   protected baseUrl: string;
   

   constructor(page: Page, baseUrl: string) {
      this.page = page;
      this.baseUrl = baseUrl;
   }

   abstract init() : Promise<this>;

   async closeAds(): Promise<void> {
      const adSelectors = [
         'iframe[title="Advertisement"]',
         'iframe[name^="aswift_"]',
         'iframe[id^="aswift_"]',
         'ins.adsbygoogle',
         'div[id^="google_ads_iframe_"]',
         'div[id*="google_ads_iframe_"]',
         'div[id*="aswift_"]',
      ];

      for (const selector of adSelectors) {
         const ads = this.page.locator(selector);
         const count = await ads.count().catch(() => 0);

         for (let index = 0; index < count; index++) {
            try {
               await ads.nth(index).evaluate((element: HTMLElement) => {
                  element.style.display = 'none';
                  element.style.visibility = 'hidden';
                  element.style.opacity = '0';
                  element.style.pointerEvents = 'none';
                  element.setAttribute('aria-hidden', 'true');

                  const parent = element.parentElement;
                  if (parent) {
                     parent.style.display = 'none';
                     parent.style.visibility = 'hidden';
                     parent.style.opacity = '0';
                     parent.style.pointerEvents = 'none';
                  }
               });
            } catch {
               // Ignore already-removed ad elements.
            }
         }
      }

      try {
         const closeButton = this.page.getByRole('button', { name: /close ad|close/i }).first();
         if (await closeButton.isVisible({ timeout: 2000 })) {
            await closeButton.click({ timeout: 2000 });
         }
      } catch {
         // Ignore if the ad is not present or cannot be closed.
      }
   }

   async retryOnPopupFailure<T>(action: () => Promise<T>, maxAttempts = 3): Promise<T> {
      let lastError: unknown;

      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
         try {
            await this.handlePopupsBeforeAction();
            return await action();
         } catch (error) {
            lastError = error;
            await this.handlePopupsBeforeAction();

            if (attempt === maxAttempts) {
               throw error;
            }
         }
      }

      throw lastError;
   }

   async handlePopupsBeforeAction(): Promise<void> {
      await this.closeAds();
   }
}