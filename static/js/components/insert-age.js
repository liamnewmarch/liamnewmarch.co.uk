export class InsertAge {
  static get selector() {
    return '.js-insert-age';
  }

  constructor(element) {
    const dateOfBirth = element.getAttribute('data-date-of-birth');
    element.innerHTML = this.dateToAge(dateOfBirth);
  }

  dateToAge(dateString) {
    var birth = new Date(dateString);
    return Math.floor((new Date() - birth) / 31536e6);
  }
}
