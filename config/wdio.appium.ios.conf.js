import { config } from "./wdio.conf";

config.services = (config.services ? config.services : []).concat([
  [
    "appium",
    {
      command: "appium",
      args: {
        relaxedSecurity: true,
        address: "localhost",
        log: "./appium.log",
      },
    },
  ],
]);

// appium server details
config.hostname = "localhost";
config.port = 4723;
config.path = "/";

config.capabilities = [
  {
    platformName: "iOS",
    maxInstances: 1,

    "appium:deviceName": "iPhone 13",
    "appium:platformVersion": "16.1",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "XCUITest",
    // The path to the app
    "appium:app":
      "/Users/volodymyrparlah/Library/Developer/Xcode/DerivedData/AutomationInterview-fbjfnlshuwkqxohleaoqhddwrzzi/Build/Products/Debug-iphonesimulator/AutomationInterview.app",

    "appium:newCommandTimeout": 240,
  },
];

exports.config = config;
