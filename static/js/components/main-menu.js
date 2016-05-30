export class MainMenu {
  static get selector() {
    return '.hamburger';
  }

  constructor(element) {
    this.pageClickHandler = this.pageClickHandler.bind(this);
    this.toggleClickHandler = this.toggleClickHandler.bind(this);

    this.toggle = element;
    this.page = document.querySelector('.page')

    this.addEventListeners();
  }

  addEventListeners(event) {
    this.page.addEventListener('click', this.pageClickHandler, false);
    this.toggle.addEventListener('click', this.toggleClickHandler, false);
  }

  pageClickHandler(event) {
    if (event.target === event.currentTarget) {
      event.stopPropagation();
      this.page.classList.remove('page--menu-open');
    }
  }

  toggleClickHandler(event) {
    event.stopPropagation();
    if (this.page.classList.contains('page--menu-open')) {
      this.page.classList.remove('page--menu-open');
    } else {
      this.page.classList.add('page--menu-open');
    }
  }
}
