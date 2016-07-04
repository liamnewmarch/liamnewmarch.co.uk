export class TimelineLayers {
  static get selector() {
    return '.js-timeline';
  }

  constructor(element) {
    this.triggerClickHandler = this.triggerClickHandler.bind(this);
    this.updateContainer = this.updateContainer.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateTrigger = this.updateTrigger.bind(this);

    this.layers = {};

    this.element = element;
    this.triggers = document.querySelectorAll('.js-timeline-layer-trigger');
    this.containers = document.querySelectorAll('.js-timeline-layer-container');
    this.items = document.querySelectorAll('.js-timeline-layer-item');

    this.addEventListeners();
    this.getDefaults();
  }

  addEventListeners(event) {
    [].forEach.call(this.triggers, trigger => {
      trigger.addEventListener('click', this.triggerClickHandler, false);
    });
  }

  getDefaults() {
    [].forEach.call(this.triggers, trigger => {
      const key = trigger.getAttribute('data-layer');
      const enabled = trigger.hasAttribute('data-layer-default');
      this.layers[key] = enabled;
    });
    this.updateItems();
  }

  triggerClickHandler(e) {
    const trigger = e.currentTarget;
    const layer = trigger.getAttribute('data-layer');
    this.layers[layer] = !this.layers[layer];
    this.updateItems();
  }

  updateContainer(container) {
    const layers = container.getAttribute('data-layers').split(' ');
    let active = false;
    [].forEach.call(layers, layer => {
      if (this.layers[layer]) active = true;
    });
    container.hidden = !active;
  }

  updateItem(item) {
    const layer = item.getAttribute('data-layer');
    item.hidden = !this.layers[layer];
  }

  updateTrigger(item) {
    const activeClass = item.getAttribute('data-layer-active-class');
    const layer = item.getAttribute('data-layer');
    if (this.layers[layer]) {
      item.classList.add(activeClass);
    } else {
      item.classList.remove(activeClass);
    }
  }

  updateItems() {
    [].forEach.call(this.triggers, this.updateTrigger);
    [].forEach.call(this.items, this.updateItem);
    [].forEach.call(this.containers, this.updateContainer);
  }
}
