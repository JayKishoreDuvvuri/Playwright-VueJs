import BasePage from './basePage'
import fs from 'fs'
import * as loginPageObjects from '../pageobjects/loginPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open()
		return await super.waitForPageLoad()
	}

	async loginPageLogoVisible() {
		return await this.isElementVisible(
			loginPageObjects.logo,
			testData.notVisibleText
		)
	}

	async login() {
		await this.isElementVisible(loginPageObjects.email, testData.notVisibleText)
		await this.waitAndFill(loginPageObjects.email, testData.emailTxt)
		await this.isElementVisible(
			loginPageObjects.password,
			testData.notVisibleText
		)
		await this.waitAndFill(loginPageObjects.password, testData.passwordTxt)
		await this.isElementEnabled(
			loginPageObjects.loginButton,
			testData.notEnabledText
		)
		await this.waitAndClick(loginPageObjects.loginButton)
	}
}
export default LoginPage
