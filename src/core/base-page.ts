import { Page } from "playwright/test";

export default abstract class BasePage {
   protected page: Page;
   protected baseUrl: string;
   
   constructor(page: Page, baseUrl: string, timeout: number = 10000) {
      this.page = page;
      this.baseUrl = baseUrl;
   }

   abstract init() : Promise<this>;
}