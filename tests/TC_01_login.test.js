/* Scenario 1: 
Login to Snipcart Website to verify the Dashboard Page and logout from the application

Scenario Description: 
User logs into the website and verifies Dashboard page and logs out from the application. 

Test Steps:
1. User is on the Login Page
2. Enter Login Credentials
3. Login to The Website 
4. User is on the Overview page and verifies the logo, title, url and user name
5. User clicks on the log out button and logs out of the website
6. user verifies the logout url
*/

import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
import * as config from '../config'

test.describe('Login to the website and logout from the application', () => {
	test('Login to Website', async ({ loginPage, dashBoardPage }) => {
		await test.step(`Open the website and check logo`, async () => {
			await loginPage.openApp()
			await loginPage.loginPageLogoVisible()
			expect(await loginPage.getTitle()).toBe(config.title)
			expect(await loginPage.getUrl()).toContain(config.url)
		})

		await test.step(`Enter Login Credentials`, async () => {
			await loginPage.login()
		})

		await test.step(`Check logo+title+url visible`, async () => {
			await dashBoardPage.menuNavVisible()
			await dashBoardPage.onboardingSectionVisible()
			await dashBoardPage.profileButtonVisible()
			expect(await dashBoardPage.getUrl()).toContain(config.dashBoardPageUrl)
		})

		await test.step(`Check Logout button visible and Click Logout button`, async () => {
			await dashBoardPage.clickProfileButton()
			await dashBoardPage.logOutButtonVisible()
			await dashBoardPage.clickLogOutButton()
			expect(await loginPage.getTitle()).toBe(config.title)
			expect(await loginPage.getUrl()).toContain(config.url)
		})
	})
})
