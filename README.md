In order to run test you need to have installed next libs:

NodeJS
node 16 https://nodejs.org/en/blog/release/v16.16.0/

Appium:

npm install -g appium@latest
IOS driver
appium driver install --source=npm appium-xcuitest-driver@4.13.2

Run tests:
npm install
npm run test:e2e
