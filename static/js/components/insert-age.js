import { Component } from '../utils/component';


export class InsertAge extends Component {
  constructor(...args) {
    super(...args);

    const dateOfBirth = this.element.dataset.dateOfBirth;
    this.element.innerHTML = this.dateToAge(dateOfBirth);
  }

  dateToAge(dateString) {
    var birth = new Date(dateString);
    return Math.floor((new Date() - birth) / 31536e6);
  }
}
