import AuthenticationScreen from "../screenobjects/authentication.screen";
import SelectTestScreen from "../screenobjects/select-test.screen";
import SecretWordTestScreen from "../screenobjects/secret-word-test.screen";
import AnimationTestScreen from "../screenobjects/animation-test.screen";

const password = "OpenWebQA";

describe("openweb mobile interview app", () => {
  beforeEach(async () => {
    await AuthenticationScreen.waitForIsShown();
    await AuthenticationScreen.autenticate(password);

    await SelectTestScreen.waitForIsShown();
  });

  afterEach(async () => {
    await driver.closeApp();
    await driver.launchApp();
  });

  it("appium can log secret text", async () => {
    await SelectTestScreen.goToSecretWordTest();
    await expect(SecretWordTestScreen.screenTitle).toBeDisplayed();

    const secretWorld = await SecretWordTestScreen.secretWordLabel.getText();
    console.log(secretWorld);
  });

  it("appium can find animated text", async () => {
    await SelectTestScreen.goToAnimationTest();
    await expect(AnimationTestScreen.screenTitle).toBeDisplayed();

    await AnimationTestScreen.textToFindLabel.waitForDisplayed({
      timeout: 5000,
    });
  });
});
