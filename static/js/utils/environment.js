function isDebugEnvironment() {
  return document.documentElement.hasAttribute('data-is-dev');
}

export const DEV = isDebugEnvironment();
