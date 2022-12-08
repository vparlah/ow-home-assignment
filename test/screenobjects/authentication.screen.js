import BaseAppScreen from "./base.screen";

class AuthenticationScreen extends BaseAppScreen {
  constructor() {
    super("Automation Interview");
  }

  get passwordField() {
    return $("~password_text_field_id");
  }

  get autenticateButton() {
    return $("~Autenticate");
  }

  async autenticate(password) {
    await this.passwordField.setValue(password);
    await this.autenticateButton.click();
  }
}

export default new AuthenticationScreen();
