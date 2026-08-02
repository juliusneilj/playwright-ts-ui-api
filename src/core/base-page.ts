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
      try {
         const iframe = this.page.frameLocator('iframe[name="aswift_3"]');
         const adCloseButton = iframe.getByRole('button', { name: /close ad/i });

         if (await adCloseButton.count()) {
            await adCloseButton.first().click({ timeout: 2000 });
         }
      } catch {
         // Ignore if the ad is not present or cannot be closed.
      }
   }

   async handlePopupsBeforeAction(): Promise<void> {
      await this.closeAds();
   }
}