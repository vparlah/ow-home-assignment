import BaseAppScreen from "./base.screen";

class SelectTestScreen extends BaseAppScreen {
  constructor() {
    super("Select a test");
  }

  get secretWordTestButton() {
    return $("~secret_word_test_btton_id");
  }

  get animationTestButton() {
    return $("~animation_test_button_id");
  }

  async goToSecretWordTest() {
    this.secretWordTestButton.click();
  }

  async goToAnimationTest() {
    this.animationTestButton.click();
  }
}

export default new SelectTestScreen();
