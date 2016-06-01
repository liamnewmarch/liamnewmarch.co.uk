export class SearchForm {
  static get selector() {
    return '.search';
  }

  constructor(element) {
    this.keyUpHandler = this.keyUpHandler.bind(this);

    this.element = element;
    this.input = element.querySelector(`${SearchForm.selector}__input`);
    this.items = element.querySelectorAll(`${SearchForm.selector}__item`);

    this.addEventListeners();
    this.keyUpHandler();
  }

  addEventListeners(event) {
    this.input.addEventListener('keyup', this.keyUpHandler, false);
  }

  fuzzyMatch(keyword, items, callback) {
    const letters = keyword.match(/\w/g) || [];
    const fuzzy = letters.join('.*');
    const regex = new RegExp(fuzzy, 'i');
    [].forEach.call(this.items, (item) => {
      const match = !!keyword && regex.test(item.textContent);
      callback(item, match);
    });
  }

  keyUpHandler() {
    const keyword = this.input.value || '';
    const items = [].map.call(this.items, (item) => item.textContent);
    const callback = (item, match) => item.hidden = !match;
    this.fuzzyMatch(keyword, items, callback);
  }
}
