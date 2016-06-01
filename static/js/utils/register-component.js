const registered = [];

export function registerComponent(component) {
  registered.push(component);
}

document.addEventListener('DOMContentLoaded', () => {
  registered.forEach(Component => {
    const elements = document.querySelectorAll(Component.selector);
    [].forEach.call(elements, (element) => {
      new Component(element);
    });
  });
});
