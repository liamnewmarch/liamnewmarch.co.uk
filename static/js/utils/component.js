export class Component {
  static register(selector) {
    const elements = document.querySelectorAll(selector);
    Array.from(elements).forEach(element => new this(element));
  }

  constructor(element) {
    this.element = element;
  }
}
