export class Modal {
  static get selector() {
    return '.js-modal';
  }

  constructor(element) {
    this.pageClickHandler = this.pageClickHandler.bind(this);
    this.pageKeyDownHandler = this.pageKeyDownHandler.bind(this);
    this.triggerClickHandler = this.triggerClickHandler.bind(this);

    const name = element.getAttribute('data-modal');

    this.element = element;
    this.page = document.querySelector('.page');
    this.modals = document.querySelectorAll('.js-modal');
    this.triggers = document.querySelectorAll(`.js-modal-trigger[data-modal="${name}"`);

    this.addEventListeners();
  }

  addEventListeners(event) {
    this.page.addEventListener('click', this.pageClickHandler, false);
    [].forEach.call(this.triggers, (trigger) => {
      trigger.addEventListener('click', this.triggerClickHandler, false);
    });
    window.addEventListener('keyup', this.pageKeyDownHandler, false);
  }

  hide() {
    [].forEach.call(this.modals, (modal) => modal.setAttribute('aria-hidden', true));
    this.page.classList.remove('page--disabled');
  }

  show() {
    this.element.removeAttribute('aria-hidden');
    this.page.classList.add('page--disabled');
  }

  pageClickHandler(event) {
    if (event.target === event.currentTarget) {
      this.hide();
    }
  }

  pageKeyDownHandler(event) {
    if (event.keyCode === 27) {
      this.hide();
    }
  }

  triggerClickHandler(event) {
    event.preventDefault();
    if (this.page.classList.contains('page--disabled')) {
      this.hide();
    } else {
      this.show();
    }
  }
}
