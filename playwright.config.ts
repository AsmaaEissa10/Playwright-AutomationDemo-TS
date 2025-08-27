import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './specs',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

   reporter:[['html',{outputfolder: 'playwright-report', open: 'never'}], ['allure-playwright']] ,
   
  use: {
    baseURL: 'https://automationexercise.com/',
    trace: 'retain-on-failure',
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: true,

  },

  projects: [
    {
     name: 'chromium',
     timeout : 60*1000,
     use: { ...devices['Desktop Chrome']
      }
    },
  ]
});
