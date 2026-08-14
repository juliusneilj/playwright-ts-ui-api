import { Page } from "playwright/test";

export default abstract class BasePage {
   protected page: Page;
   protected baseUrl: string;
   

   constructor(page: Page, baseUrl: string) {
      this.page = page;
      this.baseUrl = baseUrl;
   }
}