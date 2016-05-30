export class Bookmarklet {
  static get selector() {
    return '.bookmarklet';
  }

  constructor(element) {
    this.clickHandler = this.clickHandler.bind(this);

    this.element = element;

    this.fetchBookmarklet().then(code => {
      this.element.href = `javascript:${code}`;
      this.addEventListeners();
    });
  }

  addEventListeners() {
    this.element.addEventListener('click', this.clickHandler, false);
  }

  fetchBookmarklet() {
    return fetch(this.element.getAttribute('data-src')).then(res => res.text());
  }

  clickHandler(event) {
    event.preventDefault();
    alert('Please drag to your bookmarks');
  }
}
