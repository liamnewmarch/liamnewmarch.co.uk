export class ContactForm {
  static get selector() {
    return '.form--contact';
  }

  constructor(element) {
    this.submitHandler = this.submitHandler.bind(this);

    this.element = element;
    this.button = this.element.querySelector('.form__button');

    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener('submit', this.submitHandler, false);
  }

  submitHandler(event) {
    event.preventDefault();
    this.button.disabled = true;

    fetch(this.element.action, {
      body: new FormData(this.element),
      method: 'POST',
      mode: 'no-cors'
    }).then(res => {
      this.element.classList.remove('form--error');
      this.element.classList.add('form--sent');
    }).catch(res => {
      this.button.disabled = false;
      this.element.classList.add('form--error');
    });
  }
}
