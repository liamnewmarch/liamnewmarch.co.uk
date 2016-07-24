export class ArrowKeyNavigation {
  static get selector() {
    return 'html';
  }

  constructor() {
    this.pageKeyHandler = this.pageKeyHandler.bind(this);
    window.addEventListener('keyup', this.pageKeyHandler, false);
  }

  pageKeyHandler(event) {
    if (event.keyCode === 9) {
      console.log(document.activeElement);
    }
  }
}
