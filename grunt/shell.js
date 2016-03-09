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

  'jekyll-serve': {
    command: 'jekyll serve --host=0.0.0.0'
  }
};
