const registered = [];

export function registerComponent(Component) {
  const elements = document.querySelectorAll(Component.selector);
  [].forEach.call(elements, (element) => {
    new Component(element);
  });
  registered.push(Component);
}
