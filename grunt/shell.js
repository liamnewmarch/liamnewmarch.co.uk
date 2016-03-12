module.exports = {

  'deploy-dev': {
    command: 'appcfg.py update . --version=dev'
  },

  'deploy-live': {
    command: 'appcfg.py update . --version=live'
  },

  'jekyll-build': {
    command: 'jekyll build'
  },

  'app-engine-serve': {
    command: 'dev_appserver.py . --host=0.0.0.0 --port=4000'
  }
};
