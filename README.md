### Playwright With JavaScript For Vue.js Frontend 

An example project demonstrating automation of playwright tests using page object design pattern framework.

#### Application Under Test

We are using https://app.snipcart.com/ as the Application Under Test. This App is a **Vue.js** Frontend

- URL: https://app.snipcart.com/
- OS : macOS 
- IDE : Visual Studio Code
 
#### Scenarios

```bash
Scenario 1: Login to Snipcart Website to verify the Dashboard Page and logout from the application
Scenario Description: User logs into the website and verifies Dashboard page and logs out from the application. 
Testname: TC_01_login.test.js
```


#### Installation

Install the dependencies and devDependencies to run the test.
- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:


Clone the repository
```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-VueJs.git
```

#### Install dependencies
```bash
npm install
npx playwright install
```

#### Run application

Run tests in Chrome

```bash
npm run test:one - For tests only on chrome browser
```

Run tests in Parallel on chrome, firefox, safari, edge, Android and iOS

```bash
npm run test - For tests in parallel on all browsers and mobile view
```

#### Playwright Test Report 

```bash
npm run test:report
```

#### BitBuket Pipeline

```bash
Repo: https://bitbucket.org/jaykishore96/playwright-vuejs/src/master/
Pipelines: https://bitbucket.org/jaykishore96/playwright-vuejs/pipelines/results/page/1
```
