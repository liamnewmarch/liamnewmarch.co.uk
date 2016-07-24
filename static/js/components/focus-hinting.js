export class FocusHinting {
  static get selector() {
    return '.js-focus-hinting';
  }

  constructor(element) {
    this.blurHandler = this.blurHandler.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    this.mouseHandler = this.mouseHandler.bind(this);

    this.element = element;

    this.addEventListeners();
  }

  addEventListeners(event) {
    this.element.addEventListener('blur', this.blurHandler);
    this.element.addEventListener('focus', this.focusHandler);
    this.element.addEventListener('mousedown', this.mouseHandler);
  }

  blurHandler() {
    this.element.removeAttribute('data-focus');
  }

  focusHandler() {
    if (!this.element.hasAttribute('data-focus')) {
      this.element.setAttribute('data-focus', 'keyboard');
    }
  }

  mouseHandler() {
    this.element.setAttribute('data-focus', 'mouse');
  }
}
