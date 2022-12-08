export default class BaseAppScreen {
  constructor(screenTitle) {
    this.screenTitleSelector = `-ios predicate string: name == '${screenTitle}' && type == 'XCUIElementTypeNavigationBar'`;
  }

  get screenTitle() {
    return $(this.screenTitleSelector);
  }

  async waitForIsShown(isShown = true) {
    return this.screenTitle.waitForDisplayed({
      reverse: !isShown,
    });
  }
}
