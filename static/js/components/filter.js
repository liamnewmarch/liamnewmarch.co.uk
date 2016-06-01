export class Filter {
  static get selector() {
    return '.js-filter';
  }

  constructor(element) {
    this.keyUpHandler = this.keyUpHandler.bind(this);

    const name = element.getAttribute('data-filter');

    this.element = element;
    this.items = document.querySelectorAll(`.js-filter-item[data-filter="${name}"]`);

    this.addEventListeners();
    this.keyUpHandler();
  }

  addEventListeners(event) {
    this.element.addEventListener('keyup', this.keyUpHandler, false);
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
    const keyword = this.element.value || '';
    const items = [].map.call(this.items, (item) => item.textContent);
    this.fuzzyMatch(keyword, items, (item, match) => {
      if (!match) {
        item.classList.add('is-hidden');
      } else {
        item.classList.remove('is-hidden');
      }
    });
  }
}
