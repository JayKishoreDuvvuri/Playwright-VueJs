import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  retries : 1,
  reporter: 'html',
  expect: {
	timeout: 10 * 1000
   },
  use: {
    baseURL: 'https://app.snipcart.com/',
	headless: true,
	viewport: { width: 1720, height: 850 },
	screenshot: `only-on-failure`,
	video: `retain-on-failure`,
	trace: `retain-on-failure`,
  },
  projects: [
	{
		name: 'Chrome',
		use: { browserName: 'chromium', channel: `chrome`}
	  },
	  {
		name: 'Firefox',
		use: { browserName: 'firefox' }
	  },
	  {
		name: 'Safari',
		use: { browserName: 'webkit' }
	  },
	  {
		name: 'Edge',
		use: { browserName: 'chromium', channel: `msedge` }
	  },

	  {
		name: 'mobile-chromium',
		use: devices['Pixel 5']
	  },
	  {
		name: 'mobile-webkit',
		use: devices['iPhone 13']
	  }
  ],
});