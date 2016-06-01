export class Modal {
  static get selector() {
    return '.js-modal';
  }

  constructor(element) {
    this.pageClickHandler = this.pageClickHandler.bind(this);
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
  }

  hide() {
    [].forEach.call(this.modals, (modal) => modal.classList.remove('is-active'));
    this.page.classList.remove('page--disabled');
  }

  show() {
    this.element.classList.add('is-active');
    this.page.classList.add('page--disabled');
  }

  pageClickHandler(event) {
    if (event.target === event.currentTarget) {
      event.stopPropagation();
      this.hide();
    }
  }

  triggerClickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.page.classList.contains('page--disabled')) {
      this.hide();
    } else {
      this.show();
    }
  }
}
