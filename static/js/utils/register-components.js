const registered = [];

export function registerComponents(_components) {
  registered.push(..._components);
}

document.addEventListener('DOMContentLoaded', () => {
  registered.forEach(Component => {
    const elements = document.querySelectorAll(Component.selector);
    [].forEach.call(elements, element => new Component(element));
  });
});
