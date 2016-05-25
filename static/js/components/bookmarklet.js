import { Component } from '../utils/component';


export class Bookmarklet extends Component {
  constructor(...args) {
    super(...args);

    this.clickHandler = this.clickHandler.bind(this);

    this.fetchBookmarklet().then(code => {
      this.element.href = `javascript:${code}`;
      this.addEventListeners();
    });
  }

  addEventListeners() {
    this.element.addEventListener('click', this.clickHandler, false);
  }

  fetchBookmarklet() {
    return fetch(this.element.dataset.src).then(res => res.text());
  }

  clickHandler(event) {
    event.preventDefault();
    alert('Please drag to your bookmarks');
  }
}
