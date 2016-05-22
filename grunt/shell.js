module.exports = {

  'deploy-dev': {
    command: 'appcfg.py update . --version=dev'
  },

  'deploy-live': {
    command: 'appcfg.py update . --version=live'
  },

  'grow-build': {
    command: 'grow build'
  },

  'serve': {
    command: 'grow run --host=0.0.0.0 --port=4000'
  }
};
