function isDebugEnvironment() {
  return document.documentElement.getAttribute('data-env') === 'dev';
}

export const DEBUG = isDebugEnvironment();
