function main() {
  if ('serviceWorker' in navigator) {
    navigator
        .serviceWorker
        .register('/static/js/service-worker.js')
        .then(function(registation) {
          registation.update();
        });
  }
}

(window.requestIdleCallback || window.setTimeout)(main);
