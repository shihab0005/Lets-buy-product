## Lets buy Product

Navigate to the  webpage and login with valid email and password .

## Technology used:
  - Test Tool: Playwright
  - Language: Javascript
  - Architecture: POM (Page Object Model)
  - Report Framework: Allure Report
  - IDE: VSCode
  - Version Control: Github
  - 
## Technology used:
  - Test Tool: Cucumber
  - feature(World constructor,hooks,screenshot of error)
  - Language: Javascript
  - Architecture: POM (Page Object Model)
  - Report Framework: html Report
  - IDE: VSCode
  - Version Control: Github 

## Screenshots 
Successfully Order Palced
![App Screenshot](https://github.com/shihab0005/Lets-buy-product/blob/main/features/Screenshot/PomOut.png?raw=true)
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/test-finished-2.png?raw=true)
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/test-finished-3.png?raw=true)

## Allure Report without POM
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/Capture.PNG?raw=true)

## Prerequisite:
- Node Js
- VSCode
  
## Project Installation Process:

- Clone Project Command:
```bash
   git clone https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report.git 
```
- Install All Project Package:
```bash
  npm install  
```
- Run Project:
```bash
  npx playwright test 
```

## Allure Report Generate Process:

- Allure Report Package Install Command:
```bash
  npm i -D @playwright/test allure-playwright
```
- Allure Report Config Command:
```bash
 npx playwright test --reporter=line,allure-playwright  
```
- Generate Allure Report Command:
```bash
  allure generate allure-results -o allure-report --clean
```
- Open Allure Report Command:
```bash
  allure open allure-report
```




