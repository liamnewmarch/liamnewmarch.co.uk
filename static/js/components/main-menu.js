import { Component } from '../utils/component';


export class MainMenu extends Component {
  constructor(...args) {
    super(...args);

    this.pageClickHandler = this.pageClickHandler.bind(this);
    this.toggleClickHandler = this.toggleClickHandler.bind(this);

    this.page = document.querySelector('.page')
    this.toggle = document.querySelector('.hamburger');

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
    this.page.classList.toggle('page--menu-open');
  }
}
