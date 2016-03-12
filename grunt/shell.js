module.exports = {

  'deploy-dev': {
    command: 'appcfg.py update . --version=dev'
  },

  'deploy-live': {
    command: 'appcfg.py update . --version=live'
  },

  'serve': {
    command: 'dev_appserver.py . --host=0.0.0.0 --port=4000'
  }
};
