import BaseAppScreen from "./base.screen";

class SecretWordTestScreen extends BaseAppScreen {
  constructor() {
    super("Secret word");
  }

  get secretWordLabel() {
    return $("~secret_word_label_id");
  }
}

export default new SecretWordTestScreen();
