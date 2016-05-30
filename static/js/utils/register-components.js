const registered = [];

export function registerComponents(_components) {
  registered.push(..._components);
}

document.addEventListener('DOMContentLoaded', () => {
  registered.forEach(Component => {
    const elements = document.querySelectorAll(Component.selector);
    [].slice.call(elements).forEach(element => new Component(element));
  });
});
