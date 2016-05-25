const scripts = {};

export function loadScript(src, async=false) {
  if (src in scripts) {
    return scripts[src];
  }


  const script = new Promise(resolve => {
    var element = document.createElement('script');
    element.src = src;
    element.async = async;
    element.addEventListener('load', resolve);
    document.body.appendChild(element);
  });

  scripts[src] = script;
  return script;
}
