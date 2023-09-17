import BasePage from './basePage'
import fs from 'fs'
import * as loginPageObjects from '../pageobjects/loginPage'
import * as dashBoardPageObjects from '../pageobjects/dashBoardPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class DashBoardPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async menuNavVisible() {
		return await this.isElementVisible(
			dashBoardPageObjects.menuNav,
			testData.notVisibleText
		)
	}

	async onboardingSectionVisible() {
		return await this.isElementVisible(
			dashBoardPageObjects.onboardingSection,
			testData.notVisibleText
		)
	}

	async profileButtonVisible() {
		return await this.isElementVisible(
			dashBoardPageObjects.profileButton,
			testData.notVisibleText
		)
	}

	async clickProfileButton() {
		return await this.waitAndClick(dashBoardPageObjects.profileButton)
	}

	async logOutButtonVisible() {
		return await this.isElementVisible(
			dashBoardPageObjects.logOutButton,
			testData.notVisibleText
		)
	}

	async clickLogOutButton() {
		return await this.waitAndClick(dashBoardPageObjects.logOutButton)
	}
}
export default DashBoardPage
