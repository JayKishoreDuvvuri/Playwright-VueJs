import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashBoardPage'

const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	dashBoardPage: async ({ page }, use) => {
		await use(new DashBoardPage(page))
	}
})
export default test
