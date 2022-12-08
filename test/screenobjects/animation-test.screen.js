import BaseAppScreen from "./base.screen";

class AnimationTestScreen extends BaseAppScreen {
  constructor() {
    super("Animation");
  }

  get textToFindLabel() {
    return $("~text_to_find_label_id");
  }
}

export default new AnimationTestScreen();
